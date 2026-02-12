const projects = [
  {
    image: "/laptop1.jpg",
    title: "BRAND VISIBILITY ONLINE",
    category: "Website UI/UX & Dev",
    description:
      "Complete ERP system for manufacturing with inventory, production, and financial modules",
  },
  {
    image: "/kblcoffee7.jpg",
    title: "BRAND IDENTITY FOR A COFFEE HOUSE",
    category: "Brand Strategy & Identity",
    description:
      "Custom logistics management system with real-time tracking and route optimization",
  },
  {
    image: "/kblcoffee7.jpg",
    title: "TECHFLOW SOLUTIONS",
    category: "Corporate",
    description:
      "Corporate website with lead generation, service showcase, and client portal",
  },
];

const FeaturedWorks = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 xl:mx-[140px]">

      {/* TOP HEADER TEXT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <p className="text-[#F6BE00] uppercase mb-2">Featured Work</p>
          <h1 className="text-3xl font-extrabold uppercase leading-tight">
            PROJECTS THAT <span className="text-[#F6BE00]">DELIVERED</span>
          </h1>
        </div>
        <p className="text-gray-300 xl:w-[120%] mt-8">
          No matter the industry or challenge, our focus stays the same:
          <br />
          build work that performs, scales, and leaves a lasting impression — long after
          <br />
          launch.
        </p>
      </div>

      {/* PROJECT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* IMAGE */}
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-[360px] object-cover group-hover:scale-105 transition-all duration-500"
            />

            {/* GRADIENT OVERLAY (BOTTOM DARK) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/90 to-transparent"></div>

            {/* TEXT CONTENT */}
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-[#F6BE00] font-bold text-sm uppercase">{p.title}</h2>
              <p className="text-gray-300 text-[12px] mt-1">{p.category}</p>
              <p className="text-gray-200 text-sm mt-3">{p.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW MORE */}
      <p className="text-[#F6BE00] mt-10 text-sm font-semibold cursor-pointer hover:underline">
        View Selected Work →
      </p>
    </section>
  );
};

export default FeaturedWorks;
