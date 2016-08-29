## Component Heirarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - SubjectIndex
 - SubjectIndexItem

**SubjectContainer**
 - SubjectHeader
 - DeckIndex

**SubjectIndex**
 - SubjectIndexItem

**SubjectIndexItem**
 - SubjectDetail

**DeckContainer**
 - DeckHeader
 - DeckIndex

**DeckIndex**
 - DeckIndexItem

**DeckIndexItem**
 - DeckDetail
 - CardQuestion
 - CardAnswer

**NewSubject**
 - NewSubject

**NewDeck**
 - NewDeck

**NewCard**
 - NewCard

**SubjectSearch**
 - SubjectSearch
 - SubjectIndex

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/log-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/subject/:subjectId/deck/:deckId" | "SubjectContainer" |
| "/home/deck/:deckId" | "DeckContainer" |
| "/subject-search" | "SubjectSearch" |
| "/new-subject" | "NewSubject" |
| "/new-deck" | "NewDeck" |
| "/new-card" | "NewCard" |
