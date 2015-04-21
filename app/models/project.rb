class Project < ActiveRecord::Base
  belongs_to :users
  has_many :comments
  has_and_belongs_to_many :users_followed, class_name: "User", join_table: "projects_users",association_foreign_key: "user_id"

  include PublicActivity::Model
  tracked

  def self.search(search)
    # method for non-specific user searches
    where("about LIKE ?", "%#{search}%")
  end

end
