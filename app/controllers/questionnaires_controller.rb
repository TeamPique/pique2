class QuestionnairesController < ApplicationController

	# def index
	# 	@questionnaires = Questionnaire.all
	# 	# @users = User.all
	# end

	def show
		@questionnaire = Questionnaire.find(params[:id])
		@users = User.all
		@user = User.find(params[:id]).user_id
	end


	def new
		if Questionnaire.find_by(user_id: current_user.id) != nil
			redirect_to users_path
		end
		@questionnaire = Questionnaire.new
		@user = User.find_by(params[:id]).name
		@users = User.all
		# redirect_to new_questionnaire_path
		@user = current_user.name
	end

	def create
		questionnaire = Questionnaire.create(questionnaire_params)
		questionnaire.save!
		redirect_to questionnaire
	end

	def edit
		@questionnaire = Questionnaire.find(params[:id])

	end

	def update
		questionnaire = Questionnaire.find(params[:id])
		questionnaire.update(questionnaire_params)
		redirect_to questionnaire
	end

	def questionnaire
		@questionnaire = Questionnaire.find(params[:id])

		redirect_to users_path

	end

	private

	def questionnaire_params
		params.require(:questionnaire).permit(
			:user_id,
			:Question_1,
			:Question_2,
			:Question_3,
			:Question_4,
			:Question_5,
			:Question_6
			)
	end

end
