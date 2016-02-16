require 'test_helper'

class EmployeesControllerTest < ActionController::TestCase
  setup do
    @employee = employees(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:employees)
  end

  test "should create employee" do
    assert_difference('Employee.count') do
      post :create, employee: { course_id: @employee.course_id, effective: @employee.effective, name: @employee.name, siape: @employee.siape, status_code_id: @employee.status_code_id }
    end

    assert_response 201
  end

  test "should show employee" do
    get :show, id: @employee
    assert_response :success
  end

  test "should update employee" do
    put :update, id: @employee, employee: { course_id: @employee.course_id, effective: @employee.effective, name: @employee.name, siape: @employee.siape, status_code_id: @employee.status_code_id }
    assert_response 204
  end

  test "should destroy employee" do
    assert_difference('Employee.count', -1) do
      delete :destroy, id: @employee
    end

    assert_response 204
  end
end
