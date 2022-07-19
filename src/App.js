import './App.css'
import Slideshow from './Slideshow.js'
// import * as data from '/public/.film-data.json'

import React,{useState,useEffect} from 'react';


function App() {
  const [data,setData]=useState(null);
  const getData=()=>{
    fetch('film-data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        // console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
 


  return (
    <div className="slides-app">
      <h1>Slideshow</h1>
       {data ? <Slideshow films={data}/> : <h2>Loading...</h2>}
    </div>
  )
}


export default App
