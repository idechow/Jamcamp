json.extract! user, :id, :username, :email, :band

json.collection({}) if user.collects.empty?
json.collection do 
   user.collects.each do |collect|
      json.set! collect.album_id do
         json.extract! collect, :created_at
      end
   end
end

json.followees({}) if user.followed_bands.empty?
json.followees do 
   user.followed_bands.each do |follow|
      json.set! follow.band_id do
         json.extract! follow, :created_at
      end
   end
end





#json.collection do 
#   if user.collected_albums.empty?
#     json.null!
#   else
#      user.collected_albums.each do |album|
#         json.set! album.id
#      end
#   end
#end

#:album_ids
