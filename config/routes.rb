Rails.application.routes.draw do
  resources :cards
  resources :decks
  match 'users', to: 'users#create', via: [:options, :post]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
