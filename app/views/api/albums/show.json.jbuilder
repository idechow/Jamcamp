json.partial! 'api/albums/album', album: @album

json.artist do
   json.extract! @artist, :id, :username, :email, :band
end

tracks = @album.tracks 

json.tracks do 
   tracks.each do |track|
      json.partial! 'api/tracks/track', track: track 
   end
end 

