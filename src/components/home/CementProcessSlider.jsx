"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
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
  ChevronDown,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------
// Each capability = one "sheet" in the index. Cards within a sheet are
// lettered A–D, echoing how items are called out on a parts schedule.

const SLIDES = [
  {
    id: "01",
    category: "Tooling",
    title: "Exclusive mould & family mould design capability",
    description:
      "We design and own the tools — for the camera housing and, where the programme needs it, for the vehicle part it sits in.",
    cards: [
      {
        titlePart1: "Exclusive",
        titlePart2: "tools",
        icon: Lock,
        description:
          "A mould developed for one customer is not offered to another. The housing stays yours.",
      },
      {
        titlePart1: "Family",
        titlePart2: "moulds",
        icon: Layers,
        description:
          "A shared core with interchangeable inserts, so variants come off one tool at a fraction of the NRE.",
      },
      {
        titlePart1: "Coupled",
        titlePart2: "parts",
        icon: Link2,
        description:
          "Camera tool and vehicle-part tool developed together, so tolerance, grain and finish match across the joint.",
      },
      {
        titlePart1: "Trial before",
        titlePart2: "tooling",
        icon: ClipboardCheck,
        description:
          "NRE and lead time are confirmed only after a physical fitment trial on the target vehicle.",
      },
    ],
  },
  {
    id: "02",
    category: "Engineering",
    title: "Customised development & product engineering",
    description:
      "Our engineering team works closely with your product managers to ensure every component fits perfectly into your ecosystem.",
    cards: [
      {
        titlePart1: "Custom",
        titlePart2: "designs",
        icon: PenTool,
        description:
          "Tailored designs that seamlessly integrate with your existing products and architectural requirements.",
      },
      {
        titlePart1: "Rapid",
        titlePart2: "prototypes",
        icon: Zap,
        description:
          "Fast-tracked prototyping so you can test and iterate before committing to full-scale production.",
      },
      {
        titlePart1: "Strict",
        titlePart2: "testing",
        icon: TestTube,
        description:
          "Rigorous quality checks at every engineering phase to meet global safety and performance standards.",
      },
      {
        titlePart1: "System",
        titlePart2: "validation",
        icon: CheckCircle2,
        description:
          "Comprehensive end-to-end validation of the complete product lifecycle.",
      },
    ],
  },
  {
    id: "03",
    category: "Benchmarking",
    title: "Benchmarked against the closest competition",
    description:
      "We constantly analyse and benchmark our solutions against industry leaders to keep performance and value ahead of the field.",
    cards: [
      {
        titlePart1: "Market",
        titlePart2: "analysis",
        icon: BarChart3,
        description: "A close read of market trends to position your product ahead of the curve.",
      },
      {
        titlePart1: "Competitor",
        titlePart2: "insight",
        icon: Radar,
        description:
          "Actionable intelligence on competitor products to define clear differentiation strategies.",
      },
      {
        titlePart1: "Performance",
        titlePart2: "metrics",
        icon: Gauge,
        description: "Data-driven performance metrics to validate product superiority.",
      },
      {
        titlePart1: "Value",
        titlePart2: "proposition",
        icon: Award,
        description: "Balancing cost, quality and time-to-market to maximise return.",
      },
    ],
  },
  {
    id: "04",
    category: "Manufacturing",
    title: "Assembled, aged and tested on our own line",
    description:
      "End-to-end manufacturing capability, giving us direct control over quality and a streamlined production line.",
    cards: [
      {
        titlePart1: "In-house",
        titlePart2: "assembly",
        icon: Factory,
        description: "Purpose-built assembly lines tailored for precision manufacturing.",
      },
      {
        titlePart1: "Aging",
        titlePart2: "process",
        icon: Timer,
        description: "Rigorous aging tests to guarantee long-term reliability in the field.",
      },
      {
        titlePart1: "Quality",
        titlePart2: "control",
        icon: ShieldCheck,
        description: "Multi-stage quality gates to catch defects before they leave the factory.",
      },
      {
        titlePart1: "Scalable",
        titlePart2: "production",
        icon: TrendingUp,
        description: "Flexible lines that scale in step with your demand.",
      },
    ],
  },
  {
    id: "05",
    category: "Enablement",
    title: "Training and back-end support for your team",
    description:
      "We don't just deliver products — we make sure your team is equipped and trained to manage them.",
    cards: [
      {
        titlePart1: "Team",
        titlePart2: "training",
        icon: GraduationCap,
        description: "Structured training modules for your engineering and support teams.",
      },
      {
        titlePart1: "Technical",
        titlePart2: "support",
        icon: Wrench,
        description: "A dedicated technical support line for troubleshooting and diagnostics.",
      },
      {
        titlePart1: "Knowledge",
        titlePart2: "base",
        icon: BookOpen,
        description: "Documentation and reference material tailored to your deployment.",
      },
      {
        titlePart1: "Live",
        titlePart2: "assistance",
        icon: Headphones,
        description: "Real-time support channels that keep downtime to a minimum.",
      },
    ],
  },
  {
    id: "06",
    category: "Compliance",
    title: "BIS support for your product line-up",
    description:
      "Navigating regulatory requirements with a dedicated compliance and certification team.",
    cards: [
      {
        titlePart1: "BIS",
        titlePart2: "certification",
        icon: BadgeCheck,
        description: "End-to-end handling of the BIS certification process.",
      },
      {
        titlePart1: "Regulatory",
        titlePart2: "advisory",
        icon: ScrollText,
        description: "Guidance on local and international compliance standards.",
      },
      {
        titlePart1: "Document",
        titlePart2: "preparation",
        icon: FileText,
        description: "Streamlined preparation of required legal and technical documentation.",
      },
      {
        titlePart1: "Audit",
        titlePart2: "support",
        icon: Users,
        description: "On-ground support during facility and product audits.",
      },
    ],
  },
  {
    id: "07",
    category: "Software",
    title: "Software is our core",
    description:
      "Hardware is only half the job. Our software stack is what keeps it intelligent, secure and scalable.",
    cards: [
      {
        titlePart1: "Firmware",
        titlePart2: "development",
        icon: Cpu,
        description: "Custom firmware tuned for power efficiency and performance.",
      },
      {
        titlePart1: "Cloud",
        titlePart2: "integration",
        icon: Cloud,
        description: "Straightforward connectivity with major cloud platforms and custom backends.",
      },
      {
        titlePart1: "Over-the-air",
        titlePart2: "updates",
        icon: RefreshCw,
        description: "Reliable, secure OTA update mechanisms for fleets of devices.",
      },
      {
        titlePart1: "Security",
        titlePart2: "protocols",
        icon: KeyRound,
        description: "Enterprise-grade encryption and secure-boot implementations.",
      },
    ],
  },
];

const CARD_MARKS = [];

export default function CapabilitiesShowcase() {
  const [index, setIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const contentRef = useRef(null);
  const isAnimating = useRef(false);

  const reducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const goTo = (nextIndex) => {
    if (isAnimating.current || nextIndex === index) {
      setDropdownOpen(false);
      return;
    }

    if (reducedMotion()) {
      setIndex(nextIndex);
      setDropdownOpen(false);
      return;
    }

    isAnimating.current = true;
    setDropdownOpen(false);

    // Animate old content down smoothly and fade out
    gsap.to(contentRef.current, {
      opacity: 0,
      y: "20%",
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setIndex(nextIndex);

        // Animate new content up from bottom smoothly
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: "20%" },
          {
            opacity: 1,
            y: "0%",
            duration: 0.5,
            ease: "power3.out",
            onComplete: () => {
              isAnimating.current = false;
            },
          }
        );
      },
    });
  };

  // keyboard navigation when the dropdown is focused
  const onKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      goTo(Math.min(index + 1, SLIDES.length - 1));
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(Math.max(index - 1, 0));
    }
  };

  const slide = SLIDES[index];

  return (
    <section className="relative w-full min-h-screen BGRed text-white py-10 sm:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="mx-auto mb-16 pt-10 flex flex-col justify-center items-center">
        <div className="flex-1 space-y-6 text-center">
          <h2 className="heading2 mt-4 text-white!">
            THE PERFECTLY ENGINEERED
            .<br /><span className="text-[black]">PRODUCT FOR YOUR LINEUP.</span>
          </h2>
          <p className="paragraph text-white/70! max-w-xl mx-auto">
            Tooling, product engineering, competitor benchmarking, local assembly, team training and BIS compliance — before the order and after it.
          </p>
        </div>
      </div>

      {/* CARDER AND DROPDOWN CONTAINER */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col gap-8">

        {/* Dropdown Filter */}
        <div className="relative z-50 w-full" onKeyDown={onKeyDown}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full bg-black border border-white/20  px-5 py-4 flex items-center justify-between transition-colors duration-200 "
          >
            <div className="flex items-center gap-4 text-left">
              <span className="shrink-0 w-10 h-10 flex items-center justify-center border border-white! text-black bg-white paragraph font-semibold">
                {slide.id}
              </span>
              <div>
                <span className="block tracking-[0.14em] paragraph uppercase text-white! mb-1 text-[11px]">
                  {slide.category}
                </span>
                <span className="block paragraph text-white/60! font-medium text-[15px] sm:text-base leading-tight">
                  {slide.title}
                </span>
              </div>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-white/70 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-full left-0 w-full mt-2 bg-[#1a1a1a] border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 origin-top ${dropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
              }`}
          >
            <div className="max-h-[350px] overflow-y-auto custom-scrollbar grid grid-cols-1 sm:grid-cols-2">
              {SLIDES.map((s, idx) => {
                const active = index === idx;
                return (
                  <button
                    key={s.id}
                    onClick={() => goTo(idx)}
                    className={`w-full flex items-center gap-4 text-left px-5 py-3 border-b border-white/5 transition-colors duration-200 hover:bg-white/10 ${active ? 'bg-white/5' : ''
                      }`}
                  >
                    <span
                      className={`shrink-0 w-8 h-8 flex items-center paragraph justify-center border transition-colors duration-200 text-sm ${active ? "bg-white text-black border-white" : "border-white/30 text-white/70!"
                        }`}
                    >
                      {s.id}
                    </span>
                    <div>
                      <span className="block tracking-[0.14em] paragraph uppercase text-white! mb-0.5 text-[10px]">
                        {s.category}
                      </span>
                      <span className={`block paragraph text-[14px] ${active ? 'text-white/60!' : 'text-white/80!'}`}>
                        {s.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sheet content wrapped in overflow-hidden for animation */}
        <div className="w-full overflow-hidden min-h-[400px]">
          <div
            ref={contentRef}
            className="bg-white text-black border border-white/20 shadow-xl w-full"
          >
            <div className="px-6 sm:px-9 pt-8 sm:pt-10 pb-9 sm:pb-11">
              <h3 className="heading3 uppercase tracking-tight text-[#EE2F2E] mb-4">
                {slide.title}
              </h3>
              <p className="paragraph sm:mb-12">
                {slide.description}
              </p>

              {/* card schedule */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {slide.cards.map((card, idx) => {
                  const images = [
                    "/images/dashcam_orange.jpg",
                    "/images/dashcam_blue.jpg",
                    "/images/camera_lens_green.jpg",
                    "/images/suv_camera_purple.jpg"
                  ];
                  const colors = ["white", "white", "white", "white"];
                  const color = colors[idx % 4];
                  const img = images[idx % 4];

                  return (
                    <div
                      key={idx}
                      className="relative bg-[#0b0f19] p-6 sm:p-7 min-h-[240px] flex flex-col group overflow-hidden  border border-white/10"
                    >
                      <div className="absolute top-0 right-0 w-[60%] h-full z-0 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/80 to-transparent z-10"></div>
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
                          <span className="block text-[20px] sm:text-[22px] uppercase font-bold leading-tight" style={{ color }}>
                            {card.titlePart2}
                          </span>
                        </h3>



                        <p className="text-white/60 text-sm mt-auto">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}