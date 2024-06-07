"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

const NavigationMenu: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <nav className="flex items-center gap-5">
      <a href="/">Home</a>
      <a href="/accommodation">Accommodation</a>
      <a href="/gallery">Gallery</a>
      <a href="/about">About Us</a>
      <a href="/contact">Contact</a>
    </nav>
  ) : (
    <Drawer direction="right">
      <DrawerTrigger>
        <HamburgerMenuIcon style={{ width: "24px", height: "24px" }} />
      </DrawerTrigger>
      <DrawerContent className="p-5">
        <DrawerTrigger>
          <Cross1Icon style={{ width: "24px", height: "24px" }} />
        </DrawerTrigger>
        <nav className="flex flex-col items-start gap-6 pt-7">
          <a href="/">Home</a>
          <a href="/accommodation">Accommodation</a>
          <a href="/gallery">Gallery</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default NavigationMenu;
