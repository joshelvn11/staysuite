import React from "react";
import { NavigationMenu } from "@/components";

interface HeaderProps {
  title: String;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="p-5 flex justify-between">
      <h1 className="text-3xl">{props.title}</h1>
      <NavigationMenu></NavigationMenu>
    </header>
  );
};

export default Header;
