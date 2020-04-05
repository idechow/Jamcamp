class Api::FollowsController < ApplicationController

   def index
      if params[:user_id]
         @user = User.includes(
            :collects,
            :collected_albums,
            :following_users,
            :followers,
            :followed_bands,
            :followees,
            :albums,
         ).find(params[:user_id])
         render "api/follows/index.json.jbuilder"
      else 
         render json: ["Invalid id"], status: 422
      end
   end

   def create
      @follow = Follow.new(follow_params)
      
   if @follow.save
      render 'api/follows/show'
    else
      render json: @follow.errors.messages, status: 422
    end
   end

   def destroy
      @follow = current_user.followed_bands.find_by(
         band_id: params[:id],
         # user_id: current_user.id
      )
      @follow.destroy
      render 'api/follows/show'
   end

   private
   def follow_params
      params.require(:follow).permit(:user_id, :band_id)
   end
end
