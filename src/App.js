import './App.css'
import Slideshow from './Slideshow.js'
// import * as data from '/public/.film-data.json'

import React,{useState,useEffect} from 'react';


function App() {
  // start useState at null instead of [] because [] IS data to it whereas 
  // null is not
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
      <h1 className="title">Slideshow</h1>
  {/* must account for the time the fetch request takes */}
       {data ? <Slideshow films={data}/> : <h2>Loading...</h2>}
    </div>
  )
}


export default App
