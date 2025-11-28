// import type Votes from "../../types/votes";
// import type VoteTypes from "../../types/votes";
import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import css from "./App.module.css";
import { useState } from "react";

function App() {
  // const votes: Votes = { good: 0, neutral: 0, bad: 0 };
  // function handleVote(type: VoteTypes) {}
  // function resetVotes() {}

  const [isOpen, setIsOpen] = useState<boolean>(true);
  const toggleNotifications = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onToggle={toggleNotifications} />
      {!isOpen && <VoteStats />}
      {isOpen && <Notification />}
    </div>
  );
}

export default App;
