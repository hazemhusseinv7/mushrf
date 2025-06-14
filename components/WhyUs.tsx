import { HeroParallax } from "@/components/ui/hero-parallax";

export const images = [
  "/why-us/image-1.png",
  "/why-us/image-2.png",
  "/why-us/image-3.png",
  "/why-us/image-4.png",
  "/why-us/image-5.png",
  "/why-us/image-6.png",
  "/why-us/image-7.png",
  "/why-us/image-8.png",
  "/why-us/image-9.png",
  "/why-us/image-10.png",
  "/why-us/image-11.png",
  "/why-us/image-12.png",
  "/why-us/image-13.png",
  "/why-us/image-14.png",
  "/why-us/image-15.png",
];

const WhyUs = () => {
  return (
    <section id="why-us">
      <HeroParallax images={images} />
    </section>
  );
};

export default WhyUs;
