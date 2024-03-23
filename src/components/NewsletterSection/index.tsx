import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsletterSection = () => {
  return (
    <section className="px-16 md:px-5 lg:px-12 xl:px-20 py-12 bg-gray-gradient">
      <div className="hidden md:flex flex-row gap-20 xl:px-24">
        <div className="w-1/2">
          <div className="text-[#407AFF] font-bold inter uppercase text-2xl">
            NEWSLETTER
          </div>
          <h2 className="text-[#14316C] font-semibold text-5xl xl:leading-[70px] pt-4 xl:pt-8">
            Security First News Letter by QuillAudits
          </h2>
          <p className="text-[#2D3648] inter text-base pt-6 xl:pt-11 pr-16">
            Subscribe for the most Exclusive Weekly security based newsletter
            and covering all the recent hacks up to date.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src="/OBJECTS.png"
            alt="illustration"
            width={580}
            height={330}
          />
          <div className="shadow-input bg-white rounded-md w-full p-2 pl-4 flex justify-between items-center mt-1.5">
            <input
              type="email"
              placeholder="vitalik@ethereum.org"
              className="text-[#888888] text-[#888888] placeholder:jost placeholder:text-[#888888] placeholder:text-base w-full outline-none"
            />
            <Link
              href="#"
              className="button-gradient text-base rounded-md px-6 py-1.5 text-white shadow-sm"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex flex-col items-center gap-1 mb-10">
          <h2 className="text-base  font-normal">
            Security First Newsletter by QuillAudits
          </h2>
          <div className="h-[2px] mt-[2px] w-[66px] rounded-full bg-secondary"></div>
        </div>
        <Image src="/OBJECTS.png" alt="illustration" width={580} height={330} />
        <p className="jost text-[13px] leading-[18px] text-center px-12 pt-4">
          DeFi & NFT Hacks, CTFs, and Blockchain Security Insights straight to
          your Inbox. Explore our weekly newsletter:{" "}
          <span className="font-semibold text-link">HashingBits</span>. Stay
          updated on everything we’re publishing. Stand a step ahead.
        </p>
        <div className="mt-5 bg-white rounded-md w-full p-2 border border-[#5A5A5A]">
          <input
            type="email"
            placeholder="vitalik@ethereum.org"
            className="text-[#888888] text-[#888888] placeholder:jost placeholder:text-[#888888] placeholder:text-xs w-full outline-none"
          />
        </div>
        <div className="flex items-center justify-center pt-5">
          <Link
            href="#"
            className="button-gradient text-sm rounded-md px-5 py-1.5 text-white shadow-sm font-medium"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
