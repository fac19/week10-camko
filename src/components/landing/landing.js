import React from "react";

const LandingPage = ({ username, fighter, setFighter, setUsername }) => {
  
  return (
    <section>
      <h1>CAMKO</h1>
      <label htmlFor="username">Username: </label>
      <input
        id="username"
        name="username"
        type="text"
        placeholder="put your github username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={() => setFighter(!fighter)}>Generate Fighter!</button>
    </section>
  );
};

export default LandingPage;
