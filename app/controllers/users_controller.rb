class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    @users = User.all
  end

  def show
    if params[:id].to_i == current_user.id
      render "profile"
    else
      visitor_id = User.find(params[:id]).id
      have_visted = Visitor.where({user_id: visitor_id, visitor_id: current_user.id})
      if have_visted.empty? == true
        Visitor.create({user_id: visitor_id, visitor_id: current_user.id, date: Date.today})
      end
      @user = User.find(params[:id])
      render "show"
    end
      # visitor = params[:visitor]
      # cur_user = @current_user.id
  end

  def new
    @user = User.new
  end

  def update
    current_user.update(portfolio_params)
    redirect_to user_path(current_user)
  end

#### DEVISE USER HELPERS #####
# user_signed_in? -- verifies if a user is signed in
# current_user -- accesses signed-in user's info
# user_session -- accesses the scope for the session
end
