import React from 'react';

class DeckForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className='create-deck-form'>
        <p className='deck-title-prompt'>Title:</p><input className='deck-title' />

        <p className='deck-title-prompt'>Description (Optional):</p><input className='deck-description'/>

        <input type='submit' onClickvalue='Create Deck'/>
      </form>
    );
  }
}
// has this.props.createDeck
// also has this.props.currentUser
export default DeckForm;
