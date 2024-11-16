import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { products } from "@/constants";
import Signup from "@/components/Signup";
import { Vortex } from "@/components/ui/vortex";
export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <main className="w-screen bg-black ">
      <HeroParallax products={products} />
      <LampContainer className="">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: -30 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-100 to-slate-700 py-4 bg-clip-text text-center  Head font- tracking-tight text-transparent text-8xl md:text-9xl"
        >
          Safer Easier
          <br className="sm:hidden" /> Faster
        </motion.h1>
      </LampContainer>
      <Vortex backgroundColor="black" className="">
        <Signup />
      </Vortex>
    </main>
  );
}
