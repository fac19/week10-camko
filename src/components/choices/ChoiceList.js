import React from "react";
import { userData } from "../../utils/usernames";
import Fighter from "../fighter/fighter";

import "./chooceList.css";

const ChoiceList = ({ data, setOpponent, opponent, username }) => {
  console.log(data);
  return (
    <ul className="fighters-list">
      {/* <div>
        <Fighter
          data={data}
          setOpponent={setOpponent}
          opponent={opponent}
          username={username}
        />
      </div> */}
      <div className="opponent-list-container">
        {userData ? (
          userData.map((user) =>
            user.login !== username ? (
              <Fighter
                key={user.id}
                data={user}
                setOpponent={setOpponent}
                username={username}
              />
            ) : null
          )
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </ul>
  );
};

export default ChoiceList;
