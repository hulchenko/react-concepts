import React, { useState } from 'react';

const CreateTweet = ({ textInput, setTextInput, setTweets, tweets }) => {
  //Functions
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, textInput]); //spread existing array and add new value
    setTextInput('');
  };
  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        name=""
        id=""
        cols="35"
        rows="5"
      ></textarea>
      <button>Click Me</button>
    </form>
  );
};

export default CreateTweet;
