import './App.css';

import { AllPokemons } from './components/AllPokemons';

function App() {
  return (
    <>
    <h1 className="text-6xl italic font-bold flex justify-center items-center py-6 mt-5">PokeAPI</h1>
    <AllPokemons></AllPokemons>
    </>
  );
}

export default App;
