import Link from "next/link";
import { useRouter } from "next/router";

const LinkList = props => {
  const router = useRouter();
  return (
    <li>
      <Link href={`${props.url}`}>
        <a
          className={`block py-2 sm:pr-4 no-underline ${
            router.pathname == props.url ? "text-second font-medium" : ""
          } hover:text-second hover:font-normal duration-500 ease-in-out hover:no-underline transition sm:pl-3 capitalize md:bg-transparent md:p-0`}
          aria-current="page"
        >
          {props.name}
        </a>
      </Link>
    </li>
  );
};

export default LinkList;
