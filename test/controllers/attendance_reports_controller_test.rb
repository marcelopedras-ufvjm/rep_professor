require 'test_helper'

class AttendanceReportsControllerTest < ActionController::TestCase
  setup do
    @attendance_report = attendance_reports(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:attendance_reports)
  end

  test "should create attendance_report" do
    assert_difference('AttendanceReport.count') do
      post :create, attendance_report: { course_id: @attendance_report.course_id, generated_in: @attendance_report.generated_in, month: @attendance_report.month, year: @attendance_report.year }
    end

    assert_response 201
  end

  test "should show attendance_report" do
    get :show, id: @attendance_report
    assert_response :success
  end

  test "should update attendance_report" do
    put :update, id: @attendance_report, attendance_report: { course_id: @attendance_report.course_id, generated_in: @attendance_report.generated_in, month: @attendance_report.month, year: @attendance_report.year }
    assert_response 204
  end

  test "should destroy attendance_report" do
    assert_difference('AttendanceReport.count', -1) do
      delete :destroy, id: @attendance_report
    end

    assert_response 204
  end
end
