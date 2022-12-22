import "./Button.scss";
const Button = (props) => {
  const { src, ImgClassName, buttonClassName, alt, name, ...buttonProps } =
    props;

  return (
    <>
      <div className="button-container" onClick={props.onClick}>
        <button
          {...buttonProps}
          onClick={props.onClick}
          className={props.buttonClassName}
        >
          {props.name}
        </button>
        <img src={props.src} alt={props.alt} className={props.ImgClassName} />
      </div>
    </>
  );
};

export default Button;
