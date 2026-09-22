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
      { titlePart1: "Exclusive", titlePart2: "tools", icon: Lock, description: "A mould developed for one customer is not offered to another. The housing stays yours." },
      { titlePart1: "Family", titlePart2: "moulds", icon: Layers, description: "A shared core with interchangeable inserts, so variants come off one tool at a fraction of the NRE." },
      { titlePart1: "Coupled", titlePart2: "parts", icon: Link2, description: "Camera tool and vehicle-part tool developed together, so tolerance, grain and finish match across the joint." },
      { titlePart1: "Trial before", titlePart2: "tooling", icon: ClipboardCheck, description: "NRE and lead time are confirmed only after a physical fitment trial on the target vehicle." },
    ],
  },
  {
    id: "02",
    category: "Engineering",
    title: "Customised development & product engineering",
    description: "Our engineering team works closely with your product managers to ensure every component fits perfectly into your ecosystem.",
    cards: [
      { titlePart1: "Custom", titlePart2: "designs", icon: PenTool, description: "Tailored designs that seamlessly integrate with your existing products and architectural requirements." },
      { titlePart1: "Rapid", titlePart2: "prototypes", icon: Zap, description: "Fast-tracked prototyping so you can test and iterate before committing to full-scale production." },
      { titlePart1: "Strict", titlePart2: "testing", icon: TestTube, description: "Rigorous quality checks at every engineering phase to meet global safety and performance standards." },
      { titlePart1: "System", titlePart2: "validation", icon: CheckCircle2, description: "Comprehensive end-to-end validation of the complete product lifecycle." },
    ],
  },
  {
    id: "03",
    category: "Benchmarking",
    title: "Benchmarked against the closest competition",
    description: "We constantly analyse and benchmark our solutions against industry leaders to keep performance and value ahead of the field.",
    cards: [
      { titlePart1: "Market", titlePart2: "analysis", icon: BarChart3, description: "A close read of market trends to position your product ahead of the curve." },
      { titlePart1: "Competitor", titlePart2: "insight", icon: Radar, description: "Actionable intelligence on competitor products to define clear differentiation strategies." },
      { titlePart1: "Performance", titlePart2: "metrics", icon: Gauge, description: "Data-driven performance metrics to validate product superiority." },
      { titlePart1: "Value", titlePart2: "proposition", icon: Award, description: "Balancing cost, quality and time-to-market to maximise return." },
    ],
  },
  {
    id: "04",
    category: "Manufacturing",
    title: "Assembled, aged and tested on our own line",
    description: "End-to-end manufacturing capability, giving us direct control over quality and a streamlined production line.",
    cards: [
      { titlePart1: "In-house", titlePart2: "assembly", icon: Factory, description: "Purpose-built assembly lines tailored for precision manufacturing." },
      { titlePart1: "Aging", titlePart2: "process", icon: Timer, description: "Rigorous aging tests to guarantee long-term reliability in the field." },
      { titlePart1: "Quality", titlePart2: "control", icon: ShieldCheck, description: "Multi-stage quality gates to catch defects before they leave the factory." },
      { titlePart1: "Scalable", titlePart2: "production", icon: TrendingUp, description: "Flexible lines that scale in step with your demand." },
    ],
  },
  {
    id: "05",
    category: "Enablement",
    title: "Training and back-end support for your team",
    description: "We don't just deliver products — we make sure your team is equipped and trained to manage them.",
    cards: [
      { titlePart1: "Team", titlePart2: "training", icon: GraduationCap, description: "Structured training modules for your engineering and support teams." },
      { titlePart1: "Technical", titlePart2: "support", icon: Wrench, description: "A dedicated technical support line for troubleshooting and diagnostics." },
      { titlePart1: "Knowledge", titlePart2: "base", icon: BookOpen, description: "Documentation and reference material tailored to your deployment." },
      { titlePart1: "Live", titlePart2: "assistance", icon: Headphones, description: "Real-time support channels that keep downtime to a minimum." },
    ],
  },
  {
    id: "06",
    category: "Compliance",
    title: "BIS support for your product line-up",
    description: "Navigating regulatory requirements with a dedicated compliance and certification team.",
    cards: [
      { titlePart1: "BIS", titlePart2: "certification", icon: BadgeCheck, description: "End-to-end handling of the BIS certification process." },
      { titlePart1: "Regulatory", titlePart2: "advisory", icon: ScrollText, description: "Guidance on local and international compliance standards." },
      { titlePart1: "Document", titlePart2: "preparation", icon: FileText, description: "Streamlined preparation of required legal and technical documentation." },
      { titlePart1: "Audit", titlePart2: "support", icon: Users, description: "On-ground support during facility and product audits." },
    ],
  },
  {
    id: "07",
    category: "Software",
    title: "Software is our core",
    description: "Hardware is only half the job. Our software stack is what keeps it intelligent, secure and scalable.",
    cards: [
      { titlePart1: "Firmware", titlePart2: "development", icon: Cpu, description: "Custom firmware tuned for power efficiency and performance." },
      { titlePart1: "Cloud", titlePart2: "integration", icon: Cloud, description: "Straightforward connectivity with major cloud platforms and custom backends." },
      { titlePart1: "Over-the-air", titlePart2: "updates", icon: RefreshCw, description: "Reliable, secure OTA update mechanisms for fleets of devices." },
      { titlePart1: "Security", titlePart2: "protocols", icon: KeyRound, description: "Enterprise-grade encryption and secure-boot implementations." },
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
    <section className="relative w-full BGRed text-white">

      {/* Non-sticky Intro Section */}
      <div className="py-10 sm:py-16 px-4 sm:px-8 lg:px-16 mx-auto flex flex-col justify-center items-center">
        <div className="flex-1 space-y-6 text-center">
          <h2 className="heading2 mt-4 text-white!">
            THE PERFECTLY ENGINEERED
            .<br />
            <span className="text-[black]">PRODUCT FOR YOUR LINEUP.</span>
          </h2>
          <p className="paragraph text-white/70! max-w-xl mx-auto">
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
                    : "bg-black text-white border-white/20 hover:bg-[#202020]"
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
                className="absolute inset-0 w-full h-fit bg-white text-black overflow-y-auto custom-scrollbar flex flex-col will-change-transform"
                style={{ zIndex: idx }}
              >
                <div className="px-6 sm:px-9 pt-8 sm:pt-10 pb-9 sm:pb-11 flex-1">
                  <h3 className="heading3 uppercase tracking-tight text-[#EE2F2E] mb-4">
                    {slide.title}
                  </h3>
                  <p className="paragraph sm:mb-12">{slide.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {slide.cards.map((card, cardIdx) => {
                      const allImages = [
                        "/images/dashcam_stalk_1790055651797.jpg",
                        "/images/dashcam_compact_1790055671221.jpg",
                        "/images/dashcam_module_1790055685809.jpg",
                        "/images/dashcam_dual_1790055700928.jpg",
                        "/images/dashcam_eng_1_1790056154997.jpg",
                        "/images/dashcam_eng_2_1790056308642.jpg",
                        "/images/dashcam_eng_3_1790056319698.jpg",
                        "/images/dashcam_eng_4_1790056478824.jpg",
                        "/images/dashcam_tooling_1_1790055961525.jpg",
                        "/images/dashcam_tooling_2_1790055974859.jpg",
                        "/images/dashcam_tooling_3_1790055998467.jpg",
                        "/images/dashcam_tooling_4_1790056141782.jpg",
                        "/images/dashcam_orange.jpg",
                        "/images/dashcam_blue.jpg",
                        "/images/camera_lens_green.jpg",
                        "/images/suv_camera_purple.jpg",
                      ];

                      const slideIndex = parseInt(slide.id) - 1;
                      const imageIndex = (slideIndex * 4 + cardIdx) % allImages.length;
                      const img = allImages[imageIndex];
                      const colors = ["white", "white", "white", "white"];
                      const color = colors[cardIdx % 4];

                      return (
                        <div
                          key={cardIdx}
                          className="relative bg-[#0b0f19] p-6 sm:p-7 min-h-[240px] flex flex-col group overflow-hidden border "
                        >
                          <div className="absolute top-0 right-0 w-[60%] h-full z-0 pointer-events-none overflow-hidden">
                            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/80 to-transparent z-10"></div> */}
                            <img
                              src={img}
                              alt=""
                              className="w-full h-full object-cover opacity-80 mix-blend-lighten group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            />
                          </div>

                          <div className="relative z-10 flex flex-col h-full w-[65%]">
                            <card.icon className="w-8 h-8 mb-4" strokeWidth={2} style={{ color }} />

                            <h3 className="mb-2">
                              <span className="block text-white text-[20px] uppercase sm:text-[22px] font-bold leading-tight">
                                {card.titlePart1}
                              </span>
                              <span
                                className="block text-[20px] sm:text-[22px] uppercase font-bold leading-tight"
                                style={{ color }}
                              >
                                {card.titlePart2}
                              </span>
                            </h3>

                            <p className="text-white/60 text-sm mt-auto">
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