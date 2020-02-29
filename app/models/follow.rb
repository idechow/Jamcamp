class Follow < ApplicationRecord
   belongs_to :user, class_name: 'User'
   belongs_to :band, class_name: 'User'
end
