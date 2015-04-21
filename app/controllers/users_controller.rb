class UsersController < ApplicationController

  def index
    # renders all users
    @users = User.all
    @questionnaires = Questionnaire.all

    # non-specific user search
    if params[:industry]
      industry = params[:industry].titleize
    end
    if params[:headline]
      headline = params[:headline].titleize
    end
    if params[:location]
      location = params[:location].titleize
    end

    # .search is defined in the user.rb model file
    @search_results = User.search(industry, headline, location)

    # specific user search
    if params[:search]
      search = params[:search].titleize
      @user_results = User.where("name LIKE ?", "%#{search}%")
    end
    # binding.pry
  end

  def show
    if params[:id].to_i == current_user.id
      @followed_projects = current_user.projects_followed
      render "profile"
    else
      visitor_id = User.find(params[:id]).id
      have_visited = Visitor.where({user_id: visitor_id, visitor_id: current_user.id})
      if have_visited.empty? == true
        Visitor.create({user_id: visitor_id, visitor_id: current_user.id, date: Date.today})
      end
      @user = User.find(params[:id])
      @questionnaire = Questionnaire.find(params[:id])
      render "show"
    end
      # visitor = params[:visitor]
      # cur_user = @current_user.id
      # binding.pry
  end

  def new
    @questionnaire = Questionnaire.new
    @user = User.new
  end

  # def show
  # #   current_user
  # #   visitor = params[:visitor]
  # #   cur_user = current_user.id
  # @user = User.find(params[:id])
  # end


  def update
    current_user.update(portfolio_params)
    redirect_to user_path(current_user)
  end

end



#### DEVISE USER HELPERS #####
# user_signed_in? -- verifies if a user is signed in
# current_user -- accesses signed-in user's info
# user_session -- accesses the scope for the session

def portfolio_params
  params.permit(:portfolio,:id)

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  private

  def portfolio_params
    params.permit(:portfolio,:id)
  end


end
