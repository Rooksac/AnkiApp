class User < ApplicationRecord
    has_many :decks
    has_secure_password
end
