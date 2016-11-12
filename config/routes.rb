Rails.application.routes.draw do
  root 'application#home'
  get 'authorize' => 'auth#get_token'
  get 'calendar' => 'calendar#index'
end
