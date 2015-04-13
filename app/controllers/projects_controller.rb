class ProjectsController < ApplicationController

  def index
    @projects = Project.where(active: true)
    @projects = Project.all
    @users = User.all
    @user = User.find_by(params[:id])

    if params[:search]
      @search_results = Project.where("about LIKE ?", "%#{params[:search]}%")
    end
  end

  def show
    @projects = Project.all
    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new
  end

  def create
    project = Project.create(project_params)
    project.save
    redirect_to projects_path
  end

  def follow_projects
    project = Project.find(params[:id])
    project.users_followed << User.find(current_user)
    project.save
    redirect_to "show"
  end


  def project_params
    params.require(:project).permit(:name, :owner, :collaborators, :number_of_collaborators, :about, :team, :openings, :case_studies)
  end
end
