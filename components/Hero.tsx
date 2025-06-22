"use client";

import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const AppUrl = {
  playStore: process.env.NEXT_PUBLIC_PLAY_STORE,
  appStore: process.env.NEXT_PUBLIC_APP_STORE,
};

const Hero = () => {
  const t = useTranslations("Hero");

  const words = t("title");

  return (
    <section className="relative bg-linear-to-bl from-blue-300/70 via-transparent dark:from-blue-950 dark:via-transparent">
      <div className="flex flex-col overflow-hidden py-32 md:py-40">
        <div className="flex max-md:flex-col justify-center items-center gap-4 relative z-40">
          <Link
            href={AppUrl.playStore || "#"}
            className="hover:opacity-70 transition-opacity duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="w-52 h-auto md:h-20 md:w-auto"
              src="/badges/play_store.svg"
              width={300}
              height={80}
              alt="Play store badge"
              priority
            />
          </Link>

          <Link
            href={AppUrl.appStore || "#"}
            className="hover:opacity-70 transition-opacity duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="w-52 h-auto md:h-20 md:w-auto"
              src="/badges/app_store.svg"
              width={300}
              height={80}
              alt="App store badge"
              priority
            />
          </Link>
        </div>

        <ContainerScroll
          titleComponent={
            <>
              <h1 className="max-w-3xl mx-auto -mt-10 mb-10 px-4">
                <TextGenerateEffect
                  words={words}
                  className="text-lg md:text-2xl text-zinc-800 dark:text-zinc-300"
                />
              </h1>
              <span className="text-4xl md:text-[6rem] font-bold text-zinc-950 dark:text-white mt-1 leading-none -mb-20">
                {t("name")}
              </span>
            </>
          }
        />
      </div>
    </section>
  );
};

export default Hero;
