import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

import { BASE_URL, API_KEY} from './index.js'


function App() {

  const [nasaData, setData] = useState([])

useEffect(() => {
axios.get(`${BASE_URL}?api_key=${API_KEY}&date=2020-08-12`)  
.then(res => {
  setData(res.data)
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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
