class PostController < ApplicationController

  def index
    @post = Post.find(params[:id])
    render :json => {post_content: @post.content, id: @post.id}
  end

  def new

  end

  def create
    @post = Post.new(title: params[:post][:title],
                     content: params[:post][:content])
    @post.save
    @admin = Admin.find(current_admin.id)
    @admin.posts << @post

    redirect_to home_index_path
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    render :json => {id: params[:id]}
  end

  def edit
    @post = Post.find(params[:id])
  end
end
