class GreetingsController < ApplicationController
  def random
    @random_greeting = Message.order('RANDOM()').first&.message
    render json: { greeting: @random_greeting }
  end
end
