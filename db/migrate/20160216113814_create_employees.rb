class CreateEmployees < ActiveRecord::Migration
  def change
    create_table :employees do |t|
      t.string :name
      t.string :siape
      t.boolean :effective
      t.references :course, index: true, foreign_key: true
      t.references :status_code, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
