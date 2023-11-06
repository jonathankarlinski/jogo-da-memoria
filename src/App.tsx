import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full min-h-screen">
      <Routes>
        <Route
          path="/"
          element={(
            <h1 className="text-[3.5rem] text-white font-title drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Memory Game
            </h1>
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
