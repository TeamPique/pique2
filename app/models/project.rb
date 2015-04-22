class Project < ActiveRecord::Base
  belongs_to :users
  has_many :comments
  has_and_belongs_to_many :users_followed, class_name: "User", join_table: "projects_users",association_foreign_key: "user_id"

  include PublicActivity::Model
  tracked

  def self.search(name, about, location)
    # method for non-specific user searches
    where("name LIKE ?", "%#{name}%") unless name.blank?
    where("about LIKE ?", "%#{about}%") unless about.blank?
    where("location LIKE ?", "%#{location}%") unless location.blank?
  end

end
