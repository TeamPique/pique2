class AddUserToQuestionnaire < ActiveRecord::Migration
  def change
    add_reference :questionnaires, :user, index: true
    add_foreign_key :questionnaires, :users
  end
end
