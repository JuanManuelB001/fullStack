import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Header(props){
  // JS
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

function Content(props){
  return(
    <div>
        {props.parts.map((part) =>{
         return <p> {part.name} {part.exercise} </p>
        })}
    </div>
  )
}
function Total(props){

  return(
    <div>
      <p>Number of Exercise {props.exercise[0] + props.exercise[1] + props.exercise[2]}</p>
    </div>
  )
}

function App() {
 const course = 'Half Stack aplication development'
 const parts = [
  {name: "Fundamentals of React",
    exercise: 10
  },
  { name: "Using props to pass Data",
    exercise: 7
  },
  {
    name: "State of a Component",
    exercise: 14
  }
 ]
 // EXERCISE
 const exercise = parts.map((part) =>{
  return part.exercise
 })
 
  // JSX
  return (
   <div>
      <Header course={course}/>
    
      <Content parts= {parts}
      />
      <Total exercise ={exercise}/>
      
   </div>
  )
}
export default App
