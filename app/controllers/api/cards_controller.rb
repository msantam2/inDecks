class Api::CardsController < ApplicationController
  def index
    @cards = Card.where(deck_id: params[:deckId])
  end

  def show
    @card = Card.find(params[:id])
  end

  def create
    @card = Card.create!(card_params)
    render 'api/cards/show'
  end

  def destroy
    @card = Card.find(params[:id])

    if @card.destroy
      render 'api/cards/show', status: 200
    else
      @errors = @card.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  def update
    @card = Card.find(params[:id])

    if @card.update_attributes(card_params)
      render 'api/cards/show', status: 200
    else
      render 'api/shared/error', status: 422
    end
  end

  private

  def card_params
    params.require(:card).permit(:question, :answer, :mastery, :deck_id)
  end
end
