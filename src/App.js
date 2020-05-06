import React from 'react';
import './App.css';


import { getUserData } from './utils/data_helpers'

function App() {
  // fetched data
  const [data, setData] = React.useState(null)
  // provided username
  const [username, setUsername] = React.useState('')
  // does username exist?
  const [fighter, setFighter] = React.useState(false)
  
  React.useEffect(() => {
    getUserData(username)
      .then(data => {
        console.log(data)
        return setData(data)
      })
  }, [fighter])


  return (
    <div className="App">
      <h1>CAMKO</h1>
      <label htmlFor='username'></label>
      <input
      id='username'
      name='username'
      type='text'
      placeholder='put your github username'
      value={username}
      onChange={event => setUsername(event.target.value)}
      />
      {/* {fighter && !data && <Error message="The username doesn't exisst!"/>} */}
      <button onClick={() => setFighter(!fighter)}>Generate Fighter!</button>
      {/* {fighter && data && <Fighter />}
      {result && <Result /> } */}
    </div>
  );
}

export default App;
