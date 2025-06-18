"use client";

import { useEffect, useState } from "react";

import { Button } from "@heroui/react";

import { IconChevronUp } from "@tabler/icons-react";

const ScrollTopTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      className="fixed bottom-10 start-10 min-w-0 px-2 z-50"
      onPress={handleScroll}
    >
      <IconChevronUp />
    </Button>
  );
};

export default ScrollTopTop;
