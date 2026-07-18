"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InTitle from "../common/InTitle";
import GridLine from "../common/GridLine";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ArticlePage() {
  const heroRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRefs = useRef([]);
  const sidebarRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page-load hero sequence
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(eyebrowRef.current, { y: 16, opacity: 0, duration: 0.5 })
        .from(titleRef.current, { y: 28, opacity: 0, duration: 0.7 }, "-=0.3")
        .from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(
          imageRef.current,
          { y: 40, opacity: 0, duration: 0.9, scale: 1.02 },
          "-=0.3"
        );

      // Scroll-triggered reveal for each content section
      sectionRefs.current.forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Scroll-triggered reveal for sidebar cards
      sidebarRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToSectionRefs = (el, i) => {
    sectionRefs.current[i] = el;
  };
  const addToSidebarRefs = (el, i) => {
    sidebarRefs.current[i] = el;
  };

  return (
    <main className="min-h-screen BGTint text-neutral-900 pt-[15vh]" ref={heroRef}>
     
     {/* <GridLine /> */}

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 text-center">
        {/* <InTitle txt={`Case Study &middot; 2026`} /> */}

        <h1
          ref={titleRef}
          className="mt-4 text-4xl heading1 font-medium leading-tight tracking-tight text-neutral-900! sm:text-5xl"
        >
          A Guide to Streamlining
          <br />
          Your Business
        </h1>
        <p ref={subtitleRef} className="mx-auto paragraph mt-5 max-w-xl text-base text-neutral-500!">
          Dive into the world of operational efficiency and learn strategies
          to boost productivity effortlessly.
        </p>
      </section>

      {/* Hero image */}
      <div ref={imageRef} className="mx-auto mt-10  px-6">
        <div className="aspect-[16/8] w-full overflow-hidden rounded-sm bg-neutral-200">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
            alt="Team meeting around a table discussing strategy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Body layout */}
      <section className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-15 px-6 pb-24 md:grid-cols-[160px_1fr_220px]">
        {/* Left share/nav column */}
        <aside className="hidden md:block">
          <div className="sticky top-10 space-y-4 text-sm text-neutral-500">
            <p className="mb-2 text-xs! font-medium uppercase tracking-widest paragraph text-neutral-400!">
              Share
            </p>
            <a href="#" className="block hover:text-neutral-900! paragraph">
              Dashboard
            </a>
            <a href="#" className="block hover:text-neutral-900! paragraph">
              Twitter
            </a>
            <a href="#" className="block hover:text-neutral-900! paragraph">
              Facebook
            </a>
          </div>
        </aside>

        {/* Main article content */}
        <article className="max-w-2xl space-y-12">
          <div ref={(el) => addToSectionRefs(el, 0)}>
            <h2 className="text-2xl! font-medium heading1 tracking-tight text-neutral-900!">
              Understanding the Current Landscape
            </h2>
            <p className="mt-4  leading-7 paragraph text-neutral-600!">
              In the dynamic realm of business, understanding the current
              operational landscape is paramount. Before embarking on the
              journey of streamlining, it's crucial to conduct a
              comprehensive analysis of existing processes. This involves
              identifying bottlenecks, redundancies, and areas where
              efficiency can be heightened. By delving into the intricacies
              of day-to-day operations, businesses can pinpoint the exact
              pain points that hinder growth and productivity.
            </p>
            <p className="mt-4 leading-7 paragraph text-neutral-600!">
              Taking a holistic view, consider not only internal processes
              but also external factors influencing operations. Analyze
              market trends, customer expectations, and industry
              benchmarks. This comprehensive understanding lays the
              foundation for strategic streamlining, ensuring that efforts
              are targeted at the areas that will yield the most significant
              impact.
            </p>
          </div>

          <div ref={(el) => addToSectionRefs(el, 1)}>
            <h2 className="text-2xl! font-medium heading1 tracking-tight text-neutral-900!">
              Crafting a Streamlining Strategy
            </h2>
            <p className="mt-4 text-[15px] leading-7 paragraph text-neutral-600!">
              Armed with insights from the operational analysis, the next
              step is crafting a tailored streamlining strategy. This
              business isn't just cutting corners for optimizing
              processes for sustained efficiency. Begin by setting clear
              objectives for the streamlining initiative — whether
              it's to enhance productivity, reduce costs, or improve
              customer satisfaction. With defined goals, it becomes easier
              to align strategies with desired outcomes.
            </p>
            <p className="mt-4 text-[15px] leading-7 paragraph text-neutral-600!">
              Introduce technology as an ally in the streamlining process.
              Automation, data analytics, and integrated software solutions
              can revolutionize operations. Consider the human element as
              well — training and equipping your team with the skills
              needed to navigate the streamlined operations. A cohesive
              strategy addresses both systemic and human factors, ensuring
              a holistic and sustainable approach to business optimization.
            </p>
          </div>

          <div ref={(el) => addToSectionRefs(el, 2)}>
            <h2 className="text-2xl! font-medium heading1  tracking-tight text-neutral-900!">
              Continuous Improvement for Long-Term Success
            </h2>
            <p className="mt-4 text-[15px] leading-7 paragraph text-neutral-600!">
              Streamlining isn't a one-time fix; it's an ongoing
              commitment to continuous improvement. After implementing the
              initial changes, regularly assess and measure their
              effectiveness. Monitor key performance indicators, gather
              feedback from stakeholders, and stay agile in response to
              evolving business objectives. Continuous improvement fosters a
              culture of adaptability, positioning the business to thrive in
              an ever-changing landscape.
            </p>
            <p className="mt-4 text-[15px] leading-7 paragraph text-neutral-600!">
              Encourage a mindset of innovation within the organization.
              Employees at all levels should feel empowered to propose
              improvements and contribute to the streamlining efforts. By
              fostering a culture that embraces change and values
              efficiency, businesses can ensure that streamlining becomes
              ingrained in the DNA of the organization, rooting for
              long-term success.
            </p>
          </div>
        </article>

        {/* Right sidebar */}
        <aside className="space-y-8 ml-5">
          <div ref={(el) => addToSidebarRefs(el, 0)} className="space-y-4 ">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
              Details
            </p>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-neutral-400! paragraph">Date</p>
                <p className="text-neutral-800! paragraph">14 November 2026</p>
              </div>
              <div>
                <p className="text-neutral-400! paragraph">Category</p>
                <p className="text-neutral-800! paragraph">Consulting</p>
              </div>
              <div>
                <p className="text-neutral-400! paragraph">Reading time</p>
                <p className="text-neutral-800! paragraph">10 min</p>
              </div>
            </div>
          </div>

          <div ref={(el) => addToSidebarRefs(el, 1)} className="space-y-3 border-t border-neutral-100 pt-6">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400! paragraph">
              Written by
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop"
                  alt="Author portrait"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900! paragraph">Liam Rodriguez</p>
                <p className="text-xs text-neutral-400! paragraph">Ops &amp; Strategy Lead</p>
              </div>
            </div>
            <p className="text-[13px] leading-6 text-neutral-500! paragraph">
              Independent marketer with a flair for captivating campaigns,
              driving brands through strategic communication and creativity.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}