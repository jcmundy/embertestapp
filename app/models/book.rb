class Book < ApplicationRecord
  belongs_to :library, optional: true
  belongs_to :author, optional: true
end
