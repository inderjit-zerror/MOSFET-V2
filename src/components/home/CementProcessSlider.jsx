"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Lock,
  Layers,
  Link2,
  ClipboardCheck,
  PenTool,
  Zap,
  TestTube,
  CheckCircle2,
  BarChart3,
  Radar,
  Gauge,
  Award,
  Factory,
  Timer,
  ShieldCheck,
  TrendingUp,
  GraduationCap,
  Wrench,
  BookOpen,
  Headphones,
  BadgeCheck,
  ScrollText,
  FileText,
  Users,
  Cpu,
  Cloud,
  RefreshCw,
  KeyRound,
  Database,
  Thermometer,
  Wifi,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------
const SLIDES = [
  {
    id: "01",
    category: "Tooling",
    title: "Exclusive mould & family mould design capability",
    description:
      "We design and own the tools — for the camera housing and, where the programme needs it, for the vehicle part it sits in.",
    cards: [
      { titlePart1: "Exclusive", titlePart2: "tools", icon: Lock, description: "Custom moulds exclusively for your products.", image: "/images/exclusive_mould_1790681605246.jpg" },
      { titlePart1: "Family", titlePart2: "moulds", icon: Layers, description: "Shared core moulds for interchangeable variants.", image: "/images/family_mould_1790681617611.jpg" },
      { titlePart1: "Coupled", titlePart2: "parts", icon: Link2, description: "Co-developed tools for perfect joint tolerance.", image: "/images/coupled_parts_1790681646282.jpg" },
      { titlePart1: "Trial before", titlePart2: "tooling", icon: ClipboardCheck, description: "Confirming fitment before finalizing tooling timelines.", image: "/images/trial_tooling_1790681661775.jpg" },
    ],
  },
  {
    id: "02",
    category: "Engineering",
    title: "Customised development & product engineering",
    description: "Which SOC works best with which sensor, lens and memory — decided on the bench, for the quality and the price the programme needs.",
    cards: [
      { titlePart1: "SOC &", titlePart2: "Sensor Pairing", icon: Cpu, description: "Testing optimal SOC and sensor combinations.", image: "/images/soc_sensor_1790681674460.jpg" },
      { titlePart1: "Lens &", titlePart2: "Field of view", icon: Wifi, description: "Choosing optimal lenses for perfect visibility.", image: "/images/lens_fov_1790681687186.jpg" },
      { titlePart1: "Memory &", titlePart2: "Endurance", icon: Database, description: "Matching SD endurance to loop recording.", image: "/images/memory_endurance_1790681710018.jpg" },
      { titlePart1: "Thermal &", titlePart2: "Power", icon: Thermometer, description: "Engineering thermal and low-voltage stability.", image: "/images/thermal_power_1790681725549.jpg" },
    ],
  },
  {
    id: "03",
    category: "Benchmarking",
    title: "Benchmarked against the closest competition",
    description: "We constantly analyse and benchmark our solutions against industry leaders to keep performance and value ahead of the field.",
    cards: [
      { titlePart1: "Market", titlePart2: "analysis", icon: BarChart3, description: "Analyzing trends to keep you ahead.", image: "/images/market_analysis_1790681763565.jpg" },
      { titlePart1: "Competitor", titlePart2: "insight", icon: Radar, description: "Actionable intelligence for clear competitor differentiation.", image: "/images/competitor_insight_dashcam_1790743699079.jpg" },
      { titlePart1: "Performance", titlePart2: "metrics", icon: Gauge, description: "Data-driven metrics validating product superiority.", image: "/images/performance_metrics_1790681804112.jpg" },
      { titlePart1: "Value", titlePart2: "proposition", icon: Award, description: "Balancing cost and quality for returns.", image: "/images/value_proposition_dashcam_1790743710634.jpg" },
    ],
  },
  {
    id: "04",
    category: "Manufacturing",
    title: "Assembled, aged and tested on our own line",
    description: "Every camera in the range is assembled in-house in India — not drop-shipped from an overseas vendor.",
    cards: [
      { titlePart1: "36 HRS", titlePart2: "Minimum ageing test", icon: Timer, description: "Continuous in-house testing prevents early failures.", image: "/images/ageing_test_dashcam_1790743724354.jpg" },
      { titlePart1: "100%", titlePart2: "SD card compatibility", icon: CheckCircle2, description: "Broad SD compatibility testing reduces complaints.", image: "/images/sd_card_dashcam_1790743736196.jpg" },
      { titlePart1: "INDIA", titlePart2: "Made on our own line", icon: Factory, description: "Locally assembled for faster build changes.", image: "/images/india_manufacturing_actual.jpg" },
      { titlePart1: "IN-HOUSE", titlePart2: "Easy warranty redressal", icon: ShieldCheck, description: "Direct warranty support from our team.", image: "/images/warranty_redressal_dashcam_1790743772106.jpg" },
    ],
  },
  {
    id: "05",
    category: "Enablement",
    title: "Training and back-end support for your team",
    description: "Your sales team should be able to answer any question a customer asks across the counter.",
    cards: [
      { titlePart1: "Sales", titlePart2: "training", icon: GraduationCap, description: "Comprehensive product positioning for sales teams.", image: "/images/sales_training_dashcam_1790743787659.jpg" },
      { titlePart1: "Feature", titlePart2: "explanation", icon: BookOpen, description: "Clear feature walkthroughs with demo units.", image: "/images/feature_explanation_dashcam_1790743802767.jpg" },
      { titlePart1: "Query", titlePart2: "desk", icon: Headphones, description: "Dedicated back-end support for quick escalation.", image: "/images/query_desk_dashcam_1790743815059.jpg" },
      { titlePart1: "Counter", titlePart2: "collateral", icon: FileText, description: "Updated brochures and videos for display.", image: "/images/counter_collateral_dashcam_1790743881783.jpg" },
    ],
  },
  {
    id: "06",
    category: "Compliance",
    title: "BIS support for your product line-up",
    description: "MOSFET Tech Solutions is registered as a manufacturer under BIS India, and can legally support BIS certification for your product line-up.",
    cards: [
      { titlePart1: "Registered", titlePart2: "manufacturer", icon: BadgeCheck, description: "Live BIS registration supports your lineup.", image: "/images/registered_manufacturer_dashcam_1790743894436.jpg" },
      { titlePart1: "Documentation", titlePart2: "prepared", icon: ScrollText, description: "Comprehensive compliance paperwork and test reports.", image: "/images/documentation_prepared_dashcam_1790743906341.jpg" },
      { titlePart1: "Timeline", titlePart2: "visibility", icon: Timer, description: "Planning certification alongside production timelines.", image: "/images/timeline_visibility_dashcam_1790743919341.jpg" },
      { titlePart1: "Ongoing", titlePart2: "compliance", icon: ShieldCheck, description: "Tracking renewals for ongoing compliance.", image: "/images/ongoing_compliance_dashcam_1790743934590.jpg" },
    ],
  },
  {
    id: "07",
    category: "Software",
    title: "Software is our core",
    description: "The unified cloud platform that every camera, telematics and sensory product in the range runs on — built and maintained by MOSFET Tech's own team.",
    cards: [
      { titlePart1: "SAAS", titlePart2: "Unified cloud platform", icon: Cloud, description: "Unified platform powering smart fleet operations.", image: "/images/saas_main_header.jpg" },
      { titlePart1: "05", titlePart2: "Platform products", icon: Layers, description: "Five versatile products for fleet management.", image: "/images/saas_fms.jpg" },
      { titlePart1: "INDIA", titlePart2: "Made and hosted in India", icon: ShieldCheck, description: "Locally developed software with secure hosting.", image: "/images/india_manufacturing.jpg" },
    ],
  },
];

export default function CapabilitiesShowcase() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const sidebarRef = useRef(null);
  const [highlightStyle, setHighlightStyle] = useState({ top: 0, left: 0, width: 0, height: 0, opacity: 0 });

  // Update Highlight indicator style for the active button in Sidebar
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const updateHighlight = () => {
      const buttons = sidebar.querySelectorAll("button");
      const activeBtn = buttons[index];
      if (activeBtn) {
        setHighlightStyle({
          top: activeBtn.offsetTop,
          left: activeBtn.offsetLeft,
          width: activeBtn.offsetWidth,
          height: activeBtn.offsetHeight,
          opacity: 1,
        });

        // Only scroll the sidebar container horizontally on mobile to avoid scrolling the whole page on mount
        if (window.innerWidth < 1024) {
          const containerScrollLeft = sidebar.scrollLeft;
          const containerWidth = sidebar.clientWidth;
          const btnLeft = activeBtn.offsetLeft;
          const btnRight = btnLeft + activeBtn.offsetWidth;

          if (btnRight > containerScrollLeft + containerWidth) {
            sidebar.scrollTo({ left: btnRight - containerWidth + 20, behavior: 'smooth' });
          } else if (btnLeft < containerScrollLeft) {
            sidebar.scrollTo({ left: btnLeft - 20, behavior: 'smooth' });
          }
        }
      }
    };

    updateHighlight();
    const timeout = setTimeout(updateHighlight, 100);
    const resizeObserver = new ResizeObserver(() => updateHighlight());
    resizeObserver.observe(sidebar);

    return () => {
      clearTimeout(timeout);
      resizeObserver.disconnect();
    };
  }, [index]);

  // Main GSAP ScrollTrigger Logic
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial setup to prevent FOUC: First card at 0%, others at 100vh
    gsap.set(cardsRef.current[0], { y: "0%" });
    gsap.set(cardsRef.current.slice(1), { y: "100vh" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // When the 700vh container reaches top
        end: "bottom bottom", // Until the end of 700vh container
        scrub: 1, // Smoothly link animation to scroll progress
        onUpdate: (self) => {
          const totalTransitions = SLIDES.length - 1;
          // Calculate the active index based on scrub progress
          const activeIndex = Math.min(Math.floor(self.progress * totalTransitions + 0.5), totalTransitions);
          setIndex(activeIndex);
        },
      },
    });

    // Build timeline for cards: One goes up, the previous gets blurred and pushed back
    SLIDES.forEach((_, i) => {
      if (i === 0) return; // Skip the first card because it starts on screen

      // 1. Previous Card pushed back & blurred
      tl.fromTo(
        cardsRef.current[i - 1],
        { scale: 1, filter: "blur(0px)", opacity: 1 },
        {
          scale: 0.9,
          filter: "blur(8px)",
          opacity: 0.4,
          duration: 1,
          ease: "power1.inOut",
        },
        `step${i}` // Grouping label to run simultaneously with the entrance animation
      );

      // 2. New Card comes in from bottom
      tl.fromTo(
        cardsRef.current[i],
        { y: "100vh", boxShadow: "none" },
        {
          y: "0%",
          boxShadow: "none",
          duration: 1,
          ease: "power2.inOut",
        },
        `step${i}`
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // Smooth scroll user to exact position when clicking a sidebar category
  const goTo = (targetIndex) => {
    const st = ScrollTrigger.getAll().find((st) => st.trigger === containerRef.current);
    if (st) {
      const start = st.start;
      const end = st.end;
      const totalTransitions = SLIDES.length - 1;
      const targetScrollPos = start + (end - start) * (targetIndex / totalTransitions);

      window.scrollTo({
        top: targetScrollPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full BGRed text-[#ECEEE9]">

      {/* Non-sticky Intro Section */}
      <div className="py-10 sm:py-16 px-4 sm:px-8 lg:px-16 mx-auto flex flex-col justify-center items-center">
        <div className="flex-1 space-y-6 text-center">
          <h2 className="heading2 mt-4 text-[black]!">
            THE PERFECTLY ENGINEERED
            .<br />
            <span className="text-[black]">PRODUCT FOR YOUR LINEUP.</span>
          </h2>
          <p className="paragraph text-[#ECEEE9]! max-w-xl mx-auto">
            Tooling, product engineering, competitor benchmarking, local assembly, team training and BIS compliance — before the order and after it.
          </p>
        </div>
      </div>

      {/* 700vh Parent container controlling the scroll distance */}
      {/* 7 categories = 100vh per category to ensure smooth scrubbing speed */}
      <div ref={containerRef} className="relative w-full h-[700vh]">

        {/* The Sticky Sidebar & Content Container */}
        <div className="sticky top-10 h-screen w-full flex flex-col lg:grid lg:grid-cols-[350px_1fr] gap-8 px-4 sm:px-8 lg:px-16 py-10 overflow-hidden">

          {/* Sidebar Navigation */}
          <div
            ref={sidebarRef}
            className="relative flex lg:flex-col gap-3 overflow-y-auto lg:overflow-visible pb-4 lg:pb-0 custom-scrollbar snap-x snap-mandatory"
          >
            {/* Sliding Highlight Block */}
            <div
              className="absolute bg-white transition-all duration-500 ease-in-out pointer-events-none z-0"
              style={{
                top: highlightStyle.top,
                left: highlightStyle.left,
                width: highlightStyle.width,
                height: highlightStyle.height,
                opacity: highlightStyle.opacity,
              }}
            />

            {SLIDES.map((s, idx) => {
              const active = index === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => goTo(idx)}
                  className={`relative z-10 snap-start w-[280px] lg:w-full shrink-0 flex items-center gap-4 text-left px-5 py-4 transition-all duration-500 border ${active
                    ? "bg-transparent text-black border-white shadow-lg"
                    : "bg-black text-[#ECEEE9] border-white/20 hover:bg-[#202020]"
                    }`}
                >
                  <span
                    className={`shrink-0 w-10 h-10 flex text-[2rem]! items-center paragraph font-bold! justify-center  transition-colors duration-500 ${active ? " text-[#EE2F2E]!" : " text-[#EE2F2E]!"
                      }`}
                  >
                    {s.id}
                  </span>
                  <div className="transition-colors duration-500">
                    <span
                      className={`block tracking-[0.14em] paragraph font-bold! uppercase mb-1 text-[11px] transition-colors duration-500 ${active ? "text-black!" : "text-[white]!"
                        }`}
                    >
                      {s.category}
                    </span>
                    <span
                      className={`block paragraph font-medium text-[15px] leading-tight transition-colors   duration-500 ${active ? "text-[#202020]!" : "text-[#949494]!"
                        }`}
                    >
                      {s.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Cards Stacking Content Wrapper */}
          <div className="relative w-full h-full overflow-hidden  ">
            {SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="absolute inset-0 w-full h-fit bg-[#ECEEE9] text-black overflow-y-auto custom-scrollbar flex flex-col will-change-transform"
                style={{ zIndex: idx }}
              >
                <div className="px-6 sm:px-9 pt-8 sm:pt-10 pb-9 sm:pb-11 flex-1">
                  <h3 className="heading3 uppercase tracking-tight text-[#EE2F2E] mb-4">
                    {slide.title}
                  </h3>
                  <p className="paragraph sm:mb-12">{slide.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {slide.cards.map((card, cardIdx) => {
                      const img = card.image;
                      const colors = ["white", "white", "white", "white"];
                      const color = colors[cardIdx % 4];

                      return (
                        <div
                          key={cardIdx}
                          className="relative bg-[#0b0f19] p-6 sm:p-7 min-h-[240px] flex flex-col group overflow-hidden border "
                        >
                          <div className="absolute top-0 right-0 w-[60%] h-full z-0 pointer-events-none overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/10 to-transparent z-99"></div>
                            <img
                              src={img}
                              alt=""
                              className="w-full h-full object-cover opacity-80 mix-blend-lighten group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            />
                          </div>

                          <div className="relative z-10 flex flex-col h-full w-[65%]">
                            {/* <card.icon className="w-8 h-8 mb-4" strokeWidth={2} style={{ color }} /> */}

                            <h3 className="mb-2">
                              <span className="block text-[#ECEEE9] heading4 text-[20px] max-w-[300px] uppercase sm:text-[22px] font-bold leading-tight">
                                {card.titlePart1}  {card.titlePart2}
                              </span>
                              {/* <p
                                className=" text-[white]/80! capitalize"
                                style={{ color }}
                              >
                                {card.titlePart2}
                              </p> */}
                            </h3>

                            <p className="text-[#ECEEE9] text-sm mb-auto max-w-[300px]">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}