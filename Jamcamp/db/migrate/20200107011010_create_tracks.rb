class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.integer :track_number, null: false
      t.integer :album_id, null: false
      t.timestamps
    end

    add_index :tracks, [:album_id, :track_number], unique: true
  end
end
