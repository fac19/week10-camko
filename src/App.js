import React from "react";
import "./App.css";
import LandingPage from "./components/landing/landing";
import Fighter from "./components/fighter/fighter";
import Fight from "./components/fight/fight";
import Result from "./components/result/result"
// import { userData } from "./utils/usernames"
import { getUserData } from "./utils/data_helpers";
import ChoiceList from "./components/choices/ChoiceList";
import { getRandomInteger } from "./utils/usernames";

import fightSound from "./utils/fight.mp3"
import menuSound from "./utils/menu.mp3"

function App() {
  // fetched data
  const [data, setData] = React.useState(null);
  // provided username
  const [username, setUsername] = React.useState("");
  // does username exist?
  // const [fighter, setFighter] = React.useState(false)
  // fight mode
  const [button, setButton] = React.useState("");
  // oponentsData
  const [opponent, setOpponent] = React.useState(null);

  const [music, setMusic] = React.useState("menu")

  React.useEffect(() => {
    getUserData(username)
      .then((data) => {
        return setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [username]);

  // if (music === "menu") {
  //   return (<div>
  //             <audio useRef='audio_tag' src='./utils/menu.mp3' controls autoPlay/>
  //           </div>
  //           )
  // } else {
  //     return (<div>
  //       <audio ref='audio_tag' src='./utils/fight.mp3' controls autoPlay/>
  //     </div>
  //     )
  // }
  // let audio = document.createElement("audio");
  // audio.src = "./utils/fight.mp3";
  
  return (
    <div className="App">
      {!username && (
        <LandingPage username={username} setUsername={setUsername} />
      )}

      {data && !button ? (
        <div className='fighter-container'>
          <Fighter
            data={data}
            opponent={opponent}
            setOpponent={setOpponent}
            username={username}
          />
          <section className='fightButton-section'>
          <button className="fightButton"
            onClick={() => {
              setButton("random");
              setOpponent(getRandomInteger(0, 16));
            }}
          >
            Random fight!
          </button>
          <button className="fightButton"
          onClick={() => setButton("choice")}>
            Choose your fight!
          </button>
          <button className="fightButton"
            onClick={() => {
              setButton("boss");
              getUserData("oliverjam")
                .then((data) => setOpponent(data))
                .catch((err) => console.log(err));
            }}
          >
            Boss fight!
          </button>
          </section>
        </div>
      ) : null}

      {button === "choice" && !opponent ? (
        <ChoiceList
          opponent={opponent}
          setOpponent={setOpponent}
          data={data}
          username={username}
        />
      ) : null}

      {button && button !== 'fightMode' && opponent !== null ? (
        <Fight
          data={data}
          opponent={opponent}
          setOpponent={setOpponent}
          username={username}
          setButton={setButton}
        />
      ) : null}

      {button === 'fightMode' ? (
        <Result
        data={data}
        setData={setData}
        opponent={opponent}
        setButton={setButton}
        setOpponent={setOpponent}
        />
        
      ) : null}
    </div>
  );
}

export default App;
