class AddColumnsBioU < ActiveRecord::Migration[5.2]
  def self.down
    add_column :authors, :bio, :text
  end
end
