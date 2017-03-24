class RecoveryController < ApplicationController
  before_action :valid_user, only: [:edit, :update]
  before_action :check_expiration, only: [:update]

  before_action :set_user, only: [:edit, :update, :create]

  def create
    if @user
      @user.create_reset_digest
      # RecoveryMailer.reset(@user).deliver_now
      render json: { message: "Mailgun: está enviando somente para destinatários autorizados, a conta é free!", status: false }
    else
      render json: { message: 'Email não encontrado em nosso sistema.', status: false }
    end
  end

  def edit
  end

  def update
    if params[:password].nil?
      render json: { message: "Senha não pode ficar em branco!" }
    elsif @user.update_attributes(recovery_params)
      @user.update_attribute(:reset_digest, nil)
      render json: { status: true }
    else
      render json: { message: @user.errors.full_messages.first, status: false }
    end
  end

  private

  def recovery_params
  	params.require(:recovery).permit(:password, :password_confirmation)
  end

  def set_user
    @user = User.find_by(email: params[:email].downcase)
  end

  # Confirms a valid user.
  def valid_user
    set_user
    unless (@user && @user.valid_hash?(params[:id]))
      render json: { message: 'Não foi possível validar essa solicitação!' }
    end
  end

  # Checks expiration of reset token.
  def check_expiration
    set_user
    if @user.password_reset_expired?
      render json: { message: 'Solicitação expirada, solicite uma nova!' }
    end
  end
end
