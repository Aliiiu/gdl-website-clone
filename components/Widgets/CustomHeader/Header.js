import { PageHeader } from "./header.style";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import BackImg from "../../../assets/Images/blogBackground.jpeg";
import { DetailTabs } from "../../DetailsComponent/DetailsTab";

export const HeaderTabBar = props => (
  <div className="border-b-[1px] border-[rgba(194,207,214,var(--tw-border-opacity))] border-opacity-[0.3] h-[60px]">
    <div className="flex justify-start md:justify-center h-full items-center overflow-x-auto px-[1.5rem] max-w-[1200px] mx-auto">
      <DetailTabs tabs={props.tabs} onPress={() => alert("nothing for now")} />
    </div>
  </div>
);

const CustomHeader = props => (
  <PageHeader
    {...props}
    className={`flex bg-opacity-10 justify-center items-center`}
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
          : `max-w-[1200px] md:px-[1.5rem] px-[1.25rem] mx-auto ${
              props.floatLeft ? "w-full" : ""
            }`
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
              className={`section-hint text-[rgba(31,26,23,var(--tw-text-opacity))] text-opacity-[0.9]`}
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
