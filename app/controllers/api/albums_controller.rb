class Api::AlbumsController < ApplicationController
   def index
      if params[:user_id]
         @albums = User.find(params[:user_id]).albums
      else
         @albums = Album.all
      end
      render "api/albums/index.json.jbuilder"
   end

   def show
      @album = Album.find(params[:id])
      # @artist = User.find(params[:user_id])
      # @tracks = @album.tracks
      # @artist = @album.artist
      if @album
         render "api/albums/show.json.jbuilder"
      else
         render json: ["Invalid album"], status: 422
      end
   end

   # def create
   # end

   # def update
   # end

   # def delete
   # end

   private

  def album_params
    params.require(:album).permit(
      :band_id,
      :name,
      :genre,
      :description,
      :credits,
      :image_url
    )
  end
end