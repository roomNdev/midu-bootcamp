import React, { useState } from 'react'

const Statistics = ({good,neutral,bad,all})=> { 
  if(all !== 0){
    return(
      <>
      <table>
        <tbody>
         <tr>
           <td>good</td>
           <td>{good}</td>
         </tr>
         <tr>
           <td>neutral</td>
           <td>{neutral}</td>
         </tr>
         <tr>
           <td>bad</td>
           <td>{bad}</td>
         </tr>
         <tr>
           <td>all</td>
           <td>{all}</td>
         </tr>
         <tr>
           <td>average</td>
           <td>{5/all}</td>
         </tr>
         <tr>
           <td>positive</td>
           <td>{good/all*100}%</td>
         </tr>
        </tbody>
      </table>
      </>
    )
  }else{
    return(
      <><h3>No feedback given</h3></>
    )
  }
}

const Button = ({event,text}) => <><button onClick={event}>{text}</button></>
  

const App = () => {
  const [good, setGood] = useState(5)
  const [neutral, setNeutral] = useState(2)
  const [bad, setBad] = useState(1)

  const handleClickGood = () => {
    setGood(good + 1)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleClickBad = () => {
    setBad(bad + 1)
  }
  let all = good + neutral + bad;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button event={handleClickGood} text={"good"}/>
      <Button event={handleClickNeutral} text={"neutral"}/>
      <Button event={handleClickBad} text={"bad"}/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App