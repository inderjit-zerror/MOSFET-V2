"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";

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

  return (
    <>
      {/* Blur overlay for the rest of the site */}
      <div
        className={`fixed inset-0 z-[1500] transition-all duration-300 ${
          openDropdown
            ? "backdrop-blur-md bg-black/20 opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onMouseEnter={closeWithDelay}
      ></div>

      <header className="w-full fixed top-0 left-0 flex py-[0.8rem] px-[1rem] z-[1999]">
        <div className="w-fit h-fit flex justify-between ml-auto items-center gap-[1rem]">
          <div className="BGLightTint w-fit h-full flex justify-between ml-auto items-center gap-[1rem] px-[1rem] py-[0.5rem]">
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
          <Link href={`/contact`} >
          <Button txt={"Speak with us"} />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;