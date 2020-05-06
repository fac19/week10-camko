import React from 'react';

const Fighter = ({data, button, setButton}) => {
    if(!data) return <h1>Loading...</h1>
    
    const { avatar_url, login, name, public_repos, followers, following } = data
 
    return (
     <article>
          <header>
              <img src={avatar_url} alt={`{login} the fighter!`}/>
               <h1>{name ? name : login}</h1>
          </header>
          <ul className='stats-list'>
              <li>Attack: {public_repos}</li>
              <li>Defence: {followers}</li>
              <li>Intelligence: {following}</li>
          </ul>
        <button onClick={() => setButton("random")}>Random fight!</button>
        <button onClick={() => setButton('choice')}>Choose your fight!</button>
        <button onClick={() => setButton('boss')}>Boss fight!</button>
      </article>

    )
}


export default Fighter;
