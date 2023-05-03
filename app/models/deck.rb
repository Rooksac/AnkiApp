class Deck < ApplicationRecord
    belongs_to :user
    has_many :cards

    validates :name, uniqueness: { scope: :user_id }

    def has_cards_to_study
        self.cards.to_study.count > 0?
        true : false
    end
end
