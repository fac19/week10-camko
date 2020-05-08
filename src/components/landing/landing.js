import React from "react";
import './landing.css'


const LandingPage = ({ username, setUsername }) => {
  
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
        <button className='form-element' id='start'>Start Game!</button>
      </form>
    </section>
  );
};

export default LandingPage;
