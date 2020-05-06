import React from 'react';
import './App.css';
import LandingPage from "./components/landing/landing";

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
    <LandingPage 
      username={username} 
      fighter={fighter} 
      setUsername={setUsername}
      setFighter={setFighter} 
      />
      
     
      {/* {fighter && data && <Fighter />}
      {result && <Result /> } */}
      {/* {fighter && !data && <Error message="The username doesn't exisst!"/>} */}

    </div>
  );
}

export default App;
