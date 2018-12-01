class Author < ApplicationRecord
  validates :FullName ,presence: true
  validates :email ,presence: true
  validates :bio ,presence: true
  validates :imageUrl ,presence: true
  has_many :books,dependent: :destroy
  validates_associated :books
end
