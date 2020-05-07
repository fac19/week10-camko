import React from 'react';
import {userData} from '../../utils/usernames'
import Fighter from '../fighter/fighter'


const ChoiceList = ({data, setOpponent, opponent, username}) => {
  console.log(data)
    return (
      <ul>
          <Fighter data={data} setOpponent={setOpponent} opponent={opponent} username={username}/>
          { userData ? userData.map((user) => user.login !== username ? <Fighter key={user.id} data={user} setOpponent={setOpponent} username={username} /> : null) : <h1>No results found!</h1>}
      </ul>
  )
}

export default ChoiceList;