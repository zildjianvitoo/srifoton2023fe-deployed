import VerifiedEmail from "./VerifiedEmail";

export default function InputForm({
  labelText,
  labelFor,
  type,
  placeholder,
  register,
  rules,
  style,
  verifiedEmail,
  ...props
}) {
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={labelFor}
        className="text-lg flex gap-1 items-center lg:text-xl font-medium text-[#494B7C] dark:text-white"
      >
        {labelText} {verifiedEmail && <VerifiedEmail />}
      </label>
      <input
        type={type}
        id={labelFor}
        placeholder={placeholder}
        className={`w-full p-2 pl-3 bg-transparent border mt-1 border-[#7B7B7B] dark:border-[#E0E0E0] rounded-lg placeholder:text-[#A3A3A3] text-black dark:text-[#EDEDED] focus:border-[#2E7BEF] focus:outline-[#2E7BEF] ${style} `}
        {...props}
        {...register(labelFor, rules)}
      />
    </div>
  );
}
