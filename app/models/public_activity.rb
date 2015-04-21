class Article < ActiveRecord::Base
  include PublicActivity::Model
  tracked
end