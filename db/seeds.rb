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
Track.destroy_all

#############################

robert = User.new(
  username: "Robert Hunter",
  email: "china@cat.io",
  password: "terrapin",
  band: "Robert Hunter"
)

jerry = User.new(
  username: "Jerry Garcia",
  email: "dark@star.io",
  password: "terrapin",
  band: "Greatful Dead"
)

bob = User.new(
   username: "Bob Weir",
   email: "jack@straw.io",
   password: "terrapin",
   band: "Dead & Company"
)

phil = User.new(
   username: "Phil Lesh",
   email: "box@rain.io",
   password: "terrapin",
   band: "Phil Lesh & Friends"
)

mickey_bill = new(
   username: "Mickey & Bill",
   email: "wharf@rat.io",
   password: "terrapin",
   band: "Rhythm Devils"
)

#################################

robert_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/photos/Robert_Hunter.jpg")
robert.photo.attach(io: robert_photo, filename: "Robert_Hunter.jpg")
robert_band_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/photos/hunter_and_garcia.jpg")
robert.band_photo.attach(io: robert_photo, filename: "hunter_and_garcia.jpg")
robert.save!

jerry_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/photos/jerry_with_guitar.jpg")
jerry.photo.attach(io: jerry_photo, filename: "jerry_with_guitar.jpg")
jerry_band_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/photos/grateful_dead_band_photo.jpg")
jerry.band_photo.attach(io: jerry_photo, filename: "grateful_dead_band_photo.jpg")
jerry.save!

bob_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/photos/Bob_face.jpg")
bob.photo.attach(io: bob_photo, filename: "Bob_face.jpg")
bob_band_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/photos/dead_co_banner.jpg")
bob.band_photo.attach(io: bob_photo, filename: "dead_co_banner.jpg")
bob.save!

phil_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/photos/Phil+Lesh.jpg")
phil.photo.attach(io: phil_photo, filename: "Phil+Lesh.jpg")
phil_band_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/photos/lesh_friends_band_img.jpg")
phil.band_photo.attach(io: phil_photo, filename: "lesh_friends_band_img.jpg")
phil.save!

mickey_bill_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/photos/rhythm_devils_young.jpg")
mickey_bill.photo.attach(io: mickey_bill_photo, filename: "hythm_devils_young.jpg")
mickey_bill_band_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/photos/devils_at_drums.jpg")
mickey_bill.band_photo.attach(io: mickey_bill_photo, filename: "devils_at_drums.jpg")
mickey_bill.save!

#################################

capitoli = Album.new(
   band_id: Robert.id,
   name: "Capitol Theater Part 1",
   genre: "rock"
   release_date: "1970-06-24"
)

capitolii = Album.new(
   band_id: Robert.id,
   name: "Capitol Theater Part 2",
   genre: "rock"
   release_date: "1970-06-24"
)

winterland = Album.new(
   band_id: Jerry.id,
   name: "Winterland Arena",
   genre: "rock"
   release_date: "1975-06-17"
)

kirby = Album.new(
   band_id: Phil.id,
   name: "Allen Kirby Field House",
   genre: "rock"
   release_date: "1979-05-07"
)

rainbow = Album.new(
   band_id: Jerry.id,
   name: "The Rainbow Theater",
   genre: "rock"
   release_date: "1981-10-04"
)

redrocks = Album.new(
   band_id: Bob.id,
   name: "Red Rocks Amphitheatre",
   genre: "rock"
   release_date: "1985-09-07"
)

centrum = Album.new(
   band_id: MickeyBill.id,
   name: "The Centrum",
   genre: "rock"
   release_date: "1988-04-08"
)

#####################################

capitoli_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1970-06-24+Capitol+Theater/black_white_band.jpg")
capitoli.photo.attach(io: capitoli_photo, filename: "black_white_band.jpg")
capitoli.save!

capitolii_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/photos/garcia_1969_woodstock.jpg")
capitolii.photo.attach(io: capitolii_photo, filename: "garcia_1969_woodstock.jpg")
capitolii.save!

winterland_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1975-06-17+Winterland+Arena/cover_art_winterland.JPG")
winterland.photo.attach(io: winterland_photo, filename: "cover_art_winterland.JPG")
winterland.save!

kirby_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1979-05-07+Allen+Kirby+Field+House/skeleton_cover_art.jpg")
kirby.photo.attach(io: kirby_photo, filename: "skeleton_cover_art.jpg")
kirby.save!

rainbow_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1981-10-04+The+Rainbow+Theater/rainbow_cover_art.jpg")
rainbow.photo.attach(io: rainbow_photo, filename: "rainbow_cover_art.jpg")
rainbow.save!

redrocks_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1985-09-07+Red+Rocks+Amphitheatre/1985_RRA_GD.jpeg")
redrocks.photo.attach(io: redrocks_photo, filename: "1985_RRA_GD.jpeg")
redrocks.save!

centrum_photo = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1988-04-08+The+Centrum/cover_art+_centrum.jpg")
centrum.photo.attach(io: centrum_photo, filename: "cover_art+_centrum.jpg")
centrum.save!

#####################################

capitoli1 = Track.create!(album_id: capitoli.id, title: "Dire Wolf", track_number: 1)
capitoli2 = Track.create!(album_id: capitoli.id, title: "Don't Ease Me In", track_number: 2)
capitoli3 = Track.create!(album_id: capitoli.id, title: "Attics Of My Life", track_number: 3)
capitoli4 = Track.create!(album_id: capitoli.id, title: "Friend Of The Devil", track_number: 4)
capitoli5 = Track.create!(album_id: capitoli.id, title: "Let Me In", track_number: 5)

capitoli1_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1970-06-24+Capitol+Theater/Dead-NRPS1970-6-24ED1T01-Direwolf.mp3")
capitoli2_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1970-06-24+Capitol+Theater/Dead-NRPS1970-6-24ED1T02-DontEase.mp3")
capitoli3_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1970-06-24+Capitol+Theater/Dead-NRPS1970-6-24ED1T03-Attics.mp3")
capitoli4_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1970-06-24+Capitol+Theater/Dead-NRPS1970-6-24ED1T04-FOTD.mp3")
capitoli5_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1970-06-24+Capitol+Theater/Dead-NRPS1970-6-24ED1T05-83968.mp3")

capitoli1.audio_file.attach(io: capitoli1_song, filename: "Dead-NRPS1970-6-24ED1T01-Direwolf.mp3")
capitoli2.audio_file.attach(io: capitoli2_song, filename: "Dead-NRPS1970-6-24ED1T02-DontEase.mp3")
capitoli3.audio_file.attach(io: capitoli3_song, filename: "Dead-NRPS1970-6-24ED1T03-Attics.mp3")
capitoli4.audio_file.attach(io: capitoli4_song, filename: "Dead-NRPS1970-6-24ED1T04-FOTD.mp3")
capitoli5.audio_file.attach(io: capitoli5_song, filename: "Dead-NRPS1970-6-24ED1T05-83968.mp3")

capitoli1.save!
capitoli2.save!
capitoli3.save!
capitoli4.save!
capitoli5.save!

######

capitolii1 = Track.create!(album_id: capitolii.id, title: "Dark Star", track_number: 1)
capitolii2 = Track.create!(album_id: capitolii.id, title: "St Stephen", track_number: 2)
capitolii3 = Track.create!(album_id: capitolii.id, title: "China Cat Sunflower", track_number: 3)
capitolii4 = Track.create!(album_id: capitolii.id, title: "I Know You Rider", track_number: 4)
capitolii5 = Track.create!(album_id: capitolii.id, title: "Uncle John's Band", track_number: 5)

capitolii1_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1970-06-24+Capitol+Theater/Dead-NRPS1970-6-24LD5T07-DarkStar.mp3")
capitolii2_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1970-06-24+Capitol+Theater/Dead-NRPS1970-6-24LD5T08-StStephen.mp3")
capitolii3_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1970-06-24+Capitol+Theater/Dead-NRPS1970-6-24LD5T09-ChinaCat.mp3")
capitolii4_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1970-06-24+Capitol+Theater/Dead-NRPS1970-6-24LD5T10-Rider.mp3")
capitolii5_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1970-06-24+Capitol+Theater/Dead-NRPS1970-6-24LD5T11-UncleJohns.mp3")

capitolii1.audio_file.attach(io: capitolii1_song, filename: "Dead-NRPS1970-6-24LD5T07-DarkStar.mp3")
capitolii2.audio_file.attach(io: capitolii2_song, filename: "Dead-NRPS1970-6-24LD5T08-StStephen.mp3")
capitolii3.audio_file.attach(io: capitolii3_song, filename: "Dead-NRPS1970-6-24LD5T09-ChinaCat.mp3")
capitolii4.audio_file.attach(io: capitolii4_song, filename: "Dead-NRPS1970-6-24LD5T10-Rider.mp3")
capitolii5.audio_file.attach(io: capitolii5_song, filename: "Dead-NRPS1970-6-24LD5T11-UncleJohns.mp3")

capitolii1.save!
capitolii2.save!
capitolii3.save!
capitolii4.save!
capitolii5.save!

######

winterland1 = Track.create!(album_id: winterland.id, title: "Peggio", track_number: 1)
winterland2 = Track.create!(album_id: winterland.id, title: "Me & My Uncle", track_number: 2)
winterland3 = Track.create!(album_id: winterland.id, title: "Help on the Way", track_number: 3)
winterland4 = Track.create!(album_id: winterland.id, title: "Slipknot", track_number: 4)
winterland5 = Track.create!(album_id: winterland.id, title: "Franklin's Tower", track_number: 5)

winterland1_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1975-06-17+Winterland+Arena/gd75-06-17s1t06.mp3")
winterland2_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1975-06-17+Winterland+Arena/gd75-06-17s1t07.mp3")
winterland3_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1975-06-17+Winterland+Arena/gd75-06-17s1t08.mp3")
winterland4_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1975-06-17+Winterland+Arena/gd75-06-17s1t09.mp3")
winterland5_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1975-06-17+Winterland+Arena/gd75-06-17s1t10.mp3")

winterland1.audio_file.attach(io: winterland1_song, filename: "gd75-06-17s1t06.mp3")
winterland2.audio_file.attach(io: winterland2_song, filename: "gd75-06-17s1t07.mp3")
winterland3.audio_file.attach(io: winterland3_song, filename: "gd75-06-17s1t08.mp3")
winterland4.audio_file.attach(io: winterland4_song, filename: "gd75-06-17s1t09.mp3")
winterland5.audio_file.attach(io: winterland5_song, filename: "gd75-06-17s1t10.mp3")

winterland1.save!
winterland2.save!
winterland3.save!
winterland4.save!
winterland5.save!

######

kirby1 = Track.create!(album_id: kirby.id, title: "Big River", track_number: 1)
kirby2 = Track.create!(album_id: kirby.id, title: "Candyman", track_number: 2)
kirby3 = Track.create!(album_id: kirby.id, title: "Looks Like Rain", track_number: 3)
kirby4 = Track.create!(album_id: kirby.id, title: "Tennessee Jed", track_number: 4)
kirby5 = Track.create!(album_id: kirby.id, title: "Minglewood Blues", track_number: 5)

kirby1_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1979-05-07+Allen+Kirby+Field+House/gd79-05-07d1t103.mp3")
kirby2_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1979-05-07+Allen+Kirby+Field+House/gd79-05-07d1t104.mp3")
kirby3_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1979-05-07+Allen+Kirby+Field+House/gd79-05-07d1t105.mp3")
kirby4_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1979-05-07+Allen+Kirby+Field+House/gd79-05-07d1t106.mp3")
kirby5_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1979-05-07+Allen+Kirby+Field+House/gd79-05-07d1t107.mp3")

kirby1.audio_file.attach(io: kirby1_song, filename: "gd79-05-07d1t103.mp3")
kirby2.audio_file.attach(io: kirby2_song, filename: "gd79-05-07d1t104.mp3")
kirby3.audio_file.attach(io: kirby3_song, filename: "gd79-05-07d1t105.mp3")
kirby4.audio_file.attach(io: kirby4_song, filename: "gd79-05-07d1t106.mp3")
kirby5.audio_file.attach(io: kirby5_song, filename: "gd79-05-07d1t107.mp3")

kirby1.save!
kirby2.save!
kirby3.save!
kirby4.save!
kirby5.save!

######

rainbow1 = Track.create!(album_id: rainbow.id, title: "El Paso", track_number: 1)
rainbow2 = Track.create!(album_id: rainbow.id, title: "Jackaroe", track_number: 2)
rainbow3 = Track.create!(album_id: rainbow.id, title: "Beat It On Down THe Line", track_number: 3)
rainbow4 = Track.create!(album_id: rainbow.id, title: "Brown Eyed Woman", track_number: 4)
rainbow5 = Track.create!(album_id: rainbow.id, title: "Minglewood Blues", track_number: 5)

rainbow1_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1981-10-04+The+Rainbow+Theater/gd1981-10-04s1t04.mp3")
rainbow2_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1981-10-04+The+Rainbow+Theater/gd1981-10-04s1t05.mp3")
rainbow3_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1981-10-04+The+Rainbow+Theater/gd1981-10-04s1t06.mp3")
rainbow4_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1981-10-04+The+Rainbow+Theater/gd1981-10-04s1t07.mp3")
rainbow5_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1981-10-04+The+Rainbow+Theater/gd1981-10-04s1t08.mp3")

rainbow1.audio_file.attach(io: rainbow1_song, filename: "gd1981-10-04s1t04.mp3")
rainbow2.audio_file.attach(io: rainbow2_song, filename: "gd1981-10-04s1t05.mp3")
rainbow3.audio_file.attach(io: rainbow3_song, filename: "gd1981-10-04s1t06.mp3")
rainbow4.audio_file.attach(io: rainbow4_song, filename: "gd1981-10-04s1t07.mp3")
rainbow5.audio_file.attach(io: rainbow5_song, filename: "gd1981-10-04s1t08.mp3")

rainbow1.save!
rainbow2.save!
rainbow3.save!
rainbow4.save!
rainbow5.save!

######

redrocks1 = Track.create!(album_id: redrocks.id, title: "Dear Mr. Fantasy", track_number: 1)
redrocks2 = Track.create!(album_id: redrocks.id, title: "Truckin'", track_number: 2)
redrocks3 = Track.create!(album_id: redrocks.id, title: "Comes A Time", track_number: 3)
redrocks4 = Track.create!(album_id: redrocks.id, title: "Turn On Your Love Light", track_number: 4)
redrocks5 = Track.create!(album_id: redrocks.id, title: "Johnny B. Goode", track_number: 5)

redrocks1_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1985-09-07+Red+Rocks+Amphitheatre/gd85-09-07.s2t08.mp3")
redrocks2_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1985-09-07+Red+Rocks+Amphitheatre/gd85-09-07.s2t09.mp3")
redrocks3_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1985-09-07+Red+Rocks+Amphitheatre/gd85-09-07.s2t10.mp3")
redrocks4_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1985-09-07+Red+Rocks+Amphitheatre/gd85-09-07.s2t11.mp3")
redrocks5_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1985-09-07+Red+Rocks+Amphitheatre/gd85-09-07.s2t12.mp3")

redrocks1.audio_file.attach(io: redrocks1_song, filename: "gd85-09-07.s2t08.mp3")
redrocks2.audio_file.attach(io: redrocks2_song, filename: "gd85-09-07.s2t09.mp3")
redrocks3.audio_file.attach(io: redrocks3_song, filename: "gd85-09-07.s2t10.mp3")
redrocks4.audio_file.attach(io: redrocks4_song, filename: "gd85-09-07.s2t11.mp3")
redrocks5.audio_file.attach(io: redrocks5_song, filename: "gd85-09-07.s2t12.mp3")

redrocks1.save!
redrocks2.save!
redrocks3.save!
redrocks4.save!
redrocks5.save!

######

centrum1 = Track.create!(album_id: centrum.id, title: "Jack Straw", track_number: 1)
centrum2 = Track.create!(album_id: centrum.id, title: "West L.A. Fade Away", track_number: 2)
centrum3 = Track.create!(album_id: centrum.id, title: "Little Red Rooster", track_number: 3)
centrum4 = Track.create!(album_id: centrum.id, title: "Stagger Lee", track_number: 4)
centrum5 = Track.create!(album_id: centrum.id, title: "Queen Jane Approximately", track_number: 5)

centrum1_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1988-04-08+The+Centrum/d1t01.mp3")
centrum2_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1988-04-08+The+Centrum/d1t02.mp3")
centrum3_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1988-04-08+The+Centrum/d1t03.mp3")
centrum4_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1988-04-08+The+Centrum/d1t04.mp3")
centrum5_song = open("https://jamcamp-seed.s3-us-west-1.amazonaws.com/1988-04-08+The+Centrum/d1t05.mp3")

centrum1.audio_file.attach(io: centrum1_song, filename: "d1t01.mp3")
centrum2.audio_file.attach(io: centrum2_song, filename: "d1t02.mp3")
centrum3.audio_file.attach(io: centrum3_song, filename: "d1t03.mp3")
centrum4.audio_file.attach(io: centrum4_song, filename: "d1t04.mp3")
centrum5.audio_file.attach(io: centrum5_song, filename: "d1t05.mp3")

centrum1.save!
centrum2.save!
centrum3.save!
centrum4.save!
centrum5.save!