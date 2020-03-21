class Api::TracksController < ApplicationController
   def index
      if params[:album_id]
         @album = Album.find(params[:album_id])
      end
      @tracks = @album.tracks
      render "api/tracks/index.json.jbuilder"
   end

   private
   def track_params
      params.require(:track).permit(
      :album_id,
      :title,
      :track_number,
      :audio_url)
   end

end
