"use client";

import Image from "next/image";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words =
  "منصة مشرف هي الحل الرقمي المتكامل لإدارة المشاريع والأنشطة المتعلقة بالمقاولات والإشراف الفني والمالي للمباني، حيث توفر تجربة ذكية ومتطورة تساهم في تحسين الأداء وتسريع تنفيذ المشاريع بجودة وكفاءة عالية";

const Hero = () => {
  return (
    <section className="relative bg-linear-to-bl from-blue-300/70 via-transparent dark:from-blue-950 dark:via-transparent">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="max-w-5xl mx-auto -mt-10 mb-10">
                <TextGenerateEffect
                  words={words}
                  className="text-lg md:text-2xl text-zinc-800 dark:text-white"
                />
              </h1>
              <span className="text-4xl md:text-[6rem] font-bold text-zinc-950 mt-1 leading-none -mb-20">
                منصة مشرف
              </span>
            </>
          }
        >
          <Image
            src={`/why-us/image-1.png`}
            alt="App preview"
            height={812}
            width={375}
            className="mx-auto rounded-2xl size-full"
            priority
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
};

export default Hero;
