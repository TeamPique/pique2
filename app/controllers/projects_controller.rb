class ProjectsController < ApplicationController

  def index
    @projects = Project.where(active: true)
    @projects = Project.all
    @users = User.all
    @user = User.find_by(params[:id])

    if params[:search]
      search = params[:search].downcase
    end
    if params[:location]
      location = params[:location].titleize
    end

    # .search is defined in the project.rb model file
    @search_results = Project.search(search)
  end

  def show
    @projects = Project.all
    @project = Project.find(params[:id])
    @comment = Comment.new
    @project_comment = Comment.where({project_id: params[:id]}).order(:created_at)
    @user = User.find(params[:id])
  end

  def new
    @project = Project.new
  end

  def create
    project = Project.create(project_params)
    project.save
    redirect_to projects_path
  end

  def edit
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      redirect_to @project
    else
      render "edit"
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    redirect_to "index"
  end

  def follow_projects
    project = Project.find(params[:id])
    project.users_followed << User.find(current_user)
    project.save
    redirect_to "show"
  end


  def project_params
    params.require(:project).permit(:name, :owner, :collaborators, :number_of_collaborators, :about, :team, :openings, :location, :length)
  end
end
