class BookSerializer < ActiveModel::Serializer
  attributes  :user, :title, :description, :type, :numberOfPages, :thumbnailUrl
end
