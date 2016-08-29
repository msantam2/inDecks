# inDecks

[Heroku Link][heroku]
[heroku]: http://www.herokuapp.com

### Minimum Viable Product

inDecks is a single-page web application inspired by Brainscape, a fun and efficient way to study different subjects via digital flashcards. inDecks will be built using Ruby on Rails and React/Redux. By September 9, this app will provide a pleasant user experience, with bug-free navigation, sufficient seed data, and delightful styling. The minimum core functionality of inDecks will be as follows:

- [ ] Hosted on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Search decks of flashcards by Subject
- [ ] Study decks of flashcards
- [ ] Create different Subject categories
- [ ] Create/Delete decks of flashcards within a Subject
- [ ] Production README [sample](docs/production_readme.md)

### Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [Redux Structure][redux_structure]
* [Sample State][sample_state]
* [API endpoints][api_endpoints]
* [DB schema][schema]

[wireframes]: ./wireframes/
[components]: ./component_hierarchy.md
[redux_structure]: ./redux_structure.md
[sample_state]: ./sample_state.md
[api_endpoints]: ./api_endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Subjects (2 day)

**Objective:** Decks belong to Subjects that can be created, read, edited and destroyed through the API.

- [ ] `Subject` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for subjects (`SubjectsController`)
- [ ] JBuilder views for subjects
- [ ] Adding decks requires a subject
- [ ] Moving decks between subjects
- [ ] Viewing decks by subject
- [ ] Style subject components
- [ ] Seed subject

### Phase 3: Decks Model, API, and components (2 days)

**Objective:** Decks can be created, read, edited and destroyed through
the API.

- [ ] `Deck` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (`DecksController`)
- [ ] JBuilder views for decks
- Deck components and respective Redux loops
  - [ ] `DeckIndex`
  - [ ] `DeckIndexItem`
  - [ ] `DeckForm`
- [ ] Style decks components
- [ ] Seed decks (include a coding deck!)

### Phase 4: Cards (1 days)

**Objective:** Cards can be created, read, edited and destroyed through
the API.

- [ ] `Card` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (`CardsController`)
- [ ] JBuilder views for cards
- Card components and respective Redux loops
  - [ ] `CardQuestion`
  - [ ] `CardAnswer`
  - [ ] `CardForm`
- [ ] Style card components
- [ ] Seed cards

### Phase 5: Allow Styling in Study Mode (1 days, W2 Th 6pm)

**objective:** Allow easy and beautiful interaction with index cards while studying a deck.

- [ ] Render card question and card answer separately, in same space
  - [ ] Add 'Reveal Answer' button to 'flip over the card'

### Bonus Features (TBD)
- [ ] Badges to track progress
- [ ] Animation of cards
- [ ] Accessibility button for those with poor vision (button to
  enlarge all content on the screen)
