import React from 'react';
import CardQuestion from './card_question';
import CardQuestionPrompt from './card_question_prompt';
import CardAnswer from './card_answer';
import CardAnswerPrompt from './card_answer_prompt';

class CardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {side: "", currentCardIndex: 0};
    this.flipCard = this.flipCard.bind(this);
    this.updateMastery = this.updateMastery.bind(this);
  }

  flipCard() {
    this.setState({
      side: this.state.side === '' ? 'flipped' : ''
    });
  }

  updateMastery(event) {
    let mastery = parseInt(event.target.textContent);
    this.props.updateMastery(this.state.currentCardIndex, mastery);
    
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

  render() {
    let cardNumber;
    let currentCard;
    let cardContent;
    let prompt;
    let cardLength = Object.keys(this.props.cards).length;

    if (this.state.currentCardIndex >= 1) {
      cardNumber = `${this.state.currentCardIndex} of ${cardLength}`;
      currentCard = this.props.cards[this.state.currentCardIndex];
      if (this.state.side === '') {
        cardContent = currentCard.question;
        prompt = <CardQuestionPrompt flipCard={this.flipCard} />;
      } else if (this.state.side === 'flipped') {
        cardContent = currentCard.answer;
        prompt = <CardAnswerPrompt updateMastery={this.updateMastery} />;
      }
    }
    return (
      <div className='flashcard-section'>
        <p className='card-number'>{cardNumber}</p>
        <article onClick={this.flipCard} className={`flashcard ${this.state.side}`}>
          <CardQuestion cardContent={cardContent} />

          <CardAnswer cardContent={cardContent} />
        </article>
        {prompt}
      </div>
    );
  }
}

export default CardIndexItem;
