"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  const handleChange = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <header
        className={`fixed z-20 flex w-full flex-row items-center justify-between px-5 lg:px-12 xl:px-20 ${
          stickyHeader ? "nav-scroll-color shadow-md" : "bg-transparent"
        }`}
      >
        <div
          className={`hidden w-full py-5 xl:flex justify-between items-center ${
            stickyHeader ? "border-none" : "border-b-new"
          }`}
        >
          <Image
            src="/QuillAuditsLogo.png"
            alt="company logo"
            width={216}
            height={42}
          />
          <nav>
            <ul className="flex justify-between items-center gap-8">
              <li>
                <Link
                  href="#"
                  className="flex justify-between items-center gap-2 text-white jost text-xl"
                >
                  Services
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 false"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex justify-between items-center gap-2 text-white jost text-xl"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex justify-between items-center gap-2 text-white jost text-xl"
                >
                  Our Audits
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex justify-between items-center gap-2 text-white jost text-xl"
                >
                  Tools
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 false"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex justify-between items-center gap-2 text-white jost text-xl"
                >
                  Resources
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 false"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex justify-between items-center gap-2 text-white jost text-xl"
                >
                  Refer-Earn-Secure
                </Link>
              </li>
            </ul>
          </nav>
          <Link
            href="#"
            className="button-gradient rounded-md px-6 py-2.5 text-white shadow-sm"
          >
            Request an Audit
          </Link>
        </div>
        <div className="flex xl:hidden justify-between items-center py-3 w-full h-full">
          <Image
            src="/QuillAudit-Icon.svg"
            alt="company logo"
            width={40}
            height={38}
          />
          <Link
            href="#"
            className="button-gradient rounded-md px-3 py-2 text-sm text-white shadow-sm"
          >
            Request an Audit
          </Link>
          <div onClick={handleChange}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </div>
        </div>
      </header>
      <div
        className={`fixed z-20 overflow-y-scroll top-0 right-0 h-[90%] bg-black/95 duration-300 ${
          isToggled ? "w-full" : "w-0"
        }`}
      >
        <div className="py-3 px-5">
          <div className="flex justify-between items-center w-full h-full">
            <Image
              src="/QuillAudit-Icon.svg"
              alt="company logo"
              width={40}
              height={38}
            />
            <Link
              href="#"
              className="button-gradient rounded-md px-3 py-2 text-sm text-white shadow-sm"
            >
              Request an Audit
            </Link>
            <div onClick={handleChange}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-8 w-8 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
          <ul className="flex flex-col gap-6 pt-12">
            <li>
              <Link
                href="#"
                className="flex justify-between items-center gap-2 text-white jost text-xl"
              >
                Services
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 false"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex justify-between items-center gap-2 text-white jost text-xl"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex justify-between items-center gap-2 text-white jost text-xl"
              >
                Our Audits
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex justify-between items-center gap-2 text-white jost text-xl"
              >
                Tools
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 false"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex justify-between items-center gap-2 text-white jost text-xl"
              >
                Resources
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 false"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex justify-between items-center gap-2 text-white jost text-xl"
              >
                Refer-Earn-Secure
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
