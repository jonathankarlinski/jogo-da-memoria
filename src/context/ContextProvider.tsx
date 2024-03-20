import {
  PropsWithChildren, useEffect, useMemo, useState,
} from 'react';
import context from './context';

export default function NameProvider({ children }: PropsWithChildren) {
  const [userName, setUserName] = useState('');
  const [timer, setTimer] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;

    if (!flag) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [flag]);

  const foo = useMemo(() => ({
    userName,
    setUserName,
    timer,
    setTimer,
    flag,
    setFlag,
  }), [timer, userName, flag]);
  return (
    <context.Provider value={foo}>
      {children}
    </context.Provider>
  );
}
