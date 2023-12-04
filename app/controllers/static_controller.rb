class StaticController < ApplicationController
  def index
    @messages = Message.all
  end
end
