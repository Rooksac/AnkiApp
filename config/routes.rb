Rails.application.routes.draw do
  resources :cards
  resources :decks
  # user routes
  match 'users', to: 'users#create', via: [:options, :post]
  match 'login', to: 'users#login', via: [:options, :post]
  get '/me', to: 'users#me'
  #deck routes
  post '/createdeck', to: 'decks#create'
  get '/editcards/:id', to: 'decks#edit_cards'
  #card routes
  get '/studycards/:id', to: 'cards#study_cards'
  patch '/rightanswer/:id', to: 'cards#right_answer'
  patch '/wronganswer/:id', to: 'cards#wrong_answer'
  post '/addcards/:deck_id', to: 'cards#create'
  delete '/deletecard/:id', to: 'cards#delete'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
