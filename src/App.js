import React from 'react';
import './App.css';
import LandingPage from "./components/landing/landing";
import Fighter from './components/fighter/fighter'
import { userData } from "./utils/usernames"
import { getUserData } from './utils/data_helpers'
import ChoiceList from './components/choices/ChoiceList'
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
      
      {data && !button ? 
        (<div>
          <Fighter
            data={data}
            button={button}
            setButton={setButton}
          /> 
          <button onClick={() => setButton("random")}>Random fight!</button>
          <button onClick={() => setButton('choice')}>Choose your fight!</button>
          <button onClick={() => setButton('boss')}>Boss fight!</button></div>
          ) : null}

      {button === 'random' ? <h1>Random</h1> : null}
      {button === 'choice' ? <ChoiceList/> : null}
      {button === 'boss' ? <h1>Boss</h1> : null}   

    </div>
  );
}

export default App;
