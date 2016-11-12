Rails.application.routes.draw do
  root 'calendar#index'
  get 'authorize' => 'auth#get_token'
end
