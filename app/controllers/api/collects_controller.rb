class Api::CollectsController < ApplicationController

   def index
      if params[:album_id]
         @album = Album.includes(
            :collects,
            :collectors
         ).find(params[:album_id])
         @collectors = @album.collectors.order('collects.created_at DESC')
         render "api/collects/index.json.jbuilder"
      else 
         render json: ["Invalid id"], status: 422
      end
   end

   def create
      @collect = Collect.new(collect_params)

      if @collect.save
         render 'api/collects/show'
      else 
         render json: @collect.errors.messages, status: 422
      end
   end

   def destroy
      @collect = current_user.collects.find_by(
         album_id: params[:id],
         # user_id: current_user.id
      )
      @collect.destroy
      render 'api/collects/show'
   end

   private
   def collect_params
      params.require(:collect).permit(:user_id, :album_id)
   end
end
