Rails.application.routes.draw do
  resources :preferences
  resources :users
  resources :sessions, only: [:create, :destroy]
  resources :recovery, only: [:create, :update, :edit]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
