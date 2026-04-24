import {AdatProvider} from './context/AdatContext';
import Tesztek from './components/Tesztek';
import './App.css';

function App() {
  return (
    <AdatProvider>
    <div className="container mt-4">
     <header className='border-bottom mb-4'>
      <h1>23Teszt</h1>
     </header>
    </div>
  
    <Tesztek/>
    </AdatProvider>
  );
}

export default App;
