export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black border-t border-[#ECEEE9]  text-[#ECEEE9]">

      <div className="absolute left-[-4vw] top-[-5rem] h-[14rem] w-[14rem] rounded-full border-[0.0625rem] border-white/5 opacity-30" />
      <div className="absolute right-[-6vw] top-[4rem] h-[26rem] w-[26rem] rounded-full border-[0.0625rem] border-white/5 opacity-30" />

      <div className="relative mx-auto flex min-h-[34.625rem] max-w-[92vw] flex-col justify-between pt-[6rem]">
        <div className="grid grid-cols-[1fr_0.78fr] gap-[8vw]">
          <div>
            <div className="mb-[2.5rem]">
              <h2 className="text-[2.8rem] font-light leading-none tracking-[0rem] text-[#ff3030]">
                mosfet
              </h2>
              <p className="mt-[0.3rem] paragraph tracking-[0.03rem] text-[#ECEEE9]!">
                Tech Solutions Pvt. Ltd.
              </p>
            </div>

            <p className="paragraph max-w-[30rem] text-[#ECEEE9]! ">
              Engineered MOSFET power solutions designed for
              <br />
              high efficiency and reliable performance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[1.35rem] pt-[0.3rem] ml-auto">
            <div>
              <p className="mb-[0.7rem] paragraph text-[#ff3030]!">Phone</p>
              <p className="paragraph leading-[1.4] text-[#ECEEE9]!">
                +91 9999878104 / +91 9910700028
              </p>
            </div>

            <div>
              <p className="mb-[0.7rem] paragraph text-[#ff3030]!">
                Location
              </p>
              <p className="max-w-[25rem] paragraph  text-[#ECEEE9]!">
                B-66, 1st Floor, Naraina Industrial Area, Phase 1, New Delhi,
                India
              </p>
            </div>
          </div>
        </div>

        <div className="h-[0.0625rem] w-full bg-white/10" />

        <div className="grid grid-cols-[1fr_1.1fr_1.35fr_1fr_0.75fr] gap-[3vw]">
          <FooterColumn
            title="Company"
            links={["About MOSFET", "Leadership", "Careers"]}
          />
          <FooterColumn
            title="Solutions"
            links={["OEM Solutions", "Car Electronics", "Mobility & Logistics"]}
          />
          <FooterColumn
            title="Technology"
            links={[
              "AI Vehicle Intelligence",
              "Telematics Platform",
              "Vehicle Safety Systems",
            ]}
          />
          <FooterColumn title="Resources" links={["Blog", "Press", "Partners"]} />

          <div>
            <h3 className="mb-[1rem] paragraph  text-[#ff3030]! capitalize">
              Download App
            </h3>

            <div className="flex flex-col gap-[0.9rem]">
              <img
                src="/images/Android.png"
                alt="Get it on Google Play"
                className="h-[2.1rem] w-[6.3rem] object-contain"
              />
              <img
                src="/images/IOS.png"
                alt="Download on the App Store"
                className="h-[2.1rem] w-[6.3rem] object-contain"
              />
            </div>
          </div>
        </div>

        <div className="h-[0.0625rem] w-full bg-white/10" />

        <div className="flex items-center justify-between pb-[0.5rem]">
          <div className="flex items-center gap-[0.65rem]">
            <span className="text-[0.95rem] text-[#ECEEE9]/90">Follow us:</span>

            {["f", "𝕏", "◎", "in"].map((item, index) => (
              <a
                key={item}
                href="#"
                className={`flex h-[1.65rem] w-[1.65rem] items-center justify-center rounded-full border-[0.0625rem] text-[0.78rem] transition ${
                  index === 0
                    ? "border-[#ff3030] bg-[#ff3030] text-[#ECEEE9]"
                    : "border-white/25 text-[#ECEEE9]/80 hover:border-[#ff3030] hover:text-[#ff3030]"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <p className="paragraph text-[#ECEEE9]!">
            © All Right Reserved. 2026. Mosfet
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-[1rem] paragraph   text-[#ff3030]! capitalize">{title}</h3>

      <ul className="space-y-[0.65rem]">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="paragraph   text-[#ECEEE9]/90! hover:text-[#ff3030]!"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
