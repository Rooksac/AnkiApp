class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :cards
end
