class ProjectsController < ApplicationController

  def index
    # @projects = Project.where(active: true)
    @projects = Project.all
    @users = User.all
    @user = User.find_by(params[:id])

    if params[:name]
      name = params[:name].titleize
    end
    if params[:about]
      about = params[:about]
    end
    if params[:location]
      location = params[:location].titleize
    end

    if params[:category]
      category = params[:category]
      @category_results = Project.where(category: category)
    end

    # .search is defined in the project.rb model file
    @search_results = Project.search(name, about, location)
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
    params.require(:project).permit(:owner, :name, :about, :category, :team, :openings, :location, :length)
  end
end
