Rails.application.routes.draw do
  resources :cards
  resources :decks
  match 'users', to: 'users#create', via: [:options, :post]
  match 'login', to: 'users#login', via: [:options, :post]
  get '/me', to: 'users#me'
  get '/studycards/:id', to: 'cards#study_cards'
  patch '/rightanswer/:id', to: 'cards#right_answer'
  patch '/wronganswer/:id', to: 'cards#wrong_answer'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
