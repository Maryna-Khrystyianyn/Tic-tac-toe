const Message = ({ winner, next }) => {
  let status;
  if (winner) {
    status = "Hoo-Hoo!  Winner: " + winner;
    return (
      <div className="text-5xl bg-green-900 text-amber-50 p-3 text-center">
        {status}
      </div>
    );
  } else {
    status = "Next player: " + (next ? "X" : "O");
    return (
      <div className="text-2xl bg-amber-200 p-3 text-center">{status}</div>
    );
  }
};

export default Message;
