import React from "react";
import './landing.css'


const LandingPage = ({ err, username, setUsername, data }) => {

  
  return (
    <section>
      {/* <img src={require('./git-fighter.png')} alt='Git fighter game title'/> */}
      <h1 className="landing-title">GIT FIGHTER II</h1>
      <form onSubmit={(event) => {
        event.preventDefault()
        return setUsername(event.target.username.value)
        }}>

        <label className='form-element' id='landing-username' htmlFor="username">Username: </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Your github username..."
        />
        {err ? <h3>{'User does not exist!'}</h3> : null}
        <button className='form-element' id='start'>Start Game!</button>
      </form>
    </section>
  );
};

export default LandingPage;
