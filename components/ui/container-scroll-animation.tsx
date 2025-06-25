"use client";

import Image from "next/image";

import { ReactNode, useEffect, useRef, useState } from "react";

import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export const ContainerScroll = ({
  titleComponent,
}: {
  titleComponent?: string | ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  // const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const widget1X = useTransform(scrollYProgress, [0, 0.3], [500, 0]);
  const widget2X = useTransform(scrollYProgress, [0.2, 0.4], [500, 0]);
  const widget3X = useTransform(scrollYProgress, [0.4, 0.6], [-500, 0]);
  const widget4X = useTransform(scrollYProgress, [0.6, 0.8], [-500, 0]);

  return (
    <div
      className="flex items-center justify-center relative py-20"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header
          //translate={translate}
          titleComponent={titleComponent}
        />
        <Card
          rotate={rotate}
          //translate={translate}
          scale={scale}
        >
          <div>
            <motion.div style={{ x: widget1X }}>
              <Image
                className="mx-auto rounded-2xl size-full"
                src="/widgets/widget-1.svg"
                width={375}
                height={251}
                alt="Widget 1"
                priority
              />
            </motion.div>

            <motion.div style={{ x: widget2X }}>
              <Image
                className="mx-auto rounded-2xl size-full"
                src="/widgets/widget-2.svg"
                width={375}
                height={227}
                alt="Widget 2"
                priority
              />
            </motion.div>

            <motion.div style={{ x: widget3X }}>
              <Image
                className="mx-auto rounded-2xl size-full"
                src="/widgets/widget-3.svg"
                width={375}
                height={227}
                alt="Widget 3"
                priority
              />
            </motion.div>

            <motion.div style={{ x: widget4X }}>
              <Image
                className="mx-auto rounded-2xl size-full"
                src="/widgets/widget-4.svg"
                width={375}
                height={85}
                alt="Widget 4"
                priority
              />
            </motion.div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  // translate,
  titleComponent,
}: {
  //translate: MotionValue<number>;
  titleComponent?: string | ReactNode;
}) => {
  return (
    <motion.div
      // style={{
      //   translateY: translate,
      // }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  // translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="mt-8 mx-auto w-fit h-auto border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full rounded-2xl bg-[#F6F8FE] md:rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
};
