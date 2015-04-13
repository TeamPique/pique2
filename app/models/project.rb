class Project < ActiveRecord::Base
  belongs_to :users

  attr_accessor :name, :owner, :collaborators, :abouts, :openings

  def self.search(query)
    where("about like?", "#{query}")
  end
end
