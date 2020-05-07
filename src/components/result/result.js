import React from 'react';

const Result = ({data, setData, opponent, setButton, setOpponent}) => {

    const { public_repos, followers, following } = data
    const hero = {...data}  
    const userPower = public_repos + followers + following
    const opponentPower = opponent.public_repos + opponent.followers + opponent.following
    
    React.useEffect(() => {
        if (userPower >= opponentPower) {
          hero.followers += 10
          setData(hero) 
        } else {
            hero.following += 2
            setData(hero)
        }
    }, [])

    return (
        <main>
          <h1>{userPower > opponentPower ? "You are the winner and you gained 10 defence" : "You lost! You learn from your failures : +2 intelligence" }</h1>
          <button onClick={() => {
            setButton('')
            setOpponent(null)
            }}>Prepare for new fight</button>
        </main>
    )
}

export default Result


