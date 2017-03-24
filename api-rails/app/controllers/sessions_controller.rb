class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
			render json: { message: "Seja bem-vindo #{user.name.titleize} #{user.second_name.titleize}!", session: user.new_token, status: true, user: user }
    else
			render json: { message: 'Usuário ou senha incorretos!', status: false }
    end
  end

  def destroy
  end
end
