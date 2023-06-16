// deck.js
export const createDeck = (flashcards) => {
  let deck = [...flashcards]; // Make a copy of the flashcards array
  let currentIndex = 0;
  let cardsSeen = 0;
  let totalCards = deck.length;

  const shuffleDeck = () => {
    // Fisher-Yates shuffle algorithm
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  };

  const getNextCard = () => {
    console.log('currentIndex', currentIndex);
    
    if (currentIndex >= totalCards) {
      shuffleDeck();
      currentIndex = 0;
      cardsSeen = 0;
    }

    const card = deck[currentIndex];
    currentIndex += 1;
    cardsSeen += 1;
    return card;
  };

  const getCardsSeen = () => cardsSeen
  const getCardsLeft = () => totalCards

  return {
    getNextCard,
    getCardsSeen,
    getCardsLeft
  };
};
