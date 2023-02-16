import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.js'
import Add from './components/Add.js'
import axios from 'axios';
import $ from 'jquery';

const App = () => {

  useEffect( () => {
    axios.get('/fetch')
      .then((response) => {
        console.log(response.data)
      })
  }, [])

  return (
    <div>
      <h1> Cow List</h1>
      <div>
        <Add />
      </div>
      <div>
        <List />
      </div>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('app'));