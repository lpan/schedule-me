Rails.application.routes.draw do
  get '*path' => 'calendar#index'
  get 'user/patch'

  root 'calendar#index'
  get 'login' => 'application#login'
  get 'authorize' => 'auth#authorize'
end
