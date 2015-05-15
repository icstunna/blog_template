class CommentController < ApplicationController

  def create
    @post = Post.find(params[:id])
    @comment = Comment.new(comment: params[:comment])
    @comment.save
    @post.comments << @comment

    render :json => {id: @post.id , comment_content: @comment.comment}
  end
end
