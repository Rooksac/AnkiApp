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
end
