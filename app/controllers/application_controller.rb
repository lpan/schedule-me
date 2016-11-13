class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  include AuthHelper

  def login
    redirect_to get_login_url
  end
end
