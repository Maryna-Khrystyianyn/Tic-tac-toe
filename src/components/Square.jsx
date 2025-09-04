

const Square = ({value, onSquareClick}) => {

  return (
    <button onClick={onSquareClick} className="border-2 w-20 h-20 font-bold text-5xl align-top">{value}</button>
  );
};

export default Square;
