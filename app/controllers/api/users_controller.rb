class Api::UsersController < ApplicationController

   # def index
   #     if params[:band_id]
   #       @albums = Album.find(params[:band_id])
   #    end
   #    @albums = Album.all
   #    render "api/albums/index.json.jbuilder"
   # end
   
   def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :band)
  end
end