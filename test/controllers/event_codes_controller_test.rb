require 'test_helper'

class EventCodesControllerTest < ActionController::TestCase
  setup do
    @event_code = event_codes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:event_codes)
  end

  test "should create event_code" do
    assert_difference('EventCode.count') do
      post :create, event_code: { code: @event_code.code, description: @event_code.description }
    end

    assert_response 201
  end

  test "should show event_code" do
    get :show, id: @event_code
    assert_response :success
  end

  test "should update event_code" do
    put :update, id: @event_code, event_code: { code: @event_code.code, description: @event_code.description }
    assert_response 204
  end

  test "should destroy event_code" do
    assert_difference('EventCode.count', -1) do
      delete :destroy, id: @event_code
    end

    assert_response 204
  end
end
