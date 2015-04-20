class CreateQuestionnaires < ActiveRecord::Migration
  def change
    create_table :questionnaires do |t|
      t.string :Question_1
      t.string :Question_2
      t.string :Question_3
      t.string :Question_4
      t.string :Question_5
      t.string :Question_6
    end
  end
end
