const Button = ({ text}) => {
  return (
    <button
      className="w-1/2 h-10 flex-shrink-0 rounded-md bg-opacity-33 bg-buttonBlack text-fontWhite font-bold"
    >
      {text}
    </button>
  );
};

export default Button;
