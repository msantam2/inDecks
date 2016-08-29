# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Subjects

- `GET /api/subjects`
- `POST /api/subjects`
- `GET /api/subjects/:id`
- `DELETE /api/subjects/:id`
- `GET /api/subjects/:id/decks`
- index of all decks for a subject

### Decks

- `GET /api/decks`
  - Decks index/search
- `POST /api/decks`
- `GET /api/decks/:id`
- `PATCH /api/decks/:id`
- `DELETE /api/decks/:id`

### Cards

- `GET /api/cards`
  - Cards index/search
- `POST /api/cards`
- `GET /api/cards/:id`
- `PATCH /api/cards/:id`
- `DELETE /api/cards/:id`
