Rails.application.routes.draw do

  scope 'api' do
    namespace :v1 do
      resources :books
      resources :authors
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
