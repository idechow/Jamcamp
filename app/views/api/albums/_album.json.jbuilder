
json.set! album.id do
   json.extract! album, :id, :band_id, :name, :genre :description, :credits
   json.user album.user.band
   json.photo_url url_for(album.photo) if album.photo.attached?
   json.track_ids album.tracks.map{ |track| track.id }
end
