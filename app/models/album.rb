class Album < ApplicationRecord
   validates :band_id, :name, :genre, presence: true

   has_one_attached :photo
   # has_many_attached :tracks each track will be attached to its own track
end
