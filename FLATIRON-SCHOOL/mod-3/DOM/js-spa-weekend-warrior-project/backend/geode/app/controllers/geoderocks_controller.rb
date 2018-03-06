class GeoderocksController < ApplicationController

  def index
    @geoderocks = Geoderock.all
    render json: @geoderocks
  end

  def show
    @geoderock = GeodeRock.find(params[:id])
    render json: @geoderock
  end

end
