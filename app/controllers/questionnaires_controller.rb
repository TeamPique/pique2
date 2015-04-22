class QuestionnairesController < ApplicationController

	def new
		if Questionnaire.find_by(user_id: current_user.id) != nil
			redirect_to users_path
		end
		@questionnaire = Questionnaire.new
		@user = User.find_by(params[:id]).name
	end

	def create
		questionnaire = Questionnaire.create(questionnaire_params)
		questionnaire.save!
		redirect_to questionnaires_path
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
