import './App.css';
import RandomUser from '../src/components/RandomUser/RandomUser.jsx'
import IntroMessage from './components/IntroMessage/IntroMessage';

function App() {
  return (
    <div className="App">
      <IntroMessage />
      <RandomUser />
    </div>
  );
}

export default App;
