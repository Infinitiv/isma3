class FeedbacksController < ApplicationController
  skip_before_filter :authenticate_user!, only: [:index]
  before_action :require_moderator, only: [:destroy, :published_toggle, :up]
  before_action :set_feedback, only: [:show, :edit, :update, :destroy, :can?]
  before_action :can, only: [:edit, :update]
  before_action :set_feedback_posts, only: [:new, :edit, :create]

  # GET /feedbacks
  # GET /feedbacks.json
  def index
    unless current_user.nil?
      @feedbacks = current_user_moderator? ? Feedback.order('updated_at DESC').load : (Feedback.where(public: true) + Feedback.where(public: false, to: current_user.posts)).sort_by(&:updated_at).reverse
    else
      @feedbacks = Feedback.order('updated_at DESC').where(public: true)
    end
  end

  # GET /feedbacks/1
  # GET /feedbacks/1.json
  def show
  end

  # GET /feedbacks/new
  def new
    @feedback = Feedback.new
  end

  # GET /feedbacks/1/edit
  def edit
  end

  # POST /feedbacks
  # POST /feedbacks.json
  def create
    @feedback = Feedback.new(feedback_params)
    @feedback.from = current_user.id unless current_user.nil?

    respond_to do |format|
      if @feedback.save
        format.html { redirect_to feedbacks_url, notice: 'Feedback was successfully created.' }
        format.json { render action: 'show', status: :created, location: @feedback }
      else
        format.html { render action: 'new' }
        format.json { render json: @feedback.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /feedbacks/1
  # PATCH/PUT /feedbacks/1.json
  def update
    respond_to do |format|
      if @feedback.update(feedback_params)
        format.html { redirect_to feedbacks_url, notice: 'Feedback was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @feedback.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /feedbacks/1
  # DELETE /feedbacks/1.json
  def destroy
    @feedback.destroy
    respond_to do |format|
      format.html { redirect_to feedbacks_url }
      format.json { head :no_content }
    end
  end
  
  def published_toggle
    @feedback.toggle!(:published)
    redirect_to :back
  end
  
  def up
    @feedback.update_attributes(updated_at: Time.now)
    redirect_to :back
  end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_feedback
      @feedback = Feedback.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def feedback_params
      params.require(:feedback).permit(:to, :from, :question, :answer, :public)
    end
    
    def can?
      current_user_moderator? || (current_user == Post.find(@feedback.to).user if Post.find(@feedback.to)) unless current_user.nil?
    end
    
    def can
      unless can?
	flash[:error] = "You mast have permissions"
	redirect_to feedback_path
      end
    end
    
    def set_feedback_posts
      @feedback_posts = Post.where(feedback: true)
    end
end