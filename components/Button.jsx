const Button = ({ children, onClick }) => {
  return (
    <button
      className="w-72 h-44 flex-shrink-0 rounded-md bg-opacity-33 bg-gray-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
