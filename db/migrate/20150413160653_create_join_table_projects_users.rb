class CreateJoinTableProjectsUsers < ActiveRecord::Migration
  def change
    create_join_table :projects, :users do |t|
      t.references :project, null: false
      t.references :user, null: false
    end
  end
end
