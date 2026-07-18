import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GridLine from "../common/GridLine";
import InTitle from "../common/InTitle";

const newsItems = [
  {
    date: "June 15, 2026",
    title:
      "CURA Selects BBA Engineering to Lead Conceptual Design Study for Commercial Decarbonized Cement Demonstration Facility",
    href: "#",
    image: "https://images.unsplash.com/photo-1616761879141-f485e5fed5df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
    imageAlt: "CURA and BBA Engineering team on site",
  },
  {
    date: "April 29, 2026",
    title: "CURA Secures $1M in Non-Dilutive Funding from NorthX Climate Tech",
    href: "#",
    image: "https://images.unsplash.com/photo-1592570714618-15e2d4719c6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
    imageAlt: "CURA and NorthX Climate Tech team",
  },
  {
    date: "April 28, 2026",
    title:
      "MaRS Announces Participants in the Second Mission from MaRS: Better Buildings Adoption Accelerator",
    href: "#",
    image: "https://images.unsplash.com/photo-1633484727830-c1cc0885251e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyJTIwYWNjZXNzb3JpZXMlMjBpbm5lcnxlbnwwfHwwfHx8MA%3D%3D",
    imageAlt: "Better Buildings Adoption Accelerator cohort announcement",
  },
];

export default function TractionSection() {
  return (
    <section className="BGTint w-full h-fit px-6 pt-20 md:px-10 ">

      <div className="mx-auto grid  grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div>
          <InTitle txt={'TRACTION'} />

          <h2 className="heading1 mt-2  text-[#1A1A1A]">
            Industry
            <br />
            engagement
            <br />
            &amp; recognition
          </h2>
        </div>

        {/* Right column */}
        <div className="border-t border-[#D8D5CB]">
          {newsItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-center gap-6 border-b border-[#D8D5CB] py-8 first:pt-0"
            >
              {/* Thumbnail */}
              <div className="relative h-24 w-24 shrink-0 overflow-hidden bg-[#1A1A1A] sm:h-28 sm:w-28">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  
                  className="object-cover object-center"
                />
              </div>

              {/* Text content */}
              <div className="flex-1">
                <p className=" paragraph PP  TextRed">{item.date}</p>
                <h3 className="mt-2 paragraph PH ">{item.title}</h3>
              </div>

              {/* Arrow */}
              <div className="shrink-0">
                <ArrowRight
                  className="h-6 w-6 TextRed transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
