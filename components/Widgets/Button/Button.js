import Link from "next/link";
import Loader from "../Loader/Loader";
import { Button } from "./button.style";

export const AppButton = ({ onPress, loading, ...props }) => (
  <Button
    type={props.type}
    className={`rounded-lg cursor-pointer transition ease-in-out duration-700 ${
      props.className || "bg-[#992333] px-4 py-3 text-white"
    }`}
    onClick={onPress}
  >
    <div
      className={`flex items-center ${
        props.justify || "justify-between"
      } w-full font-light`}
    >
      <span className={`${props.textSize || "md:text-sm text-sm"}`}>
        {loading !== true ? props.name : <Loader loading={loading} />}
      </span>
      {props.icon && <div className="ml-2">{props.icon}</div>}
    </div>
  </Button>
);
