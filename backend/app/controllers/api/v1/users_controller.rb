class Api::V1::UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(user_params)

    if user.valid?
      user.save
      render json: {success: true}
    else
      render json: {errors: user.errors}
    end
  end


  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
