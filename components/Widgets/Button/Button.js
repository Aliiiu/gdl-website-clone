import Link from "next/link";
import { Button } from "./button.style";

export const AppButton = ({ onPress, ...props }) => (
  <Link href={props.href}>
    <Button
      className={`rounded-lg transition ease-in-out duration-700 ${props.className}`}
      onClick={onPress}
    >
      <div className="flex items-center justify-between w-full font-ibm-font font-thin">
        <span className="md:text-sm text-sm">{props.name}</span>
        <div className="ml-2">{props.icon}</div>
      </div>
    </Button>
  </Link>
);
