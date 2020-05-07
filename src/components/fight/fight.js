import React from 'react';
import Fighter from '../fighter/fighter'

const Fight = ({data, opponent, setButton, setOpponent}) => {

    return (
        <main>
            <Fighter data={data} opponent={opponent} />
            <h1 className='versus'>VS.</h1>
            <Fighter data={opponent} opponent={opponent}/>
            <button>FIGHT!</button>
            <button onClick={() => {
            setButton('') 
            setOpponent(null)
            }}>Retreat</button>
        </main>
    )
}


export default Fight