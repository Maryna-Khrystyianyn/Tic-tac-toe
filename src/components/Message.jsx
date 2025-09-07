import styles from "./styles.module.css"

const Message = ({ winner, next }) => {
  let status;
  if (winner) {
    status = "Hoo-Hoo!  Winner: " + winner;
    return (
      <div className={`text-5xl bg-green-950 text-amber-50 p-3 text-center ${styles.neonBorder}`}>
        {status}
      </div>
    );
  } else {
    status = "Next player: " + (next ? "X" : "O");
    return (
      <div className={`${styles.neonText} text-2xl  p-3 text-center `}>{status}</div>
    );
  }
};

export default Message;
