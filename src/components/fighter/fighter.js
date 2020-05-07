import React from "react";
import "./fighter.css";

const Fighter = ({ data, opponent, setOpponent, username }) => {
  if (!data) return <h1>Loading...</h1>;
  const { avatar_url, login, name, public_repos, followers, following } = data;

  return (
    // github.com/oliverjam/css-pseudo-element-challenge
    <article
      className={username === login ? "fighter-profile" : "opponent"}
      onClick={
        !opponent && username !== data.login ? () => setOpponent(data) : null
      }
    >
      <header className="cardHeader">
        <img
          className={username === login ? "fighter-image" : "opponent-image"}
          src={avatar_url}
          alt={`{login} the fighter!`}
        />
      </header>
        <h1 className='cardTitle'>{name ? name : login}</h1>
      <ul className="stats-list">
        <li>Attack: {public_repos}</li>
        <li>Defence: {followers}</li>
        <li>Magic: {following}</li>
      </ul>
    </article>
  );
};

export default Fighter;
