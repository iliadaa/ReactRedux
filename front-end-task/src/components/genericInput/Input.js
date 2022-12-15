import "./Input.scss";
import { useState } from "react";
const Input = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    onChange,
    id,
    name,
    value,
    isDisabled,
    errorMessage,
    className,
    readOnly,
    required,
    pattern,
    autoComplete,
    ...inputProps
  } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <input
        name={props.name}
        className={className}
        value={value}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        readOnly={props.readOnly}
        disabled={props.isDisabled}
        pattern={pattern}
        required={props.required}
        autoComplete={props.autoComplete}
      />
    </>
  );
};

export default Input;
