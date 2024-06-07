import React from "react";

interface RootContainerProps {
  children?: React.ReactNode;
}

const RootContainer: React.FC<RootContainerProps> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default RootContainer;
