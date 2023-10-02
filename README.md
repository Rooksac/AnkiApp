# Flashing Cards

Flashing cards is a web application built with React.js and Ruby on Rails.  Users can log in to create their own decks of flashcards to study from.  The app will track how often you get certain cards right or wrong and uses this information to determine how often to show those cards. 

# Features

* Create your own collections of flashcards to suit your studying needs
* Customize individual cards with text and images of your choice
* Backend logic determines which cards to show you based on how recently you have gotten a card right or wrong
  
# Technologies Used

* React: A JavaScript library for building user interfaces.
* Ruby on Rails: A web application framework for building server-side applications.
* JWT (JSON Web Tokens): Used for secure user data encryption.

# Installation

To run the project locally, follow these steps:

* Run bundle install in the main directory to install the necessary Ruby gems.
* Navigate to the frontend directory using the command cd frontend.
* Run npm install to install the required npm packages.

# Usage

* Start by running the database migrations using rails db:migrate in the main directory to set up the required database tables.
* Start the development server by running rails server in the main directory.
* Run the npm run dev command in the frontend directory
* Open a web browser and navigate to http://localhost:5173/ to acces the application
  
