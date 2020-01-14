class Api::TracksController < ApplicationController
   def index
      @tracks = Track.all
      render "api/tracks/index.json.jbuilder"
   end

   def show
      @track = Track.find(params[:id])
      render "api/tracks/show.json.jbuilder"
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
