const Button = ({ text }) => {
  const buttonStyles = {
    width: '200px',
    height: '44px',
    top: '556px',
    left: '88px',
    borderRadius: '10px',
    borderBottom: '1px solid #5A189A', // Borde inferior
    borderRight: '1px solid #5A189A', // Borde derecho
  };

  /* const textStyles = {
    WebkitTextStroke: '1px #5A189A', // Borde para el texto
  }; */

  return (
    <button 
      className="w-1/2 h-10 flex-shrink-0 rounded-md bg-opacity-33 bg-buttonBlack hover:bg-hoverColor hover:text-hoverTextColor text-fontWhite font-bold"
      style={buttonStyles}
    >
      <span /* style={textStyles} */>{text}</span>
    </button>
  );
};

export default Button;
