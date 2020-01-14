# == Schema Information
#
# Table name: tracks
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  track_number :integer          not null
#  album_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Track < ApplicationRecord
   validates :title, :track_number, presence: true
   validates :track_number, uniqueness: { scope: :album }

   belongs_to :album
   
   has_one :artist,
      through: :album,
      source: :artist

   has_one_attached :audio_file
end
