Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create]
      resources :notes, only: [:index, :create, :update]

    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
end
