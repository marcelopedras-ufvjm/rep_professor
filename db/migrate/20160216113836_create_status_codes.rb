class CreateStatusCodes < ActiveRecord::Migration
  def change
    create_table :status_codes do |t|
      t.integer :code
      t.string :description

      t.timestamps null: false
    end
  end
end
