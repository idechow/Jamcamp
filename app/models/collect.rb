class Collect < ApplicationRecord
   belongs_to :user, class_name: 'User'
   belongs_to :album, class_name: 'Album'
end
