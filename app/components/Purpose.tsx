export default function Purpose() {
  return (
    <section id="vision" className="bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Our Purpose
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Creating work that moves
            <span className="text-black"> brands forward.</span>
          </h2>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Mission */}
          <div className="group rounded-3xl bg-primary p-8 transition-all duration-300 hover:-translate-y-1 md:p-10">


            <h3 className="mb-6 text-3xl font-semibold tracking-tight text-white">
              Our Mission
            </h3>

            <p className="leading-8 text-white">
              To transform brands and businesses through crafted
              communication, creative strategic thinking and bespoke
              multidisciplinary solutions aligned to each client&apos;s
              ambitions, budget and vision.
            </p>
          </div>

          {/* Vision */}
          <div className="group rounded-3xl bg-primary p-8 text-white transition-all duration-300 hover:-translate-y-1 md:p-10">
            

            <h3 className="mb-6 text-3xl font-semibold tracking-tight">
              Our Vision
            </h3>

            <p className="leading-8 text-white">
              To be East Africa&apos;s most trusted integrated creative
              agency.
            </p>
          </div>

        </div>

        {/* Purpose statement */}
        {/* <div className="mt-20 border-t border-gray-200 pt-10">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
            Our Purpose
          </p>

          <p className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
            Partners for clients who want to be extraordinary.
          </p>
        </div> */}

      </div>
    </section>
  );
}