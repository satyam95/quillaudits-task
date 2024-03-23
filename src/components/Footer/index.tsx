import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="z-10 relative">
      <div className="absolute top-0 left-0 h-full w-full z-0">
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
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 pt-12 text-[#F1F1F1] md:items-start md:justify-start px-8 md:px-5 lg:px-12 xl:px-20">
        <div className="flex w-full flex-row flex-wrap items-center justify-center lg:justify-between gap-6">
          <div>
            <Image
              src="/logo-transparent.svg"
              alt="logo-transparent"
              width={254}
              height={68}
            />
          </div>
          <div className="lg:hidden">
            <div className="grid w-full grid-cols-2 flex-col items-start justify-start gap-4 text-center text-sm md:flex md:w-auto md:flex-row">
              <Link className="button-footer px-2 py-2 md:px-6" href="#">
                Refer-Earn-Secure
              </Link>
              <Link className="button-footer px-2 py-2 md:px-6" href="#">
                WAGSI Grants
              </Link>
              <Link className="button-footer px-2 py-2 md:px-6" href="#">
                Be Our Ambassador
              </Link>
              <Link className="button-footer px-2 py-2 md:px-6" href="#">
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 grid grid-cols-2 gap-10">
            <div className="hidden flex-col gap-8 md:flex">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-medium text-white">
                    More About Quill
                  </h2>
                  <div className="h-[2px] w-[155px] rounded-full bg-secondary"></div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link className="jost text-base" href="#">
                    About Us
                  </Link>
                  <Link className="jost text-base" href="#">
                    FAQs
                  </Link>
                  <Link className="jost text-base" href="#">
                    Blockchains We Audit
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-lg">Contact Us:</h3>
                <div className="flex flex-row items-center justify-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                  </svg>
                  <Link
                    className="italic text-lg jost underline tracking-wide"
                    href="mailto:audits@quillhash.com"
                  >
                    audits@quillhash.com
                  </Link>
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <Image
                    src="/telegram-solid.svg"
                    alt="telgram icon"
                    width={20}
                    height={20}
                  />
                  <Link
                    className="italic text-lg jost underline tracking-wide"
                    href="#"
                  >
                    t.me/quillaudits
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-start gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <h3 className="font-medium text-lg">Our Location:</h3>
                </div>
                <p className="jost text-lg font-light">
                  Office 104/105 Level 1, Emaar Square, Building 4 Sheikh
                  Mohammed Bin Rashid Boulevard Downtown Dubai, United Arab
                  Emirates P.O box: 416654
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-medium text-white">
                    Audit Services
                  </h2>
                  <div className="h-[2px] w-[128px] rounded-full bg-secondary"></div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link className="text-base jost" href="#">
                    Ethereum Audit
                  </Link>
                  <Link className="text-base jost" href="#">
                    Polygon Audit
                  </Link>
                  <Link className="text-base jost" href="#">
                    BSC Audit
                  </Link>
                  <Link className="text-base jost" href="#">
                    Solana Audit
                  </Link>
                  <Link className="text-base jost" href="#">
                    NEAR Audit
                  </Link>
                  <Link className="text-base jost" href="#">
                    Algorand Audit
                  </Link>
                  <Link className="text-base jost" href="#">
                    Tezos Audit
                  </Link>
                  <Link className="text-base jost" href="#">
                    Hyperledger Fabric Audit
                  </Link>
                  <Link className="text-base jost" href="#">
                    L1 Audit
                  </Link>
                  <Link className="text-base jost" href="#">
                    Polkadot Audit
                  </Link>
                  <Link className="text-base jost" href="#">
                    Wallet Audit
                  </Link>
                  <Link className="text-base jost" href="#">
                    Zksync Audit
                  </Link>
                  <Link className="text-base jost" href="#">
                    Starknet Audit
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5 flex flex-col justify-between">
            <div className="grid w-full grid-cols-3 gap-10">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-medium text-white">
                      Quill Ecosystem
                    </h2>
                    <div className="h-[2px] w-[140px] rounded-full bg-secondary"></div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link className="text-base jost" href="#">
                      QuillAI
                    </Link>
                    <Link className="text-base jost" href="#">
                      QuillCheck
                    </Link>
                    <Link className="text-base jost" href="#">
                      QuillShield
                    </Link>
                    <Link className="text-base jost" href="#">
                      QuillAcademy
                    </Link>
                    <Link className="text-base jost" href="#">
                      QuillMonitor
                    </Link>
                    <Link className="text-base jost" href="#">
                      Web3Suggest
                    </Link>
                    <Link className="text-base jost" href="#">
                      Explore All Tools
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-medium text-white">
                      Other Services
                    </h2>
                    <div className="h-[2px] w-[134px] rounded-full bg-secondary"></div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link className="text-base jost" href="#">
                      Red Teaming
                    </Link>
                    <Link className="text-base jost" href="#">
                      dApp Pentesting
                    </Link>
                    <Link className="text-base jost" href="#">
                      DeFi Diligence
                    </Link>
                    <Link className="text-base jost" href="#">
                      NFT Due Diligence
                    </Link>
                    <Link className="text-base jost" href="#">
                      Rug Pull Due Diligence
                    </Link>
                    <Link className="text-base jost" href="#">
                      Security Consultation
                    </Link>
                    <Link className="text-base jost" href="#">
                      Blockchain Forensics
                    </Link>
                    <Link className="text-base jost" href="#">
                      KYC (Know Your Customer)
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-medium text-white">
                      Quick Links
                    </h2>
                    <div className="h-[2px] w-[105px] rounded-full bg-secondary"></div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link className="text-base jost" href="#">
                      Pricing
                    </Link>
                    <Link className="text-base jost" href="#">
                      Audit Process
                    </Link>
                    <Link className="text-base jost" href="#">
                      Our Audits
                    </Link>
                    <Link className="text-base jost" href="#">
                      Testimonials
                    </Link>
                    <Link className="text-base jost" href="#">
                      Security Synopsis
                    </Link>
                    <Link className="text-base jost" href="#">
                      Blog
                    </Link>
                    <Link className="text-base jost" href="#">
                      Clients
                    </Link>
                    <Link className="text-base jost" href="#">
                      Careers
                      <span className="rounded-md bg-secondary ml-1 px-1.5 py-0.5 text-xs shadow-md">
                        Hiring
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-medium text-white">
                  Quill Ecosystem
                </h2>
                <div className="h-[2px] w-[140px] rounded-full bg-secondary"></div>
              </div>
              <div className="grid w-full grid-cols-2 flex-col items-start justify-start gap-4 text-center text-sm md:flex md:w-auto md:flex-row">
                <Link className="button-footer px-2 py-2 md:px-4" href="#">
                  Refer-Earn-Secure
                </Link>
                <Link className="button-footer px-2 py-2 md:px-4" href="#">
                  WAGSI Grants
                </Link>
                <Link className="button-footer px-2 py-2 md:px-4" href="#">
                  Be Our Ambassador
                </Link>
                <Link className="button-footer px-2 py-2 md:px-4" href="#">
                  Become a Partner
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:hidden w-full grid-cols-2 gap-10 md:gap-12 xl:grid-cols-5">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-medium text-white">
                  Audit Services
                </h2>
                <div className="h-[2px] w-[128px] rounded-full bg-secondary"></div>
              </div>
              <div className="flex flex-col gap-3">
                <Link className="text-base jost" href="#">
                  Ethereum Audit
                </Link>
                <Link className="text-base jost" href="#">
                  Polygon Audit
                </Link>
                <Link className="text-base jost" href="#">
                  BSC Audit
                </Link>
                <Link className="text-base jost" href="#">
                  Solana Audit
                </Link>
                <Link className="text-base jost" href="#">
                  NEAR Audit
                </Link>
                <Link className="text-base jost" href="#">
                  Algorand Audit
                </Link>
                <Link className="text-base jost" href="#">
                  Tezos Audit
                </Link>
                <Link className="text-base jost" href="#">
                  Hyperledger Fabric Audit
                </Link>
                <Link className="text-base jost" href="#">
                  L1 Audit
                </Link>
                <Link className="text-base jost" href="#">
                  Polkadot Audit
                </Link>
                <Link className="text-base jost" href="#">
                  Wallet Audit
                </Link>
                <Link className="text-base jost" href="#">
                  Zksync Audit
                </Link>
                <Link className="text-base jost" href="#">
                  Starknet Audit
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-medium text-white">
                  Quill Ecosystem
                </h2>
                <div className="h-[2px] w-[140px] rounded-full bg-secondary"></div>
              </div>
              <div className="flex flex-col gap-3">
                <Link className="text-base jost" href="#">
                  QuillAI
                </Link>
                <Link className="text-base jost" href="#">
                  QuillCheck
                </Link>
                <Link className="text-base jost" href="#">
                  QuillShield
                </Link>
                <Link className="text-base jost" href="#">
                  QuillAcademy
                </Link>
                <Link className="text-base jost" href="#">
                  QuillMonitor
                </Link>
                <Link className="text-base jost" href="#">
                  Web3Suggest
                </Link>
                <Link className="text-base jost" href="#">
                  Explore All Tools
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-medium text-white">
                  Other Services
                </h2>
                <div className="h-[2px] w-[134px] rounded-full bg-secondary"></div>
              </div>
              <div className="flex flex-col gap-3">
                <Link className="text-base jost" href="#">
                  Red Teaming
                </Link>
                <Link className="text-base jost" href="#">
                  dApp Pentesting
                </Link>
                <Link className="text-base jost" href="#">
                  DeFi Diligence
                </Link>
                <Link className="text-base jost" href="#">
                  NFT Due Diligence
                </Link>
                <Link className="text-base jost" href="#">
                  Rug Pull Due Diligence
                </Link>
                <Link className="text-base jost" href="#">
                  Security Consultation
                </Link>
                <Link className="text-base jost" href="#">
                  Blockchain Forensics
                </Link>
                <Link className="text-base jost" href="#">
                  KYC (Know Your Customer)
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-medium text-white">Quick Links</h2>
                <div className="h-[2px] w-[105px] rounded-full bg-secondary"></div>
              </div>
              <div className="flex flex-col gap-3">
                <Link className="text-base jost" href="#">
                  Pricing
                </Link>
                <Link className="text-base jost" href="#">
                  Audit Process
                </Link>
                <Link className="text-base jost" href="#">
                  Our Audits
                </Link>
                <Link className="text-base jost" href="#">
                  Testimonials
                </Link>
                <Link className="text-base jost" href="#">
                  Security Synopsis
                </Link>
                <Link className="text-base jost" href="#">
                  Blog
                </Link>
                <Link className="text-base jost" href="#">
                  Clients
                </Link>
                <Link className="text-base jost" href="#">
                  Careers
                  <span className="rounded-md bg-secondary ml-1 px-1.5 py-0.5 text-xs shadow-md">
                    Hiring
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-col gap-8 col-span-2 flex pr-10">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-medium text-white">
                  More About Quill
                </h2>
                <div className="h-[2px] w-[155px] rounded-full bg-secondary"></div>
              </div>
              <div className="flex flex-col gap-3">
                <Link className="jost text-base" href="#">
                  About Us
                </Link>
                <Link className="jost text-base" href="#">
                  FAQs
                </Link>
                <Link className="jost text-base" href="#">
                  Blockchains We Audit
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-lg">Contact Us:</h3>
              <div className="flex flex-row items-center justify-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                </svg>
                <Link
                  className="italic text-lg jost underline tracking-wide"
                  href="mailto:audits@quillhash.com"
                >
                  audits@quillhash.com
                </Link>
              </div>
              <div className="flex flex-row items-center justify-start gap-2">
                <Image
                  src="/telegram-solid.svg"
                  alt="telgram icon"
                  width={20}
                  height={20}
                />
                <Link
                  className="italic text-lg jost underline tracking-wide"
                  href="#"
                >
                  t.me/quillaudits
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center justify-start gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <h3 className="font-medium text-lg">Our Location:</h3>
              </div>
              <p className="jost text-lg font-light">
                Office 104/105 Level 1, Emaar Square, Building 4 Sheikh Mohammed
                Bin Rashid Boulevard Downtown Dubai, United Arab Emirates P.O
                box: 416654
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="flex flex-row items-center justify-start gap-4">
            <a href="#">
              <Image
                src="/dsamember-badge.png"
                alt="DSA Member"
                width={184}
                height={52}
              />
            </a>
            <a href="#">
              <Image
                src="/Telagana Govt.png"
                alt="TS Gov"
                width={184}
                height={52}
              />
            </a>
          </div>
          <div className="flex flex-row items-center justify-center gap-8">
            <Link href="#">
              <Image src="x.svg" alt="Social Links" height={24} width={24} />
            </Link>
            <Link href="#">
              <Image
                src="linkedin.svg"
                alt="Social Links"
                height={24}
                width={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="telegram.svg"
                alt="Social Links"
                height={24}
                width={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="reddit.svg"
                alt="Social Links"
                height={24}
                width={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="medium.svg"
                alt="Social Links"
                height={24}
                width={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="discord.svg"
                alt="Social Links"
                height={24}
                width={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="youtube.svg"
                alt="Social Links"
                height={24}
                width={24}
              />
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col-reverse items-center justify-between gap-4 border-t-[2px] border-white/10 py-4 text-xs lg:flex-row">
          <p>All Rights Reserved. © Copyright 2023. QuillAudits - LLC</p>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
