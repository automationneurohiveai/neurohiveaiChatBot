import React from "react";
import { useController } from "react-hook-form";

const InputValidation = ({
  name = "message",
  control,
  rules = {},
  placeholder = "Ask me anything...",
  disabled = false,

  ...props
}) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: "Please enter a message",
      minLength: { value: 1, message: "Message cannot be empty" },
      ...rules,
    },
    defaultValue: "",
  });

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value || ""}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        className="flex-1 px-4 py-2 bg-transparent outline-none text-[16px] placeholder-gray-400 disabled:opacity-50 w-full"
        {...props}
      />

      {/* Error message */}
      {error && (
        <div className="absolute top-full left-0 mt-1 text-sm text-red-600 pt-10">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default InputValidation;
