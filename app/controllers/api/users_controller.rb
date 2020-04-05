class Api::UsersController < ApplicationController
   def show
      @user = User.includes(
            :collects,
            :collected_albums,
            :followed_bands,
            :followees,
         ).find(params[:id])
      if @user
         render "api/users/show.json.jbuilder"
      else
         render json: ["Invalid user"], status: 422
      end
   end

   def artists_show 
      @artist = User.find(params[:id])
      if @artist
         render "api/artists/show.json.jbuilder"
      else
         render json: ["Invalid artist"], status: 422
      end
   end
   
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