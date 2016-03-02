class User < ActiveRecord::Base
  # Include default devise modules.
  # devise :database_authenticatable, :registerable,
  #         :recoverable, :rememberable, :trackable, :validatable,
  #         :confirmable, :omniauthable

  devise :database_authenticatable, :validatable

  include DeviseTokenAuth::Concerns::User

  ROLES = %i[admin manager professor]

  def roles=(roles)
    roles = [*roles].map { |r| r.to_sym }
    self.roles_mask = (roles & ROLES).map { |r| 2**ROLES.index(r) }.inject(0, :+)
  end

  def roles
    ROLES.reject do |r|
      ((roles_mask.to_i || 0) & 2**ROLES.index(r)).zero?
    end
  end

  # def current_ability
  #   @current_ability ||= Ability.new(current_user)
  # end

  def admin?
    roles.include? :admin
  end

  def manager?
    roles.include? :manager
  end

  def professor?
    roles.include? :professor
  end
end
