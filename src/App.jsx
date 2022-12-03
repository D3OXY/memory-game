import { useState, useEffect } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import NewGame from './components/NewGame';
import useAppBadge from './hooks/useAppBadge';
import shuffle from './utilities/shuffle';

function App() {
  const [wins, setWins] = useState(0); 
  const [cards, setCards] = useState(shuffle); 
  const [pickOne, setPickOne] = useState(null);
  const [pickTwo, setPickTwo] = useState(null); 
  const [disabled, setDisabled] = useState(false); 
  const [setBadge, clearBadge] = useAppBadge(); 

  const handleClick = (card) => {
    if (!disabled) {
      pickOne ? setPickTwo(card) : setPickOne(card);
    }
  };

  const handleTurn = () => {
    setPickOne(null);
    setPickTwo(null);
    setDisabled(false);
  };

  const handleNewGame = () => {
    setWins(0);
    clearBadge();
    handleTurn();
    setCards(shuffle);
  };

  // Used for selection and match handling

  useEffect(() => {
    let pickTimer;

    if (pickOne && pickTwo) {
      if (pickOne.image === pickTwo.image) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === pickOne.image) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        handleTurn();
      } else {
        setDisabled(true);
        pickTimer = setTimeout(() => {
          handleTurn();
        }, 1000);
      }
    }

    return () => {
      clearTimeout(pickTimer);
    };
  }, [cards, pickOne, pickTwo, setBadge, wins]);


  // If player has found all matches, handle accordingly

  useEffect(() => {
    const checkWin = cards.filter((card) => !card.matched);

    if (cards.length && checkWin.length < 1) {
      console.log('You win!');
      setWins(wins + 1);
      setBadge();
      handleTurn();
      setCards(shuffle);
    }
  }, [cards, setBadge, wins]);

  return (
    <>
      <Header handleNewGame={handleNewGame} wins={wins} />
      <div className="grid">
        {cards.map((card) => {
          const { image, matched } = card;

          return (
            <Card
              key={image.id}
              card={card}
              image={image}
              onClick={() => handleClick(card)}
              selected={card === pickOne || card === pickTwo || matched}
            />
          );
        })}
      </div>
      <NewGame handleNewGame={handleNewGame} wins={wins}/>
    </>
  );
}

export default App;
