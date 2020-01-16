
json.extract! album, :id, :band_id, :name, :genre, :description, :credits
json.artist album.artist.band
json.photo_url url_for(album.photo) if album.photo.attached?

json.track_arr album.tracks do |track|
   json.set! track.track_number, track.id 
end 

# json.track_number album.tracks.map{ |track| track.track_number }
# json.track_ids album.tracks.map{ |track| track.id }



