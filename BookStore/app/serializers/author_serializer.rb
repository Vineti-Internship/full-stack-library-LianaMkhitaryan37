class AuthorSerializer < ActiveModel::Serializer
  has_many :books
  attributes  :email, :FullName,:bio,:imageUrl , :books
end
