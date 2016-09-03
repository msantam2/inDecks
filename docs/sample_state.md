```json
{
  session: {
    currentUser: {id: 3,
                  email: 'tedsmith@gmail.com'},
    errors: []
  },

  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createSubject: {errors: ["title can't be blank"]},
    createDeck: {errors: ["title can't be blank"]},
    createCard: {errors: ["body can't be blank"]}
  },

  cards: {
    {id: 1,
    question: "What is a tendon?",
    answer: "Fibrous collagen that links muscle to bone",
    deck_id: 1
    },
    {id: 2,
    question: "What is the capital of Arkansas?",
    answer: "Little Rock",
    deck_id: 1
    }
  },

  decks: {
    1: {
      title: "anatomy",
      description: "study the anatomy of the human body!",
      subject_id: 1
    }
  },

  subjects: {
    1: {
      title: "Biology 101",
      author_id: 1
    }
  },

  search_params: {
    subjects: [],
    num_cards: undefined
  }
}
```
