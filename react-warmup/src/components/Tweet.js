import React from 'react';

const Tweet = ({ name, message, date }) => {
  //({name, message}) = (props) -> instead of 'props.name', we can just use 'name'
  return (
    <div className="tweet">
      <h1>Date: {date}</h1>
      <h2>Name is: {name}</h2>
      <h3>{message}</h3>
      <button>Like</button>
      <button>Delete</button>
    </div>
  );
};

export default Tweet;
