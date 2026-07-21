// "use client";
// import { useState, useRef } from "react";
// import Link from "next/link";
// import Button from "./Button";
// import { usePathname } from "next/navigation";

// const navItems = [
//   {
//     title: "home",
//     href: "/",
//   },
//   {
//     title: "about",
//     href: "/about",
//   },
//   {
//     title: "products",
//     href: "/products",
//   },
//   {
//     title: "solutions",
//     list: [
//       {
//         title: "Product 1",
//         img: "https://images.unsplash.com/photo-1672658074730-c09b9e739cf6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         href: "/solutions",
//       },
//       {
//         title: "Product 2",
//         img: "https://images.unsplash.com/photo-1662045875878-343242003061?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         href: "/solutions",
//       },
//       {
//         title: "Product 3",
//         img: "https://images.unsplash.com/photo-1635910162005-4a295b1bcca6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         href: "/solutions",
//       },
//     ],
//   },
//   {
//     title: "press",
//     href: "/press",
//   },
//   {
//     title: "blogs",
//     href: "/blogs",
//   },
//   {
//     title: "faq",
//     href: "/faq",
//   },
// ];

// const Header = () => {
//   const pathname = usePathname();
//   const [openDropdown, setOpenDropdown] = useState(false);
//   const closeTimeout = useRef(null);

//   const cancelClose = () => {
//     if (closeTimeout.current) {
//       clearTimeout(closeTimeout.current);
//       closeTimeout.current = null;
//     }
//   };

//   const openNow = () => {
//     cancelClose();
//     setOpenDropdown(true);
//   };

//   const closeWithDelay = () => {
//     cancelClose();
//     closeTimeout.current = setTimeout(() => {
//       setOpenDropdown(false);
//     }, 200);
//   };

//   return (
//     <>
//       {/* Blur overlay for the rest of the site */}
//       <div
//         className={`fixed inset-0 z-[1500] transition-all duration-300 ${
//           openDropdown
//             ? "backdrop-blur-md bg-black/20 opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         }`}
//         onMouseEnter={closeWithDelay}
//       ></div>

//       <header className="w-full fixed top-0 left-0 flex py-[0.8rem] px-[1rem] z-[1999]">
//         <div className="w-fit h-fit flex justify-between ml-auto items-center gap-[1rem]">
//           <div className="BGLightTint w-fit h-full flex justify-between ml-auto items-center gap-[1rem] px-[1rem] py-[0.5rem]">
//             {navItems.map((item, index) => {
//               const isActive =
//                 item.href &&
//                 (pathname === item.href ||
//                   pathname.startsWith(item.href + "/"));

//               const hasDropdown = !!item.list;

//               return (
//                 <div
//                   key={index}
//                   className="relative group flex justify-center items-center cursor-pointer"
//                   onMouseEnter={hasDropdown ? openNow : undefined}
//                   onMouseLeave={hasDropdown ? closeWithDelay : undefined}
//                 >
//                   <span
//                     className={`h-[0.35rem] w-[0.35rem] mr-1 BGRed
//                     ${isActive ? "visible" : "hidden"}
//                     `}
//                   ></span>

//                   {item.href ? (
//                     <Link href={item.href}>
//                       <p
//                         className={`paragraph text-[0.8rem]! font-medium! capitalize hover:text-[#EE2F2E]! ${
//                           isActive ? "TextRed" : ""
//                         }`}
//                       >
//                         {item.title}
//                       </p>
//                     </Link>
//                   ) : (
//                     <p
//                       className={`paragraph text-[0.8rem]! font-medium! capitalize hover:text-[#EE2F2E]! ${
//                         isActive ? "TextRed" : ""
//                       }`}
//                     >
//                       {item.title}
//                     </p>
//                   )}

//                   {/* Dropdown for items with a list (e.g. solutions) */}
//                   {hasDropdown && (
//                     <div
//                       className={`fixed top-[3.5rem] left-0  w-full z-[2000] flex justify-end items-end transition-all duration-300 ease-out
//                       ${
//                         openDropdown
//                           ? "opacity-100 translate-y-0 pointer-events-auto"
//                           : "opacity-0 -translate-y-4 pointer-events-none"
//                       }
//                       `}
//                       onMouseEnter={openNow}
//                       onMouseLeave={closeWithDelay}
//                     >
//                       <div className="BGLightTint   px-[0.5rem] py-[0.5rem] flex gap-[0.5rem] mr-[1.4vw]">
//                         {item.list.map((product, i) => (
//                           <Link
//                             key={i}
//                             href={product.href}
//                             className="flex flex-col items-center gap-[0.5rem] w-[10rem] group/product"
//                           >
//                             <div className="w-full h-[7rem]  overflow-hidden bg-gray-200">
//                               {product.img && (
//                                 <img
//                                   src={product.img}
//                                   alt={product.title}
//                                   className="w-full h-full object-cover transition-transform duration-300 group-hover/product:scale-105"
//                                 />
//                               )}
//                             </div>
//                             <p className="paragraph text-[0.8rem]! capitalize text-center group-hover/product:text-[#EE2F2E]!">
//                               {product.title}
//                             </p>
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//           <Link href={`/contact`} >
//           <Button txt={"Speak with us"} />
//           </Link>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "about",
    href: "/about",
  },
  {
    title: "products",
    href: "/products",
  },
  {
    title: "solutions",
    list: [
      {
        title: "Product 1",
        img: "https://images.unsplash.com/photo-1672658074730-c09b9e739cf6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/solutions",
      },
      {
        title: "Product 2",
        img: "https://images.unsplash.com/photo-1662045875878-343242003061?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/solutions",
      },
      {
        title: "Product 3",
        img: "https://images.unsplash.com/photo-1635910162005-4a295b1bcca6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/solutions",
      },
    ],
  },
  {
    title: "press",
    href: "/press",
  },
  {
    title: "blogs",
    href: "/blogs",
  },
  {
    title: "faq",
    href: "/faq",
  },
];

const Header = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(false);
  const closeTimeout = useRef(null);

  // Mobile menu state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);

  const cancelClose = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const openNow = () => {
    cancelClose();
    setOpenDropdown(true);
  };

  const closeWithDelay = () => {
    cancelClose();
    closeTimeout.current = setTimeout(() => {
      setOpenDropdown(false);
    }, 200);
  };

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close the mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileAccordion(null);
  }, [pathname]);

  const toggleMobileAccordion = (index) => {
    setMobileAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/* Blur overlay for the rest of the site (desktop dropdown) */}
      <div
        className={`fixed inset-0 z-[1500] hidden md:block transition-all duration-300 ${
          openDropdown
            ? "backdrop-blur-md bg-black/20 opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onMouseEnter={closeWithDelay}
      ></div>

      <header className="w-full fixed top-0 left-0 flex py-3 px-4 sm:py-[0.8rem] sm:px-[1rem] z-[1999]">
        <div className="w-full md:w-fit h-fit flex justify-between md:justify-end ml-auto items-center gap-[1rem]">
          {/* Desktop nav */}
          <div className="hidden md:flex BGLightTint w-fit h-full justify-between ml-auto items-center gap-[1rem] px-[1rem] py-[0.5rem]">
            {navItems.map((item, index) => {
              const isActive =
                item.href &&
                (pathname === item.href ||
                  pathname.startsWith(item.href + "/"));

              const hasDropdown = !!item.list;

              return (
                <div
                  key={index}
                  className="relative group flex justify-center items-center cursor-pointer"
                  onMouseEnter={hasDropdown ? openNow : undefined}
                  onMouseLeave={hasDropdown ? closeWithDelay : undefined}
                >
                  <span
                    className={`h-[0.35rem] w-[0.35rem] mr-1 BGRed
                    ${isActive ? "visible" : "hidden"}
                    `}
                  ></span>

                  {item.href ? (
                    <Link href={item.href}>
                      <p
                        className={`paragraph text-[0.8rem]! font-medium! capitalize hover:text-[#EE2F2E]! ${
                          isActive ? "TextRed" : ""
                        }`}
                      >
                        {item.title}
                      </p>
                    </Link>
                  ) : (
                    <p
                      className={`paragraph text-[0.8rem]! font-medium! capitalize hover:text-[#EE2F2E]! ${
                        isActive ? "TextRed" : ""
                      }`}
                    >
                      {item.title}
                    </p>
                  )}

                  {/* Dropdown for items with a list (e.g. solutions) */}
                  {hasDropdown && (
                    <div
                      className={`fixed top-[3.5rem] left-0  w-full z-[2000] flex justify-end items-end transition-all duration-300 ease-out
                      ${
                        openDropdown
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-4 pointer-events-none"
                      }
                      `}
                      onMouseEnter={openNow}
                      onMouseLeave={closeWithDelay}
                    >
                      <div className="BGLightTint   px-[0.5rem] py-[0.5rem] flex gap-[0.5rem] mr-[1.4vw]">
                        {item.list.map((product, i) => (
                          <Link
                            key={i}
                            href={product.href}
                            className="flex flex-col items-center gap-[0.5rem] w-[10rem] group/product"
                          >
                            <div className="w-full h-[7rem]  overflow-hidden bg-gray-200">
                              {product.img && (
                                <img
                                  src={product.img}
                                  alt={product.title}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover/product:scale-105"
                                />
                              )}
                            </div>
                            <p className="paragraph text-[0.8rem]! capitalize text-center group-hover/product:text-[#EE2F2E]!">
                              {product.title}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Link href={`/contact`} className="hidden md:block">
            <Button txt={"Speak with us"} />
          </Link>

          {/* Mobile bar: logo/spacer + hamburger */}
          <div className="flex md:hidden w-full items-center justify-between BGLightTint px-4 py-2.5">
            <Link href="/" className="paragraph text-[0.9rem]! font-medium! capitalize">
             <img src={`/logo.png`} alt="img" className="h-[1.8rem] object-cover " />
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full BGRed text-white"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" strokeWidth={2} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[1998] md:hidden BGLightTint transition-all duration-300 ease-out ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full w-full flex-col pt-20 px-6 pb-8 overflow-y-auto">
          <nav className="flex flex-col divide-y divide-black/10">
            {navItems.map((item, index) => {
              const isActive =
                item.href &&
                (pathname === item.href ||
                  pathname.startsWith(item.href + "/"));

              const hasDropdown = !!item.list;
              const isExpanded = mobileAccordion === index;

              if (hasDropdown) {
                return (
                  <div key={index} className="py-4">
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion(index)}
                      className="flex w-full items-center justify-between"
                      aria-expanded={isExpanded}
                    >
                      <p
                        className={`paragraph text-[1.4rem]! font-medium! capitalize ${
                          isActive ? "TextRed" : ""
                        }`}
                      >
                        {item.title}
                      </p>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        strokeWidth={2}
                      />
                    </button>

                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-out ${
                        isExpanded
                          ? "grid-rows-[1fr] opacity-100 mt-4"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="grid grid-cols-3 gap-3">
                          {item.list.map((product, i) => (
                            <Link
                              key={i}
                              href={product.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex flex-col items-center gap-2"
                            >
                              <div className="w-full aspect-square overflow-hidden bg-gray-200">
                                {product.img && (
                                  <img
                                    src={product.img}
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                  />
                                )}
                              </div>
                              <p className="paragraph text-[0.7rem]! capitalize text-center">
                                {product.title}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={index} className="py-4">
                  <Link href={item.href} onClick={() => setMobileOpen(false)}>
                    <p
                      className={`paragraph text-[1.4rem]! font-medium! capitalize ${
                        isActive ? "TextRed" : ""
                      }`}
                    >
                      {item.title}
                    </p>
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="mt-auto pt-8">
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <Button txt={"Speak with us"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;