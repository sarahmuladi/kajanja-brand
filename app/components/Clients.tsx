const clients = [
  { name: "Client 1", image: "/Images/asilicafe.jpg" },
  { name: "Client 2", image: "/Images/piku.jpg" },
  { name: "Client 3", image: "/Images/abri.jpg" },
  { name: "Client 4", image: "/Images/comnet.jpg" },
  { name: "Client 5", image: "/Images/liaison.jpg" },
  { name: "Client 6", image: "/Images/lumumba.jpg" },
  { name: "Client 7", image: "/Images/rahisi.jpg" },
  { name: "Client 8", image: "/Images/sanlam.png" },
  { name: "Client 9", image: "/Images/samiafoundation.jpg" },
  { name: "Client 10", image: "/Images/unicef.png" },
  { name: "Client 11", image: "/Images/gvttz.jpg" },
  { name: "Client 12", image: "/Images/zanzibar.jpg" },
];

export default function Clients() {
  return (
    <section className="bg-white px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
              Our Clients
            </p>

            {/* <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Trusted by brands
              <span className="text-gray-400"> across sectors.</span>
            </h2> */}
          </div>

          {/* <p className="max-w-md leading-7 text-gray-500">
            We work with organisations across different industries,
            bringing creative thinking and strategic communication to
            every partnership.
          </p> */}
        </div>

        {/* Client logos */}
        <div className="grid grid-cols-2 gap-4 pt-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex h-32 items-center justify-center rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-36"
            >
              <img
                src={client.image}
                alt={client.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}