import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const clues = [
  { id: 1, answer: 'Under the couch cushion ya boob', prompt: 'Under the couch cushion', password: 'Noice'},
  { id: 2, answer: 'The Indespensible Calvin and Hobbes', prompt: 'Relive your childhood and feed a tiger. ', password: 'childhood' },
  { id: 3, answer: 'Page 100 of The Last Mrs Parrish', prompt: 'Five times twenty and a golddigger makes plenty', password: 'drama' },
  { id: 4, answer: 'Gloomhaven box', prompt: 'A sad refuge', password: 'noice' },
];


function App() {

  const clueItems = clues.map(clue =>
    <li
      key={clue.id}
    >
      {clue.prompt} + {clue.answer}
    </li>
  );
  const [inputAnswer, setInputAnswer] = useState('');
  const [clueState,setClueState] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello Katie! Welcome to V1 of the scavenger hunt app!
        </p>
        <p>
          The goal of the game is simple. Find all clues. In the location pointed to by each clue will be a passphrase that you need to enter to get your next clue. 
        </p>

        <p>{clues[clueState].prompt}</p>
        <label>
          Enter the Password here:
          <input
           value={inputAnswer}
           onChange={e => setInputAnswer(e.target.value)}
          />
        </label>
        <MyButton inputAnswer={inputAnswer}>"Submit"</MyButton>
      </header>
    </div>
  );
}

export default App;

function MyButton({inputAnswer, clueState}) {
  function handleClick() {
    {/*This is a comment */}
    {/*Steps:  */}
    
    if (inputAnswer == clues[clueState].password){
      alert('Correct answer');
      setClueState(clueState+1);
    }
    else{
      alert(clues[clueState].password)
    }
    if(clueState == 3){
      alert('You win!')
    }

  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function ClueDisplay () {

  return();
}

function SubmitAnswer ({inputAnswer, clueState, setClueState}) {

  return(
    <label>
          Enter the Password here:
          <input
           value={inputAnswer}
           onChange={e => setInputAnswer(e.target.value)}
          />
        </label>
    <button onClick={handleClick}>
      Click me
    </button>
    );
}