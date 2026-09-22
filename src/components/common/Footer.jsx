export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-16 md:pt-24 pb-8 text-[#ECEEE9]">
      {/* Background Video & Tint Overlay */}
      <video
        src="/video/FV.mp4"
        muted
        loop
        autoPlay
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 z-0 bg-black/80" />

      {/* Background Ornaments */}
      <div className="absolute z-0 left-[-4vw] top-[-5rem] h-[10rem] w-[10rem] md:h-[20rem] md:w-[20rem] rounded-full border-[0.0625rem] border-white/5 opacity-30 pointer-events-none" />
      <div className="absolute z-0 right-[-6vw] bottom-[-10rem] h-[18rem] w-[18rem] md:h-[30rem] md:w-[30rem] rounded-full border-[0.0625rem] border-white/5 opacity-30 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[93vw] flex flex-col gap-12 md:gap-20">

        {/* Top Section: Links & Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-12 lg:gap-8">

          {/* Col 1: Brand Info & Socials */}
          <div className="flex flex-col gap-6 max-w-sm">
            <div>
              <h2 className="text-[2.5rem] md:text-[3rem] font-light leading-none tracking-tight text-[#ff3030]">
                mosfet
              </h2>
              <p className="mt-1 paragraph text-[#ECEEE9]! opacity-80">
                Tech Solutions Pvt. Ltd.
              </p>
            </div>
            <p className="paragraph PP text-[#ECEEE9]! opacity-70">
              Engineered MOSFET power solutions designed for high efficiency and reliable performance.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-[0.95rem] text-[#ECEEE9]/90 PP mr-2">Follow us:</span>
              {["f", "𝕏", "◎", "in"].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full border-[0.0625rem] text-[0.85rem] transition ${index === 0
                    ? "border-[#ff3030] bg-[#ff3030] text-[#ECEEE9]"
                    : "border-white/25 text-[#ECEEE9]/80 hover:border-[#ff3030] hover:text-[#ff3030]"
                    }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2-4: Links */}
          <FooterColumn
            title="Company"
            links={["About MOSFET", "Leadership", "Careers", "Partners"]}
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

          {/* Col 5: Contact & App */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-5 paragraph text-[#ff3030]! capitalize">Contact Us</h3>
              <p className="paragraph PP text-[#ECEEE9]! opacity-70 mb-2">
                +91 9999878104<br />+91 9910700028
              </p>
              <p className="paragraph PP text-[#ECEEE9]! opacity-70">
                B-66, 1st Floor, Naraina Industrial Area, Phase 1, New Delhi, India
              </p>
            </div>

            <div>
              <h3 className="mb-4 paragraph text-[#ff3030]! capitalize">Get The App</h3>
              <div className="flex gap-3">
                <img
                  src="/images/Android.png"
                  alt="Get it on Google Play"
                  className="h-[2.1rem] w-[6.3rem] object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
                <img
                  src="/images/IOS.png"
                  alt="Download on the App Store"
                  className="h-[2.1rem] w-[6.3rem] object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Huge Text & Copyright */}
        <div className="flex flex-col items-center mt-4">

          {/* Huge Typography Watermark */}
          <div className="w-full border-t border-white/10 pt-8 pb-4 flex justify-center overflow-hidden">
            <h1 className="text-[20vw] leading-[0.75] font-black text-center text-white tracking-tighter uppercase select-none">
              MOSFET
            </h1>
          </div>

          {/* Footer Bar */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#ECEEE9]/50 PP pt-6">
            <p>© All Right Reserved. 2026. Mosfet Tech Solutions Pvt. Ltd.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-5 paragraph text-[#ff3030]! capitalize">{title}</h3>
      <ul className="flex flex-col gap-1">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="paragraph PP text-[#ECEEE9]/70! hover:text-[#ff3030]! transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}