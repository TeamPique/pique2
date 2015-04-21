class ChangeColumnName < ActiveRecord::Migration
  def self.up
    rename_column :projects, :case_studies,  :location
    rename_column :projects, :case_studies2, :length
  end

  def self.down
  end
end
