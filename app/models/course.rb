class Course < ActiveRecord::Base
  has_many :employees
  has_many :attendance_reports
end
