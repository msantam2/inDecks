# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Decks

- `GET /api/decks`
  - Decks index/search
- `POST /api/decks`
- `GET /api/decks/:id`
- `PATCH /api/decks/:id`
- `DELETE /api/decks/:id`

#### Decks > Cards
- `GET /api/decks/:id/cards/`
  - index of all cards for a deck
- `GET /api/decks/:id/cards/:id`
  - Show a card from a deck
- `POST /api/decks/:id/cards`
  - Create new card within a deck
- `PATCH /api/decks/:id/cards/:id`
  - Update a card within a deck
- `DELETE /api/decks/:id/cards/:id`
  - Delete a card from within a deck

### Subjects

- `GET /api/subjects`
 - Subjects index/search
- `POST /api/subjects`
- `GET /api/subjects/:id`
- `DELETE /api/subjects/:id`

#### Subjects > Decks
- `GET /api/subjects/:id/decks`
  - index of all decks for a subject
