import LoadingIcon from "./LoadingIcon";

export default function Button({ style, children, variant, disabled }) {
  const isSubmitButton = variant === "submitButton";

  const getClassName = () => {
    if (isSubmitButton) {
      return `text-[#FCFCFC] text-lg flex items-center justify-center gap-1 font-semibold tracking-wider rounded-lg bg-[#2E7BEF] dark:bg-[#E924E8] py-2 ${
        disabled
          ? "opacity-70 hover:opacity-70"
          : "opacity-90 hover:opacity-100"
      } ${style}`;
    } else {
      return `px-4 text-base lg:text-2xl lg:px-6 py-2 border-2 rounded-2xl hover:text-white ${style}`;
    }
  };

  return (
    <button
      type={isSubmitButton ? "submit" : "button"}
      className={getClassName()}
      disabled={disabled}
    >
      {children}
      {disabled && isSubmitButton && <LoadingIcon />}
    </button>
  );
}
