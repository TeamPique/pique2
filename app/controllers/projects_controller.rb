class ProjectsController < ApplicationController
  before_action :authenticate_user!

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new
  end

  def create
    project = Project.create(projects_params)
    project.save
    redirect_to projects_path
  end


  def projects_params
    params.permit(:name, :owner, :collaborators, :active, :number_of_collaborators, :about, :team, :openings, :case_studies)
  end
end
