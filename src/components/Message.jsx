

const Message = ({winner, next}) => {

    let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (next ? "X" : "O");
  }
  return (
    <div className="text-2xl bg-amber-200 p-3 text-center">{status}</div>
  )
}

export default Message