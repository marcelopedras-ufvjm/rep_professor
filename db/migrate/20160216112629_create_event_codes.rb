class CreateEventCodes < ActiveRecord::Migration
  def change
    create_table :event_codes do |t|
      t.string :code
      t.string :description

      t.timestamps null: false
    end
    add_index :event_codes, :code
  end
end
