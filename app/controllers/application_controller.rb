class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  include AuthHelper

  def home
    # Display the login link.
    login_url = get_login_url
    render html: "<a href='#{login_url}'>Log in and view my email</a>".html_safe
  end
end
