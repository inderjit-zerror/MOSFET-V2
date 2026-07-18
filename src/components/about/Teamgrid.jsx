import GridLine from "../common/GridLine";
import InTitle from "../common/InTitle";

export default function TeamGrid() {
  const team = [
    {
      name: "Leo Baldwin",
      role: "Marketing Director",
      img: "https://cdn.prod.website-files.com/69abbe0146c41c8bc91f489c/69be66acc5628a3f91f08db1_teams04.avif",
    },
    {
      name: "Elsa Ostrom",
      role: "Chief Executive Officer",
      img: "https://cdn.prod.website-files.com/69abbe0146c41c8bc91f489c/69be66ac0387b8bd46caf920_teams03.avif",
    },
    {
      name: "Deborah Kirchenberg",
      role: "Product Manager",
      img: "https://cdn.prod.website-files.com/69abbe0146c41c8bc91f489c/69be66ad068a12b3ca51b94a_teams02.avif",
    },

    
  ];

  return (
    <section className="BGTint  px-6">
      <div className="col-span-1 md:col-span-4 flex flex-col items-center text-center py-[6vw] md:py-[4vw] px-[4vw] border-b border-gray-200">
        <InTitle txt={"Leadership"} />

        <h1 className="heading1 mb-[1.5rem]  max-w-[45rem]">
          Scientific depth.
          <br />
          Industrial perspective.
        </h1>

        <p className="paragraph max-w-[38rem] PH ">
          MOSFET is introducing a suite of advanced solutions that combine
          precision-engineered hardware with powerful AI-based software.
        </p>
      </div>

      {/* <GridLine /> */}

      <div className="mx-auto max-w-[93vw]">
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
                  className="h-full w-full object-cover object-top grayscale"
                />
              </div>
              <h3 className="mt-4 text-[1.2rem]! font-medium tracking-wide TextRed heading1">
                {person.name}
              </h3>
              <p className="mt-1 text-xs paragraph PP">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
