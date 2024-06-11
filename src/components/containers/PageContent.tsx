import React from "react";

interface PageContentProps {
  children?: React.ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <div className="p-5 flex justify-center">
      <div className="w-full max-w-7xl">{children}</div>
    </div>
  );
};

export default PageContent;
