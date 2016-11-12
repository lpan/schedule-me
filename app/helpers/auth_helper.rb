module AuthHelper
  CLIENT_ID = '2c8b6cf0-8a7f-42f2-8136-4760bf4243c5'
  CLIENT_SECRET = 'QWVOiX9ia1stwKJagpcWxwc'

  # Scopes required by the app
  SCOPES = ['openid', 
            'offline_access',
            'https://outlook.office.com/calendars.read',]

  REDIRECT_URI = 'http://localhost:3000/authorize'

  # get cached token
  def get_access_token
    # Get the current token hash from session
    token_hash = session[:azure_token]

    client = OAuth2::Client.new(CLIENT_ID,
                                CLIENT_SECRET,
                                :site => 'https://login.microsoftonline.com',
                                :authorize_url => '/common/oauth2/v2.0/authorize',
                                :token_url => '/common/oauth2/v2.0/token')

    token = OAuth2::AccessToken.from_hash(client, token_hash)

    # Check if token is expired, refresh if so
    if token.expired?
      new_token = token.refresh!
      # Save new token
      session[:azure_token] = new_token.to_hash
      access_token = new_token.token
    else
      access_token = token.token
    end
  end

  # Generates the login URL for the app.
  def get_login_url
    client = OAuth2::Client.new(CLIENT_ID,
                                CLIENT_SECRET,
                                :site => 'https://login.microsoftonline.com',
                                :authorize_url => '/common/oauth2/v2.0/authorize',
                                :token_url => '/common/oauth2/v2.0/token')

    client.auth_code.authorize_url(:redirect_uri => REDIRECT_URI,
                                   :scope => SCOPES.join(' '))
  end

  def get_token_from_code(auth_code)
    client = OAuth2::Client.new(CLIENT_ID,
                                CLIENT_SECRET,
                                :site => 'https://login.microsoftonline.com',
                                :authorize_url => '/common/oauth2/v2.0/authorize',
                                :token_url => '/common/oauth2/v2.0/token')

    client.auth_code.get_token(auth_code,
                               :redirect_uri => authorize_url,
                               :scope => SCOPES.join(' '))
  end

  def get_user_email(access_token)
    conn = Faraday.new(:url => 'https://outlook.office.com') do |faraday|
      # Outputs to the console
      faraday.response :logger
      # Uses the default Net::HTTP adapter
      faraday.adapter  Faraday.default_adapter  
    end

    response = conn.get do |request|
      request.url 'api/v2.0/Me'
      request.url 'api/v2.0/me'
      request.headers['Authorization'] = "Bearer #{access_token}"
      request.headers['Accept'] = 'application/json'
    end

    JSON.parse(response.body)['EmailAddress']
  end
end
