// deck.js
export const createDeck = (flashcards) => {
  let deck = [...flashcards]; // Make a copy of the flashcards array
  let totalCards = deck.length;

  

  const shuffleDeck = () => {
    // Fisher-Yates shuffle algorithm
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  };

  const getNextCard = (isCorrect = true) => {
    if (isCorrect) {
      if (deck.length === 1) {
        deck = [...flashcards];
        shuffleDeck();
      }
      if (deck.length > 1) {
        deck.splice(0, 1);
      }
    }
    
    if (!isCorrect) {
      deck.push(deck[0]);
      deck.splice(0, 1);
    }

    const card = deck[0];

    return card;
  };

  return {
    getNextCard
  };
};
