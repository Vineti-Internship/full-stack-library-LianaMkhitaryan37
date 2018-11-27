class UserNameColumnToFullName < ActiveRecord::Migration[5.2]
  def self.up
    rename_column :authors, :userName, :FullName
  end
  
  def self.down
    rename_column :authors, :FullName, :userName
  end
end
