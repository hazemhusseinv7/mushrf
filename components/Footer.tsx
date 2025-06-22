import Link from "next/link";
import Image from "next/image";

import { getTranslations } from "next-intl/server";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaCopyright,
  FaAppStoreIos,
} from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";

const socialMedia = [
  {
    name: "Whatsapp",
    icon: FaWhatsapp,
    link: process.env.NEXT_PUBLIC_WHATSAPP,
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: process.env.NEXT_PUBLIC_INSTAGRAM,
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: process.env.NEXT_PUBLIC_FACEBOOK,
  },
  {
    name: "Youtube",
    icon: FaYoutube,
    link: process.env.NEXT_PUBLIC_YOUTUBE,
  },
];

const Footer = async () => {
  const t = await getTranslations("Footer");

  const footerLists = [
    {
      title: t("lists.list_1.title"),
      items: [
        { name: t("lists.list_1.items.item_1"), link: "/#why-us" },
        { name: t("lists.list_1.items.item_2"), link: "/#features" },
        { name: t("lists.list_1.items.item_3"), link: "/#how-it-works" },
        { name: t("lists.list_1.items.item_4"), link: "/contact-us" },
      ],
    },
    {
      title: t("lists.list_2.title"),
      items: [
        { name: t("lists.list_2.items.item_1"), link: "/terms-and-conditions" },
        { name: t("lists.list_2.items.item_2"), link: "/privacy-policy" },
        {
          name: t("lists.list_2.items.item_3"),
          link: "/frequently-asked-questions",
        },
      ],
    },
  ];

  const qrCodes = [
    {
      title: t("qr_code.play_store"),
      icon: BiLogoPlayStore,
      image: "/qr-codes/play-store.svg",
    },
    {
      title: t("qr_code.app_store"),
      icon: FaAppStoreIos,
      image: "/qr-codes/app-store.svg",
    },
  ];

  return (
    <footer className="bg-gradient-to-t from-blue-200 to-transparent dark:from-main-blue/20 dark:to-transparent">
      <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
          <div className="col-span-full lg:col-span-1">
            <Link
              className="flex items-center gap-2 focus:outline-hidden focus:opacity-80"
              href="/"
              aria-label="Logo"
            >
              <Image
                className="size-11"
                src={"/logo/logo.svg"}
                width={44}
                height={44}
                alt={"Logo"}
              />
              <span className="text-lg font-medium text-zinc-950">
                {t("name")}
              </span>
            </Link>
          </div>
          {/* End Col */}

          {footerLists.map((list, i) => (
            <div key={i}>
              <span className="text-sm font-semibold text-gray-900 uppercase dark:text-neutral-100">
                {list.title}
              </span>

              <ul className="mt-3 grid space-y-3 text-sm">
                {list.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200 transition-colors duration-300"
                      href={item.link}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            // End Col
          ))}

          {qrCodes.map((ar_code, i) => (
            <div key={i}>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900 uppercase dark:text-neutral-100">
                  {ar_code.title}
                </span>
                <ar_code.icon />
              </div>

              {ar_code.image && (
                <Image
                  className="size-[100px] mt-3"
                  src={ar_code.image}
                  width={100}
                  height={100}
                  alt="App QR Code"
                />
              )}
            </div>
            // End Col
          ))}
        </div>
        {/* End Grid */}

        <div className="pt-5 mt-5 border-t border-gray-50/70 dark:border-neutral-800">
          <div className="sm:flex sm:justify-between sm:items-center space-y-2">
            <div className="sm:order-2 flex flex-wrap justify-between items-center gap-3">
              {/* Social Brands */}
              <div className="space-x-4">
                {socialMedia.map((item, i) => (
                  <Link
                    key={i}
                    className="inline-block text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200 transition-colors duration-300"
                    href={item.link || "#"}
                    aria-label={item.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon className="shrink-0 size-4.5 lg:size-4" />
                  </Link>
                ))}
              </div>
              {/* End Social Brands */}
            </div>

            <div className="sm:order-1 flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap justify-between items-center gap-2">
                <span className="flex items-center gap-1 text-sm text-gray-700 dark:text-neutral-400">
                  <FaCopyright className="text-gray-700 dark:text-neutral-400" />
                  {new Date().getFullYear()}
                  {t.rich("copyright", {
                    name: (chunks) => (
                      <span>
                        <Link
                          href="/"
                          className="hover:text-main-blue transition-colors duration-300"
                        >
                          {chunks}
                        </Link>
                        .
                      </span>
                    ),
                  })}
                </span>
              </div>
            </div>
            {/* End Col */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
