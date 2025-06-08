import React from "react";
import { useController } from "react-hook-form";

export const InputValidation = ({
  name = "message",
  control,
  rules = {},
  placeholder = "Ask me anything...",
  className,
}) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: "",
  });

  return (
    <>
      <input
        type="text"
        value={value || ""}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
};

export default InputValidation;

// "flex-1 px-4 py-2 bg-transparent outline-none text-[16px] placeholder-gray-400 disabled:opacity-50 w-full"
