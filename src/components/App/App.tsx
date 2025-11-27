import type Votes from "../../types/votes";
import type VoteTypes from "../../types/votes";
import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import css from "./App.module.css";

const votes: Votes = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions />
      <VoteStats />
      <Notification />
    </div>
  );
}
console.log(votes);

function handleVote(type: VoteTypes) {}
function resetVotes() {}
