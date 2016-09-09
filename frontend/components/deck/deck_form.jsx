import React from 'react';

class DeckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "",
                  description: ""};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(key) {
    return (
      (event) => {
        event.preventDefault();
        this.setState({
          [key]: event.currentTarget.value
        });
      }
    );
  }

  handleSubmit() {
    this.state['author_id'] = this.props.currentUser.id;
    this.props.createDeck(this.state);
    this.props.onModalClose();
  }

  render() {
    return (
      <form className='create-deck-form' onSubmit={this.handleSubmit}>
        <p className='deck-title-prompt'>Title:</p><input className='deck-title' value={this.state.title} onChange={this.update('title')}/>

        <p className='deck-description-prompt'>Description&nbsp;(Optional):</p><input className='deck-description' value={this.state.description} onChange={this.update('description')}/>

        <button className='submit-create-deck'>Create Deck</button>
      </form>
    );
  }
}
// has this.props.createDeck
// also has this.props.currentUser
export default DeckForm;
