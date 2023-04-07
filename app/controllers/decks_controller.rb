class DecksController < ApplicationController
    def show
        deck = Deck.find(params[:id])
        render json: deck
    end

    def create
        deck=Deck.create!(name: params[:name], description: params[:description], user_id: @current_user.id)
        render json: deck
    end

    private

    def deck_params
        params.permit(:name, :description, :user_id)
    end

end
