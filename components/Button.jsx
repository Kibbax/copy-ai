const Button = ({ text}) => {
  return (
    <button
    className="relative z-10 w-1/2 h-10 flex-shrink-0 rounded-md bg-opacity-33 bg-buttonBlack hover:bg-hoverColor text-fontWhite font-bold"
    >

      {text}
    </button>
  );
};

export default Button;
