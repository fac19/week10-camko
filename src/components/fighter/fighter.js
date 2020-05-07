import React from 'react';

const Fighter = ({ data, setOpponent }) => {
    if(!data) return <h1>Loading...</h1>
    const { avatar_url, login, name, public_repos, followers, following } = data
 
    return (
        // github.com/oliverjam/css-pseudo-element-challenge 
     <article onClick={() => setOpponent(data)}>
          <header>
              <img src={avatar_url} alt={`{login} the fighter!`}/>
               <h1>{name ? name : login}</h1>
          </header>
          <ul className='stats-list'>
              <li>Attack: {public_repos}</li>
              <li>Defence: {followers}</li>
              <li>Intelligence: {following}</li>
          </ul>
      </article>

    )
}


export default Fighter;
