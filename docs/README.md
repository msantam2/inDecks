# inDecks

[Heroku Link][heroku]
[heroku]: http://www.herokuapp.com

### Minimum Viable Product

inDecks is a single-page web application inspired by Brainscape, a fun and efficient way to study different subjects via digital flashcards. inDecks will be built using Ruby on Rails and React/Redux. By September 9, this app will provide a pleasant user experience, with bug-free navigation, sufficient seed data, and delightful styling. The minimum core functionality of inDecks will be as follows:

- [ ] Hosted on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Search decks of flashcards
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

[wireframes]: docs/wireframes
[components]: docs/component_heirarchy.md
[redux_structure]: docs/redux_structure.md
[sample_state]: docs/sample_state.md
[api_endpoints]: docs/api_endpoints.md
[schema]: docs/schema.md

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

### Phase 2: Notes Model, API, and components (2 days)

**Objective:** Notes can be created, read, edited and destroyed through
the API.

- [ ] `Note` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (`NotesController`)
- [ ] JBuilder views for notes
- Note components and respective Redux loops
  - [ ] `NotesIndex`
  - [ ] `NoteIndexItem`
  - [ ] `NoteForm`
- [ ] Autosave notes feature
- [ ] Style notes components
- [ ] Seed notes

### Phase 3: Notebooks (2 day)

**Objective:** Notes belong to Notebooks that can be created, read, edited and destroyed through the API.

- [ ] `Notebook` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (`NotebooksController`)
- [ ] JBuilder views for notebooks
- [ ] Adding notes requires a notebook
- [ ] Moving notes between notebooks
- [ ] Viewing notes by notebook
- [ ] Style notebook components
- [ ] Seed notebooks

### Phase 4: Tags (1 days)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

- [ ] `Tag` model and `Taggings` join table
- [ ] Fetching tags for notes
- [ ] Adding tags to notes
- [ ] Searching notes by tag
- [ ] Style search & tag components
- [ ] Seed tags with seed data

### Phase 5: Allow Complex Styling in Notes (1 days, W2 Th 6pm)

**objective:** Allow rich text editing of notes.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Rails helpers to sanitize HTML before rendering.
- [ ] Style Quill components.
- [ ] Add Quill styling to seeded notes

### Phase 6: - Pagination / infinite scroll for Notes Index (1 day, W2 F 6pm)

**objective:** Add infinite scroll to Notes Index

- [ ] Paginate Notes Index API to send 20 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Style scroll components and transitions
- [ ] Ensure seed data demonstrates infinite scroll

### Bonus Features (TBD)
- [ ] Search notes by content
- [ ] Set reminders on notes
- [ ] Changelogs for Notes
- [ ] Multiple sessions
