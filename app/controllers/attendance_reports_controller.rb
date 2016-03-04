class AttendanceReportsController < ApplicationController
  before_action :set_attendance_report, only: [:show, :update, :destroy]

  # GET /attendance_reports
  # GET /attendance_reports.json
  def index
    @attendance_reports = AttendanceReport.all

    render json: @attendance_reports
  end

  # GET /attendance_reports/1
  # GET /attendance_reports/1.json
  def show
    render json: @attendance_report
  end

  # POST /attendance_reports
  # POST /attendance_reports.json
  def create
    @attendance_report = AttendanceReport.new(attendance_report_params)

    if @attendance_report.save
      render json: @attendance_report, status: :created, location: @attendance_report
    else
      render json: @attendance_report.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /attendance_reports/1
  # PATCH/PUT /attendance_reports/1.json
  def update
    @attendance_report = AttendanceReport.find(params[:id])

    if @attendance_report.update(attendance_report_params)
      head :no_content
    else
      render json: @attendance_report.errors, status: :unprocessable_entity
    end
  end

  # DELETE /attendance_reports/1
  # DELETE /attendance_reports/1.json
  def destroy
    @attendance_report.destroy

    head :no_content
  end

  private

    def set_attendance_report
      @attendance_report = AttendanceReport.find(params[:id])
    end

    def attendance_report_params
      params.permit(:year, :month, :generated_in, :course_id)
    end
end
