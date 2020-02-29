class CreateCollects < ActiveRecord::Migration[5.2]
  def change
    create_table :collects do |t|
      t.integer :user_id, null: false
      t.integer :album_id, null: false
      t.timestamps
    end
    add_index :collects, :user_id
    add_index :collects, :album_id
  end
end
