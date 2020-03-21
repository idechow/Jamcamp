
json.collects_ids @album.collects.sort{|x,y| y.created_at <=> x.created_at}.map{ |user| user.user.id }
json.collectors @album.collectors.each do |user|
   json.set! user.id do 
      json.extract user, :id, :username
      json.photo_url url_for(user.photo) if user.photo.attached?
   end
end
