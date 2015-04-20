class QuestionnairesController < ApplicationController
	def index
		@questionnaires = Questionnaire.all	
	end

	def show
		@questionnaire = Questionnaire.find(params[:id])
	end

	def new
		@questionnaire = Questionnaire.new
		@questionnaire.save!
		redirect_to questionnaire_path(questionnaire)
	end


end