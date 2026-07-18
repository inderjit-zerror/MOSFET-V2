// "use client";

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Baloo_2 } from "next/font/google";
// import InTitle from "../common/InTitle";
// import GridLine from "../common/GridLine";

// const baloo = Baloo_2({ subsets: ["latin"], weight: ["500", "600"] });

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// /**
//  * Dummy FAQ content — swap in real copy whenever it's ready.
//  * Grounded in a fictional product ("Orbit") so answers read naturally
//  * instead of lorem-ipsum filler.
//  */
// const FAQ_ITEMS = [
//   {
//     question: "What is Orbit and who is it for?",
//     answer:
//       "Orbit is a workspace for small teams to plan, track, and ship work in one place. It replaces scattered spreadsheets and chat threads with a single shared source of truth, so everyone from founders to freelancers can see what's happening at a glance.",
//   },
//   {
//     question: "Do I need a credit card to start a free trial?",
//     answer:
//       "No. You can create an account and use every core feature for 14 days without entering payment details. We'll only ask for a card if you decide to upgrade to a paid plan once the trial ends.",
//   },
//   {
//     question: "Can I invite external clients or contractors?",
//     answer:
//       "Yes. Guest seats let you bring clients and contractors into specific projects without giving them access to your whole workspace. You control exactly what they can view, comment on, or edit.",
//   },
//   {
//     question: "How does billing work if I add or remove teammates?",
//     answer:
//       "Billing is prorated automatically. Add someone mid-cycle and you're only charged for the days they're active; remove someone and that seat's cost is credited toward your next invoice.",
//   },
//   {
//     question: "Is my data encrypted and backed up?",
//     answer:
//       "All data is encrypted in transit and at rest, and we run continuous backups across multiple regions. You can also export a full copy of your workspace at any time from account settings.",
//   },
//   {
//     question: "Which tools does Orbit integrate with?",
//     answer:
//       "Orbit connects natively with Slack, Google Calendar, GitHub, and Figma, and supports Zapier for everything else. New integrations ship roughly every month based on customer requests.",
//   },
//   {
//     question: "Can I move my existing data from another tool?",
//     answer:
//       "Yes. Our import wizard supports direct migration from Trello, Asana, and CSV files, mapping boards, tasks, and due dates automatically. Most teams are fully migrated in under an hour.",
//   },
//   {
//     question: "What happens to my data if I cancel?",
//     answer:
//       "Your workspace is kept in a read-only state for 30 days after cancellation so you can export anything you need. After that window, all data is permanently deleted from our servers.",
//   },
//   {
//     question: "Do you offer discounts for nonprofits or students?",
//     answer:
//       "Yes, verified nonprofits and educational institutions get 50% off any paid plan. Reach out through our support form with proof of status and we'll apply the discount to your account.",
//   },
//   {
//     question: "How can I get help if I'm stuck?",
//     answer:
//       "Live chat support is available on every plan, with replies typically within a few hours on weekdays. Paid plans also include priority email support and access to weekly onboarding office hours.",
//   },
// ];

// export default function FAQSection() {
//   const sectionRef = useRef(null);
//   const eyebrowRef = useRef(null);
//   const headingRef = useRef(null);
//   const listRef = useRef(null);
//   const itemRefs = useRef([]);
//   const answerRefs = useRef([]);
//   const iconRefs = useRef([]);

//   const [openIndex, setOpenIndex] = useState(0);

//   // Entrance / scroll-reveal animation
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//           once: true,
//         },
//       });

//       tl.from(eyebrowRef.current, {
//         opacity: 0,
//         y: 16,
//         duration: 0.5,
//         ease: "power2.out",
//       })
//         .from(
//           headingRef.current,
//           {
//             opacity: 0,
//             y: 24,
//             duration: 0.7,
//             ease: "power3.out",
//           },
//           "-=0.25",
//         )
//         .from(
//           itemRefs.current,
//           {
//             opacity: 0,
//             y: 28,
//             duration: 0.6,
//             stagger: 0.08,
//             ease: "power2.out",
//           },
//           "-=0.3",
//         );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   // Set initial state for the item that's open by default
//   useEffect(() => {
//     answerRefs.current.forEach((el, i) => {
//       if (!el) return;
//       if (i === openIndex) {
//         gsap.set(el, { height: "auto", opacity: 1, marginTop: 16 });
//       } else {
//         gsap.set(el, { height: 0, opacity: 0, marginTop: 0 });
//       }
//     });
//     iconRefs.current.forEach((el, i) => {
//       if (!el) return;
//       gsap.set(el, { rotate: i === openIndex ? 45 : 0 });
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const toggleItem = (index) => {
//     const isOpening = index !== openIndex;
//     const prevIndex = openIndex;

//     // Animate the icon that's toggling
//     gsap.to(iconRefs.current[index], {
//       rotate: isOpening ? 45 : 0,
//       duration: 0.35,
//       ease: "power2.out",
//     });

//     // Close the previously open item (if a different one is opening)
//     if (isOpening && prevIndex !== index && answerRefs.current[prevIndex]) {
//       gsap.to(iconRefs.current[prevIndex], {
//         rotate: 0,
//         duration: 0.35,
//         ease: "power2.out",
//       });
//       gsap.to(answerRefs.current[prevIndex], {
//         height: 0,
//         opacity: 0,
//         marginTop: 0,
//         duration: 0.4,
//         ease: "power2.inOut",
//       });
//     }

//     // Toggle the clicked item
//     const target = answerRefs.current[index];
//     if (target) {
//       if (isOpening) {
//         gsap.to(target, {
//           height: "auto",
//           opacity: 1,
//           marginTop: 16,
//           duration: 0.45,
//           ease: "power2.inOut",
//         });
//       } else {
//         gsap.to(target, {
//           height: 0,
//           opacity: 0,
//           marginTop: 0,
//           duration: 0.4,
//           ease: "power2.inOut",
//         });
//       }
//     }

//     setOpenIndex(isOpening ? index : null);
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="BGTint relative w-full overflow-hidden py-20 sm:py-28"
//     >

//         {/* <GridLine /> */}
//       {/* decorative vertical guide lines, matching the reference layout */}
//       <div className="pointer-events-none absolute inset-y-0 left-[6%] hidden w-px bg-black/[0.06] sm:block" />
//       <div className="pointer-events-none absolute inset-y-0 right-[6%] hidden w-px bg-black/[0.06] sm:block" />

//       <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 sm:px-6">

//         {/* <InTitle txt={`Trusted By`} /> */}

//         <h1
//           ref={headingRef}
//           className={` text-center mb-10 heading1`}
//         >
//           Frequently
//           <br />
//           Asked Questions
//         </h1>

//         <div ref={listRef} className="flex w-full flex-col gap-4">
//           {FAQ_ITEMS.map((item, index) => {
//             const isOpen = openIndex === index;
//             return (
//               <div
//                 key={item.question}
//                 ref={(el) => (itemRefs.current[index] = el)}
//                 className={[
//                   "w-full  px-6 py-5 transition-colors duration-300 sm:px-7 group relative",
//                   isOpen ? "BGRed TextTint shadow-sm shadow-black/5" : "BGLightTint",
//                 ].join(" ")}
//               >
//                 <span className="absolute -left-[0.25rem] -top-[0.25rem] opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in group-hover:-left-[0.35rem] group-hover:-top-[0.35rem] h-[1rem] w-[1rem] border-l-[0.11rem] border-t-[0.11rem] border-[#EE2F2E]"></span>
//                 <span className="absolute -left-[0.25rem] -bottom-[0.25rem] opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in group-hover:-left-[0.35rem] group-hover:-bottom-[0.35rem] -rotate-90 h-[1rem] w-[1rem] border-l-[0.11rem] border-t-[0.11rem] border-[#EE2F2E]"></span>
//                 <span className="absolute -top-[0.25rem] -right-[0.25rem] opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in group-hover:-top-[0.35rem] group-hover:-right-[0.35rem] -rotate-90 h-[1rem] w-[1rem] border-b-[0.11rem] border-r-[0.11rem] border-[#EE2F2E]"></span>
//                 <span className="absolute -bottom-[0.25rem] -right-[0.25rem] opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in group-hover:-bottom-[0.35rem] group-hover:-right-[0.35rem] h-[1rem] w-[1rem] border-b-[0.11rem] border-r-[0.11rem] border-[#EE2F2E]"></span>

//                 <button
//                   type="button"
//                   onClick={() => toggleItem(index)}
//                   aria-expanded={isOpen}
//                   className="flex w-full items-center justify-between gap-4 text-left"
//                 >
//                  <span
//   className={`text-base font-medium sm:text-lg  ${
//     isOpen ? "text-white" : "TextStandard"
//   }`}
// >
//   {item.question}
// </span>

//                   <span
//                     aria-hidden="true"
//                     className={[
//                       "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300",
//                       isOpen ? "BGLightTint" : "BGTint ",
//                     ].join(" ")}
//                   >
//                     <svg
//                       ref={(el) => (iconRefs.current[index] = el)}
//                       width="14"
//                       height="14"
//                       viewBox="0 0 14 14"
//                       fill="none"
//                       className="TextStandard"
//                     >
//                       <path
//                         d="M7 0V14M0 7H14"
//                         stroke="currentColor"
//                         strokeWidth="1.5"
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                   </span>
//                 </button>

//                 <div
//                   ref={(el) => (answerRefs.current[index] = el)}
//                   className="overflow-hidden"
//                   style={{ height: 0, opacity: 0 }}
//                 >
//                   <p
//   className={`pr-10 text-sm leading-relaxed sm:text-base ${
//     isOpen ? "text-white/80! opacity-100 paragraph" : "TextStandard opacity-70"
//   }`}
// >
//   {item.answer}
// </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

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
 * instead of lorem-ipsum filler. Each item carries a `category` so it
 * can be filtered from the sidebar on the left.
 */
const CATEGORIES = [
  "All",
  "Product Related Queries",
  "Services Related Queries",
  "Common Questions",
  "Our Conditions",
  "Warranty Claim",
];

const FAQ_ITEMS = [
  // ---------- Product Related Queries ----------
  {
    category: "Product Related Queries",
    question: "What is Orbit and who is it for?",
    answer:
      "Orbit is a workspace for small teams to plan, track, and ship work in one place. It replaces scattered spreadsheets and chat threads with a single shared source of truth, so everyone from founders to freelancers can see what's happening at a glance.",
  },
  {
    category: "Product Related Queries",
    question: "Which platforms does Orbit run on?",
    answer:
      "Orbit works in any modern browser and also ships as a native app for Windows, macOS, iOS, and Android. Your data stays in sync across every device the moment you make a change.",
  },
  {
    category: "Product Related Queries",
    question: "Can I customize boards and workflows?",
    answer:
      "Yes. Every board can be switched between list, kanban, calendar, and timeline views, and you can build custom statuses, fields, and automations to match how your team actually works.",
  },
  {
    category: "Product Related Queries",
    question: "Does Orbit support recurring tasks?",
    answer:
      "You can set any task to repeat daily, weekly, monthly, or on a custom schedule. Orbit automatically creates the next instance once the current one is marked complete.",
  },
  {
    category: "Product Related Queries",
    question: "Is there a mobile app?",
    answer:
      "Yes, the Orbit mobile app mirrors the desktop experience so you can update tasks, comment, and get notifications on the go. Offline changes sync automatically once you're back online.",
  },
  {
    category: "Product Related Queries",
    question: "Can I set up dashboards for reporting?",
    answer:
      "Custom dashboards let you pull charts and metrics from any project — burndown rates, workload, overdue tasks, and more — and share them as a live link or export them as PDF.",
  },
  {
    category: "Product Related Queries",
    question: "How many projects can I create?",
    answer:
      "There's no hard limit on the number of projects. Free trial workspaces can create up to 5 active projects at a time, while every paid plan supports unlimited projects.",
  },
  {
    category: "Product Related Queries",
    question: "Does Orbit support file attachments?",
    answer:
      "You can attach files directly to tasks and comments up to 5GB per file. Attachments are versioned automatically, so earlier uploads are never overwritten or lost.",
  },

  // ---------- Services Related Queries ----------
  {
    category: "Services Related Queries",
    question: "Do you offer onboarding assistance?",
    answer:
      "Every new team gets a guided setup session with a product specialist, plus access to a self-serve onboarding checklist inside the app to help you get running in under a day.",
  },
  {
    category: "Services Related Queries",
    question: "Can I get a dedicated account manager?",
    answer:
      "Teams on our Business and Enterprise plans are assigned a dedicated account manager who checks in quarterly and helps plan rollouts, migrations, and training for new hires.",
  },
  {
    category: "Services Related Queries",
    question: "Do you provide custom integration builds?",
    answer:
      "Our services team can build bespoke integrations with internal tools or legacy systems on a project basis. Reach out through the support form and we'll scope the work together.",
  },
  {
    category: "Services Related Queries",
    question: "Is training available for larger teams?",
    answer:
      "Yes, we run live group training sessions for teams of 10 or more, covering setup, admin controls, and best practices. Sessions can be recorded for anyone who can't attend live.",
  },
  {
    category: "Services Related Queries",
    question: "Can you help migrate data from another platform?",
    answer:
      "Our migration service maps your existing boards, tasks, and due dates from tools like Trello, Asana, or CSV exports, and handles the transfer for you so nothing is left behind.",
  },
  {
    category: "Services Related Queries",
    question: "Do you offer priority support add-ons?",
    answer:
      "Priority support can be added to any plan for guaranteed response times under two hours during business days, along with a direct line to our senior support engineers.",
  },
  {
    category: "Services Related Queries",
    question: "Can Orbit be white-labeled for my clients?",
    answer:
      "Enterprise customers can apply their own branding, including logo, color scheme, and a custom domain, so client-facing workspaces feel like a natural extension of their own product.",
  },

  // ---------- Common Questions ----------
  {
    category: "Common Questions",
    question: "Do I need a credit card to start a free trial?",
    answer:
      "No. You can create an account and use every core feature for 14 days without entering payment details. We'll only ask for a card if you decide to upgrade once the trial ends.",
  },
  {
    category: "Common Questions",
    question: "Can I invite external clients or contractors?",
    answer:
      "Yes. Guest seats let you bring clients and contractors into specific projects without giving them access to your whole workspace. You control exactly what they can view, comment on, or edit.",
  },
  {
    category: "Common Questions",
    question: "How does billing work if I add or remove teammates?",
    answer:
      "Billing is prorated automatically. Add someone mid-cycle and you're only charged for the days they're active; remove someone and that seat's cost is credited to your next invoice.",
  },
  {
    category: "Common Questions",
    question: "Which tools does Orbit integrate with?",
    answer:
      "Orbit connects natively with Slack, Google Calendar, GitHub, and Figma, and supports Zapier for everything else. New integrations ship roughly every month based on customer requests.",
  },
  {
    category: "Common Questions",
    question: "Can I move my existing data from another tool?",
    answer:
      "Yes. Our import wizard supports direct migration from Trello, Asana, and CSV files, mapping boards, tasks, and due dates automatically. Most teams are fully migrated in under an hour.",
  },
  {
    category: "Common Questions",
    question: "Do you offer discounts for nonprofits or students?",
    answer:
      "Yes, verified nonprofits and educational institutions get 50% off any paid plan. Reach out through our support form with proof of status and we'll apply the discount to your account.",
  },
  {
    category: "Common Questions",
    question: "How can I get help if I'm stuck?",
    answer:
      "Live chat support is available on every plan, with replies typically within a few hours on weekdays. Paid plans also include priority email support and weekly onboarding office hours.",
  },
  {
    category: "Common Questions",
    question: "Can I change my plan later?",
    answer:
      "You can upgrade, downgrade, or switch between monthly and annual billing at any time from account settings. Changes take effect immediately, with charges prorated for the current cycle.",
  },

  // ---------- Our Conditions ----------
  {
    category: "Our Conditions",
    question: "What is your refund policy?",
    answer:
      "If you're not satisfied within the first 30 days of a paid subscription, we'll issue a full refund, no questions asked. Just reach out through the support form to request one.",
  },
  {
    category: "Our Conditions",
    question: "Are there any usage restrictions on the free trial?",
    answer:
      "The free trial includes every core feature but caps workspace storage at 5GB and limits automations to 100 runs per month. These limits reset once you upgrade to a paid plan.",
  },
  {
    category: "Our Conditions",
    question: "What happens to my data if I cancel?",
    answer:
      "Your workspace is kept in a read-only state for 30 days after cancellation so you can export anything you need. After that window, all data is permanently deleted from our servers.",
  },
  {
    category: "Our Conditions",
    question: "Is my data encrypted and backed up?",
    answer:
      "All data is encrypted in transit and at rest, and we run continuous backups across multiple regions. You can also export a full copy of your workspace at any time from account settings.",
  },
  {
    category: "Our Conditions",
    question: "Do you have a service level agreement?",
    answer:
      "Business and Enterprise plans include an SLA guaranteeing 99.9% uptime, with service credits applied automatically to your next invoice if that threshold isn't met in a given month.",
  },
  {
    category: "Our Conditions",
    question: "Who owns the data I upload to Orbit?",
    answer:
      "You retain full ownership of everything you upload. We never sell customer data or use it to train external models, and you can request a complete export or deletion at any time.",
  },
  {
    category: "Our Conditions",
    question: "What are the terms for annual contracts?",
    answer:
      "Annual plans are billed upfront at a discounted rate and renew automatically unless cancelled at least 14 days before the renewal date. You can switch to monthly billing at renewal.",
  },

  // ---------- Warranty Claim ----------
  {
    category: "Warranty Claim",
    question: "Does Orbit come with a service warranty?",
    answer:
      "Paid plans include a service warranty covering platform uptime, data integrity, and core feature availability for the full length of your subscription term.",
  },
  {
    category: "Warranty Claim",
    question: "How do I file a warranty claim?",
    answer:
      "Submit a claim through the support form with your account ID and a description of the issue. Our team reviews and responds to every warranty claim within two business days.",
  },
  {
    category: "Warranty Claim",
    question: "What does the warranty cover?",
    answer:
      "It covers data loss caused by platform errors, extended unplanned downtime beyond our published SLA, and billing discrepancies. It doesn't cover issues from third-party integrations you've connected.",
  },
  {
    category: "Warranty Claim",
    question: "How long do I have to file a claim?",
    answer:
      "Claims must be filed within 60 days of the issue occurring. We recommend reporting problems as soon as you notice them so we can investigate while logs are still available.",
  },
  {
    category: "Warranty Claim",
    question: "Will I be compensated if my claim is approved?",
    answer:
      "Approved claims are typically resolved with service credits applied to your account, though qualifying cases such as verified data loss may be eligible for a partial refund.",
  },
  {
    category: "Warranty Claim",
    question: "Can I track the status of my claim?",
    answer:
      "Yes, every claim gets a reference number you can use to check its status from the support portal, and you'll receive an email update at each stage of the review.",
  },
  {
    category: "Warranty Claim",
    question: "Does the warranty extend to add-on services?",
    answer:
      "Paid add-ons such as custom integrations and priority support are covered under the same warranty terms as the core plan, for as long as the add-on remains active on your account.",
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

  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredItems =
    activeCategory === "All"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  // Entrance / scroll-reveal animation (runs once on mount)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Set initial state for the item that's open by default, and re-run a
  // light reveal animation whenever the filtered list changes.
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

    gsap.fromTo(
      itemRefs.current.filter(Boolean),
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.06,
        ease: "power2.out",
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    if (category === activeCategory) return;
    itemRefs.current = [];
    answerRefs.current = [];
    iconRefs.current = [];
    setActiveCategory(category);
    setOpenIndex(0);
  };

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
      {/* <GridLine /> */}
      {/* decorative vertical guide lines, matching the reference layout */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-[6%] hidden w-px bg-black/[0.06] sm:block" /> */}
      {/* <div className="pointer-events-none absolute inset-y-0 right-[6%] hidden w-px bg-black/[0.06] sm:block" /> */}

      <div className="relative mx-auto flex max-w-6xl flex-col px-5 sm:px-6">
        {/* <InTitle txt={`Trusted By`} /> */}

        <h1 ref={headingRef} className={`text-center mb-10 heading1 sm:mb-14`}>
          Frequently
          <br />
          Asked Questions
        </h1>

        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          {/* ---------- Left: category filters ---------- */}
          <div className="w-full flex-shrink-0 lg:sticky lg:top-24 lg:w-64">
            <div className="flex flex-row flex-wrap gap-2 lg:flex-col lg:flex-nowrap lg:gap-2">
              <p className=" paragraph">Filter's</p>
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryClick(category)}
                    className={[
                      "relative max-sm:rounded-full px-4 py-2.5 text-left text-sm font-medium group transition-colors duration-300 sm:text-base ",
                      isActive
                        ? "BGRed TextTint shadow-sm shadow-black/5"
                        : "BGLightTint TextStandard opacity-80 hover:opacity-100",
                    ].join(" ")}
                  >
                    <span className="absolute -left-[0.25rem] -top-[0.25rem] opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in group-hover:-left-[0.35rem] group-hover:-top-[0.35rem] h-[0.5rem] w-[0.5rem] border-l-[0.11rem] border-t-[0.11rem] border-[#EE2F2E]"></span>
                    <span className="absolute -left-[0.25rem] -bottom-[0.25rem] opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in group-hover:-left-[0.35rem] group-hover:-bottom-[0.35rem] -rotate-90 h-[0.5rem] w-[0.5rem] border-l-[0.11rem] border-t-[0.11rem] border-[#EE2F2E]"></span>
                    <span className="absolute -top-[0.25rem] -right-[0.25rem] opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in group-hover:-top-[0.35rem] group-hover:-right-[0.35rem] -rotate-90 h-[0.5rem] w-[0.5rem] border-b-[0.11rem] border-r-[0.11rem] border-[#EE2F2E]"></span>
                    <span className="absolute -bottom-[0.25rem] -right-[0.25rem] opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in group-hover:-bottom-[0.35rem] group-hover:-right-[0.35rem] h-[0.5rem] w-[0.5rem] border-b-[0.11rem] border-r-[0.11rem] border-[#EE2F2E]"></span>

                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ---------- Right: FAQ list ---------- */}
          <div ref={listRef} className="flex w-full flex-1 flex-col gap-4">
            {filteredItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={[
                    "w-full  px-6 py-5 transition-colors duration-300 sm:px-7 group relative",
                    isOpen ? "BGRed TextTint  shadow-black/5" : "BGLightTint",
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
                      className={`pr-10 font-light! leading-relaxed paragraph ${
                        isOpen
                          ? "text-white/80! opacity-100 paragraph"
                          : "TextStandard opacity-70"
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
      </div>
    </section>
  );
}
