# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Album.destroy_all

Guest = User.create!(
  username: "Mr. Terrapin",
  email: "franklin@turtle.io",
  password: "DARK@star*1",
  band: "The Robert Hunter Tribute Band"
)

redrocks = Album.new(
   band_id: Guest.id,
   name: "1985-09-07 Red Rocks Amphitheatre",
   genre: "1985-1989"
)

redrocks_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1985-09-07+Red+Rocks+Amphitheatre/1985_RRA_GD.jpeg")
redrocks.photo.attach(io: redrocks_photo, filename: "1985_RRA_GD.jpeg")
redrocks.save!

redrocks1 = Track.create!(album_id: redrocks.id, title: "Dupree's Diamond Blues", track_number: 1)
redrocks2 = Track.create!(album_id: redrocks.id, title: "One More Saturday Night", track_number: 2)

redrocks1_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1985-09-07+Red+Rocks+Amphitheatre/gd85-09-07.s1t07.mp3")
redrocks2_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1985-09-07+Red+Rocks+Amphitheatre/gd85-09-07.s1t08.mp3")
redrocks1.audio_file.attach(io: redrocks1_song, filename: "gd85-09-07.s1t07.mp3")
redrocks2.audio_file.attach(io: redrocks2_song, filename: "gd85-09-07.s1t08.mp3")
redrocks1.save!
redrocks2.save!

