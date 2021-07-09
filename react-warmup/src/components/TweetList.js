import React from 'react';
import Tweet from './Tweet';
const TweetList = ({ name, tweets, setName }) => {
  //({name, tweets}) = (props) -> instead of 'props.name', we can just use 'name'
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet name={name} message={tweet} />
      ))}
      <button onClick={() => setName('Alissa')}>CHANGE NAME</button>
    </div>
  );
};

export default TweetList;
