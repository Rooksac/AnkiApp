class Deck < ApplicationRecord
    belongs_to :user
    has_many :cards

    def has_cards_to_study
        self.cards.to_study.count > 0?
        true : false
    end
end
