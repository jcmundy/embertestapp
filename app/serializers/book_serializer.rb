class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :releaseYear
  belongs_to :library
  belongs_to :author
end
