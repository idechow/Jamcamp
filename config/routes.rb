Rails.application.routes.draw do
   namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :show] do
         resources :albums, only: [:index]
      end

      resource :session, only: [:create, :destroy]
      resources :albums, only: [:index, :show, :create, :update, :destroy] do
         resources :tracks, only: [:index]
      end

      resources :tracks, only: [:show, :create, :update, :destroy]
   end

   root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
