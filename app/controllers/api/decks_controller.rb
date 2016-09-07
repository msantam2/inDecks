class Api::DecksController < ApplicationController
  def index
    @decks = Deck.all
  end

  def show
    @deck = Deck.find(params[:id])
  end

  def create
    @deck = Deck.create!(deck_params)
    render 'api/decks/show', status: 200
  end

  def destroy
    @deck = Deck.find(params[:id])

    if @deck.destroy
      render 'api/decks/show', status: 200
    else
      @errors = @deck.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  private

  def deck_params
    params.require(:deck).permit(:title, :description, :author_id)
  end
end
