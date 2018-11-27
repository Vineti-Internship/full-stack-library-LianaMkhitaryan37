class RemoveColumnPassword < ActiveRecord::Migration[5.2]
  def self.up
    remove_column :authors, :password
  end
end
