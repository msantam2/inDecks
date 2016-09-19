# inDecks

[inDecks Live][inDecks]
[inDecks]: http://www.studyindecks.com/

inDecks is a single-page, full-stack web application inspired by BrainScape, a fun and efficient way to study digital flashcards.  It is built with a Ruby on Rails back-end, a PostgreSQL database, and React.js (in tandem with a Redux architecture) on the front-end.

### Single-Page App

inDecks is a simple and intuitive single-page application. All content is delivered on the front-end, with the root page listening to user input and rendering a React component dynamically. The use of the React Router gives the user a feeling of navigation and control as the the url changes to render different views. The Redux architecture in conjuction with React leads inDecks to operate via a smooth cycle, allowing Rails to perform as an API, serving JSON back to the front-end.

## Features & Implementation

### Guest Login

<img src="https://github.com/msantam2/inDecks/blob/master/app/assets/images/guest_login.gif" width="400" height="400" />

The user can choose to login as a Guest on the application. The 'smart' React component, `NavBarContainer`, passes down the `login` function to the `NavBar` component via `mapDispatchToProps`, allowing it to trigger a Redux cycle which communicates with the back-end to log the user in as the pre-defined guest.

`NavBarContainer`:
```js
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SessionActions.logout()),
  login: user => dispatch(SessionActions.login(user))
});
```

`NavBar`:
```js
guestLogin(event) {
  event.preventDefault();
  let user = {email: 'KenJennings@gmail.com', password: 'password'};

  this.props.login({user});
}
```
__________

### Studying Flashcards

<img src="https://github.com/msantam2/inDecks/blob/master/app/assets/images/study_flashcard.gif" width="400" height="400" />

The user can study the cards specific to each deck they have created. To simulate the feeling of flipping over a flashcard that everyone is familiar with, a React component, `CardIndexItem`, is rendered that is populated with either the question or the answer according to which side of the flashcard the user is currently on. Further sub-components, `CardQuestionPrompt` & `CardAnswerPrompt`, are also rendered based off of this condition.

```js
else if (this.state.side === '') {
  cardContent = currentCard.question;
  prompt = <CardQuestionPrompt flipCard={this.flipCard} />;
} else if (this.state.side === 'flipped') {
  cardContent = currentCard.answer;
  prompt = <CardAnswerPrompt updateMastery={this.updateMastery.bind(null, currentCard)} />;
}
```

__________

### Deck CRUD

<img src="https://github.com/msantam2/inDecks/blob/master/app/assets/images/deck_crud.gif" width="400" height="400" />

The user can edit decks by creating and deleting cards (in addition to creating and deleting decks themselves). The creation of a card persists it to the database with a `deck_id` foreign key set to the `id` of the current deck being edited.

The deletion of cards is quite interesting. The app must distinguish between 2 criteria when deleting a card:

1. if the card is already stored in the database, it must be deleted through an AJAX call to Rails.

2. if the user creates a card, or several rows of cards, prior to clicking the Save button, the card must be removed from the internal *state* of the  `DeckEditForm` rather than making an AJAX call to Rails.

```js
deleteCard(id) {
  let idString = id.toString();

  if (Object.keys(this.props.cards).includes(idString)) {
    this.props.deleteCard(id);
  } else {
    delete this.state.cards[id];
    let newCards = this.state.cards;
    this.setState({
      cards: newCards
    });
  }
}
```
__________

## Future Directions for the Project

### Subjects

Another way to enhance the study experience for the user and allow them to further organize their thoughts and information will be to create a Subjects layer, with Decks nested within. For example, a 'Biology' subject may contain decks 'Anatomy', 'Zoology', and 'Microbiology'.

### Search

To create a richer community of students on inDecks, Search would be a major factor. Students will 'own' their own, private decks while being able to search amongst public decks created by other users and add them to their own library.
