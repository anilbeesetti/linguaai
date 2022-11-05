import React from "react";

type Props = {
  value: string;
  onValueChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  buttonText: string;
};

export const SearchInput = ({
  value,
  onValueChange,
  placeholder,
  buttonText,
  onClick,
}: Props) => {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onValueChange}
        className="w-full text-gray-900 bg-gray-50 border border-gray-200 text-md rounded-l-md focus:outline-none p-3"
      />
      <button
        className=" bg-primary-500 text-md rounded-r-md hover:scale-105 text-white transition-all duration-150 p-3"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};
