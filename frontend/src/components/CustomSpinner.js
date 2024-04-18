import React from "react";
import { Spinner } from "@material-tailwind/react";

const CustomSpinner = () => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center ">
      <Spinner className="h-16 w-16" color="blue" />
    </div>
  );
};

export default CustomSpinner;
