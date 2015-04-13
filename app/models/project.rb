class Project < ActiveRecord::Base
  belongs_to :users

  attr_accessor :name, :owner, :collaborators, :abouts, :openings

end
