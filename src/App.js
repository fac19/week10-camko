import React from 'react';
import './App.css';
import LandingPage from "./components/landing/landing";
import Fighter from './components/fighter/fighter'
import Fight from './components/fight/fight'
// import { userData } from "./utils/usernames"
import { getUserData } from './utils/data_helpers'
import ChoiceList from './components/choices/ChoiceList'

function App() {
  // fetched data
  const [data, setData] = React.useState(null)
  // provided username
  const [username, setUsername] = React.useState('')
  // does username exist?
  // const [fighter, setFighter] = React.useState(false)
  // fight mode
  const [button, setButton] = React.useState('')
  // oponentsData
  const [opponent, setOpponent] = React.useState(null)
  console.log(opponent)

  React.useEffect(() => {
    getUserData(username)
      .then(data => {
        return setData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [username])

  return (
    <div className="App">
    {!username && <LandingPage 
      username={username} 
      setUsername={setUsername}
      />}
      
      {data && !button ? 
        (<div>
          <Fighter
            data={data}
            opponent={opponent}
            setOpponent={setOpponent} 
            username={username}
          /> 
          <button onClick={() => setButton("random")}>Random fight!</button>
          <button onClick={() => setButton('choice')}>Choose your fight!</button>
          <button onClick={() => setButton('boss')}>Boss fight!</button></div>
          ) : null}

      {button === 'random' ? <h1>Random</h1> : null}
      {button === 'choice' && !opponent ? <ChoiceList opponent={opponent} setOpponent={setOpponent} data={data} username={username}/> : null}
      {button === 'boss' ? <h1>Boss</h1> : null}   


       {button && opponent !== null ? <Fight data={data} opponent={opponent} setOpponent={setOpponent} username={username} setButton={setButton} /> : null}   
    </div>
  );
}

export default App;
