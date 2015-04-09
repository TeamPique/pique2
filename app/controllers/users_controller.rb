class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    @users = User.all
  end

  def show
    @user = User.find_by(params[:id])
  end

  def new
    @user = User.new
  end

  def show
    @current_user
    visitor = params[:visitor]
    cur_user = @current_user.id
  end

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


#### DEVISE USER HELPERS #####
# user_signed_in? -- verifies if a user is signed in
# current_user -- accesses signed-in user's info
# user_session -- accesses the scope for the session

