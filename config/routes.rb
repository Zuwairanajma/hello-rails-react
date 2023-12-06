Rails.application.routes.draw do
 

  root 'static#index' # assuming 'static#index' is your static view
  # get '/api/random_greeting', to: 'greetings#random', as: 'random_greeting'
  # get 'greetings/random', to: 'greetings#random'
  # Defines the root path route ("/")
  # root "posts#index"
  namespace :api do
    get 'greetings/random', to: 'greetings#random'
  end
end
