class AuthController < ApplicationController
  # oauth2 hook, get azure token then redirect
  def get_token
    token = get_token_from_code params[:code]
    session[:azure_token] = token.to_hash
    session[:user_email] = get_user_email token.token
    redirect_to calendar_index_url
  end
end
