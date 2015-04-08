class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :friendships
  has_many :projects
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  devise :omniauthable, :omniauth_providers => [:linkedin, :meetup, :dribbble, :github]

  has_attached_file :portfolio, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :portfolio, content_type: /\Aimage\/.*\Z/

  acts_as_messageable

  def self.from_omniauth(auth)
    binding.pry
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.name = auth.info.name   # assuming the user model has a name
      user.image = auth.info.image # assuming the user model has an image

    end
  end

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.linkedin_data"] && session["devise.linkedin_data"]["info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end

<<<<<<< HEAD
<<<<<<< HEAD
=======
  def mailboxer_email(object)
    email
  end

>>>>>>> c242c310ac661629d60ffeb1b62a47f93dee6a9c
   popular friendship_profile: true

  # You can also use a symbol here but the friendship won't be passed to your method
  after_befriend 'notify_friendship_created value'
  after_unfriend 'notify_unfriended value'

  def self.notify_friendship_created(friendship)
    puts "#{name} friended #{friendship.friend.name}"
  end

  def self.notify_unfriended(friendship)
    puts "#{name} unfriended #{friendship.friend.name}"

    # @justin = User.create name: "Justin"
    # @jenny = User.create name: "Jenny"

  user.name.befriend user.name #=> "Justin friended Jenny"
  user.name.unfriend user.name #=> "Justin unfriended Jenny"
  end

<<<<<<< HEAD
>>>>>>> d619d61ea12ccca87a471b84d9f096fa1180b47f
=======
>>>>>>> c242c310ac661629d60ffeb1b62a47f93dee6a9c
end
