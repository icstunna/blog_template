class HomeController < ApplicationController

  def index
    if admin_signed_in?
      @home = current_admin.id
    end
    @poster = Post.all
  end

  def create
    @poster = Post.new(post_params)
    @poster.save
    redirect_to home_index
  end
end
