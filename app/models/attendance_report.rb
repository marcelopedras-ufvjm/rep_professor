class AttendanceReport < ActiveRecord::Base
  belongs_to :course
  has_many :events
end
