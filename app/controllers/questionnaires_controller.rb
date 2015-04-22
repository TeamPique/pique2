class QuestionnairesController < ApplicationController
	def index
		@questionnaires = Questionnaire.all
	end

	def show
		@questionnaire = Questionnaire.find(params[:id])
	end

	def new
		@questionnaire = Questionnaire.new
		@user = User.find_by(params[:id]).name
	end

	def create
		questionnaire = Questionnaire.create(questionnaire_params)
		questionnaire.save!
		redirect_to questionnaires_path
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
	end


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
