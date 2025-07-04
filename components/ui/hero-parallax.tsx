"use client";

import Image from "next/image";

import React from "react";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";

import { useTranslations } from "next-intl";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

import FullScreenPreview from "@/components/FullScreenPreview";

export const HeroParallax = ({ images }: { images: string[] }) => {
  const firstRow = images.slice(0, 5);
  const secondRow = images.slice(5, 10);
  const thirdRow = images.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        dir="ltr"
      >
        <motion.div className="flex flex-row-reverse gap-x-10 md:gap-x-20 mb-20">
          {firstRow.map((image) => (
            <PreviewCard image={image} translate={translateX} key={image} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 gap-x-10 md:gap-x-20">
          {secondRow.map((image) => (
            <PreviewCard
              image={image}
              translate={translateXReverse}
              key={image}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse gap-x-10 md:gap-x-20">
          {thirdRow.map((image) => (
            <PreviewCard image={image} translate={translateX} key={image} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const t = useTranslations("WhyUs");

  const words = {
    title: t("title"),
    highlight: t("highlight"),
  };
  const youtubeVideoUrl = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_URL;
  const isValidYoutubeUrl = youtubeVideoUrl?.startsWith(
    "https://www.youtube.com/embed/"
  );

  return (
    <div className="max-w-7xl relative mx-auto px-4 w-full left-0 top-0 z-50">
      {isValidYoutubeUrl && (
        <>
          <span>
            <TextGenerateEffect
              words={words.highlight}
              className="text-2xl md:text-7xl text-center font-bold dark:text-white mb-10"
            />
          </span>
          <iframe
            className="max-w-5xl w-full aspect-video mx-auto mb-40"
            src={youtubeVideoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </>
      )}

      <h2>
        <TextGenerateEffect
          words={words.title}
          className="text-2xl md:text-7xl font-bold dark:text-white"
        />
      </h2>
      <span className="block max-w-4xl mt-8 text-base md:text-xl dark:text-neutral-200">
        {t.rich("description", {
          name: (chunks) => (
            <PointerHighlight
              rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
              pointerClassName="text-blue-500 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10">{chunks}</span>
            </PointerHighlight>
          ),
        })}
      </span>
    </div>
  );
};

export const PreviewCard = ({
  image,
  translate,
}: {
  image: string;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={image}
      className="group/card w-[200px] h-[434px] md:w-[300px] md:h-[650px] lg:w-[375px] lg:h-[812px] relative shrink-0"
    >
      <div className="block group-hover/card:shadow-2xl">
        <FullScreenPreview src={image} alt="App preview">
          <Image
            src={image}
            fill
            sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 375px"
            className="object-cover object-left-top absolute h-full w-full inset-0"
            alt="App preview"
          />
        </FullScreenPreview>
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/card:opacity-80 bg-zinc-700 pointer-events-none" />
    </motion.div>
  );
};
