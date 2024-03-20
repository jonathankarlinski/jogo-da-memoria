import { createContext } from 'react';

interface InitialState {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  flag: boolean;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const INITIAL_STATE = {
  userName: '',
  timer: 0,
  flag: false,
} as InitialState;

const context = createContext(INITIAL_STATE);

export default context;
