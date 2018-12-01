class Book < ApplicationRecord
    belongs_to :author, :validate => true
    validates :title ,presence: true
    validates :description ,presence: true
    validates :thumbnailUrl ,presence: true
    validates :numberOfPages ,presence: true
end
