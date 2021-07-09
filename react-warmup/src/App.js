//import React and state functionality
import React, { useState } from 'react';
//Importing components
import CreateTweet from './components/CreateTweet';
import TweetList from './components/TweetList';

function App() {
  const [name, setName] = useState('Vadym');
  //States
  const [textInput, setTextInput] = useState('');
  const [tweets, setTweets] = useState([]);
  return (
    <div>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList setName={setName} name={name} tweets={tweets} />
    </div>
  );
}

export default App;
