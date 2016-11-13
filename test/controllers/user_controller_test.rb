require 'test_helper'

class UserControllerTest < ActionDispatch::IntegrationTest
  test "should get patch" do
    get user_patch_url
    assert_response :success
  end

end
