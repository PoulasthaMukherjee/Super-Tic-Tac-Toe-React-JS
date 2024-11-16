import { useState, useEffect } from "react";
import Rules from "./rules.js";
import Header from "./header";
import BigBoard from "./bigBoard";
import WelcomeMenu from "./menus/welcomeMenu.js";
import AiMenu from "./menus/aiMenu.js";
import NetworkMenu from "./menus/networkMenu.js";
import HostMenu from "./menus/hostMenu.js";
import JoinMenu from "./menus/joinMenu.js";

export default function App() {
  const [reset, setReset] = useState(0);
  const [robot, setRobot] = useState(2);
  const [status, setStatus] = useState("welcomeMenu");
  const [playerIsX, setPlayerIsX] = useState(true);

  function resetBoard() {
    setReset(reset + 1);
  }

  function statusUpdate(newStatus) {
    setStatus(newStatus);
  }

  function togglePlayerisX() {
    setPlayerIsX(!playerIsX);
  }

  function robotMenuClick(robotLevel) {
    setRobot(robotLevel);
    setStatus("aiGame");
  }
  let children = [];
  switch (status) {
    case "welcomeMenu":
      children.push(<WelcomeMenu setStatus={statusUpdate} />);
      break;
    case "aiMenu":
      children.push(
        <AiMenu
          togglePlayerisX={togglePlayerisX}
          playerIsX={playerIsX}
          robotMenuClick={robotMenuClick}
        />
      );
      break;
    case "networkMenu":
      children.push(<NetworkMenu setStatus={statusUpdate} />);
      break;
    case "hostMenu":
      children.push(
        <HostMenu togglePlayerisX={togglePlayerisX} playerIsX={playerIsX} />
      );
      break;
    case "joinMenu":
      children.push(<JoinMenu />);
      break;
    default:
      children.push(
        <BigBoard
          robot={robot}
          key={reset}
          appStatus={status}
          playerIsX={playerIsX}
        />
      );
      break;
  }
  return (
    <div id="container">
      <Header setStatus={statusUpdate} welcome={status === "welcomeMenu"} />
      {children}
      <Rules />
    </div>
  );
}
