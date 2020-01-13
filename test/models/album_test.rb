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

require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
