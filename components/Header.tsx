"use client";

import Link from "next/link";

import { useState } from "react";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

import ChangeLang from "./ChangeLang";

import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Header");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const items = [
    {
      name: t("why-us"),
      link: "/#why-us",
    },
    {
      name: t("features"),
      link: "/#features",
    },
    {
      name: t("how-it-works"),
      link: "/#how-it-works",
    },
  ];

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={items} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" href="/contact-us">
              {t("contact-us")}
            </NavbarButton>

            <ChangeLang />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {items.map((item, i) => (
              <Link
                key={`mobile-link-${i}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                href="/contact-us"
              >
                {t("contact-us")}
              </NavbarButton>

              <ChangeLang />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
};

export default Header;
