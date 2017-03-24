class RecoveryMailer < ApplicationMailer
	def reset(user)
    @user = user

    mail(to: @user.email, subject: 'Project X | Resetar Senha')
  end
end
