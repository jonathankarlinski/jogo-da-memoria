import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import context from '../context/context';

function Login() {
  const [active, setActive] = useState(false);
  const { userName, setUserName } = useContext(context);

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserName(value);
    if (value.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    navigate('/game');
  };
  return (
    <div className="w-full h-full min-h-screen bg-[url(/images/shen.png)] bg-cover bg-no-repeat bg-left flex flex-col justify-start items-center">
      <div className="flex flex-col items-center justify-start w-full h-full min-h-screen">
        <div className="lg:relative flex flex-col items-center justify-center gap-5 lg:gap-10 mx-auto pt-[4rem] lg:pt-[8rem] w-5/6 lg:w-fit">
          <div className="flex flex-col items-center justify-center gap-0">
            <img className="w-[8rem] lg:w-[10rem]" src="/images/brain.png" alt="imagem de uma cérebro" />
            <h1 className="text-[3.5rem] text-white font-title drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Memory Game
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full gap-5">
            <input
              onChange={handleChange}
              className="px-[1.5rem] py-[1rem] w-full lg:px-[2rem] lg:py-[1.5rem] rounded-lg focus:outline-none bg-input-background text-[1.5rem] shadow-xl"
              type="text"
              placeholder="Escreva seu nome"
            />
            <button
              className="w-full p-[.5rem] lg:px-[2rem] lg:py-[.8rem] rounded-lg text-[2.5rem] font-title disabled:cursor-not-allowed disabled:bg-input-background disabled:text-text-placeholder text-text-button bg-button-background hover:brightness-[.8] shadow-xl"
              type="submit"
              disabled={userName.length < 1 && true}
            >
              Play
            </button>
          </form>
          <div>
            <img
              className={active === true
                ? `lg:absolute -bottom-5 -right-52 w-48 lg:w-52 h-auto z-[999]
                    grayscale-0 hover:scale-110 transition-all duration-500 ease-in-out`
                : `lg:absolute -bottom-5 -right-52 w-48 lg:w-52 h-auto z-[999]
                    grayscale hover:cursor-not-allowed`}
              src="/images/dragon-ball.png"
              alt="Imagem da esfera do dragão de 4 estrelas"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
