class ProjectsController < ApplicationController
  before_action :authenticate_user!

  def index
    @projects = Project.where(active: true)
  end

  def show
    @project = Project.find(params[:id])
  end
end
