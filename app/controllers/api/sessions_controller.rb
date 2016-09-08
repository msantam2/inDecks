class Api::SessionsController < ApplicationController
  # login
  def create
    @user = User.find_by_credentials(params[:user][:email],
                                     params[:user][:password])
    if @user

      login(@user)
      render "api/users/show"
    else
      render json: "Invalid Credentials", status: 401
    end
  end

  # logout
  def destroy
    @user = current_user

    if @user
      logout
      render "api/users/show"
    else
      render json: "No user is currently logged in", status: 404
    end
  end
end
