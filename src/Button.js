const Button = ({ buttonText, type, setType }) => {
  const handleClick = () => {
    // console.log(buttonText);
    setType(buttonText);
  };

  return (
    <button
      className={buttonText === type ? "selected" : null}
      onClick={handleClick}
      type="button"
    >
      {buttonText}
    </button>
  );
};

export default Button;
