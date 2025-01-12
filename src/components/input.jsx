import React from "react";

export default function Input({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  className,
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label
        className="text-sm font-medium text-gray-700 text-left ml-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
}
