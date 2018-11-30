class RemoveDeviseColumns < ActiveRecord::Migration[5.2]
  def self.up
    remove_column :authors, :encrypted_password
    remove_column :authors, :reset_password_token
    remove_column :authors, :reset_password_sent_at
    remove_column :authors, :remember_created_at
    remove_column :authors, :authentication_token
  end
end
