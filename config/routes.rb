Rails.application.routes.draw do
  resources :cards
  resources :decks
  match 'users', to: 'users#create', via: [:options, :post]
  match 'login', to: 'users#login', via: [:options, :post]
  get '/me', to: 'users#me'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
