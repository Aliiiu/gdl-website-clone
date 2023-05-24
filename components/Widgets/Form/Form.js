import React from "react";
import { InputField } from "./form.style";
import { IoAlertCircleOutline } from "react-icons/io5";

export const TextField = React.forwardRef(
  ({ label, name, type, error, onChange }, ref) => {
    return (
      <InputField>
        <div className="mb-4">
          <label className="text-black text-opacity-80">{label}</label>
          {type == "textarea" ? (
            <textarea
              name={name}
              onChange={onChange}
              ref={ref}
              className="Input pt-2"
              rows="3"
            />
          ) : (
            <input
              ref={ref}
              className="Input"
              onChange={onChange}
              name={name}
              type={type}
            />
          )}
          {error && (
            <div className="mt-1 text-xs text-red-400 flex items-center">
              <IoAlertCircleOutline className="mr-1" />
              {`Your ${name} is required`}
            </div>
          )}
        </div>
      </InputField>
    );
  }
);

TextField.displayName = "CustomInput";
