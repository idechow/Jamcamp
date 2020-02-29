# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  band            :string
#  location        :string
#  weblink         :string
#  about           :text
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
   attr_reader :password

   validates :username, :password_digest, :session_token, presence: true
   validates :username, uniqueness: true
   validates :password, length: { minimum: 6 }, allow_nil: true

   after_initialize :ensure_session_token

   has_many :albums, foreign_key: :band_id, class_name: 'Album'

   has_many :collects, foreign_key: :album_id, class_name: 'Collect'
   has_many :collected_albums, through: :collects, source: :album

   has_many :followed_bands, foreign_key: :band_id, class_name: 'Follow'
   has_many :followees, through: :followed_bands, source: :band

   has_many :following_users, foreign_key: :user_id, class_name: 'Follow'
   has_many :followers, through: :following_users, source: :user

   has_one_attached :photo
   has_one_attached :band_photo

   def self.find_by_credentials(username, password)
      user = User.find_by(username: username)
      user && user.is_password?(password) ? user : nil
   end

   def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
   end

   def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
   end

   def reset_session_token!
      self.session_token = SecureRandom.urlsafe_base64(16)
      self.save!
      self.session_token
   end

   private
   def ensure_session_token
      self.session_token ||= SecureRandom.urlsafe_base64(16)
   end
end
