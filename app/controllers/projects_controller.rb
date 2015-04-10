class ProjectsController < ApplicationController

  def index
    # @projects = Project.where(active: true)
    @projects = Project.all
  end

  def show
    project = Project.find(params[:id])
  end

  def new
    @project = Project.new
  end

  def create
    project = Project.create(project_params)
    project.save
    redirect_to projects_path
  end


  def project_params
    params.require(:project).permit(:name, :owner, :collaborators, :active, :number_of_collaborators, :about, :team, :openings, :case_studies)
  end
end
