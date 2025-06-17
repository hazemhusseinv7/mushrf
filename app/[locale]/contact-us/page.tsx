import Link from "next/link";

import { getTranslations } from "next-intl/server";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import { MdOutlineMarkEmailRead } from "react-icons/md";
import { TbDeviceMobileCheck } from "react-icons/tb";
import { LuFileQuestion } from "react-icons/lu";

import { cn } from "@/lib/utils";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";

export default async function Page() {
  const t = await getTranslations("ContactUs");

  const words = {
    title: t("title"),
    description: t("description"),
  };

  const cards = [
    {
      title: t("cards.card_1.title"),
      link: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
      icon: MdOutlineMarkEmailRead,
      className: "col-span-4",
      content: (
        <p className="text-sm text-gray-500 dark:text-neutral-500 transition-colors duration-300">
          {t("cards.card_1.description")}{" "}
          <span className="text-main-blue font-medium dark:text-blue-500">
            {process.env.NEXT_PUBLIC_EMAIL}
          </span>
        </p>
      ),
    },
    {
      title: t("cards.card_2.title"),
      link: `tel:${process.env.NEXT_PUBLIC_PHONE}`,
      icon: TbDeviceMobileCheck,
      className: "col-span-4",
      content: (
        <p className="text-sm text-gray-500 dark:text-neutral-500 transition-colors duration-300">
          {t("cards.card_2.description")}{" "}
          <span className="text-main-blue font-medium dark:text-blue-500">
            {process.env.NEXT_PUBLIC_PHONE}
          </span>
        </p>
      ),
    },
    {
      title: t("cards.card_3.title"),
      link: "/frequently-asked-questions",
      icon: LuFileQuestion,
      className: "col-span-4",
      content: (
        <p className="text-sm text-gray-500 dark:text-neutral-500 transition-colors duration-300">
          {t("cards.card_3.description")}
        </p>
      ),
    },
    {
      link: `${process.env.NEXT_PUBLIC_WHATSAPP}`,
      className: "col-span-1",
      content: <FaWhatsapp className="size-7" />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      link: `${process.env.NEXT_PUBLIC_INSTAGRAM}`,
      className: "col-span-1",
      content: <FaInstagram className="size-7" />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      link: `${process.env.NEXT_PUBLIC_FACEBOOK}`,
      className: "col-span-1",
      content: <FaFacebook className="size-7" />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      link: `${process.env.NEXT_PUBLIC_YOUTUBE}`,
      className: "col-span-1",
      content: <FaYoutube className="size-7" />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-bl from-blue-300/70 via-transparent dark:from-blue-950 dark:via-transparent">
      <div className="max-w-[85rem] px-4 pt-32 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
        {/* Grid */}
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="max-w-xs">
              <h1>
                <TextGenerateEffect
                  words={words.title}
                  className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white"
                />
              </h1>
              <span>
                <TextGenerateEffect
                  words={words.description}
                  className="mt-1 text-gray-600 dark:text-neutral-400"
                />
              </span>
            </div>
          </div>
          {/* End Col */}

          <div className="md:col-span-3">
            <h2 className="mb-4 text-xl font-medium">{t("cards.title")}</h2>
            <div className="grid grid-cols-4 gap-3 sm:gap-6">
              {cards.map((card, i) => (
                // Card
                <Link
                  key={i}
                  className={cn(
                    card.className,
                    "group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md dark:bg-neutral-900 dark:border-neutral-800 transition-shadow duration-300"
                  )}
                  href={card.link || "#"}
                  target={card.target}
                  rel={card.rel}
                >
                  <div className="p-4 md:p-5">
                    {card.icon ? (
                      <div className="flex gap-x-5">
                        <card.icon className="mt-1 shrink-0 size-5 text-gray-800 dark:text-neutral-200 group-hover:text-main-blue transition-colors duration-300" />

                        <div className="grow">
                          <h3 className="group-hover:text-main-blue font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200 transition-colors duration-300">
                            {card.title}
                          </h3>
                          {card.content}
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-center items-center">
                        {card.content}
                      </div>
                    )}
                  </div>
                </Link>
                // End Card
              ))}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </main>
  );
}
