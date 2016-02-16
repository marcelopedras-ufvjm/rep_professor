class EventCodesController < ApplicationController
  before_action :set_event_code, only: [:show, :update, :destroy]

  # GET /event_codes
  # GET /event_codes.json
  def index
    @event_codes = EventCode.all

    render json: @event_codes
  end

  # GET /event_codes/1
  # GET /event_codes/1.json
  def show
    render json: @event_code
  end

  # POST /event_codes
  # POST /event_codes.json
  def create
    @event_code = EventCode.new(event_code_params)

    if @event_code.save
      render json: @event_code, status: :created, location: @event_code
    else
      render json: @event_code.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /event_codes/1
  # PATCH/PUT /event_codes/1.json
  def update
    @event_code = EventCode.find(params[:id])

    if @event_code.update(event_code_params)
      head :no_content
    else
      render json: @event_code.errors, status: :unprocessable_entity
    end
  end

  # DELETE /event_codes/1
  # DELETE /event_codes/1.json
  def destroy
    @event_code.destroy

    head :no_content
  end

  private

    def set_event_code
      @event_code = EventCode.find(params[:id])
    end

    def event_code_params
      params.require(:event_code).permit(:code, :description)
    end
end
