import GridLine from "../common/GridLine";
import InTitle from "../common/InTitle";

export default function TeamGrid() {
  const team = [
    {
      name: "Leo Baldwin",
      role: "Marketing Director",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop&grayscale",
    },
    {
      name: "Elsa Ostrom",
      role: "Chief Executive Officer",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop&grayscale",
    },
    {
      name: "Deborah Kirchenberg",
      role: "Product Manager",
      img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&h=600&fit=crop&grayscale",
    },

    {
      name: "Tara Jenkins",
      role: "Lead Designer",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&grayscale",
    },
    {
      name: "Ted Anderson",
      role: "Software Engineer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&grayscale",
    },
    {
      name: "Maria Herald",
      role: "Head of Sales",
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop&grayscale",
    },

    {
      name: "Kane Kalvins",
      role: "Operations Lead",
      img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&h=600&fit=crop&grayscale",
    },
    {
      name: "Nikolina Kraljev",
      role: "Customer Success",
      img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&h=600&fit=crop&grayscale",
    },
    {
      name: "Donald Baker",
      role: "Finance Manager",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop&grayscale",
    },
  ];

  return (
    <section className="BGTint pb-20 px-6">
      <div className="col-span-1 md:col-span-4 flex flex-col items-center text-center py-[6vw] md:py-[4vw] px-[4vw] border-b border-gray-200">
        <InTitle txt={"Leadership"} />

        <h1 className="heading1 mb-[1.5rem]  max-w-[45rem]">
          Scientific depth.
          <br />
          Industrial perspective.
        </h1>

        <p className="paragraph max-w-[38rem] ">
          MOSFET is introducing a suite of advanced solutions that combine
          precision-engineered hardware with powerful AI-based software.
        </p>
      </div>

      <GridLine />

      <div className="mx-auto max-w-[90vw]">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-x-10
            gap-y-16
          "
        >
          {team.map((person) => (
            <div key={person.name} className="flex flex-col">
              <div className="aspect-square w-full overflow-hidden bg-gray-100">
                <img
                  src={person.img}
                  alt={person.name}
                  className="h-full w-full object-cover grayscale"
                />
              </div>
              <h3 className="mt-4 text-[1.2rem]! font-medium tracking-wide TextRed heading1">
                {person.name}
              </h3>
              <p className="mt-1 text-xs paragraph">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
