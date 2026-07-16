"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Baloo_2 } from "next/font/google";
import InTitle from "../common/InTitle";
import GridLine from "../common/GridLine";

const baloo = Baloo_2({ subsets: ["latin"], weight: ["500", "600"] });

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Dummy FAQ content — swap in real copy whenever it's ready.
 * Grounded in a fictional product ("Orbit") so answers read naturally
 * instead of lorem-ipsum filler.
 */
const FAQ_ITEMS = [
  {
    question: "What is Orbit and who is it for?",
    answer:
      "Orbit is a workspace for small teams to plan, track, and ship work in one place. It replaces scattered spreadsheets and chat threads with a single shared source of truth, so everyone from founders to freelancers can see what's happening at a glance.",
  },
  {
    question: "Do I need a credit card to start a free trial?",
    answer:
      "No. You can create an account and use every core feature for 14 days without entering payment details. We'll only ask for a card if you decide to upgrade to a paid plan once the trial ends.",
  },
  {
    question: "Can I invite external clients or contractors?",
    answer:
      "Yes. Guest seats let you bring clients and contractors into specific projects without giving them access to your whole workspace. You control exactly what they can view, comment on, or edit.",
  },
  {
    question: "How does billing work if I add or remove teammates?",
    answer:
      "Billing is prorated automatically. Add someone mid-cycle and you're only charged for the days they're active; remove someone and that seat's cost is credited toward your next invoice.",
  },
  {
    question: "Is my data encrypted and backed up?",
    answer:
      "All data is encrypted in transit and at rest, and we run continuous backups across multiple regions. You can also export a full copy of your workspace at any time from account settings.",
  },
  {
    question: "Which tools does Orbit integrate with?",
    answer:
      "Orbit connects natively with Slack, Google Calendar, GitHub, and Figma, and supports Zapier for everything else. New integrations ship roughly every month based on customer requests.",
  },
  {
    question: "Can I move my existing data from another tool?",
    answer:
      "Yes. Our import wizard supports direct migration from Trello, Asana, and CSV files, mapping boards, tasks, and due dates automatically. Most teams are fully migrated in under an hour.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "Your workspace is kept in a read-only state for 30 days after cancellation so you can export anything you need. After that window, all data is permanently deleted from our servers.",
  },
  {
    question: "Do you offer discounts for nonprofits or students?",
    answer:
      "Yes, verified nonprofits and educational institutions get 50% off any paid plan. Reach out through our support form with proof of status and we'll apply the discount to your account.",
  },
  {
    question: "How can I get help if I'm stuck?",
    answer:
      "Live chat support is available on every plan, with replies typically within a few hours on weekdays. Paid plans also include priority email support and access to weekly onboarding office hours.",
  },
];

export default function FAQSection() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const answerRefs = useRef([]);
  const iconRefs = useRef([]);

  const [openIndex, setOpenIndex] = useState(0);

  // Entrance / scroll-reveal animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(eyebrowRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.5,
        ease: "power2.out",
      })
        .from(
          headingRef.current,
          {
            opacity: 0,
            y: 24,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .from(
          itemRefs.current,
          {
            opacity: 0,
            y: 28,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.3",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Set initial state for the item that's open by default
  useEffect(() => {
    answerRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === openIndex) {
        gsap.set(el, { height: "auto", opacity: 1, marginTop: 16 });
      } else {
        gsap.set(el, { height: 0, opacity: 0, marginTop: 0 });
      }
    });
    iconRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { rotate: i === openIndex ? 45 : 0 });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleItem = (index) => {
    const isOpening = index !== openIndex;
    const prevIndex = openIndex;

    // Animate the icon that's toggling
    gsap.to(iconRefs.current[index], {
      rotate: isOpening ? 45 : 0,
      duration: 0.35,
      ease: "power2.out",
    });

    // Close the previously open item (if a different one is opening)
    if (isOpening && prevIndex !== index && answerRefs.current[prevIndex]) {
      gsap.to(iconRefs.current[prevIndex], {
        rotate: 0,
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.to(answerRefs.current[prevIndex], {
        height: 0,
        opacity: 0,
        marginTop: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }

    // Toggle the clicked item
    const target = answerRefs.current[index];
    if (target) {
      if (isOpening) {
        gsap.to(target, {
          height: "auto",
          opacity: 1,
          marginTop: 16,
          duration: 0.45,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(target, {
          height: 0,
          opacity: 0,
          marginTop: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }
    }

    setOpenIndex(isOpening ? index : null);
  };

  return (
    <section
      ref={sectionRef}
      className="BGTint relative w-full overflow-hidden py-20 sm:py-28"
    >

        <GridLine />
      {/* decorative vertical guide lines, matching the reference layout */}
      <div className="pointer-events-none absolute inset-y-0 left-[6%] hidden w-px bg-black/[0.06] sm:block" />
      <div className="pointer-events-none absolute inset-y-0 right-[6%] hidden w-px bg-black/[0.06] sm:block" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 sm:px-6">

        <InTitle txt={`Trusted By`} />

        <h1
          ref={headingRef}
          className={` text-center mb-10 heading1`}
        >
          Frequently
          <br />
          Asked Questions
        </h1>

        <div ref={listRef} className="flex w-full flex-col gap-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                ref={(el) => (itemRefs.current[index] = el)}
                className={[
                  "w-full  px-6 py-5 transition-colors duration-300 sm:px-7 group relative",
                  isOpen ? "BGRed TextTint shadow-sm shadow-black/5" : "BGLightTint",
                ].join(" ")}
              >
                <span className="absolute -left-[0.25rem] -top-[0.25rem] opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in group-hover:-left-[0.35rem] group-hover:-top-[0.35rem] h-[1rem] w-[1rem] border-l-[0.11rem] border-t-[0.11rem] border-[#EE2F2E]"></span>
                <span className="absolute -left-[0.25rem] -bottom-[0.25rem] opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in group-hover:-left-[0.35rem] group-hover:-bottom-[0.35rem] -rotate-90 h-[1rem] w-[1rem] border-l-[0.11rem] border-t-[0.11rem] border-[#EE2F2E]"></span>
                <span className="absolute -top-[0.25rem] -right-[0.25rem] opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in group-hover:-top-[0.35rem] group-hover:-right-[0.35rem] -rotate-90 h-[1rem] w-[1rem] border-b-[0.11rem] border-r-[0.11rem] border-[#EE2F2E]"></span>
                <span className="absolute -bottom-[0.25rem] -right-[0.25rem] opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in group-hover:-bottom-[0.35rem] group-hover:-right-[0.35rem] h-[1rem] w-[1rem] border-b-[0.11rem] border-r-[0.11rem] border-[#EE2F2E]"></span>

                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                 <span
  className={`text-base font-medium sm:text-lg  ${
    isOpen ? "text-white" : "TextStandard"
  }`}
>
  {item.question}
</span>

                  <span
                    aria-hidden="true"
                    className={[
                      "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                      isOpen ? "BGLightTint" : "BGTint ",
                    ].join(" ")}
                  >
                    <svg
                      ref={(el) => (iconRefs.current[index] = el)}
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="TextStandard"
                    >
                      <path
                        d="M7 0V14M0 7H14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  ref={(el) => (answerRefs.current[index] = el)}
                  className="overflow-hidden"
                  style={{ height: 0, opacity: 0 }}
                >
                  <p
  className={`pr-10 text-sm leading-relaxed sm:text-base ${
    isOpen ? "text-white/80! opacity-100 paragraph" : "TextStandard opacity-70"
  }`}
>
  {item.answer}
</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
