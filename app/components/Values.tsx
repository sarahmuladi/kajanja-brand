const values = [
{
number: "01",
title: "Craftsmanship",
description:
"We care deeply about the quality, detail and effectiveness of everything we create.",
image: "/Images/craftsmanship.jpg",
},
{
number: "02",
title: "Partnership",
description:
"We work closely with our clients, building relationships based on collaboration and shared ambition.",
image: "/Images/partnership.jpg",
},
{
number: "03",
title: "Flexibility",
description:
"We adapt our approach to meet different needs, challenges, budgets and opportunities.",
image: "/Images/flexibility.jpg",
},
{
number: "04",
title: "Clarity",
description:
"We make ideas, communication and creative solutions clear, purposeful and easy to understand.",
image: "/Images/clarity.jpg",
},
{
number: "05",
title: "Integrity",
description:
"We operate with honesty, responsibility and respect in the way we work and serve our clients.",
image: "/Images/integrity.jpg",
},
{
number: "06",
title: "Innovation",
description:
"We embrace new ideas and creative thinking to find better ways of solving problems.",
image: "/Images/innovation.jpg",
},
];

export default function Values() {
return ( <section className="bg-white px-6 py-24 lg:px-12"> 
<div className="mx-auto max-w-7xl">
{/* Heading */} 
<div className="mb-16 justify-between gap-6 lg:flex-row lg:items-end"> 
  <div> 
    <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
What Guides Us </p>

        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Our Core
          <span className="text-black"> Values.</span>
        </h2>
      </div>

      <p className="mt-4 leading-7 text-black">
        The principles behind how we think, create, collaborate and
        deliver meaningful work for our clients.
      </p>
    </div>

    {/* Values */}
    <div className="grid border-l border-t border-gray-200 sm:grid-cols-2 lg:grid-cols-3">
      {values.map((value) => (
        <div
          key={value.number}
          className="group relative min-h-[280px] overflow-hidden border-b border-r border-gray-200"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `url('${value.image}')`,
            }}
          />

          {/* Blue overlay */}
          <div className="absolute inset-0 bg-[#0135bb]/65 transition-colors duration-300 group-hover:bg-[#0135bb]/50" />

          {/* Content */}
          <div className="relative z-10 mt-16 min-h-[280px] p-8 text-white lg:p-10">
            <h3 className="text-2xl font-semibold tracking-tight">
              {value.title}
            </h3>

            <p className="mt-4 leading-7 text-white/80">
              {value.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


);
}
