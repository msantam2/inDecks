class Api::UsersController < ApplicationController
  # signup
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      if @user.errors.full_messages.include?("Email has already been taken")
        render json: "Email is already associated with a current user", status: 422
      elsif @user.errors.full_messages.include?("Password is too short (minimum is 8 characters)")
        render json: "Password must be a minimum of 8 characters", status: 422
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
