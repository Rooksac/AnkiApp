class DecksController < ApplicationController
    def show
        deck = Deck.find(params[:id])
        render json: deck
    end
end
