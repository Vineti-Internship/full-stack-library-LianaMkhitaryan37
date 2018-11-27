class AddColumnsImageUrl < ActiveRecord::Migration[5.2]
    def self.down
      add_column :authors, :imageUrl, :string
    end
end
