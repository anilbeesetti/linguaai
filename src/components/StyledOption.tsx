import { OptionType } from "../types/Types";

type Props = {
  id: string;
  label: string;
  defaultValue: string;
  options: OptionType[] | undefined;
  value?: string | number | readonly string[] | undefined;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const StyledOption = ({
  id,
  label,
  options,
  defaultValue,
  value,
  onChange,
}: Props) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block mb-2 mt-3 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <select
        id={id}
        className="bg-gray-50 border border-gray-200 text-sm rounded-md block w-full p-2.5"
        value={value}
        onChange={onChange}
      >
        <option value="">{defaultValue}</option>
        {options?.map((option) => (
          <option
            value={option.value}
            key={option.value}
            className="text-black"
          >
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StyledOption;
