import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const clues = [
  { id: 0, answer: 'Under the couch cushion ya boob', prompt: 'Here I live, cozy and comfy, I feel real smushed and might look frumpy.', password: 'Noice'},
  { id: 1, answer: 'The Indespensible Calvin and Hobbes', prompt: 'Relive your childhood and feed a tiger. ', password: 'childhood' },
  { id: 2, answer: 'Page 100 of The Last Mrs Parrish', prompt: 'Five times twenty and a golddigger makes plenty', password: 'drama' },
  { id: 3, answer: 'Gloomhaven box', prompt: 'A sad refuge', password: 'noice' },
];

function ClueDisplay ({clues, clueState}) {

  return( 
    <div> 
      <p>You have solved {clueState} out of 4 clues</p>
      <p>{clues[clueState].prompt}</p>
    </div>
  );
}

function SubmitAnswer ({clues, clueState, setClueState}) {
  const [inputAnswer, setInputAnswer] = useState('');
  function handleClick() {
    {/*This is a comment */}
    
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
  return(
    <div>
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
    </div>
    );
}

function App() {

  const clueItems = clues.map(clue =>
    <li
      key={clue.id}
    >
      {clue.prompt} + {clue.answer}
    </li>
  );
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
      </header>
      <div className="ClueDisplay">
        <ClueDisplay clues = {clues} clueState = {clueState}></ClueDisplay>
      </div>
      <div className ="SubmitAnswer">
        <SubmitAnswer clues = {clues} clueState = {clueState} setClueState={setClueState}> </SubmitAnswer>
      </div>
      
    </div>
  );
}

export default App;