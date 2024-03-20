import React from 'react';

type FormTextInputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const FormTextInput: React.FC<FormTextInputProps> = ({ placeholder, value, onChange, error }) => {
  return (
    <div>
      <input
        className={`w-[462px] h-14 p-2 block rounded-md focus:outline-non bg-gray-700 dark:bg-gray-200 ${error && 'border-red-500'}`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormTextInput;
