import React from "react";

const TableSection = () => {
  return (
    <section className="px-8 pt-20 md:px-5 lg:px-12 xl:px-20 xl:pt-20">
      <div className="max-w-[860px] w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-8 lg:gap-0">
          <div className="lg:max-w-[370px] w-full py-2">
            <div className="bg-pink p-1">
              <h3 className="inter black-text font-bold text-xl leading-[30px]">
                Before QuillAudits
              </h3>
            </div>
            <div className="pt-6">
              <p className="text-base black-text">
                Exploits like reentrancy and front-running can let attackers
                withdraw extra funds and manipulate transaction timing for
                unfair gains
              </p>
              <p className="pt-4 text-base black-text">
                Vulnerabilities could allow users to mint CDP tokens or pension
                shares indefinitely, disrupting the system's economic balance.
              </p>
            </div>
          </div>
          <div className="hidden md:block w-px h-inherit bg-[rgba(224,224,228,1)]"></div>
          <div className="lg:max-w-[370px] w-full py-2">
            <div className="bg-blue p-1">
              <h3 className="inter black-text font-bold text-xl leading-[30px]">
                After QuillAudits
              </h3>
            </div>
            <div className="pt-6">
              <p className="text-base black-text">
                Implementation of reentrancy protection mechanisms.
              </p>
              <p className="pt-4 md:pt-10 text-base black-text">
                Ensure precision in decimal handling with standard libraries,
                recalculate accurately, fix logic errors, and secure referral
                systems against exploitation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden pt-16 max-w-[300px] mx-auto">
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
    </section>
  );
};

export default TableSection;
