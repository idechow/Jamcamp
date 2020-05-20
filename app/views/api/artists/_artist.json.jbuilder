json.extract! artist, :id, :username, :email, :band, :location, :weblink, :about
json.photo_url url_for(artist.photo) if artist.photo.attached?
json.band_photo_url url_for(artist.band_photo) if artist.band_photo.attached?

#json.profile_photo_url url_for(artist.sized(:profile)) if artist.photo.attached?

#json.date artist.albums do |album|
#   json.set! album.release_date, album.id
#end 