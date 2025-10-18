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
      <label className='font-medium text-sm'>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="text-sm border placeholder:text-[12px] w-full px-2 py-2 rounded mt-4 focus:outline-[#52796F]"
        // required
      />
    </div>
  );
};

export default InputComponent;