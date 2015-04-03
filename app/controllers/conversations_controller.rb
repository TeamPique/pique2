class ConversationsController < ApplicationController
  before_action :authenticate_user!
  before_action :get_mailbox

  def index
    @conversations = @mailbox.inbox.paginate(page: params[:page], per_page: 10)
  end

  def show
    @conversation = current_user.mailbox.conversations.find_by(id: params[:id])
  end

  private

  def get_mailbox
    @mailbox ||= current_user.mailbox
  end

  def reply
    current_user.reply_to_conversation(@conversation, params[:body])
    flash[:success] = 'Reply sent'
    redirect_to conversation_path(@conversation)
  end

end
