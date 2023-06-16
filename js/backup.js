let deck = [...flashcards]; // Make a copy of the flashcards array
let cardsSeen = 0;
let totalCards = deck.length;

const getNextCard = (isCorrect = true) => {
  // Is correct, then remove the card from the deck, if that makes the array have no items, reset it
  if (isCorrect) {
    if (deck.length === 1) {
      deck = [...flashcards];
      shuffleDeck();
      cardsSeen = 0;
    }
    deck.splice(currentIndex, 1);
    cardsSeen += 1;
  }

  // if is Not correct, move the current card to the end of the array, and move to the next card
  if (!isCorrect) {
    deck.push(deck[currentIndex]);
    deck.splice(currentIndex, 1);
  }

  const card = deck[currentIndex]

  if (!isCorrect) {
    if (deck.length === 1) {
      currentIndex = 0;
    }
  }


  return card;
}