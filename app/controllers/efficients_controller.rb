class EfficientsController < ApplicationController
  before_action :set_efficient, only: [:update, :destroy, :efficient_owner?, :uncheck]
  before_action :can, only: [:destroy]

  def index
    if @efficient_writer_permission
      case true
      when current_user.posts.map(&:name).include?('проректор по образовательной деятельности')
        @all_efficients = Efficient.includes(:profile, :divisions, :posts).joins(:criterium).where(criteria: {chapter: '1. Образовательная деятельность'}).order([:checked, :updated_at])
      when current_user.posts.map(&:name).include?('проректор по научно-исследовательской и международной деятельности')
        @all_efficients = Efficient.includes(:profile, :divisions, :posts).joins(:criterium).where(criteria: {chapter: '2. Научно-исследовательская деятельность'}).order([:checked, :updated_at])
      when current_user.posts.map(&:name).include?('проректор по развитию регионального здравоохранения')
        @all_efficients = Efficient.includes(:profile, :divisions, :posts).joins(:criterium).where(criteria: {chapter: ['4. Клиническая работа', '5. Развитие регионального здравоохранения']}).order([:checked, :updated_at])
      when current_user.posts.map(&:name).include?('проректор по воспитательной работе и молодежной политике')
        @all_efficients = Efficient.includes(:profile, :divisions, :posts).joins(:criterium).where(criteria: {chapter: '3. Воспитательная, внеучебная работа'}).order([:checked, :updated_at])
      when current_user.posts.map(&:name).include?('ведущий специалист')
        @all_efficients = Efficient.includes(:profile, :divisions, :posts).joins(:criterium).where(criteria: {chapter: '6. Менеджмент качества'}).order([:checked, :updated_at])
      else
        @all_efficients = Efficient.includes(:profile, :divisions, :posts).order([:checked, :created_at])
      end
    end

    if @efficient_reader_permission || @administrator_permission
      @all_efficients = Efficient.includes(:profile, :divisions, :posts).order([:checked, :created_at])
    end

    @efficients = Efficient.order(:created_at).where(user_id: current_user.id)
    @efficient = Efficient.new(user_id: current_user.id)
  end
  
  def create
    @efficient = Efficient.new(efficient_params)
    @efficient.user_id = current_user.id
    if @efficient.save
      if params[:attachment]
        attachment_params[:files].each do |file|
          @attachment = Attachment.new
          gravity = 'default'
          @attachment.uploaded_file(file, gravity)
          if @attachment.save
            @efficient.attachments << @attachment
          end
        end
      end
    end
    redirect_to :back, notice: "efficient added successfully"
  end

  def update
    @efficient.value = params[:value]
    @efficient.comment = params[:comment]
    @efficient.checked = true
    @efficient.save
    redirect_to :back
  end

  def uncheck
    @efficient.update(value: nil, checked: false, comment: nil)
    redirect_to :back
  end
  
  def destroy
    @efficient.attachments.delete_all
    @efficient.destroy
    redirect_to :back
  end

  private

  def set_efficient
    @efficient = Efficient.find(params[:id])
  end
  
  def efficient_params
    params.permit(:id, :criterium_id, :user_id, :link, :value, :checked, :comment)
  end
  
  def attachment_params
    params.require(:attachment).permit(files: [])
  end
  
  def can?
    current_user_administrator? || efficient_owner?
  end
  
  def can
    unless can?
      flash[:error] = "You must have permissions"
      redirect_to root_path
    else
      @can = true
    end
  end
  
  def efficient_owner?
    @efficient.user == current_user
  end
end