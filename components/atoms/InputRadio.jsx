import { forwardRef } from "react";

const InputRadio = forwardRef(function InputRadio(
  { labelFor, labelText, value, onChange, onBlur, name, disabled },
  ref
) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        id={labelFor}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        ref={ref}
        className="lg:scale-[1.3] cursor-pointer"
        disabled={disabled}
      />
      <label
        htmlFor={labelFor}
        className="font-medium text-[#494B7C] dark:text-white"
      >
        {labelText}
      </label>
    </div>
  );
});

export default InputRadio;
