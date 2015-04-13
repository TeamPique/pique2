class Project < ActiveRecord::Base
  belongs_to :users

  attr_accessible :name, :owner, :collaborators, :abouts, :openings

  def self.search(query)
    where("name like?", "%#{query}%") OR where("owner like?", "%#{query}%") OR where("collaborators like?", "%#{query}%") OR where("about like?", "%#{query}%") OR where("openings like?", "%#{query}%")
  end
end
