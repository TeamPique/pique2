class AddAttributesToComments < ActiveRecord::Migration
  def change
    add_column(:comments, :created_at, :datetime)
    add_column(:comments, :updated_at, :datetime)
    add_index(:comments, [:project_id, :user_id])
  end
end
