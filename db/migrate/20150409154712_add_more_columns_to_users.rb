class AddMoreColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :location, :string
    add_column :users, :headline, :string
    add_column :users, :industry, :string
    add_column :users, :public_profile_url, :string
  end
end
