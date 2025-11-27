import css from "./VoteOptions.module.css";
import { useState } from "react";

export default function VoteOptions() {
  const [goodlikes, setGoodLikes] = useState(0);
  const handleGoodClick = () => {
    setGoodLikes(goodlikes + 1);
    console.log(goodlikes);
  };
  const [neutrallikes, setNeutralLikes] = useState(0);
  const handleNeutralClick = () => {
    setNeutralLikes(neutrallikes + 1);
    console.log(neutrallikes);
  };
  const [badlikes, setBadLikes] = useState(0);
  const handleBadClick = () => {
    setBadLikes(badlikes + 1);
    console.log(badlikes);
  };
  const handleResetClick = () => {
    setGoodLikes(0);
    setNeutralLikes(0);
    setBadLikes(0);
  };
  return (
    <div className={css.container}>
      <button className={css.button} onClick={handleGoodClick}>
        Good
      </button>
      <button className={css.button} onClick={handleNeutralClick}>
        Neutral
      </button>
      <button className={css.button} onClick={handleBadClick}>
        Bad
      </button>
      <button
        className={`${css.button} ${css.reset}`}
        onClick={handleResetClick}
      >
        Reset
      </button>
    </div>
  );
}

// interface VoteOptionsProps {
//   canReset: boolean;
// }
