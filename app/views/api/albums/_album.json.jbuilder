
json.extract! album, :id, :band_id, :name, :genre, :description, :credits
json.artist album.artist.band
json.photo_url url_for(album.photo) if album.photo.attached?
json.track_ids album.tracks.map{ |track| track.id }

