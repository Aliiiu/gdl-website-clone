import React from "react";
import { ClipLoader, ScaleLoader } from "react-spinners";

const Loader = props => {
  return (
    <ClipLoader
      color={`${props.color || "#ffffff"}`}
      size={21}
      loading={props.loading}
    />
  );
};

export const LoaderII = props => {
  return (
    <ScaleLoader
      color="#992333"
      height={21}
      width={2}
      loading={props.loading}
    />
  );
};

export default Loader;
