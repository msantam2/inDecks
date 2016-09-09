import React from 'react';
import CardQuestion from './card_question';
import CardQuestionPrompt from './card_question_prompt';
import CardAnswer from './card_answer';
import CardAnswerPrompt from './card_answer_prompt';
import { Link } from 'react-router';

class CardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {side: "", currentCardIndex: 0};
    this.flipCard = this.flipCard.bind(this);
    this.updateMastery = this.updateMastery.bind(this);
    this.sideToShow = this.sideToShow.bind(this);
    this.isMastered = this.isMastered.bind(this);
    this.currentCardId = this.currentCardId.bind(this);
  }

  flipCard() {
    this.setState({
      side: this.state.side === '' ? 'flipped' : ''
    });
  }

  updateMastery(currentCard, event) {
    let mastery = parseInt(event.target.textContent);
    currentCard['mastery'] = mastery;
    currentCard['deck_id'] = this.props.deckId;
    this.props.updateMastery(currentCard);

    let cardLength = Object.keys(this.props.cards).length;
    let nextCardIndex = (this.state.currentCardIndex % cardLength) + 1;
    this.setState({
      currentCardIndex: nextCardIndex,
      side: this.state.side === '' ? 'flipped' : ''
    });
  }

  componentDidMount() {
    this.setState({
      currentCardIndex: 1
    });
  }

  sideToShow(cardContent) {
    if (this.state.side === '') {
      return (
        <CardQuestion cardContent={cardContent} />
      );
    } else {
      return (
        <CardAnswer cardContent={cardContent} />
      );
    }
  }

  isMastered(card) {
    if (card) {
      return (card.mastery === 5 ? ' (Mastered)' : '');
    } else {
      // guard against empty deck
      return '';
    }
  }

  currentCardId(currentCardIndex) {
    return (
      parseInt(Object.keys(this.props.cards)[currentCardIndex - 1])
    );
  }

  render() {
    let cardNumber;
    let currentCard;
    let cardContent;
    let prompt;
    let cardLength = Object.keys(this.props.cards).length;

    if (this.state.currentCardIndex >= 1) {
      // ternary used to guard against empty deck
      cardNumber = cardLength > 0 ? `${this.state.currentCardIndex} of ${cardLength}` : '';
      // if this.props.cards = {11: {card1}, 13: {card2}} and
      // currentCardIndex = 2, we need to convert 2 to Id 13
      currentCard = this.props.cards[this.currentCardId(this.state.currentCardIndex)];
      if (cardLength === 0) {
        cardContent = <Link className='create-new-cards-here-link' to={`/decks/${this.props.deckId}`}>Create New Cards Here!</Link>;
      }
      else if (this.state.side === '') {
        cardContent = currentCard.question;
        prompt = <CardQuestionPrompt flipCard={this.flipCard} />;
      } else if (this.state.side === 'flipped') {
        cardContent = currentCard.answer;
        prompt = <CardAnswerPrompt updateMastery={this.updateMastery.bind(null, currentCard)} />;
      }
    }

    return (
      <div className='flashcard-section'>
        <p className='card-number'>{`${cardNumber} ${this.isMastered(currentCard)}`}</p>
        <article onClick={this.flipCard} className={`flashcard ${this.state.side}`}>
          {
            this.sideToShow(cardContent)
          }
        </article>
        {prompt}
      </div>
    );
  }
}

export default CardIndexItem;
