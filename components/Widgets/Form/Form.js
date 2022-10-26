import React from "react";
import { InputField } from "./form.style";

export const TextField = React.forwardRef(({ label }, ref) => {
  return (
    <InputField>
      <div className="mb-4">
        <label className="text-black text-opacity-80">{label}</label>
        <input className="Input" />
        <div></div>
      </div>
    </InputField>
  );
});
