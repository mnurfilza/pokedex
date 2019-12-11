import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';



const Detail = props => {
  const[detail, setDetail] = useState([])

  useEffect(()=>{
    axios.get(props.url)
    .then(res =>{
      setDetail(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  if (detail.abilities !== undefined) {
    console.log(detail)
    var listAbiliti = (
      <div>
        {detail.abilities.map((res,index)=>
          <div key={index}>
            {res.ability.name}
          </div>
        )}
      </div>
  )
}
  return(
    <div>
      <p>Ability: {listAbiliti}</p>
    </div>
  )
}




export default Detail
