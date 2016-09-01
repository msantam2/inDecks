class Api::CardsController < ApplicationController
  def index
  end

  def show
  end

  def create
  end

  def new
  end

  def edit
  end

  def update
  end

  def destory
  end

  private

  def card_params
    params.require(:card).permit(:question, :answer)
  end
end
