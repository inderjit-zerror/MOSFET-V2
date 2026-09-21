"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { CheckCircle2 } from "lucide-react";

const platformData = [
  {
    id: "01",
    title: "FLEET MANAGEMENT SYSTEM",
    subtitle: "Live tracking, trip history, geofencing, driver scorecards, route optimisation, live streaming.",
    features: ["LIVE TRACKING", "TRIP HISTORY", "GEOFENCING", "DRIVER SCORECARDS", "ROUTE OPTIMISATION", "LIVE STREAMING"],
    image: "/images/saas_fms.jpg",
  },
  {
    id: "02",
    title: "EMERGENCY RESPONSE",
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
    title: "BUS MANAGEMENT",
    subtitle: "Fleet management, cloud camera integration, attendance systems, ticketing systems, route & stop geofence, sharing.",
    features: ["FLEET MANAGEMENT", "CLOUD CAMERA INTEGRATION", "ATTENDANCE SYSTEMS", "TICKETING SYSTEMS", "ROUTE & STOP GEOFENCE", "SHARING"],
    image: "/images/saas_bus_management.jpg",
  },
];

export default function SoftwarePlatformSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const featureRefs = useRef([]);

  const handleSelect = (index) => {
    if (index === activeIndex || isAnimating) return;
    setIsAnimating(true);

    gsap.to([contentRef.current, imageRef.current], {
      opacity: 0,
      y: 15,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in",
      onComplete: () => {
        setActiveIndex(index);
      },
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [contentRef.current, imageRef.current],
        { opacity: 0, y: -15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          onComplete: () => setIsAnimating(false),
        }
      );

      // Animate features individually
      if (featureRefs.current.length > 0) {
        gsap.fromTo(
          featureRefs.current,
          { opacity: 0, x: -10 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
            delay: 0.2,
          }
        );
      }
    });

    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <section className="bg-black text-white py-20 px-4 md:px-12 lg:px-10 overflow-hidden">
      {/* Intro Header Section */}
      <div className="mx-auto mb-16 flex flex-col justify-center items-center text-center">
        <h2 className="heading2 text-white!">
          SOFTWARE IS
          <span className="text-[red]">OUR CORE.</span>
        </h2>
        <p className="paragraph text-white/70! max-w-4xl mt-6">
          A unified cloud platform powering smart mobility, fleets, EV ecosystems, and emergency operations. The platform is built and maintained by MOSFET Tech&apos;s own team, and it ties every camera, telematics and sensory product together.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {platformData.map((item, i) => {
            const isActive = activeIndex === i;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(i)}
                className={`px-5 py-2.5  text-xs md:text-sm tracking-wide font-medium transition-all duration-300 ${isActive
                  ? "bg-[red] text-white shadow-[0_0_15px_rgba(255,0,0,0.4)] scale-105"
                  : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                  }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Content Showcase Area */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center bg-white/[0.02] p-6 md:p-12 rounded-[2.5rem] border border-white/5 relative backdrop-blur-sm group">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 space-y-8" ref={contentRef}>
            <div>
              {/* <div className="text-[red] font-mono text-sm mb-3 tracking-widest">
                MODULE {platformData[activeIndex].id}
              </div> */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {platformData[activeIndex].title}
              </h3>
              <p className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed">
                {platformData[activeIndex].subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 pt-4 border-t border-white/10">
              {platformData[activeIndex].features.map((feature, i) => (
                <div
                  key={i}
                  ref={(el) => (featureRefs.current[i] = el)}
                  className="flex items-start gap-3 group/feature"
                >
                  <CheckCircle2
                    className="text-[red] shrink-0 mt-0.5 transition-transform duration-300 group-hover/feature:scale-125 group-hover/feature:text-white"
                    size={20}
                  />
                  <span className="text-sm md:text-base text-gray-300 tracking-wide transition-colors duration-300 group-hover/feature:text-white">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2" ref={imageRef}>
            <div className="aspect-square md:aspect-[4/3] lg:aspect-[4/3] overflow-hidden relative border border-white/10 ">
              <img
                src={platformData[activeIndex].image}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                alt={platformData[activeIndex].title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}