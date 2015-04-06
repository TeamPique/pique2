class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def linkedin
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    @user = User.from_omniauth(request.env["omniauth.auth"])

    if @user.persisted?
      sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
      set_flash_message(:notice, :success, :kind => "LinkedIn") if is_navigational_format?
    else
      session["devise.linkedin_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end

  def meetup
    id = request.env["omniauth.auth"]["info"]["id"]
    @response = HTTParty.get("https://api.meetup.com/2/profiles.json/?member_id=" + id.to_s + "&key=" + MEETUP_KEY)
    render "users/meetup"
    # meetups_hash
  end
end
