class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :releaseYear
  has_one :library
  has_one :author
end
