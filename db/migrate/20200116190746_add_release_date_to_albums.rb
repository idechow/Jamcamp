class AddReleaseDateToAlbums < ActiveRecord::Migration[5.2]
  def change
   add_column :albums, :release_date, :string
   add_column :albums, :featured, :boolean, :default => false
  end
end
