class User < ActiveRecord::Base
  # Include default devise modules.
  # devise :database_authenticatable, :registerable,
  #         :recoverable, :rememberable, :trackable, :validatable,
  #         :confirmable, :omniauthable

  devise :database_authenticatable, :validatable

  include DeviseTokenAuth::Concerns::User
end
