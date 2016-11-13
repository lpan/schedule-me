class UserController < ApplicationController
  def patch
    user = User.where(email: session[:user_email]).first
    user.start = params[:start]
    user.end = params[:end]
    user.save
  end
end
