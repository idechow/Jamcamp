class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.integer :band_id, null: false
      t.string :name, null: false
      t.string :genre, null: false
      t.text :description
      t.string :credits
      t.timestamps
    end

    add_index :albums, :band_id
  end
end
