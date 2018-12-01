class BookSerializer < ActiveModel::Serializer
  attributes   :authorName,:title, :description, :id, :numberOfPages, :thumbnailUrl
  def authorName
    object&.author&.FullName;
  end
  belongs_to :author
end
