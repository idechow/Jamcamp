json.extract! user, :id, :username, :email, :band, :album_ids
json.collection user.collects
json.followees user.followed_bands