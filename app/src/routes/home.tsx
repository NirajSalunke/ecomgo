import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BackgroundBeams } from "@/components/ui/background-beams";
// import React from "react";
import { cn } from "@/lib/utils";
// import Image from "next/image";
import {
  IconShirt,
  IconDeviceLaptop,
  IconHome2,
  IconHeart,
  IconRun,
  IconBooks,
  IconPuzzle,
  IconShoppingCart,
} from "@tabler/icons-react";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
// import Link from "next/link";
export const Route = createFileRoute("/home")({
  component: RouteComponent,
});

function RouteComponent() {
  const features2 = [
    {
      title: "Fashion & Apparel",
      description:
        "Stay trendy with our collection of clothing, shoes, and accessories for all seasons.",
      icon: <IconShirt />,
    },
    {
      title: "Electronics & Gadgets",
      description:
        "Explore the latest in smartphones, laptops, and cutting-edge technology.",
      icon: <IconDeviceLaptop />,
    },
    {
      title: "Home & Living",
      description:
        "Upgrade your space with furniture, decor, and appliances tailored to your lifestyle.",
      icon: <IconHome2 />,
    },
    {
      title: "Health & Beauty",
      description:
        "Discover skincare, makeup, and wellness products to keep you feeling great.",
      icon: <IconHeart />,
    },
    {
      title: "Sports & Outdoors",
      description:
        "Gear up with equipment, apparel, and accessories for every adventure.",
      icon: <IconRun />,
    },
    {
      title: "Books & Stationery",
      description:
        "Dive into bestsellers or stock up on essentials for school and office needs.",
      icon: <IconBooks />,
    },
    {
      title: "Toys & Games",
      description:
        "Find joy for kids and adults with our collection of toys, games, and puzzles.",
      icon: <IconPuzzle />,
    },
    {
      title: "Groceries & Essentials",
      description:
        "Shop for daily essentials, snacks, and household items at unbeatable prices.",
      icon: <IconShoppingCart />,
    },
  ];
  const features = [
    {
      title: "Mega Sale: Up to 70% Off",
      description:
        "Shop your favorite products at jaw-dropping discounts during our Mega Sale.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Exclusive Deals for Members",
      description:
        "Sign up and get access to member-only deals and early-bird offers.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Flash Sale: Limited Time Offers",
      description:
        "Don't miss our hourly flash sales with unbeatable prices. Shop before it's gone!",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Shipping Service on All Orders",
      description:
        "Enjoy shipping Service on every order, no minimum spend required.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <main className="w-screen dark para bg-black ">
      <div className="relative z-20 py-10 lg:py-40  md:px-10  mx-auto">
        <div className="px-8">
          <h4 className="text-5xl Head lg:text-8xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            Packed with thousands of Products
          </h4>

          <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300 hidden md:flex">
            From trendy fashion to the latest gadgets, our store has everything
            you need. Discover unbeatable prices, exclusive deals, and a
            seamless shopping experience made just for you.
          </p>
        </div>

        <div className="relative ">
          <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className=" h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 md:px-10 mx-auto">
        {features2.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
      {/* <BackgroundBeams /> */}
    </main>
  );
}
const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/nike.png?alt=media&token=a39d2f87-0446-4d04-8fe5-859ee3252066"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full  object-contain object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Link
      href="https://youtu.be/TN70fjHPdCo?si=hDUClmS_dvw1fZ98"
      target="__blank"
      className="relative flex gap-10  h-full group/image"
    >
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          {/* TODO */}
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
          <img
            src="/thumb.jpg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/nike.png?alt=media&token=a39d2f87-0446-4d04-8fe5-859ee3252066",
    "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/addidas.png?alt=media&token=52cfb02c-1f32-4691-aee8-83f93af86539",
    "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/apple.png?alt=media&token=00a2cd4b-a5fd-4b9b-b681-4ddc68f9013a",
    "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/google.png?alt=media&token=aaaec90f-2cee-45df-96fa-f6bdfaed447b",
    "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/samsungpng.png?alt=media&token=a216d779-1746-4b37-878e-5d114e29e258",
  ];
  const images1 = [
    "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/zara.png?alt=media&token=c079a618-cd1a-4d57-abf4-ffd2c2f0b8b9",
    "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/levi.png?alt=media&token=f66b29ed-bbe8-4cdb-83e8-7ebc50a6660e",
    "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/tommy.png?alt=media&token=739717ef-047b-487b-a452-fdd38dacae90",
    "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/armour.png?alt=media&token=88ec00f4-c777-4068-a49c-7ad92b29a14b",
    "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/puma.png?alt=media&token=29399bc3-0299-4764-99e6-8e11f65bfe2e",
    "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/north.png?alt=media&token=e658ef43-eea9-450f-9af7-7050947080c3",
    "https://firebasestorage.googleapis.com/v0/b/e-com-20f8d.appspot.com/o/reebook.png?alt=media&token=29d08aa2-dc0c-4786-aae5-8e25f1b65269",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images1.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center justify-center  relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute md:relative s-right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
