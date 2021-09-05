import './App.css';
import RandomUser from '../src/components/RandomUser/RandomUser.jsx'
import IntroMessage from './components/IntroMessage/IntroMessage';
import RandomJoke from './components/RandomJoke/RandomJoke';
import NotherUser from './components/NotherUser/NotherUser';
import CatsFacts from './components/CatsFacts/CatsFacts';

function App() {
  return (
    <div className="App">
      <IntroMessage />
      <RandomUser />
      <RandomJoke />
      <NotherUser />
      <CatsFacts />
    </div>
  );
}

export default App;
