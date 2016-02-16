class Event < ActiveRecord::Base
  belongs_to :employee
  belongs_to :event_code
  belongs_to :attendance_report
end
