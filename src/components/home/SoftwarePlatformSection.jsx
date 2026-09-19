"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { CheckCircle2, Server, MapPin, Plus } from "lucide-react";
import InTitle from "../common/InTitle";

const platformData = [
  {
    id: "01",
    title: "FLEET MANAGEMENT SYSTEM (FMS)",
    subtitle: "Live tracking, trip history, geofencing, driver scorecards, route optimisation, live streaming.",
    features: ["LIVE TRACKING", "TRIP HISTORY", "GEOFENCING", "DRIVER SCORECARDS", "ROUTE OPTIMISATION", "LIVE STREAMING"],
    image: "/images/saas_fms.jpg",
  },
  {
    id: "02",
    title: "EMERGENCY RESPONSE & SOS",
    subtitle: "Accident detection, automated alerts, command center dashboard.",
    features: ["CENTRALISED COMMAND CENTRE", "AUTO-ASSIGNED AMBULANCES", "REAL-TIME VIDEO SURVEILLANCE", "EASY AMBULANCE BOOKING", "REDUCED MANUAL INTERVENTION", "SEAMLESS COMMUNICATION"],
    image: "/images/saas_emergency.jpg",
  },
  {
    id: "03",
    title: "LAST MILE DELIVERY",
    subtitle: "Automates the full last-mile delivery process, accelerating order handling and ensuring real-time visibility. With streamlined cash management and operational oversight, businesses achieve quicker, smarter deliveries every time.",
    features: ["FASTER TURNAROUND", "PROOF OF DELIVERY", "ENHANCED DRIVER EFFICIENCY", "CENTRALISED ADMIN OVERSIGHT", "ZERO DEVELOPMENT BURDEN", "REDUCE TIME WASTE"],
    image: "/images/saas_last_mile.jpg",
  },
  {
    id: "04",
    title: "AI INSIGHTS ENGINE",
    subtitle: "Driving behavior, hazard prediction, hotspot detection.",
    features: ["FATIGUE DETECTION", "PHONE CALL DETECTION", "COLLISION WARNING", "DISTRACTION DETECTION", "SMOKING DETECTION", "LANE DEPARTURE ALERTS"],
    image: "/images/saas_ai_insights.jpg",
  },
  {
    id: "05",
    title: "BUS (SCHOOL & TRANSPORT) MANAGEMENT SYSTEMS",
    subtitle: "Fleet management, cloud camera integration, attendance systems, ticketing systems, route & stop geofence, sharing.",
    features: ["FLEET MANAGEMENT", "CLOUD CAMERA INTEGRATION", "ATTENDANCE SYSTEMS", "TICKETING SYSTEMS", "ROUTE & STOP GEOFENCE", "SHARING"],
    image: "/images/saas_bus_management.jpg",
  },
];

export default function SoftwarePlatformSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRefs = useRef([]);
  const panelRefs = useRef([]);

  // Crossfade the left-hand image whenever the active module changes.
  useLayoutEffect(() => {
    imageRefs.current.forEach((img, i) => {
      if (!img) return;
      if (i === activeIndex) {
        gsap.fromTo(
          img,
          { opacity: 0, scale: 1.04 },
          { opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" }
        );
      } else {
        gsap.to(img, { opacity: 0, duration: 0.3, ease: "power1.in" });
      }
    });
  }, [activeIndex]);

  const handleSelect = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);

    // A short, deliberate "settle" animation on the panel content that just opened.
    const panel = panelRefs.current[index];
    if (panel) {
      gsap.fromTo(
        panel.querySelectorAll(".feature-row"),
        { opacity: 0, x: -8 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.04, ease: "power2.out", delay: 0.08 }
      );
    }
  };

  return (
    <section className="bg-black text-white py-10 px-4 md:px-12 lg:px-10">
      {/* Intro Header Section */}
      <div className="mx-auto mb-28 pt-10  flex flex-col justify-center items-center">
        <div className="flex-1 space-y-6 text-center">
          {/* <InTitle txt="Software Platform (SaaS)" /> */}
          <h2 className="heading1 mt-4 text-white!">
            SOFTWARE IS <br /><span className="text-[red]">OUR CORE.</span>
          </h2>
          <p className="paragraph text-white/70! max-w-2xl">
            A unified cloud platform powering smart mobility, fleets, EV ecosystems, and emergency operations. The platform is built and maintained by MOSFET Tech&apos;s own team, and it ties every camera, telematics and sensory product together.
          </p>
        </div>
      </div>

      {/* Interactive Modules: click a module to expand its detail and swap the image */}
      <div className=" mx-auto flex flex-col md:flex-row gap-12 lg:gap-16 items-start">

        {/* Left panel - synced image, sticky on desktop */}
        <div className="w-full md:w-2/5 md:sticky md:top-24 order-1">
          <div className="relative w-full aspect-[4/3] md:aspect-[4/5] lg:aspect-square  overflow-hidden border border-white/10 bg-black shadow-2xl shadow-white/5">
            {platformData.map((item, i) => (
              <div
                key={item.id}
                ref={(el) => (imageRefs.current[i] = el)}
                className="absolute inset-0 w-full h-full"
                style={{ opacity: i === activeIndex ? 1 : 0 }}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover " />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              </div>
            ))}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="text-white/60 text-sm font-medium">{platformData[activeIndex].id} / {platformData.length}</span>
              <h4 className="text-white text-2xl md:text-3xl font-bold leading-tight mt-1">
                {platformData[activeIndex].title}
              </h4>
            </div>
          </div>
        </div>

        {/* Right panel - clickable module list, expands in place */}
        <div className="w-full md:w-3/5 order-2 border-t border-white/10">
          {platformData.map((item, i) => {
            const isOpen = i === activeIndex;
            return (
              <div
                key={item.id}
                className={`transition-all duration-500 overflow-hidden ${isOpen
                  ? "bg-white/[0.07] backdrop-blur-xl border border-white/30 rounded-2xl my-4 shadow-2xl"
                  : "border-b border-white/30 hover:bg-white/[0.02]"
                  }`}
              >
                <button
                  onClick={() => handleSelect(i)}
                  aria-expanded={isOpen}
                  aria-controls={`module-panel-${item.id}`}
                  className={`w-full flex items-center justify-between gap-4 text-left group ${isOpen ? "px-6 md:px-8 pt-6 md:pt-8 pb-4" : "py-6 md:py-7 px-2 md:px-4"
                    }`}
                >
                  <div className="flex items-baseline gap-4 md:gap-5">
                    <span className={`text-sm font-medium tabular-nums transition-colors ${isOpen ? "text-[red] " : "text-[white] "}`}>
                      {item.id}
                    </span>
                    <h3
                      className={`text-xl md:text-2xl lg:text-3xl font-bold leading-snug transition-colors ${isOpen ? "text-[red] " : "text-[white] "
                        }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                  {/* <span
                    className={`flex items-center justify-center shrink-0 w-9 h-9 rounded-full border transition-all duration-300 ${isOpen ? "bg-white border-white rotate-45" : "border-white/15 text-gray-400 group-hover:border-white/30"
                      }`}
                  >
                    <Plus size={18} className={isOpen ? "text-black" : ""} />
                  </span> */}
                </button>

                <div
                  id={`module-panel-${item.id}`}
                  className="grid transition-[grid-template-rows] duration-500 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div ref={(el) => (panelRefs.current[i] = el)} className={`pb-8 ${isOpen ? "px-6 md:px-10" : "md:pl-9"}`}>
                      {/* Mobile-only image, since the left panel is hidden below md */}
                      <div className="md:hidden w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 border border-white/10 relative">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>

                      <p className="paragraph text-white/70! mb-10 max-w-xl">
                        {item.subtitle}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                        {item.features.map((feature, fi) => (
                          <div key={fi} className="feature-row flex items-start gap-3">
                            <CheckCircle2 className="text-[red] shrink-0 mt-0.5" size={18} />
                            <span className="text-sm font-medium text-gray-300 tracking-wide">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}