import Link from "next/link";
import Image from "next/image";

import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

const items = [
  { name: "الشروط والأحكام", link: "/terms-and-conditions" },
  { name: "سياسة الخصوصية", link: "/privacy-policy" },
  { name: "الأسئلة الشائعة", link: "/frequently-asked-questions" },
];

const socialMedia = [
  { name: "Twitter", icon: FaXTwitter, link: process.env.NEXT_PUBLIC_TWITTER },
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
    <footer className="bg-gradient-to-t from-blue-100 to-transparent">
      <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
          <div>
            <Link
              className="flex items-center gap-2"
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
              <span className="text-lg font-medium text-zinc-950 focus:outline-hidden dark:text-white">
                منصة مشرف
              </span>
            </Link>
          </div>
          {/* End Col */}

          <ul className="text-center">
            {items.map((item, i) => (
              <li
                key={i}
                className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['-'] before:text-gray-300 dark:before:text-neutral-600"
              >
                <Link
                  className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200 transition-colors duration-300"
                  href={item.link || "#"}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* End Col */}

          {/* Social Brands */}
          <div className="md:text-end space-x-2">
            {socialMedia.map((item, i) => (
              <Link
                key={i}
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-300 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 transition-colors duration-300"
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
        {/* End Grid */}
      </div>
    </footer>
  );
};

export default Footer;
