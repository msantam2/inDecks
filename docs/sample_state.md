```json
{
  currentUser: {
    id: 1,
    username: "brainiac-3000"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createSubject: {errors: ["title can't be blank"]}
    createDeck: {errors: ["title can't be blank"]}
    createCard: {errors: ["body can't be blank"]}
  },
  subjects: {
    1: {
      title: "Biology 101",
      author_id: 1,
      }
    }
  },
  decks: {
    1: {
      title: "anatomy",
      subject_id: 1,
      description: "study the anatomy of the human body!"
    }
  },
  cards: {
    1: {
      question: "What is a tendon?",
      answer: "Fibrous collagen that links muscle to bone",
      deck_id: 1,
    }
  }
}
```
