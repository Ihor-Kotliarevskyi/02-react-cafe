import styles from "./VoteStats.module.css";
import Votes from "../../types/votes";

interface VoteStatsProps {
  onToggle: () => void;
}

function VoteStats() {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{Votes.good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>0</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>0</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>0</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>0%</strong>
      </p>
    </div>
  );
}

export default VoteStats;
