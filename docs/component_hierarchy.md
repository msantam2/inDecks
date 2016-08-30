## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Header
 - SubjectIndex
 - SubjectDetail
 - DecksIndex

**SubjectContainer**
 - SubjectIndex

**SubjectIndex**
 - SubjectIndexItem

**DeckContainer**
 - DeckIndex

**DeckIndex**
 - DeckIndexItem

**CardContainer**
 - SubjectDetail
 - DeckIndexItem
 - CardIndex

**CardIndex**
 - CardIndexItem

**NewCard**
 - NewCard

**NewDeck**
 - NewDeck

**DeleteDeck**
 - DeleteDeck

**NewSubject**
 - NewSubject

**DeleteSubject**
 - DeleteSubject

**SearchContainer**
 - SearchBar
 - SearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "AuthFormContainer" |
| "/login"  | "AuthFormContainer" |
| "/home"   | "HomeContainer"     |
| "/home/deck/:deckId/cards/:cardId" | "CardContainer" |
| "/home/deck/:deckId" | "DeckContainer" |
| "/home/subject/:subjectId/decks/:deckId" | "SubjectContainer" |
| "/new-card"    | "NewCard"    |
| "/new-deck"    | "NewDeck"    |
| "/new-subject" | "NewSubject" |
| "/subject-search" | "SearchContainer" |
