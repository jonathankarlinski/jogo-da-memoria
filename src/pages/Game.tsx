import { useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import { ICard, data } from '../utils/data';
import context from '../context/context';
import Alert from '../components/Alert';

function Game() {
  const { setFlag, timer, setTimer } = useContext(context);
  const [cards, setCards] = useState<ICard[]>([]);
  const [win, setWin] = useState(false);
  const [choiceOne, setChoiceOne] = useState<ICard | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<ICard | null>(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...data]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card }));

    setCards(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setWin(false);
  };

  const handleChoice = (card: ICard) => {
    if (choiceOne) {
      setChoiceTwo(card);
    } else {
      setChoiceOne(card);
    }
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.url === choiceTwo.url) {
        setCards((prevCards) => prevCards.map((card) => {
          if (card.url === choiceOne.url) {
            return { ...card, grayScale: true };
          }
          return card;
        }));
        resetTurn();
      } else {
        setTimeout(() => {
          setCards((prevCards) => prevCards.map((card) => {
            if (card === choiceOne || card === choiceTwo) {
              return { ...card, showCard: false };
            }
            return card;
          }));
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    if (cards.length > 0) {
      const allGrayscaleTrue = cards.every((card) => card.grayScale);
      if (allGrayscaleTrue) {
        setWin(true);
        setFlag(true);
      }
    }
  }, [cards, setFlag]);

  useEffect(() => {
    shuffleCards();
    setFlag(false);
    setTimer(0);
  }, [setFlag, setTimer]);

  return (
    <div className="w-screen h-screen max-h-screen bg-[url(/images/kame.jpeg)] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col items-center justify-center w-5/6 h-full gap-1 py-5 m-auto my-0 lg:p-5">
        <Header />
        <div className="grid h-full grid-cols-2 gap-5 py-1 overflow-y-auto lg:px-10 lg:grid-cols-5">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.grayScale}
              disabled={disabled}
            />
          ))}
        </div>
      </div>
      {win && (
        <div>
          <Alert
            position="center"
            icon="success"
            title="Parabéns!!"
            text={`Seu tempo foi de ${timer} segundos`}
            showConfirmButton
            confirmButtonText="Jogar novamente"
          />
        </div>
      )}
    </div>
  );
}

export default Game;
