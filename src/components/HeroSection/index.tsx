import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="absolute top-0 left-0 h-full w-full">
        <Image
          alt="background-cover"
          src="/hero-bg.svg"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="relative flex flex-col lg:flex-row justify-between items-center lg:items-end gap-12 md:gap-[30px] py-20 text-white md:px-5 lg:px-12 xl:px-20 xl:py-20 xl:pt-40">
        <div className="max-w-[555px] w-full">
          <div className="md:hidden">
            <div className="px-6 flex flex-col gap-0.5 pb-3 pt-10">
              <h2 className="text-base font-medium text-white">Case Studies</h2>
              <div className="h-[2px] w-[80px] rounded-full bg-secondary"></div>
            </div>
          </div>
          <div className="h-[282px] md:h-[520px] w-full bg-gradient md:rounded-lg">
            <div className="bg-gradient-black h-full w-full md:rounded-lg">
              <div className="relative flex flex-col justify-center md:justify-end w-full h-full p-4">
                <div className="pl-8">
                  <Image
                    src="/CD-Pension.png"
                    width={438}
                    height={140}
                    alt="cd pension logo"
                    className="mx-auto"
                  />
                  <p className="hidden md:block text-base max-w-[334px] pt-12">
                    Carpe Diem Pension, a blockchain-based retirement fund,
                    offers permanent payouts through CDP deposits, with a 4.32%
                    annual inflation claimable by depositors.
                  </p>
                </div>
                <div className="absolute -bottom-6 md:bottom-auto right-12 md:top-10 md:-right-[90px] bg-white rounded-md max-w-[108px] md:max-w-[180px] p-2 md:p-3">
                  <Image
                    src="/CD-Pension-black.png"
                    width={152}
                    height={48}
                    alt="cd pension logo"
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[649px] w-full">
          <div className="flex flex-col gap-4 xl:gap-8 mb:pb-10 px-[42px] md:px-0">
            <h1 className="text-4xl md:text-5xl leading-[1.2] font-medium">
              Securing Trust : Boosting Security and Strengthening Trust at
              Carpe Diem Pension
            </h1>
            <p className="text-xl leading-[30px] md:pr-16">
              QuillAudits enhances Carpe Diem Pension by addressing 33
              vulnerabilities on the Pulse blockchain, boosting security and
              user trust in digital pensions.
            </p>
          </div>
        </div>
      </div>
      <div className="px-[42px] pb-4 md:px-5 lg:px-12 xl:px-20">
        <div className="relative jost text-white text-sm">
          QuillAudits -- Resources -- Case Studies - kucoin
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
