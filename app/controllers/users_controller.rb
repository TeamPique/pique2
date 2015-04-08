class UsersController < ApplicationController
  before_action :authenticate_user!

<<<<<<< HEAD:app/controllers/users/users_controller.rb
  def index
    @users = User.all
  end

  def show
    @user = User.find_by(params[:id])
  end

  def new
    @user = User.new
  end


=======
  def show
    current_user
  end

  def update
    current_user.update(portfolio_params)
    redirect_to user_path(current_user)
  end

>>>>>>> d619d61ea12ccca87a471b84d9f096fa1180b47f:app/controllers/users_controller.rb
end


#### DEVISE USER HELPERS #####
# user_signed_in? -- verifies if a user is signed in
# current_user -- accesses signed-in user's info
# user_session -- accesses the scope for the session
def portfolio_params
  params.permit(:portfolio,:id)
end
