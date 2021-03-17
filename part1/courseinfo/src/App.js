import React from 'react'

const Header = ({course}) => <><h1>{course}</h1></>

const Content = ({part,exercice}) => <><p>{part} {exercice}</p></>

const Total = ({ex1,ex2,ex3}) => <><p>Number of exercises {ex1 + ex2 + ex3}</p></>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Content part={course.parts[0].name} exercice={course.parts[0].exercices}/>
      <Content part={course.parts[1].name} exercice={course.parts[1].exercises}/>
      <Content part={course.parts[2].name} exercice={course.parts[2].exercises}/>
      <Total ex1={course.parts[0].exercises} ex2={course.parts[1].exercises} ex3={course.parts[2].exercises}/>
    </div>
  )
}

export default App