class UsersController < ApplicationController
  before_action :authenticate_user!

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> kamari_friending
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
<<<<<<< HEAD
=======
>>>>>>> c242c310ac661629d60ffeb1b62a47f93dee6a9c
=======
>>>>>>> kamari_friending
  def show
    @current_user
    visitor = params[:visitor]
    cur_user = @current_user.id
  end

  def update
    current_user.update(portfolio_params)
    redirect_to user_path(current_user)
  end

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> kamari_friending
>>>>>>> d619d61ea12ccca87a471b84d9f096fa1180b47f:app/controllers/users_controller.rb
end


#### DEVISE USER HELPERS #####
# user_signed_in? -- verifies if a user is signed in
# current_user -- accesses signed-in user's info
# user_session -- accesses the scope for the session
def portfolio_params
  params.permit(:portfolio,:id)
<<<<<<< HEAD
=======
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

>>>>>>> c242c310ac661629d60ffeb1b62a47f93dee6a9c
=======
>>>>>>> kamari_friending
end


#### DEVISE USER HELPERS #####
# user_signed_in? -- verifies if a user is signed in
# current_user -- accesses signed-in user's info
# user_session -- accesses the scope for the session

