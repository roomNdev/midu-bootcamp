import React, { useState } from 'react'

const Button = ({event,text}) =>{
  return(
    <button onClick={event}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
    let newSelected = 0;
    const points = [1, 5, 2, 3, 4, 1]
    let highest = points.indexOf(Math.max(...points))


  const [vote, setVote] = useState(points[newSelected])

  const [selected, setSelected] = useState(0)
  
  const handleClickRandom = () => {
    newSelected = Math.floor(Math.random()*6);
    if(newSelected === selected){
      newSelected = Math.floor(Math.random()*6);
    }
    setSelected(newSelected)
    setVote(points[newSelected])
  }
   
  // const handleClickVote = () => {
  //   console.log(vote)
  //   points[newSelected] += 1 
  //   console.log(points)
  //   setVote(points[newSelected])
  // }

  const setToVote =()=>{
    setVote(vote + 1)
    points[newSelected] = vote + 1
    console.log(points)
  }

  return (
    <div>
      <h1>anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote} votes</p>
      <Button event={handleClickRandom} text={"Next anecdote"}/>
      <Button event={setToVote} text={"vote"}/>
      <h1>anecdote with most votes</h1>
      <p>{anecdotes[highest]}</p>
    </div>
  )
}

export default App