import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Header(props){
  // JS
  return(
    <div>
      <h1>{props.course['name']}</h1>
    </div>
  )
}

function Content(props){
  return(
    <div>
      <p>
        {props.course.parts[0].name} {props.course.parts[0].exercise}
      </p>
      <p>
        {props.course.parts[1].name} {props.course.parts[1].exercise}
      </p>
      <p>
        {props.course.parts[2].name} {props.course.parts[2].exercise}
      </p>
    </div>
  )
}
function Total(props){

  return(
    <div>
      <p>Number of Exercise {props.course.parts[0].exercise + props.course.parts[1].exercise + props.course.parts[2].exercise}</p>
    </div>
  )
}

function App() {
 const course = {
  name: 'Half Stack aplication development',
  parts: [
    {
        name: "Fundamentlas of React",
        exercise: 10
    },
    {
      name: "Using props to pass Data",
      exercise: 7
    },
    {
      name: "State of a Componenet",
      exercise: 14
    }
  ]
 }
 
 
  // JSX
  return (
   <div>
      <Header course={course}/>
    
      <Content course={course}
      />
      <Total course={course}/>
      
   </div>
  )
}
export default App
