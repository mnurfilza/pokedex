import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {

  
  return (
    <div className="App">
      <MainBody/>
    </div>
  );
}


//for main body
function MainBody() {
  const[poke, setPoke] = useState([])
  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => {
      setPoke(res.data.results)
    //  console.log(res.data.results);
    })
  })
  return(
    <ul>
    {poke.map(item => (
      <p key={item.name}>
        {item.name}
      </p>

    ))}
    </ul>
  )
}

export default App;
