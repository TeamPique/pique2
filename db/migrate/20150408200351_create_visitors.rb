class CreateVisitors < ActiveRecord::Migration
  def change
    create_table :visitors do |t|
      t.integer :user_id
      t.integer :visitor_id
      t.date :date

      t.timestamps null: false
    end
  end
end
