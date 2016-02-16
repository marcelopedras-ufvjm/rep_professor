class CreateAttendanceReports < ActiveRecord::Migration
  def change
    create_table :attendance_reports do |t|
      t.integer :year
      t.integer :month
      t.date :generated_in
      t.references :course, index: true, foreign_key: true

      t.timestamps null: false
    end

    add_index :attendance_reports, [:year, :month],     :unique => true
  end
end
