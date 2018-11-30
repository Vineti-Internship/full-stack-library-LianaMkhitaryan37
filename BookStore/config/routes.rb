Rails.application.routes.draw do

  # devise_for :authors
  # # devise_for :authors
  scope 'api' do
    namespace :v1 do
      resources :books
      resources :authors
      # resources :sessions, only: [:create, :destroy]

    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
