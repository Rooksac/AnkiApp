class CardsController < ApplicationController
    def study_cards
        deck = Deck.find(params[:id])
        cards = deck.cards.to_study
        render json: cards, status: :ok
    end

    def right_answer
        card = Card.find(params[:id])
        card.curr_streak += 1
        card.set_show_next
        card.save!
        render json: card, status: :ok
    end

    def wrong_answer
        card = Card.find(params[:id])
        card.curr_streak = 0
        card.set_show_next
        card.save!
        render json: card, status: :ok
    end

    def show
        card = Card.find(params[:id])
        render json: card, status: :ok
    end

    def update
        card = Card.find(params[:id])
        card.update!(card_params)
        render json: card, status: :ok
    end

    def create
        card = Card.create!(front_text: params[:front_text], front_image: params[:front_image], back_image: params[:back_image], back_text: params[:back_text], deck_id: params[:deck_id], show_next: DateTime.now(), curr_streak: 0)
        render json: card, status: :ok
    end

    def delete
        card = Card.find(params[:id])
        card.destroy!
        head :no_content
    end

    private

    def card_params
        params.permit(:front_text, :front_image, :back_text, :back_image)
    end
end
