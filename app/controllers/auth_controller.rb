class AuthController < ApplicationController
  # oauth2 hook, get azure token
  # create user in database if user not present
  def authorize
    token = get_token_from_code params[:code]
    user = get_user_info token.token

    email = get_user_email user
    name = get_user_name user

    session[:azure_token] = token.to_hash
    session[:user_email] = email

    user = User.create :email => email, :name => name

    if user.start.nil? or user.end.nil?
      redirect_to "/init", :notice => "Log in success"
    elsif is_dup user
      redirect_to "/users/#{user.id}", :notice => "Log in success"
    else
      redirect_to "/", :notice => "Log in failure"
    end
  end
end
