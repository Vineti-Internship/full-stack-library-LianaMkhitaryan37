class RenameColumn < ActiveRecord::Migration[5.2]
  def self.up
    rename_column :books, :user_id, :author_id
  end
  
  def self.down
    rename_column :books, :author_id, :user_id
  end
end
