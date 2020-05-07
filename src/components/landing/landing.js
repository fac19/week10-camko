import React from "react";


const LandingPage = ({ username, setUsername }) => {
  
  return (
    <section>
      <img src={require('./git-fighter.png')} alt='Git fighter game title'/>
      <form onSubmit={(event) => {
        event.preventDefault()
        return setUsername(event.target.username.value)
        }}>

        <label htmlFor="username">Username: </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="put your github username"
        />
        <button>Generate Fighter!</button>
      </form>
    </section>
  );
};

export default LandingPage;
