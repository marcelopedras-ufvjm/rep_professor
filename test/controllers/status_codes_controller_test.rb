require 'test_helper'

class StatusCodesControllerTest < ActionController::TestCase
  setup do
    @status_code = status_codes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:status_codes)
  end

  test "should create status_code" do
    assert_difference('StatusCode.count') do
      post :create, status_code: { code: @status_code.code, description: @status_code.description, integer: @status_code.integer }
    end

    assert_response 201
  end

  test "should show status_code" do
    get :show, id: @status_code
    assert_response :success
  end

  test "should update status_code" do
    put :update, id: @status_code, status_code: { code: @status_code.code, description: @status_code.description, integer: @status_code.integer }
    assert_response 204
  end

  test "should destroy status_code" do
    assert_difference('StatusCode.count', -1) do
      delete :destroy, id: @status_code
    end

    assert_response 204
  end
end
