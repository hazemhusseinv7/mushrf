import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";

import { MdOutlineMarkEmailRead } from "react-icons/md";
import { TbDeviceMobileCheck } from "react-icons/tb";
import { LuFileQuestion } from "react-icons/lu";

const words = {
  title: "تواصل معنا",
  description:
    "نرحب بآرائك واستفساراتك! يمكنك التواصل مع فريقنا عبر القنوات المتاحة أدناه، وسنكون سعداء بمساعدتك في أي وقت.",
};

const cards = [
  {
    title: "البريد الإلكترونى",
    link: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
    icon: MdOutlineMarkEmailRead,
    content: (
      <p className="text-sm text-gray-500 dark:text-neutral-500 transition-colors duration-300">
        تواصل معنا عبر:{" "}
        <span className="text-main-blue font-medium dark:text-blue-500">
          {process.env.NEXT_PUBLIC_EMAIL}
        </span>
      </p>
    ),
  },
  {
    title: "رقم الهاتف",
    link: `tel:${process.env.NEXT_PUBLIC_PHONE}`,
    icon: TbDeviceMobileCheck,

    content: (
      <p className="text-sm text-gray-500 dark:text-neutral-500 transition-colors duration-300">
        أو يمكنك الاتصال بنا على:{" "}
        <span className="text-main-blue font-medium dark:text-blue-500">
          {process.env.NEXT_PUBLIC_PHONE}
        </span>
      </p>
    ),
  },
  {
    title: "الأسئلة الشائعة",
    link: "/frequently-asked-questions",
    icon: LuFileQuestion,

    content: (
      <p className="text-sm text-gray-500 dark:text-neutral-500 transition-colors duration-300">
        إجابات واضحة وسريعة عن أكثر الاستفسارات شيوعًا بين زوارنا.
      </p>
    ),
  },
];
export default function Page() {
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
              <div>
                <TextGenerateEffect
                  words={words.description}
                  className="mt-1 text-gray-600 dark:text-neutral-400"
                />
              </div>
            </div>
          </div>
          {/* End Col */}

          <div className="md:col-span-3">
            <div className="grid gap-3 sm:gap-6">
              {cards.map((card, i) => (
                // Card
                <Link
                  key={i}
                  className="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md dark:bg-neutral-900 dark:border-neutral-800 transition-shadow duration-300"
                  href={card.link || "#"}
                >
                  <div className="p-4 md:p-5">
                    <div className="flex gap-x-5">
                      <card.icon className="mt-1 shrink-0 size-5 text-gray-800 dark:text-neutral-200 group-hover:text-main-blue transition-colors duration-300" />

                      <div className="grow">
                        <h3 className="group-hover:text-main-blue font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200 transition-colors duration-300">
                          {card.title}
                        </h3>
                        {card.content}
                      </div>
                    </div>
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
