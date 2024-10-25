import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
function App() {
  const [count,SetCount]=useState(100)  //useState is used to create a state and it takes a function to change the state

  const a=useRef(0)   //useRef is used so that value can persist even after rerender

  useEffect(() => {    //useEffect runs on the mounting of the component eg.page reload,valuechange,etc
  alert("hello welcome to my page!")
  },[])
  
  useEffect(() => {
    alert("count was changed")
  },[count])

  useEffect(() => {
    a.current=a.current+1
    console.log(a)
    });
  
  return(
    <>
    <div>
      The count is {count}
      </div>
      <button onClick={()=>SetCount(count-1)}>update count</button></>
  )
}
export default App;
