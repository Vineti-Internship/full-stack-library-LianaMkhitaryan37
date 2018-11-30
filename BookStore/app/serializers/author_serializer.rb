class AuthorSerializer < ActiveModel::Serializer
  has_many :books
  attributes :id, :email, :FullName,:bio,:imageUrl , :books
end
