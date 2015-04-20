class HomeController < ApplicationController
  skip_before_action :authenticate_user!, :only => [:index]

  def index

  end

  def questionnaire
    render :questionnaire
  end

  def dashboard
    render :dashboard
  end

end
