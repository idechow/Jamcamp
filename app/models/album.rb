# == Schema Information
#
# Table name: albums
#
#  id          :bigint           not null, primary key
#  band_id     :integer          not null
#  name        :string           not null
#  genre       :string           not null
#  description :text
#  credits     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Album < ApplicationRecord
   validates :name, :genre, presence: true

   has_many :tracks

   has_many :collects, foreign_key: :album_id, class_name: 'Collect'
   has_many :collectors, through: :collects, source: :user

   belongs_to :artist, foreign_key: :band_id, class_name: 'User'

   has_one_attached :photo
end

 
