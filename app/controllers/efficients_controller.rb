class EfficientsController < ApplicationController
  before_action :set_efficient, only: [:update, :destroy, :efficient_owner?]
  before_action :can, only: [:update, :destroy]

  def index
    @efficients = Efficient.order(:updated_at).where(user_id: current_user.id)
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
    redirect_to :back
  end
  
  def destroy
    @efficient.attachments.destroy_all
    @efficient.destroy
    redirect_to :back
  end

  private

  def set_efficient
    @efficient = Efficient.find(params[:id])
  end
  
  def efficient_params
    params.permit(:id, :criterium_id, :user_id, :link, :value, :checked)
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