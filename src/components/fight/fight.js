import React from 'react';
import Fighter from '../fighter/fighter'

const Fight = ({data, opponent}) => {

    return (
        <main>
            <Fighter data={data} opponent={opponent} />
            <h1 className='versus'>VS.</h1>
            <Fighter data={opponent} opponent={opponent}/>
        </main>
    )
}


export default Fight