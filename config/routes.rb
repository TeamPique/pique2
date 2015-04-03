Rails.application.routes.draw do

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  root 'home#index'

  resources :conversations, only: [:index, :show, :destroy]

  resources :messages, only: [:new, :create]

  resources :conversations, only: [:index, :show, :destroy] do
    member do
      post :reply
    end
  end

  resources :conversations, only: [:index, :show, :destroy] do
    member do
      post :restore
    end
  end

  resources :conversations, only: [:index, :show, :destroy] do
    collection do
      delete :empty_trash
    end
  end

  resources :conversations, only: [:index, :show, :destroy] do
    member do
      post :mark_as_read
    end
  end

end
