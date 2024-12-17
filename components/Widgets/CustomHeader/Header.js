import { PageHeader } from "./header.style";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import BackImg from "../../../assets/Images/blogBackground.jpeg";

const CustomHeader = props => (
  <PageHeader
    {...props}
    className={"flex bg-opacity-10 justify-center items-center"}
    style={{
      backgroundImage: props.hasBackImg
        ? `url(${props.imgUrl?.src || BackImg.src})`
        : null,
      height: "100%",
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div
      className={`${
        props.hasBackImg
          ? "w-full flex flex-col items-center justify-center text-center min-h-[420px] bg-opacity-95 bg-[rgba(255,236,239,var(--tw-bg-opacity))]"
          : `container px-4 xl:px-28 ${props.floatLeft ? "w-full" : ""}`
      }`}
    >
      <div className="flex flex-col items-center">
        {props.content || (
          <>
            {!props.noIcon && (
              <div className="text-7xl text-opacity-[1] text-[rgba(162,166,168,var(--tw-text-opacity))]">
                {props.icon || <IoChatboxEllipsesOutline />}
              </div>
            )}
            <h1
              className={`section-header ${
                props.noIcon && "mb-[0.75rem] leading-[1.1]"
              }`}
            >
              {props.name || "Testimonials"}
            </h1>
            <p
              className={
                "section-hint text-[rgba(31,26,23,var(--tw-text-opacity))] text-opacity-[0.9]"
              }
            >
              {props.sub || "Our Customers can speak for us"}
            </p>
          </>
        )}
      </div>
    </div>
  </PageHeader>
);

export default CustomHeader;
