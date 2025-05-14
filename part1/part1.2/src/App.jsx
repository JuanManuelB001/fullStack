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

/*
#-------------------------#
|         PART 1.2        |
#-------------------------#
*/
const Content = (props) =>{
  return(
    <div>
      <Part content= {props.content1} number={props.number1}/>
      <Part content ={props.content2} number = {props.number2} />
      <Part content ={props.content3} number = {props.number3} />
    </div>
  )

}
function Part(props){
  return(
    <div>
      <p>
        {props.content} {props.number}
      </p>
    </div>
  )
}
/*
#-------------------------#
|         END-PART 1.2    |
#-------------------------#
*/

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
    
      <Total exe1= {exercises1}
      exe2 = {exercises2}
      exe3 = {exercises3}/>
      <Content content1 = {par1} number1={exercises1}
              content2= {part2} number2 = {exercises2}
              content3 = {part3} number3 = {exercises3}
      />
      
   </div>
  )
}
export default App
