import React, { useState } from "react";
// import { MultiStepLoader as Loader } from "../ui";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
const loadingStates = [
  {
    text: "Loading the essentials...",
  },
  {
    text: "Almost there, hang tight!",
  },
  {
    text: "Getting everything ready for you!",
  },
];
const LoaderScreen = () => {
  return (
    <div className="w-screen   h-screen flex items-center justify-center ">
      <Loader
        loadingStates={loadingStates}
        loading={true}
        loop
        duration={1500}
      />
    </div>
  );
};

export default LoaderScreen;
