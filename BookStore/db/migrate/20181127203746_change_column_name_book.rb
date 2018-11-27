class ChangeColumnNameBook < ActiveRecord::Migration[5.2]
  def self.up
    rename_column :books, :type, :genre
  end
  
  def self.down
    rename_column :books, :genre, :type
  end
end
