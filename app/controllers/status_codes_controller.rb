class StatusCodesController < ApplicationController
  before_action :set_status_code, only: [:show, :update, :destroy]

  # GET /status_codes
  # GET /status_codes.json
  def index
    @status_codes = StatusCode.all

    render json: @status_codes
  end

  # GET /status_codes/1
  # GET /status_codes/1.json
  def show
    render json: @status_code
  end

  # POST /status_codes
  # POST /status_codes.json
  def create
    @status_code = StatusCode.new(status_code_params)

    if @status_code.save
      render json: @status_code, status: :created, location: @status_code
    else
      render json: @status_code.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /status_codes/1
  # PATCH/PUT /status_codes/1.json
  def update
    @status_code = StatusCode.find(params[:id])

    if @status_code.update(status_code_params)
      head :no_content
    else
      render json: @status_code.errors, status: :unprocessable_entity
    end
  end

  # DELETE /status_codes/1
  # DELETE /status_codes/1.json
  def destroy
    @status_code.destroy

    head :no_content
  end

  private

    def set_status_code
      @status_code = StatusCode.find(params[:id])
    end

    def status_code_params
      params.require(:status_code).permit(:code, :integer, :description)
    end
end
