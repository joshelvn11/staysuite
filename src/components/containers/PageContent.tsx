import React from "react";

interface PageContentProps {
  children?: React.ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return <div className="p-5">{children}</div>;
};

export default PageContent;
