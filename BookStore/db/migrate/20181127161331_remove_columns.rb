class RemoveColumns < ActiveRecord::Migration[5.2]
  #remove_column :table_name, :column_name
  def self.up
    remove_column :authors, :email ,:password
  end
  
end
