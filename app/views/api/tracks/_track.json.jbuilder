
json.set! track.id do 
   json.extract! track, :id, :album_id, :title, :track_number
   json.audio_url url_for(track.audio_file) if track.audio_file.attached?
end 

