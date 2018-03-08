Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :items, only: [:index, :show]
  resources :users, only: [:index, :show,]
  resources :user_items, only: [:index ,:show, :create, :update, :destroy]

end
