import React from 'react';
import {userData} from '../../utils/usernames'
import Fighter from '../fighter/fighter'


const ChoiceList = props => {
    
  return (
      <ul>
    { userData ? userData.map((data) => <Fighter key={data.id} data={data} />) : <h1>No results found!</h1>}
    </ul>
  )
}

export default ChoiceList;