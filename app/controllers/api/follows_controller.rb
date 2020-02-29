class Api::FollowsController < ApplicationController
   def create
      @follow = Follow.new(follow_params)

   if @follow.save
      render :show
    else
      render json: @follow.errors.messages, status: 422
    end
   end

   def destroy
   end

   private
   def follow_params
      params.require(:follow).permit(:user_id, :band_id)
   end
end
