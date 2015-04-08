class UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    @current_user
    visitor = params[:visitor]
  end

  def update
    current_user.update(portfolio_params)
    redirect_to user_path(current_user)
  end

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

