# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Card Cycles

### Cards API Request Actions

* `fetchAllCards`
  0. invoked from `CardIndex` `didMount`/`willReceiveProps`
  0. `GET /api/cards` is called.
  0. `receiveAllCards` is set as the success callback.
* `createCard`
  0. invoked from new card button `onClick`
  0. `POST /api/cards` is called.
  0. `receiveSingleCard` is set as the success callback.
* `fetchSingleCard`
  0. invoked from `CardDetail` `didMount`/`willReceiveProps`
  0. `GET /api/cards/:id` is called.
  0. `receiveSingleCard` is set as the success callback.
* `updateSubject`
  0. invoked from `CardForm` `onSubmit`
  0. `POST /api/cards` is called.
  0. `receiveSingleCard` is set as the success callback.
* `destroyCard`
  0. invoked from delete card button `onClick`
  0. `DELETE /api/cards/:id` is called.
  0. `removeCard` is set as the success callback.

### Cards API Response Actions

* `receiveAllCards`
  0. invoked from an API callback
  0. the `CardsReducer` updates `cards` in the application's state.
* `receiveSingleCard`
  0. invoked from an API callback
  0. the `CardReducer` updates `cards[id]` in the application's state.
* `removeCard`
  0. invoked from an API callback
  0. the `CardReducer` removes `cards[id]` from the application's state.

## Deck Cycles

### Decks API Request Actions

* `fetchAllDecks`
  0. invoked from `DeckIndex` `didMount`/`willReceiveProps`
  0. `GET /api/decks` is called.
  0. `receiveAllDecks` is set as the success callback.
* `createDeck`
  0. invoked from new deck button `onClick`
  0. `POST /api/decks` is called.
  0. `receiveSingleDeck` is set as the success callback.
* `fetchSingleDeck`
  0. invoked from `DeckDetail` `didMount`/`willReceiveProps`
  0. `GET /api/decks/:id` is called.
  0. `receiveSingleDeck` is set as the success callback.
* `updateDeck`
  0. invoked from `DeckForm` `onSubmit`
  0. `POST /api/decks` is called.
  0. `receiveSingleDeck` is set as the success callback.
* `destroyDeck`
  0. invoked from delete deck button `onClick`
  0. `DELETE /api/decks/:id` is called.
  0. `removeDeck` is set as the success callback.

### Decks API Response Actions

* `receiveAllDecks`
  0. invoked from an API callback
  0. the `DecksReducer` updates `decks` in the application's state.
* `receiveSingleDeck`
  0. invoked from an API callback
  0. the `DeckReducer` updates `decks[id]` in the application's state.
* `removeDeck`
  0. invoked from an API callback
  0. the `DeckReducer` removes `decks[id]` from the application's state.

## Subject Cycles

### Subjects API Request Actions

* `fetchAllSubjects`
  0. invoked from `SubjectsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/subjects` is called.
  0. `receiveAllSubjects` is set as the success callback.
* `createSubject`
  0. invoked from new subject button `onClick`
  0. `POST /api/subjects` is called.
  0. `receiveSingleSubject` is set as the callback.
* `fetchSingleSubject`
  0. invoked from `SubjectDetail` `didMount`/`willReceiveProps`
  0. `GET /api/subjects/:id` is called.
  0. `receiveSingleSubject` is set as the success callback.
* `updateSubject`
  0. invoked from `SubjectForm` `onSubmit`
  0. `POST /api/subjects` is called.
  0. `receiveSingleSubject` is set as the success callback.
* `destroySubject`
  0. invoked from delete subject button `onClick`
  0. `DELETE /api/subjects/:id` is called.
  0. `removeSubject` is set as the success callback.

### Subjects API Response Actions

* `receiveAllSubjects`
  0. invoked from an API callback.
  0. The `Subject` reducer updates `subjects` in the application's state.
* `receiveSingleSubject`
  0. invoked from an API callback.
  0. The `Subject` reducer updates `subjects[id]` in the application's state.
* `removeSubject`
  0. invoked from an API callback.
  0. The `Subject` reducer removes `subjects[id]` from the application's state.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `SubjectSearchBar` `onChange` when there is text
  0. `GET /api/subjects` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.
* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. The `SearchSuggestion` reducer updates `suggestions` in the application's state.
* `removeSearchSuggestions`
  0. invoked from `SubjectSearchBar` `onChange` when empty
  0. The `SearchSuggestion` reducer resets `suggestions` in the application's state.
