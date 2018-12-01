class BookSerializer < ActiveModel::Serializer
  attributes   :authorName,:title, :description, :genre, :numberOfPages, :thumbnailUrl
  def authorName
    object&.author&.FullName;
  end
  belongs_to :author
end
