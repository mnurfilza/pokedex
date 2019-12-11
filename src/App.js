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
import Detail from './Detail.js'
import { Container, Row, Col } from 'reactstrap';



function App() {
  return (
    <div className="App">
      <MainBody/>
    </div>
  );
}


//for main body
const MainBody = () => {
  const[poke, setPoke] = useState([])
  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => {
      setPoke(res.data.results)

    })
  }, [])

  return(
    <div className="MainBody">
      {poke.map(item => (
        <div key={item.name} className="card">
          <p>{item.name}</p>
          <Detail url={item.url}></Detail>
        </div>

      ))}
    </div>
  )
}



export default App;
