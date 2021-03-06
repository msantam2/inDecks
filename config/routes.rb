Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :cards, only: [:index, :show, :create, :destroy, :update]
    resources :decks, only: [:index, :show, :create, :destroy]
  end
end
