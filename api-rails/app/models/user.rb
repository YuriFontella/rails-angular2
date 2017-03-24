class User < ApplicationRecord
  attr_accessor :reset_token

  validates_presence_of :name, :second_name, :email
  validates_format_of :email, :with => Devise::email_regexp

  has_secure_password
  validates :password, :length => { minimum: 6 }, confirmation: true, allow_blank: true
  validates :password_confirmation, :presence =>true, :on => :update

	validates :terms, acceptance: true

  validates_uniqueness_of :email

  before_create do |user|
    user.token = new_token
    user.email = email.downcase

    user.name = name.titleize
    user.second_name = second_name.titleize

    user.id = SecureRandom.random_number(1234567890)
  end

  before_update do |user|
    user.email = email.downcase
  end

  # Returns a random token.
  def new_token
    SecureRandom.urlsafe_base64
  end

  # Sets the password reset attributes.
  def create_reset_digest
    self.reset_token = new_token
    update_columns(reset_digest: reset_token, reset_sent_at: Time.zone.now)
  end

  # Returns true if a password reset has expired.
  def password_reset_expired?
    self.reset_sent_at < 40.hours.ago
  end

  def valid_hash?(token)
    return false if token.nil?
    self.reset_digest == token
  end
end
