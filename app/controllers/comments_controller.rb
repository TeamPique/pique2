class CommentsController < ApplicationController

  def create
    comment = Comment.new(comment_params)
    comment.project_id = params[:project_id]
    comment.user_id = current_user.id
    comment.save
    redirect_to project_path(params[:project_id])
  end

private

  def comment_params
    params.require(:comment).permit(:content)
  end

end
