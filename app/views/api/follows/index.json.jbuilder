@collects.each do |album|
   json.set! album.id do 
      json.partial! 'api/albums/album', album: album
      json.timestamp album.
   end
end