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
        {props.part1} {props.exe1}
      </p>
      <p>
        {props.part2} {props.exe2}
      </p>
      <p>
        {props.part3} {props.exe3}
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
 const course = 'Half Stack aplication development'
 const par1 = 'Fundamentals of React'
 const exercises1 = 10
 const part2 = 'using props to pass data'
 const exercises2 = 7
 const part3 = 'State of a component'
 const exercises3 = 4
  // JSX
  return (
   <div>
      <Header course={course}/>
    
      <Content part1={par1} exe1={exercises1}
              part2={part2} exe2= {exercises2}
              part3 = {part3} exe3 = {exercises3}
      />
      <Total exe1= {exercises1}
      exe2 = {exercises2}
      exe3 = {exercises3}/>
      
   </div>
  )
}
export default App
