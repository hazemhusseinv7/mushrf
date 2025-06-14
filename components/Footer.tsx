import Link from "next/link";
import Image from "next/image";

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaCopyright,
} from "react-icons/fa6";

const footerLists = [
  {
    title: "الشركة",
    items: [
      { name: "لماذا نحن", link: "/#why-us" },
      { name: "المميزات", link: "/#features" },
      { name: "كيف تعمل المنصة", link: "/#how-it-works" },
      { name: "تواصل معنا", link: "/contact-us" },
    ],
  },
  {
    title: "القوانين",
    items: [
      { name: "الشروط والأحكام", link: "/terms-and-conditions" },
      { name: "سياسة الخصوصية", link: "/privacy-policy" },
      { name: "الأسئلة الشائعة", link: "/frequently-asked-questions" },
    ],
  },
];

const socialMedia = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: process.env.NEXT_PUBLIC_FACEBOOK,
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: process.env.NEXT_PUBLIC_INSTAGRAM,
  },
  {
    name: "Whatsapp",
    icon: FaWhatsapp,
    link: process.env.NEXT_PUBLIC_WHATSAPP,
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-200 to-transparent">
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
                منصة مشرف
              </span>
            </Link>
          </div>
          {/* End Col */}

          {footerLists.map((list, i) => (
            <div key={i}>
              <span className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
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
        </div>
        {/* End Grid */}

        <div className="pt-5 mt-5 border-t border-gray-50/70 dark:border-neutral-700">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap justify-between items-center gap-2">
                <span className="flex items-center gap-1 text-sm text-gray-700 dark:text-neutral-400">
                  <FaCopyright />
                  {new Date().getFullYear()}
                  <span>
                    <Link
                      href="/"
                      className="hover:text-main-blue transition-colors duration-300"
                    >
                      منصة مشرف
                    </Link>
                    .
                  </span>
                  جميع الحقوق محفوظة.
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-3">
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
                    <item.icon className="shrink-0 size-4" />
                  </Link>
                ))}
              </div>
              {/* End Social Brands */}
            </div>
            {/* End Col */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
