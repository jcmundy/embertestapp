class LibrarySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone
  has_many :books
end
