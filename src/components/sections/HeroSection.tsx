const HeroSection = () => {
  return (
    <section id="hero" className="">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="flex items-center gap-6">
          <div className="relative flex shrink-0 overflow-hidden rounded-full size-28 border">
            <img
              src="/avatar.svg"
              alt="Uhud Tarbani"
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col space-y-1.5">
            <h1 className="text-3xl md:5xl font-bold tracking-tighter">
              Hi, I'm Uhud 👋
            </h1>

            <p className="text-lg text-muted-foreground">
              IT Support specialist who builds websites on the side. Focused on making technology reliable, secure, and easy to use.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;