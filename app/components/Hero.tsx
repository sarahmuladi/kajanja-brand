export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-secondary px-6 pt-24 lg:px-12"
    style={{backgroundImage: "url('Images/img1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur" />

      <div className="absolute inset-0 bg-primary/20" />
    
      {/* Main content */}
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-5xl">

          <div className="mb-8 flex items-center gap-4">
            <div className=" w-12" />

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-white">
              Integrated Brand, Creative & Digital Agency
            </p>
          </div>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[96px] text-white">
            Partners for
            <br />
            clients who want
            <br />
            to be{" "}
            <span className="text-white">
              extraordinary.
            </span>
          </h1>

          <div className="mt-10 max-w-2xl">
            <p className="text-lg leading-8 text-white md:text-xl">
              We transform brands and businesses through crafted
              communication, creative thinking, and bespoke solutions
              designed around your ambitions.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="group flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
            >
              Explore What We Do
            </a>

            <a
              href="#about"
              className="rounded-full bg-accent px-7 py-4 text-sm text-white font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
            >
              Our Story
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}