Rails.application.routes.draw do
   namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :show, :update] do
         resources :albums, only: [:index]
         resources :follows, only: [:index]
      end
      get 'artists/:id', :to => 'users#artists_show', as: 'artists'
      
      resource :session, only: [:create, :destroy]
      resources :albums, only: [:index, :show, :create, :update, :destroy] do
         resources :tracks, only: [:index]
         resources :collects, only: [:index]
      end

      resources :tracks, only: [:show, :create, :update, :destroy]

      resources :collects, only: [:create, :destroy]
      resources :follows, only: [:create, :destroy]
   end

   root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
