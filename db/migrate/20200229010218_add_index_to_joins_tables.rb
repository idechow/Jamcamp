class AddIndexToJoinsTables < ActiveRecord::Migration[5.2]
  def change
   remove_index :follows, :user_id
   remove_index :collects, :user_id
   add_index :follows, [:user_id, :band_id], unique: true
   add_index :collects, [:user_id, :album_id], unique: true
  end
end
