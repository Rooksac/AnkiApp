class User < ApplicationRecord
    has_secure_password
    has_many :decks
    

    validates :name, presence: true, uniqueness: true, allow_nil: true
    validates :password, presence: true, allow_nil: true

    def deck_names
        self.decks.map {|deck| deck.name} 
    end 
end
