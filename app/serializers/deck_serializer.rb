class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :has_cards_to_study
  has_many :cards
end
