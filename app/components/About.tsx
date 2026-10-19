export default function About() {
  return (
    <section id="about" className="bg-primary px-6 py-24 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white">
            About Kajanja Brand
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            We help brands become
            <span className="text-white"> extraordinary.</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <p className="text-xl leading-9 text-gray-300">
              Kajanja Brand Company Limited is an integrated brand,
              creative and digital agency headquartered in Dar es Salaam,
              Tanzania.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              Since 2017, we have helped brands and businesses transform
              through communicative design and creative strategic thinking.
              We bring together bespoke multidisciplinary teams to create
              solutions that are aligned with each client&apos;s ambitions,
              budget and vision.
            </p>
          </div>

          <div className="border-t border-white pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="text-3xl font-medium leading-tight">
              Everything is united
              <span className="text-white"> under one roof.</span>
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              Our partnership approach allows strategy, creativity,
              communication and digital solutions to work together as one
              connected experience.
            </p>

            {/* <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
              <span className="h-px w-10 bg-gray-700" />
              <span>Dar es Salaam, Tanzania</span>
            </div> */}
          </div>

        </div>

      </div>
    </section>
  );
}