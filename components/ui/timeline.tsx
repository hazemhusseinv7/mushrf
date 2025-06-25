"use client";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";

import { useScroll, useTransform, motion } from "motion/react";

import { useTranslations } from "next-intl";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import FullScreenPreview from "@/components/FullScreenPreview";

interface TimelineEntry {
  title: string;
  description: string;
  images: string[];
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const t = useTranslations("HowItWorks");
  const words = t("title");

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl ps-4 mx-auto">
        <h2 className="mb-4 max-w-4xl">
          <TextGenerateEffect
            words={words || words}
            className="text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200"
          />
        </h2>
        {/* <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm"></p> */}
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-20 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start lg:max-w-xl md:w-full">
              <div className="h-10 absolute start-3 md:start-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:ps-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative ps-20 pe-4 md:ps-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              <div>
                <p className="mb-8 font-normal text-md md:text-lg text-neutral-800 dark:text-neutral-200">
                  {item.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {item.images.length > 0 &&
                    item.images.map((image, i) => (
                      <FullScreenPreview key={i} src={image} alt="App preview">
                        <Image
                          src={image}
                          alt="App preview"
                          width={230}
                          height={480}
                          className="h-52 md:h-80 lg:h-120 w-auto rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                      </FullScreenPreview>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:start-8 start-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
