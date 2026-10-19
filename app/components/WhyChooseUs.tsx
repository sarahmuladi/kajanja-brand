const reasons = [
  {
    number: "01",
    title: "All Under One Roof",
    description:
      "Strategy, creativity, communication and digital solutions come together under one roof for a connected brand experience.",
  },
  {
    number: "02",
    title: "Bespoke Teams",
    description:
      "We bring together multidisciplinary teams tailored to the specific needs and ambitions of every client.",
  },
  {
    number: "03",
    title: "Financially Aligned",
    description:
      "Our solutions are designed around your ambitions, budget and vision, ensuring creativity remains practical and purposeful.",
  },
  {
    number: "04",
    title: "Rooted in Tanzania",
    description:
      "Based in Dar es Salaam, we understand the Tanzanian market while creating work with broader regional relevance.",
  },
  {
    number: "05",
    title: "Proven Across Sectors",
    description:
      "Our experience spans government, finance, insurance, healthcare, legal, technology, hospitality and events.",
  },
  {
    number: "06",
    title: "Rigorous Creative Process",
    description:
      "We combine strategic thinking with a disciplined creative process to produce work that is both beautiful and effective.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Why Kajanja Brand
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Built around your
            <span className="text-black"> ambition.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            We combine strategy, creativity and execution to create work
            that is both beautiful and effective.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid border-l border-t border-gray-200 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="group min-h-[300px] border-b border-r border-gray-200 p-8 transition-all duration-300 hover:bg-primary hover:text-white lg:p-10"
            >
              
              <div className="mt-16">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-500 group-hover:text-gray-400">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        {/* <div className="mt-16 flex flex-col gap-6 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-2xl font-medium tracking-tight sm:text-3xl">
            Work that is beautiful
            <span className="text-gray-400"> and effective.</span>
          </p>

          <a
            href="#contact"
            className="w-fit rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-1"
          >
            Start a Conversation →
          </a>
        </div> */}

      </div>
    </section>
  );
}