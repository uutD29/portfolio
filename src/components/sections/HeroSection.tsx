import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section id="hero" className="">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="flex items-center gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 260,
              damping: 20 
            }}
            className="relative flex shrink-0 overflow-hidden rounded-full size-28 border"
          >
            <img
              src="/avatar.svg"
              alt="Uhud Tarbani"
              className="aspect-square h-full w-full object-cover"
            />
          </motion.div>

          <div className="flex flex-1 flex-col space-y-1.5">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:5xl font-bold tracking-tighter"
            >
              Hi, I'm Uhud 👋
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground"
            >
              IT Support specialist who builds websites on the side. Focused on making technology reliable, secure, and easy to use.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;