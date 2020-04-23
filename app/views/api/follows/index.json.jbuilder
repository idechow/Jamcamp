#json.extract! @user, :id

json.counts do
   json.collected_count @user.collected_albums.length
   json.follower_count @user.followers.length
   json.followee_count @user.followees.length
   json.discog_count @user.albums.length
end

json.collectors do
   @user.collected_albums.each do |album|
      json.set! album.id do
         json.extract! album, :id, :name
         json.artist album.artist.band
         json.photo_url url_for(album.photo) if album.photo.attached?
      end
   end
end

json.what do
   json.array! @user.collected_albums do |album|
      json.extract! album, :id, :name
      json.artist album.artist.band
      json.photo_url url_for(album.photo) if album.photo.attached?
   end
end

json.followers do
   @user.followers.each do |follower|
      json.set! follower.id do
         json.extract! follower, :id, :username, :location
         json.profile_photo_url url_for(follower.sized(:profile)) if follower.photo.attached?
      end
   end
end

json.followees do
   @user.followees.each do |followee|
      json.set! followee.id do
         json.extract! followee, :id, :username, :location
         json.profile_photo_url url_for(followee.sized(:profile)) if followee.photo.attached? 
      end
   end 
end

json.discog do
   @user.albums.each do |album|
      json.set! album.id do
         json.extract! album, :id, :name
         json.artist album.artist.band
         json.photo_url url_for(album.photo) if album.photo.attached?
      end
   end
end