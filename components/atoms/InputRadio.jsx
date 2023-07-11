import { forwardRef } from "react";

const InputRadio = forwardRef(function InputRadio(
  { labelFor, labelText, value, onChange, onBlur, name },
  ref
) {
  return (
    <div className="flex gap-2">
      <input
        type="radio"
        id={labelFor}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        ref={ref}
        className="scale-[1.3] cursor-pointer"
      />
      <label htmlFor={labelFor} className="font-medium">
        {labelText}
      </label>
    </div>
  );
});

export default InputRadio;
