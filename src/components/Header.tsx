import { useContext } from 'react';
import context from '../context/context';

function Header() {
  const { userName, timer } = useContext(context);

  return (
    <div className="flex flex-col items-center justify-center w-full lg:justify-between lg:flex-row">
      <h1
        className="text-[2rem] lg:text-[3rem] font-title text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
      >
        {userName}
      </h1>
      <h1
        className="text-[2rem] lg:text-[3rem] min-w-full lg:min-w-[17rem] text-center lg:text-left font-title text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
      >
        Tempo:
        {' '}
        {timer}
      </h1>
    </div>
  );
}

export default Header;
