#json.extract! @user, :id

json.collects do
   json.array! @user.collected_albums do |album|
      json.extract! album, :id, :band_id, :name
      json.artist album.artist.band
      json.photo_url url_for(album.photo) if album.photo.attached?
      json.num_collectors album.collects.length
      #json.collectors do
      #   json.array! album.collectors do |collector|
      #      json.extract! collector, :id, :username, :location
      #      json.profile_photo_url url_for(collector.sized(:profile)) if collector.photo.attached?
      #   end
      #end
   end
end

json.followers do
   json.array! @user.followers do |follower|
      json.extract! follower, :id, :username, :location
      json.profile_photo_url url_for(follower.sized(:profile)) if follower.photo.attached?
   end
end

json.followees do
   json.array! @user.followees.each do |followee|
      json.extract! followee, :id, :username, :location
      json.profile_photo_url url_for(followee.sized(:profile)) if followee.photo.attached? 
   end 
end

json.discog do
   json.array! @user.albums.each do |album|
      json.extract! album, :id, :band_id, :name
      json.artist album.artist.band
      json.photo_url url_for(album.photo) if album.photo.attached?
   end
end