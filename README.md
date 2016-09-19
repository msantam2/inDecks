# inDecks

[inDecks Live][inDecks]
[inDecks]: http://www.studyindecks.com/

inDecks is a single-page, full-stack web application inspired by BrainScape, a fun and efficient way to study digital flashcards.  It is built with a Ruby on Rails back-end, a PostgreSQL database, and React.js (with a Redux architecture) on the front-end.

### Single-Page App

inDecks is a simple and intuitive single-page application. All content is delivered on the front-end, with the root page listening to user input and rendering a React component dynamically. The use of the React Router gives the user a feeling of navigation and control as the the url changes to render different views. The Redux architecture in conjuction with React leads inDecks to operate via a smooth cycle, allowing Rails to perform as an API, serving JSON back to the front-end.

## Features & Implementation

<img src="https://github.com/msantam2/color-connect/blob/master/images/blank_grid.png" width="400" height="400" />

### Flashcard Studying




### Deck CRUD



## Future Directions for the Project

### Subjects

Another way to enhance the study experience for the user and allow them to further organize their thoughts and information will be to create a Subjects layer, with Decks nested within. For example, a 'Biology' subject may contain decks 'Anatomy', 'Zoology', and 'Microbiology'.

### Search

To create a richer community of students on inDecks, Search would be a major factor. Students will 'own' their own, private decks while being able to search amongst public decks created by other users and add them to their own library.
