class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.string :userName
      t.string :email
      t.string :password

      t.timestamps
    end
  end
end
