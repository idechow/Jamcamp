class Api::AlbumsController < ApplicationController
   def index
      @albums = Album.all
      render "api/albums/index.json.jbuilder"
   end

   def show
      @album = Album.find(params[:id])
      @tracks = @album.tracks
      @artist = @album.artist
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