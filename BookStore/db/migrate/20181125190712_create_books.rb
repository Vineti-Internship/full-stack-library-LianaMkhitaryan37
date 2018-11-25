class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.references :user
      t.string :title
      t.text :description
      t.string :type
      t.integer :numberOfPages
      t.text :thumbnailUrl

      t.timestamps
    end
  end
end
