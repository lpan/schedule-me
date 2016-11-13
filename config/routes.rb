Rails.application.routes.draw do
  get 'update' => 'user#patch'
  root 'calendar#index'
  get 'login' => 'application#login'
  get 'authorize' => 'auth#authorize'
  get '*path' => 'calendar#index'
end
