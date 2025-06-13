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
      className="py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((image) => (
            <PreviewCard image={image} translate={translateX} key={image} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20">
          {secondRow.map((image) => (
            <PreviewCard
              image={image}
              translate={translateXReverse}
              key={image}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((image) => (
            <PreviewCard image={image} translate={translateX} key={image} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        منصة مشرف
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        منصة مشرف هي الحل الرقمي المتكامل لإدارة المشاريع والأنشطة المتعلقة
        بالمقاولات والإشراف الفني والمالي للمباني، حيث توفر تجربة ذكية ومتطورة
        تساهم في تحسين الأداء وتسريع تنفيذ المشاريع بجودة وكفاءة عالية
      </p>
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
      <div className="block group-hover/card:shadow-2xl ">
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 375px"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt="App preview"
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/card:opacity-80 bg-zinc-700 pointer-events-none" />
    </motion.div>
  );
};
