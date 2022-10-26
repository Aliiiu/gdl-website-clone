import Link from "next/link";
import { Button } from "./button.style";

export const AppButton = ({ onPress, ...props }) => (
  <Button
    className={` rounded-lg  transition ease-in-out duration-700 ${
      props.className || "px-4 py-3 bg-[#992333] text-white"
    }`}
    onClick={onPress}
  >
    <div className="flex items-center justify-between w-full font-light">
      <span className={`${props.textSize || "md:text-sm text-sm"}`}>
        {props.name}
      </span>
      {props.icon && <div className="ml-2">{props.icon}</div>}
    </div>
  </Button>
);
