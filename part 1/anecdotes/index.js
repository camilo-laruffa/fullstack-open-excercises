import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = ({ good, bad, neutral, average, positive, total }) => {
  if (good + bad + neutral == 0) {
    return <div>No Feedback given</div>;
  }

  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="total" value={total} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </tbody>
    </table>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [higherIndex, setHigherIndex] = useState(0);
  let random = 0;

  const getRandom = () => {
    do {
      random = Math.floor(Math.random() * anecdotes.length);
    } while (random == selected);
    setSelected(random);
  };

  const vote = () => {
    const copy = { ...votes };
    copy[selected] += 1;
    setVotes(copy);

    if (copy[selected] > copy[higherIndex]) setHigherIndex(selected);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>this anecdote has {votes[selected]} votes</p>

      <Button onClick={getRandom} text="next anecdote" />
      <Button onClick={vote} text="vote" />

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[higherIndex]}</p>
      <p>this anecdote has {votes[higherIndex]} votes</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
