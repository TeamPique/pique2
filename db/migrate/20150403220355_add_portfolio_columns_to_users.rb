class AddPortfolioColumnsToUsers < ActiveRecord::Migration
  def change
    add_attachment :users, :portfolio
  end
end
