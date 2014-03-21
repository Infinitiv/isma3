class ArchivesController < ApplicationController
  skip_before_filter :authenticate_user!
  before_action :article_params
  def index
    if current_user.nil?
      @articles = Article.includes(:attachments).order('updated_at DESC').where(published: true, group_id: nil).where(article_params).paginate(:page => params[:page])
    else
      if current_user_moderator?
	current_user_groups = Group.all + [nil]
	@articles = Article.includes(:attachments).order('updated_at DESC').where(group_id: current_user_groups).where(article_params).paginate(:page => params[:page])
	@unpablished_comments = Comment.includes(:article).where(published: false).paginate(:page => params[:page]) if params[:published]
      else
	current_user_groups = current_user.groups + current_user.groups.joins(:parent).map{|g| g.parent} + [nil]
	@articles = Article.includes(:attachments).order('updated_at DESC').where(group_id: current_user_groups, published: true).where(article_params).paginate(:page => params[:page])
      end
    end
  end
      
  def feed
    article_types = ArticleType.where.not(name: 'articles').select(:id)
    @articles = Article.order('updated_at DESC').where(article_type_id: article_types).where(published: true, group_id: nil).where("updated_at > ?", Time.now.to_date - 30)
    
    respond_to do |format|
      format.atom
    end
  end
  
  private
  
  def article_params
    params.permit(:article_type_id, :exp_date, :published, :fixed, :commentable, :division_id, :group_id, :updated_at, :created_at)
  end
end
