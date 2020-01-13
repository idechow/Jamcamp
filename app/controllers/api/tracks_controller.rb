class Api::TracksController < ApplicationController
   def index
      @tracks = Track.where(album_id: params[:albumId]).order("track_number ASC")
      render "api/songs/index.json.jbuilder"
   end

   def show
      @track = Track.find(params[:id])
      render "api/songs/show.json.jbuilder"
   end

   private

   def album_params
      params.require(:track).permit(
      :album_id,
      :title,
      :track_number,
      :audio_url)
   end

end
