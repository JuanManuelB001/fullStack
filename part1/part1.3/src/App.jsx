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
      <p>
        {props.part1['name']} {props.part1['exercise']}
      </p>
      <p>
        {props.part2['name']} {props.part2['exercise']}
      </p>
      <p>
        {props.part3['name']} {props.part3['exercise']}
      </p>
      
    </div>
  )
}
function Total(props){

  return(
    <div>
      <p>Number of Exercise {props.exe1 + props.exe2 + props.exe3}</p>
    </div>
  )
}

function App() {
  //  ADD OBJECTS
  const course = 'Half Stack aplication development'
  const part1 ={
    name: "Fundamentlas of React",
    exercise: 10
  }
  const part2 = {
    name: "Using props to pass Data",
    exercise: 7
  }
  const part3 = {
    name: "State of a Component",
    exercise: 4
  }


  // JSX
  return (
   <div>
      <Header course={course}/>
    
      <Content part1={part1} 
              part2={part2} 
              part3 = {part3}
      />
      <Total
          exe1 ={part1['exercise']}
          exe2 = {part2['exercise']}
          exe3 = {part3['exercise']}
      />
      
   </div>
  )
}
export default App
