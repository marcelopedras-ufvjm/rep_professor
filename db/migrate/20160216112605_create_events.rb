class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.date :date
      t.string :note
      t.references :employee, index: true, foreign_key: true
      t.references :event_code, index: true, foreign_key: true
      t.references :attendance_report, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
