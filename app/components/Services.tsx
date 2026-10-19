const services = [
  {
    number: "01",
    title: "Digital Marketing",
    description:
      "Building digital presence and connecting brands with the right audiences.",
    items: [
      "Social Media Management",
      "SEO",
      "Email Marketing",
      "Paid Advertising",
      "Analytics & Reporting",
    ],
  },
  {
    number: "02",
    title: "PR & Advertising",
    description:
      "Creating communication strategies and campaigns that put brands in the right conversation.",
    items: [
      "PR Strategy & Planning",
      "Media Relations",
      "Campaign Conceptualization",
      "Press Releases",
      "Event Communication & Coverage",
    ],
  },
  {
    number: "03",
    title: "Content Creation",
    description:
      "Turning ideas and stories into compelling content across different formats.",
    items: [
      "Copywriting & Scriptwriting",
      "Photography & Videography",
      "Motion Graphics & Animation",
      "Podcast & Audio",
      "Storytelling & Editorial",
    ],
  },
  {
    number: "04",
    title: "Branding & Strategy",
    description:
      "Building distinctive brands through strategic thinking, research and creative direction.",
    items: [
      "Identity Development",
      "Brand Audits & Repositioning",
      "Market & Competitor Research",
      "Naming & Taglines",
      "Brand Voice & Guidelines",
    ],
  },
  {
    number: "05",
    title: "Design & Printing",
    description:
      "Bringing brand identities to life through thoughtful design and physical experiences.",
    items: [
      "Graphic Design & UI/UX",
      "Marketing Collateral",
      "Stationery",
      "Large Format & Outdoor Printing",
      "Packaging & Signage",
      "Point-of-Sale Materials",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-primary px-6 py-24 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white">
            What We Do
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Everything your brand needs,
            <span className="text-white"> under one roof.</span>
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-gray-400">
            From strategy and branding to digital marketing, content,
            advertising and design, we bring complementary disciplines
            together to create meaningful brand experiences.
          </p>
        </div>

        {/* Services */}
        <div className="grid border-l border-t border-gray-800 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group border-b border-r border-gray-800 p-8 transition-colors duration-300 hover:bg-white hover:text-black lg:p-10"
            >
              {/* <div className="flex items-start justify-between">
                <span className="text-sm text-gray-500">
                  {service.number}
                </span>

                <span className="text-xl text-gray-600 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div> */}

              <h3 className="mt-12 text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400 group-hover:text-gray-600">
                {service.description}
              </p>

              <ul className="mt-8 space-y-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-300 group-hover:text-gray-700"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}