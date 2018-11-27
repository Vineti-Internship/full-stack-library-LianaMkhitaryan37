class AddColumnsBioB < ActiveRecord::Migration[5.2]
  def change
    add_column :authors, :bio, :text
    add_column :authors, :imageUrl, :string
  end
end
