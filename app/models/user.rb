class User < ApplicationRecord
    has_secure_password
    has_many :decks
    

    validates :name, presence: true, uniqueness: true, allow_nil: true
    # validates :password, presence: true, allow_nil: true
end
