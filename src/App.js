import React from 'react';
import './App.css';
import LandingPage from "./components/landing/landing";
import Fighter from './components/fighter/fighter'

import { getUserData } from './utils/data_helpers'

function App() {
  // fetched data
  const [data, setData] = React.useState(null)
  // provided username
  const [username, setUsername] = React.useState('')
  // does username exist?
  const [fighter, setFighter] = React.useState(false)
  // fight mode
  const [button, setButton] = React.useState('')
  
  React.useEffect(() => {
    getUserData(username)
      .then(data => {
        console.log(data)
        return setData(data)
      })
  }, [fighter])


  return (
    <div className="App">
    {!fighter && <LandingPage 
      username={username} 
      fighter={fighter} 
      setUsername={setUsername}
      setFighter={setFighter} 
      />}
      
      {data && !button ? <Fighter
        data={data}
        button={button}
        setButton={setButton}
      /> : null}

      {button === 'random' ? <h1>Random</h1> : null}
      {button === 'choice' ? <h1>Choice</h1> : null}
      {button === 'boss' ? <h1>Boss</h1> : null}   

    </div>
  );
}

export default App;
