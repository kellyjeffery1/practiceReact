import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => (
  <div>
    <h1>{course}</h1>
  </div>
)

const Content = ({parts}) => (
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises}/>
      <Part part={parts[1].name} exercises={parts[1].exercises}/>
      <Part part={parts[2].name} exercises={parts[2].exercises}/>
    </div>
)

const Part = ({part, exercises }) => (
 <div>
  <p>{part}</p>
  <p>{exercises}</p>
 </div>
)


const Total = ({total}) => (
  <div>    
    <p>Number of exercises {total}</p>
  </div>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
