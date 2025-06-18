import { HeroParallax } from "@/components/ui/hero-parallax";

export const images = [
  "/preview/image-1.png",
  "/preview/image-2.png",
  "/preview/image-3.png",
  "/preview/image-4.png",
  "/preview/image-5.png",
  "/preview/image-6.png",
  "/preview/image-7.png",
  "/preview/image-8.png",
  "/preview/image-9.png",
  "/preview/image-10.png",
  "/preview/image-11.png",
  "/preview/image-12.png",
  "/preview/image-13.png",
  "/preview/image-14.png",
  "/preview/image-15.png",
];

const WhyUs = () => {
  return (
    <section id="why-us">
      <HeroParallax images={images} />
    </section>
  );
};

export default WhyUs;
