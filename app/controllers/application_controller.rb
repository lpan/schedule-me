class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  include AuthHelper

  def index
  end

  def login
    login_url = {:payload => get_login_url}
    render json: login_url
  end
end
