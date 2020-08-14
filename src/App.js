import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from './header.js';
import Container from './maincontainer.js';
import styled from 'styled-components'

import { BASE_URL, API_KEY} from './index.js'


const StyledDiv = styled.div``;
const StyledP = styled.p`
width: 50%`;
const StyledH1 = styled.h1`
`

const StyledH2 = styled.h2``;
const StyledH3 = styled.h3``;

function App() {

  const [nasaData, setData] = useState([])

useEffect(() => {
axios.get(`${BASE_URL}?api_key=${API_KEY}&date=2020-08-12`)  
.then(res => {
  setData(res.data)
  console.log(res.data)
  debugger
})
.catch(err => {
  debugger
})
.finally(() => {

})

}, [])

  return (
    <div className="App">
      <Header nasaData = {nasaData} />
      <Container nasaData = {nasaData} />
      
    </div>
  );
}

export default App;
