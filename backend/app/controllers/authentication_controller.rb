class AuthenticationController < ApplicationController
  protect_from_forgery with: :null_session

  def login
    user = User.find_by(email: params[:email])

    if user&.authenticate(params[:password])
      token = JWT.encode(
        { user_id: user.id },
        Rails.application.secret_key_base
      )

      render json: { token: token }
    else
      render json: { error: "Invalid email or password" }, status: :unauthorized
    end
  end
end
