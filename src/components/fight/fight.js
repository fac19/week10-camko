import React from "react";
import Fighter from "../fighter/fighter";
import "./fight.css";

const Fight = ({ data, opponent, setButton, setOpponent, username }) => {
  return (
    <main>
      <header className="fight-header">
        <Fighter
          data={data}
          username={username}
          opponent={opponent}
          setOpponent={opponent}
        />
        <h1 className="versus">VS.</h1>
        <Fighter
          data={opponent}
          username={username}
          opponent={opponent}
          setOpponent={opponent}
        />
      </header>
      <section className="fight-mode-buttons-section">
        <button
          className="fight-mode-button"
          onClick={() => setButton("fightMode")}
        >
          FIGHT!
        </button>
        <button
          className="fight-mode-button"
          onClick={() => {
            setButton("");
            setOpponent(null);
          }}
        >
          Retreat
        </button>
      </section>
    </main>
  );
};

export default Fight;
