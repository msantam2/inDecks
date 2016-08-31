# inDecks

[inDecks Website!][inDecks]
[inDecks]: http://www.studyindecks.com/

### Minimum Viable Product

inDecks is a single-page web application inspired by Brainscape, a fun and efficient way to study different subjects via digital flashcards. inDecks will be built using Ruby on Rails and React/Redux. By September 9, this app will provide a pleasant user experience, with bug-free navigation, sufficient seed data, and delightful styling. The minimum core functionality of inDecks will be as follows:

- [ ] Hosted on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Create/Delete cards
- [ ] Create/Delete decks
- [ ] Create/Delete subjects
- [ ] Study decks of flashcards within various subjects
- [ ] Search for subjects
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
- [ ] User signup/login components
- [ ] Blank landing component after signup/login
- [ ] Style signup/login components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Cards (1 days)

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

### Phase 3: Decks Model, API, and components (2 days)

**Objective:** Decks (that have many Cards) can be created, read, edited and destroyed through the API.

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


### Phase 4: Subjects (2 day)

**Objective:** Subjects (that have many decks) can be created, read, edited and destroyed through the API.

- [ ] `Subject` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for subjects (`SubjectsController`)
- [ ] JBuilder views for subjects
- [ ] Adding decks requires a subject
- [ ] Moving decks between subjects
- [ ] Viewing decks by subject
- [ ] Style subject components
- [ ] Seed subject

### Phase 5: Search (1 days, W2 Th 6pm)

**Objective:** Provide easy and simple interface for searching various subjects
- [ ] Search API that filters search server-side (`SearchesController`)
- [ ] Search Components and their respective Redux loops
 - [ ] `SearchContainer`
 - [ ] `SearchBar`
 - [ ] `SearchResults`
- [ ] Add subjects to user's library

### Bonus Features (TBD)
- [ ] Tags
- [ ] Badges to track progress
- [ ] Animation of cards
- [ ] Accessibility button for those with poor vision (button to
  enlarge all content on the screen)
