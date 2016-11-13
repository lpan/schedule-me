Rails.application.routes.draw do
  get '*path' => 'calendar#index'
  
  root 'calendar#index'
  get 'authorize' => 'auth#get_token'
end
