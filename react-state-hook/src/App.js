import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <HookCounterFour/>
      </header>
    </div>
  );
}

export default App;
