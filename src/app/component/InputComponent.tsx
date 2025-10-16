import React from 'react';

type InputTextProps = {
  type: string;
  placeholder: string;
  value: string;
  label:string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputComponent = ({ type, placeholder, value, onChange, label }: InputTextProps) => {
  return (
    <div className=''>
        <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="text-sm border w-full px-2 py-2 rounded mt-1"
        // required
      />
    </div>
  );
};

export default InputComponent;