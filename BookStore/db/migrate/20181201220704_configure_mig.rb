class ConfigureMig < ActiveRecord::Migration[5.2]
  def change
  create_table "authors", force: :cascade do |t|
    t.string "FullName"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "bio"
    t.string "imageUrl"
    t.string "email", default: "", null: false
    t.index ["email"], name: "index_authors_on_email", unique: true
  end

  create_table "books", force: :cascade do |t|
    t.integer "author_id"
    t.string "title"
    t.text "description"
    t.string "genre"
    t.integer "numberOfPages"
    t.text "thumbnailUrl"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_books_on_author_id"
  end
  end
end
