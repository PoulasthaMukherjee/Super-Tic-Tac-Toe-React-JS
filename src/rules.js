import { useState } from "react";

function RulesButton({ toggleVisible, rulesVisible }) {
  let buttonText = "Rules ⋁";
  if (rulesVisible === "block") {
    buttonText = "Rules ⋀";
  }
  return (
    <button className="rulesButton" onClick={toggleVisible}>
      {buttonText}
    </button>
  );
}

export default function Rules() {
  const [rulesVisible, setRulesVisible] = useState("none");

  function toggleVisible() {
    if (rulesVisible === "none") {
      setRulesVisible("block");
    } else {
      setRulesVisible("none");
    }
  }

  return (
    <div className="rulesContainer">
      <RulesButton toggleVisible={toggleVisible} rulesVisible={rulesVisible} />
      <div id="rules" style={{ display: rulesVisible }}>
        <RulesText />
      </div>
    </div>
  );
}

function RulesText() {
  return (
    <ul className="rulesText space-y-4 text-lg text-gray-800 dark:text-gray-200">
      <li>
        The game consists of a <b>global board</b> (a 3x3 grid of smaller <b>local boards</b>).
      </li>
      <li>
        Players alternate turns, with <b>X</b> going first. Each player places their mark on one of the 81 available spots on the global board.
      </li>
      <li>
        After <b>X</b> plays, <b>O</b> must play in the corresponding local board determined by the position of <b>X</b>’s move on the global board.
      </li>
      <li>
        A player can only play in a local board that has an <b>empty spot</b>.
      </li>
      <li>
        If a player wins a local board, that board is marked as won on the global board. The winner's mark will appear in the corresponding spot on the global board.
      </li>
      <li>
        Once a local board is filled or won, no more moves can be played there.
      </li>
      <li>
        If a player is sent to a local board that is already full or won, they may play in any other available local board.
      </li>
      <li>
        <b>The game ends when either:</b>
        <ul className="mt-2 list-inside list-disc">
          <li>A player wins the global board by winning three local boards in a row.</li>
          <li>All boards are filled, resulting in a draw.</li>
        </ul>
      </li>
    </ul>
  );
}
