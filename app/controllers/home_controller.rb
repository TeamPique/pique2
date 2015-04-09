class HomeController < ApplicationController
  skip_before_action :authenticate_user!, :except => [:index]

  def index

  end

  def questionnaire
    render :questionnaire
  end

end
