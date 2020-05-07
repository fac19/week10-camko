import React from 'react';
import {userData} from '../../utils/usernames'
import Fighter from '../fighter/fighter'


const ChoiceList = ({data, setOpponent, opponent, username}) => {
  console.log(data)
    return (
      <ul>
          <Fighter data={data} setOpponent={setOpponent} opponent={opponent} username={username}/>
          { userData ? userData.map((data) => <Fighter key={data.id} data={data} setOpponent={setOpponent} username={username} />) : <h1>No results found!</h1>}
      </ul>
  )
}

export default ChoiceList;