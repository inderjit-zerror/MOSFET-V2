"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import GridLine from "../common/GridLine";
import Button from "../common/Button";

const HELP_OPTIONS = [
  "Investment opportunity",
  "Cement or lime production retrofit",
  "Development partnership",
  "Strategic partnership",
  "Media inquiry",
  "Other",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    helpType: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | submitting | success

  // Refs
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const infoBlockRef = useRef(null);
  const formRef = useRef(null);

  const btnRef = useRef(null);
  const btnFillRef = useRef(null);
  const btnTextRef = useRef(null);
  const spinnerRef = useRef(null);
  const checkRef = useRef(null);

  // Entrance animation — left column and form run in parallel
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
        0
      )
        .fromTo(
          paragraphRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          "-=0.6"
        )
        .fromTo(
          infoBlockRef.current ? infoBlockRef.current.children : [],
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, stagger: 0.12 },
          "-=0.5"
        )
        .fromTo(
          formRef.current ? formRef.current.children : [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1 },
          0 // starts at the same time as the heading, runs in parallel
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Spinner rotation while submitting
  useEffect(() => {
    let tween;
    if (status === "submitting" && spinnerRef.current) {
      tween = gsap.to(spinnerRef.current, {
        rotation: 360,
        duration: 0.7,
        repeat: -1,
        ease: "linear",
      });
    }
    return () => {
      if (tween) tween.kill();
      if (spinnerRef.current) gsap.set(spinnerRef.current, { rotation: 0 });
    };
  }, [status]);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const tl = gsap.timeline();

    // Fill the button background like a progress bar while the request runs
    tl.fromTo(
      btnFillRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.1, ease: "power2.inOut", transformOrigin: "left center" }
    );

    try {
      console.log(form);
      await new Promise((resolve) => setTimeout(resolve, 1200)); // simulate request

      setStatus("success");

      // Morph spinner area into a checkmark, pop the button
      gsap
        .timeline()
        .to(btnRef.current, { scale: 0.97, duration: 0.12, ease: "power2.out" })
        .to(btnRef.current, { scale: 1, duration: 0.25, ease: "back.out(3)" })
        .fromTo(
          checkRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(4)" },
          "-=0.15"
        );

      setTimeout(() => {
        setStatus("idle");
        gsap.set(btnFillRef.current, { scaleX: 0 });
        setForm({ name: "", email: "", company: "", helpType: "", message: "" });
      }, 1800);
    } catch {
      setStatus("idle");
      gsap.set(btnFillRef.current, { scaleX: 0 });
    }
  };

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#FAF6EE] text-zinc-900 font-sans pt-[10vh] relative"
    >
      {/* Vertical grid lines */}
      <GridLine />


      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 relative z-10">
        {/* Left column */}
        <section className="paragraph flex flex-col border-b border-[#e7e4dc] px-7 py-10 lg:border-b-0 lg:border-r lg:px-16 lg:py-14">
          <h1
            ref={headingRef}
            className="heading1 mb-7"
          >
            Let’s Connect
          </h1>

          <p
            ref={paragraphRef}
            className="paragraph mb-20 max-w-[27rem] "
          >
            Whether you have a question or need assistance, our team is here
            to help every step of the way. Let’s connect today.
          </p>

          <div ref={infoBlockRef} className="mt-12 flex flex-col gap-7 lg:mt-auto">
            <div>
              <p className="mb-1.5 text-sm text-[#EE2F2E]! font-semibold">Email</p>
              <p className="text-base text-zinc-900/80 text-[1.0625rem]  leading-[1.0825rem]">
                mosfettechsolutions@support.com
              </p>
            </div>

            <div>
              <p className="mb-1.5 text-sm text-[#EE2F2E]! font-semibold">Phone No</p>
              <p className="text-base text-zinc-900/80 text-[1.0625rem] leading-[1.0825rem]">
                +91 9999878104
              </p>
              <p className="text-base text-zinc-900/80 text-[1.0625rem] leading-[1.0825rem]">
                +91 9910700028
              </p>
            </div>

            <div>
              <p className="mb-1.5 text-sm text-[#EE2F2E]! font-semibold">Location</p>
              <p className="max-w-[24rem] text-base text-zinc-900/80 text-[1.0625rem] leading-[1.0825rem]">
                B-66, 1st Floor, Naraina Industrial Area, Phase 1, New Delhi, India
              </p>
            </div>

            <div>
              <p className="mb-1.5 text-sm text-[#EE2F2E]! font-semibold">Socials</p>
              <p className="text-base">
                <a href="#" className="text-zinc-900/80 underline text-[1.0625rem] leading-[1.0825rem]">
                  LinkedIn
                </a>
              </p>
              <p className="text-base">
                <a href="#" className="text-zinc-900/80 underline text-[1.0625rem] leading-[1.0825rem]">
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Right column */}
        <section className="flex items-start bg-[#ebe9e1] px-7 py-10 lg:px-16 lg:py-14 ">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex w-full max-w-[37.5rem] flex-col gap-6"
          >
            <div className="flex flex-col gap-2.5">
              <label htmlFor="name" className="text-[0.9375rem] font-semibold">
                Name <span className="text-[#EE2F2E]">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange("name")}
                required
                className="w-full rounded border border-white bg-white px-4 py-3.5 text-[0.9375rem] text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-900"
              />
            </div>

            <div className="flex flex-col gap-2.5">
              <label htmlFor="email" className="text-[0.9375rem] font-semibold">
                Email <span className="text-[#EE2F2E]">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email address"
                value={form.email}
                onChange={handleChange("email")}
                required
                className="w-full rounded border border-white bg-white px-4 py-3.5 text-[0.9375rem] text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-900"
              />
            </div>

            <div className="flex flex-col gap-2.5">
              <label htmlFor="helpType" className="text-[0.9375rem] font-semibold">
                Choose your services <span className="text-[#EE2F2E]">*</span>
              </label>
              <div className="relative">
                <select
                  id="helpType"
                  value={form.helpType}
                  onChange={handleChange("helpType")}
                  required
                  className="w-full appearance-none rounded border border-white bg-white px-4 py-3.5 text-[0.9375rem] text-zinc-900 outline-none focus:border-zinc-900"
                >
                  <option value="" disabled>
                    Select one...
                  </option>
                  {HELP_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 h-2.5 w-2.5 -translate-y-[65%] rotate-45 border-b-2 border-r-2 border-zinc-600" />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <label htmlFor="message" className="text-[0.9375rem] font-semibold">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message..."
                value={form.message}
                onChange={handleChange("message")}
                rows={6}
                className="min-h-[9rem] w-full resize-y rounded border border-white bg-white px-4 py-3.5 text-[0.9375rem] text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-900"
              />
            </div>

            <Button txt={'Send Message'} />

         
          </form>
        </section>
      </div>
    </main>
  );
}