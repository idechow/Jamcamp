class Api::CollectsController < ApplicationController
   def create
      @collect = Collect.new(collect_params)
   end

   def destroy
   end

   private
   def collect_params
      params.require(:collect).permit(:user_id, :album_id)
   end
end
