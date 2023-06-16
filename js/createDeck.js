// deck.js
import { flashcard } from '/js/flashcard.js';

export const createDeck = (flashcards) => {
  let deck = [...flashcards]; // Make a copy of the flashcards array
  let currentIndex = 0;

  const shuffleDeck = () => {
    // Fisher-Yates shuffle algorithm
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  };

  const getNextCard = () => {
    if (currentIndex >= deck.length) {
      shuffleDeck();
      currentIndex = 0;
    }

    const card = deck[currentIndex];
    currentIndex++;
    return card;
  };

  return {
    getNextCard
  };
};
