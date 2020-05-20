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
      @user = User.find(params[:id])
      if @user
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

   def update
      unless params[:id].to_i == current_user.id
         render json: ['access denied'], status: 401
         return nil
      end

      @user = User.find_by(id: params[:id])

      if @user.update(user_params)
         render "api/artists/show"
      else
         render json: ['update failed'], status: 422
      end
  end

  private

  def user_params
      params.require(:user).permit(:username, 
         :password, 
         :email, 
         :band, 
         :location,
         :about,
         :weblink
      )
  end
end