import React from 'react';
//Importing components
import CreateTweet from './components/CreateTweet';
import TweetList from './components/TweetList';

function App() {
  //place where you can write regular JS
  const name = 'Vadym';
  const date = new Date().toLocaleDateString();
  const message = 'some tweet text';
  return (
    <div>
      <h1>Hello!</h1>
      <CreateTweet />
      <TweetList name={name} message={message} date={date} />
    </div>
  );
}

export default App;
