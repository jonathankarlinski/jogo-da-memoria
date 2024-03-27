import ReactCardFlip from 'react-card-flip';
import { ICard } from '../utils/data';

interface CardProps {
  card: ICard,
  handleChoice: (card: ICard) => void;
  flipped: boolean,
  disabled: boolean,
}

function Card({
  card, handleChoice, flipped, disabled,
}: CardProps) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  const classes = `
  min-w-[7rem] lg:min-w-[6rem]
  w-[7rem] lg:w-[6rem]
  h-auto 
  hover:cursor-not-allowed lg:hover:scale-105 
  ${card.grayScale ? 'grayscale' : 'grayscale-0'} 
  transition-all duration-500 ease-in-out
`;
  return (
    <ReactCardFlip
      isFlipped={flipped}
      flipDirection="horizontal"
    >
      <div
        className="react-card-front"
        style={{
          backfaceVisibility: 'hidden',
          height: '100%',
          left: 0,
          position: `${!card.showCard ? 'relative' : 'absolute'}`,
          top: 0,
          transform: `rotateY(${!card.showCard ? '0' : '180'}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'all 0.6s ease',
          width: '100%',
          zIndex: 2,
        }}
      >
        <button
          type="button"
          onClick={handleClick}
        >
          <img
            className="min-w-[7rem] lg:min-w-[6rem] w-[7rem] lg:w-[6rem] h-auto hover:cursor-pointer lg:hover:scale-105 transition-all duration-500 ease-in-out"
            src="/images/card.png"
            alt="Imagem do verso do card"
          />
        </button>
      </div>
      <div
        className="react-card-back"
        style={{
          backfaceVisibility: 'hidden',
          height: '100%',
          left: 0,
          position: `${card.showCard ? 'absolute' : 'relative'}`,
          top: 0,
          transform: `rotateY(${card.showCard ? '-180' : '0'}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'all 0.6s ease 0s',
          width: '100%',
        }}
      >
        <button
          type="button"
        >
          <img
            className={classes}
            src={card.url}
            alt="Imagem da frente do card"
          />
        </button>

      </div>
    </ReactCardFlip>
  );
}

export default Card;
