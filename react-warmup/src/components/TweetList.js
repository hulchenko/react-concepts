import React from 'react';
import Tweet from './Tweet';
const TweetList = ({ name, message, date }) => {
  //({name, message}) = (props) -> instead of 'props.name', we can just use 'name'
  return (
    <div className="tweet-list">
      <Tweet name={name} message={message} date={date} />
      <Tweet name={name} message={message} date={date} />
      <Tweet name={name} message={message} date={date} />
    </div>
  );
};

export default TweetList;
