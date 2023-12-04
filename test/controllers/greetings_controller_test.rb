require "test_helper"

class GreetingsControllerTest < ActionDispatch::IntegrationTest
  test "should get random" do
    get greetings_random_url
    assert_response :success
  end
end
