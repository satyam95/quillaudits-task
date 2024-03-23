import Image from "next/image";
import React from "react";

const ContentSection = () => {
  return (
    <section className="px-6 md:px-5 lg:px-12 xl:px-20">
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-[1100px] mx-auto">
        <div className="w-full lg:w-3/5">
          <p className="text-lg black-text">
            Carpe Diem Pension, on Pulse blockchain, redefines retirement with a
            self-managed, inclusive, globally portable fund. Unique for its
            token burn mechanism, it ensures a sustainable 4.32% inflation
            payout. With $143.11k and 41.06% of CDP already burned, it serves 35
            users globally.
          </p>
          <div className="py-5"></div>
          <h2 className="black-text font-bold text-[34px] leading-[42px]">
            CarpeDiem Pension&apos;s Flexible, Blockchain-Enabled Future
          </h2>
          <div className="py-5"></div>
          <p className="text-lg black-text">
            CarpeDiem Pension redefines retirement planning with a unique
            approach that deviates from traditional pension funds. With no
            minimum age for retirement, it offers flexibility and freedom,
            ensuring all genders receive equal treatment. CarpeDiem Pension
            ensures blockchain transparency, anonymity, and global
            accessibility, safeguarding pensions during international
            relocation. Easily transfer pensions to loved ones; share wallet
            access. Re-deposit payouts for increased future benefits.
            Importantly, CarpeDiem Pension prioritizes deposit security by
            avoiding utilizing client funds for internal investments. To become
            a part of this forward-thinking pension scheme, one simply needs to
            install and configure a blockchain wallet.
          </p>
          <div className="py-5"></div>
          <div className="relative w-full h-[187px] lg:w-[660px] md:h-[373px]">
            <Image
              alt="dashboard image"
              src="/image17.png"
              quality={100}
              fill
              sizes="100%"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="py-5"></div>
          <h2 className="black-text font-bold text-[34px] leading-[42px]">
            CarpeDiem Pension&apos;s Challenges: Enhancing Security Against
            Reentrancy, Front-Running, and Infinite Minting
          </h2>
          <div className="py-5"></div>
          <p className="text-lg black-text">
            CarpeDiem Pension confronts critical security challenges, including
            the risks of reentrancy and front-running exploits.Malicious actors
            may exploit contract vulnerabilities, withdrawing excess funds or
            manipulating transaction timing for unfair advantages. System faces
            infinite minting threats, risking economic stability with endless
            creation of CDP tokens or pension shares.  Addressing these
            challenges is paramount to safeguarding the integrity and security
            of CarpeDiem Pension.
          </p>
          <div className="py-5"></div>
          <div className="relative w-full h-[187px] lg:w-[640px] md:h-[370px]">
            <Image
              alt="dashboard image"
              src="/Screenshot.png"
              quality={100}
              fill
              sizes="100%"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="py-5"></div>
          <h2 className="black-text font-bold text-[34px] leading-[42px]">
            CarpeDiem Pension&apos;s Journey Through our Audit Process
          </h2>
          <div className="py-5"></div>
          <ol className="list-decimal pl-6 marker:font-semibold marker:text-2xl marker:leading-[27px]">
            <li className="mb-10">
              <strong className="text-2xl black-text leading-[27px] font-semibold">
                Information Gathering:
              </strong>
              <ul className="list-disc mt-7 pl-6 marker:text-lg marker:black-text marker:font-normal">
                <li className="pb-4 text-lg black-text">
                  Collected and reviewed all relevant documentation, including
                  whitepaper, technical specifications, and design documents.
                </li>
                <li className="pb-4 text-lg black-text">
                  Obtained a clear understanding of the CDP platform&apos;s
                  functionality, economic model, and intended user interactions.
                </li>
                <li className="text-lg black-text">
                  Discussed client concerns and specific areas of focus for the
                  audit.
                </li>
              </ul>
            </li>
            <li className="mb-10">
              <strong className="text-2xl black-text leading-[27px] font-semibold">
                Manual Code Review:
              </strong>
              <ul className="list-disc mt-7 pl-6 marker:text-lg marker:black-text marker:font-normal">
                <li className="text-lg black-text">
                  Conducted a line-by-line review of the smart contract code,
                  focusing on:
                  <ul className="list-circle mt-7 pl-6">
                    <li className="mb-3">
                      <i className="font-semibold">
                        Vulnerability identification:
                      </i>{" "}
                      Searching for known vulnerabilities like reentrancy,
                      front-running, integer overflows, and access control
                      issues etc.
                    </li>
                    <li className="mb-3">
                      <i className="font-semibold">Logic flaws:</i> Identifying
                      inconsistencies or unintended behaviors in the code logic.
                    </li>
                    <li className="mb-3">
                      <i className="font-semibold">Tokenomics correctness:</i>{" "}
                      Verifying if the code accurately implements the intended
                      economic model and token distribution mechanisms.
                    </li>
                    <li>
                      <i className="font-semibold">Solidity best practices:</i>{" "}
                      Compliance with secure coding standards and adherence to
                      established guidelines.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="mb-10">
              <strong className="text-2xl black-text leading-[27px] font-semibold">
                Functional Testing:
              </strong>
              <ul className="list-disc mt-7 pl-6 marker:text-lg marker:black-text marker:font-normal">
                <li className="pb-4 text-lg black-text">
                  Developed and executed a comprehensive set of test cases
                  covering various user interactions and edge cases.
                </li>
                <li className="pb-4 text-lg black-text">
                  Simulated different deposit, claim, and referral scenarios to
                  assess functionality and uncover potential exploits.
                </li>
                <li className="pb-4 text-lg black-text">
                  Focused on scenarios identified during the manual review and
                  client concerns (e.g., infinite minting, reward calculation
                  errors).
                </li>
                <li className="text-lg black-text">
                  Leveraged tools like Hardhat and Ganache to deploy and test
                  the smart contract locally.
                </li>
              </ul>
            </li>
            <li className="mb-10">
              <strong className="text-2xl black-text leading-[27px] font-semibold">
                Automated Testing:
              </strong>
              <ul className="list-disc mt-7 pl-6 marker:text-lg marker:black-text marker:font-normal">
                <li className="pb-4 text-lg black-text">
                  Employed static analysis tools like Slither to identify
                  vulnerabilities through automated code scanning.
                </li>
                <li className="pb-4 text-lg black-text">
                  Utilized symbolic execution tools like Mythril to explore
                  various code execution paths and uncover potential attack
                  vectors.
                </li>
                <li className="text-lg black-text">
                  Integrated unit tests are written by the CDP team to verify
                  specific contract functions and their behaviour.
                </li>
              </ul>
            </li>
            <li>
              <strong className="text-2xl black-text leading-[27px] font-semibold">
                Reporting & Remediation:
              </strong>
              <ul className="list-disc mt-7 pl-6 marker:text-lg marker:black-text marker:font-normal">
                <li className="pb-4 text-lg black-text">
                  Prepared a detailed report outlining all identified
                  vulnerabilities, categorized by severity and potential impact.
                </li>
                <li className="pb-4 text-lg black-text">
                  Provided clear recommendations for fixing each vulnerability,
                  including code snippets and best practices.
                </li>
                <li className="pb-4 text-lg black-text">
                  Collaborated with the CDP team to prioritize and address the
                  identified issues.
                </li>
                <li className="text-lg black-text">
                  Conducted additional verification testing after vulnerability
                  fixes were implemented.
                </li>
              </ul>
            </li>
          </ol>
          <div className="py-5"></div>
          <h2 className="black-text font-bold text-[34px] leading-[42px]">
            QuillAudits&apos; Strategic Approach to CDP Security Audits
          </h2>
          <div className="py-5"></div>
          <p className="text-lg black-text">
            We prioritize threat modeling based on platform-specific risks.
            Security-first, we identify and mitigate vulnerabilities beyond
            functionality testing. Using white-box and black-box tests, we
            conduct thorough vulnerability assessments. Maintaining
            transparency, we communicate openly with the CDP team. Emphasizing
            clarity, we present actionable insights for efficient issue
            resolution.
          </p>
          <div className="py-5"></div>
          <h2 className="black-text font-bold text-[34px] leading-[42px]">
            Comprehensive Audit Discoveries and Remediation Strategies{" "}
          </h2>
          <div className="py-5"></div>
          <p className="text-lg black-text">
            Throughout the audit process, we unearthed a total of 33 issues,
            spanning from minor concerns to critical vulnerabilities. Among
            these, some of the critical issues identified were: Here&apos;s how we
            remediated them :
          </p>
          <ol className="list-decimal mt-7 pl-6 marker:text-lg marker:black-text marker:font-semibold">
            <li className="pb-4 text-lg black-text font-semibold">
              Unauthorized Claim/Compound:
              <ol className="list-alph mt-3 pl-6 marker:text-lg marker:black-text marker:font-normal">
                <li className="pb-4 text-lg black-text font-normal">
                  Users could claim/compound a substantial amount without making
                  a deposit or waiting for the stipulated time.
                </li>
              </ol>
            </li>
            <li className="pb-4 text-lg black-text font-semibold">
              Precision Loss in mintCDP():
              <ol className="list-alph mt-3 pl-6 marker:text-lg marker:black-text marker:font-normal">
                <li className="pb-4 text-lg black-text font-normal">
                  Precision loss and unscaled values were identified while
                  calculating rewardPerShare in the mintCDP() function.{" "}
                </li>
              </ol>
            </li>
            <li className="pb-4 text-lg black-text font-semibold">
              Multiplication Accuracy:
              <ol className="list-alph mt-3 pl-6 marker:text-lg marker:black-text marker:font-normal">
                <li className="pb-4 text-lg black-text font-normal">
                  Multiplication operations were prone to providing incorrect
                  answers due to unscaled values, posing a potential risk to
                  accurate calculations.{" "}
                </li>
              </ol>
            </li>
            <li className="pb-4 text-lg black-text font-semibold">
              Incorrect Share Allocation:
              <ol className="list-alph mt-3 pl-6 marker:text-lg marker:black-text marker:font-normal">
                <li className="pb-4 text-lg black-text font-normal">
                  The protocol was allocating shares for all days, even when
                  there were no corresponding deposits, leading to inefficient
                  use of resources.{" "}
                </li>
              </ol>
            </li>
            <li className="pb-4 text-lg black-text font-semibold">
              Logic Error in Referral Handling:
              <ol className="list-alph mt-3 pl-6 marker:text-lg marker:black-text marker:font-normal">
                <li className="pb-4 text-lg black-text font-normal">
                  A logic error resulted in users always having their
                  user.referral set to address(0), which could be exploited to
                  trick the referral system{" "}
                </li>
              </ol>
            </li>
            <li className="text-lg black-text font-semibold">
              Referral Exploitation:{" "}
              <ol className="list-alph mt-3 pl-6 marker:text-lg marker:black-text marker:font-normal">
                <li className="text-lg black-text font-normal">
                  Users could exploit the referral system to extract more CDP
                  from the protocol, undermining its integrity.{" "}
                </li>
              </ol>
            </li>
          </ol>
          <div className="py-5"></div>
          <h2 className="black-text font-bold text-[34px] leading-[42px]">
            Remediation & Impact:
          </h2>
          <div className="py-5"></div>
          <p className="text-lg black-text">
            All identified vulnerabilities were addressed by the CDP team,
            significantly enhancing the smart contract&apos;s security posture. Key
            improvements include
          </p>
          <ul className="list-disc mt-7 pl-6 marker:text-lg marker:black-text marker:font-normal">
            <li className="pb-4 text-lg black-text">
              Implementation of reentrancy protection mechanisms.
            </li>
            <li className="pb-4 text-lg black-text">
              Accurate handling of decimal values using established libraries or
              best practices.
            </li>
            <li className="pb-4 text-lg black-text">
              Revised calculations with proper scaling factors
            </li>
            <li className="pb-4 text-lg black-text">
              Fixing logic errors to ensure deposits and waiting periods are
              enforced.
            </li>
            <li className="text-lg black-text">
              Addressing referral system vulnerabilities to prevent abuse.{" "}
            </li>
          </ul>
          <p className="text-lg pt-7 black-text font-semibold break-words">
            Embed this tweet :-{" "}
            <span className="text-link font-normal">
              https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20
            </span>
          </p>
          <p className="text-lg pt-7 black-text">
            CDP smart contract audit revealed and fixed critical
            vulnerabilities, safeguarding funds and ensuring platform stability.
            This underscores the need for proactive security in blockchain
            projects, crucial for financial asset management. Through audits and
            issue resolution, CDP reinforces platform security, bolstering user
            trust.
          </p>
          <div className="py-16"></div>
          <div className="shadow-slide rounded-md">
            <div className="blue-bg-gradient px-9 md:px-16 pb-6 pt-16 top-radius relative">
              <div className="flex justify-end md:justify-start">
                <div>
                  <h3 className="text-2xl md:text-3xl leading-10 text-white font-semibold">
                    Sally Radley
                  </h3>
                  <h4 className="text-xl text-white">WebGFi - CEO</h4>
                </div>
              </div>
              <Image
                src="/vector_white.png"
                alt="comma"
                width={32}
                height={26}
                className="absolute top-3.5 left-4"
              />
              <Image
                src="/mask.png"
                alt="image holder"
                width={180}
                height={180}
                className="absolute top-12 md:top-6 left-4 md:left-auto right-auto md:right-16"
              />
            </div>
            <div className="px-4 md:px-16 pt-5 pb-20 md:pb-24 relative">
              <div className="flex gap-1 md:gap-2 pb-10 md:pb-7 justify-end md:justify-start">
                <Image src="/Star.png" alt="star icon" height={28} width={28} />
                <Image src="/Star.png" alt="star icon" height={28} width={28} />
                <Image src="/Star.png" alt="star icon" height={28} width={28} />
                <Image src="/Star.png" alt="star icon" height={28} width={28} />
                <Image src="/Star.png" alt="star icon" height={28} width={28} />
              </div>
              <h5 className="text-black text-lg md:text-base pr-6 md:pr-16">
                “It felt like the auditing team was available within a short
                timeframe, which was excellent. The auditing process looked
                thorough, and I really appreciate the fact that you took time to
                investigate GAS optimizations.”
              </h5>
              <Image
                src="/vector_colored.png"
                alt="comma"
                width={32}
                height={26}
                className="absolute bottom-3.5 right-4"
              />
            </div>
          </div>
          <div className="py-5"></div>
        </div>
        <div className="hidden lg:block w-2/5">
          <div className="pt-16 pl-12">
            <div className="flex flex-col gap-5 px-[30px] pb-[30px] pt-4 border-blue rounded-md">
              <div>
                <div className="inter color-gray text-sm">Headquarters</div>
                <div className="text-base black-text inter font-medium">
                  Switzerland
                </div>
              </div>
              <div>
                <div className="inter color-gray text-sm">Chain</div>
                <div className="text-base black-text inter font-medium">
                  Pulse Blockchain
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
