json.extract! song, :id, :album_id, :title, :track_number
json.audio_url url_for(song.audio_file) if song.audio_file.attached?