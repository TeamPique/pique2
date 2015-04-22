Rails.application.routes.draw do

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  root 'home#index'

  resources :conversations, only: [:index, :show, :destroy]
  resources :users, only: [:show, :update]

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

  resources :friendships
  resources :users
  resources :projects do
    member do
        post :follow_projects
    end
  end

  get     'search'   =>      'users#index'


  resources :comments, only: [:create]
  resources :questionnaires do
    member do
      post :questionnaires
    end
  end


  get '/questionnaire', to: 'home#questionnaire'
  post '/questionnaire', to: 'users#show'
  # post '/questionnaire', to: 'projects#index'

  get '/notifications', to: 'home#notifications'
  # get '/dashboard',     to: 'home#dashboard'
end
