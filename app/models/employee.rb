class Employee < ActiveRecord::Base
  belongs_to :course
  belongs_to :status_code
  has_many :events
end
