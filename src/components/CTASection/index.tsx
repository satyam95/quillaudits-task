import Link from "next/link";
import React from "react";

const CTASection = () => {
  return (
    <section className="px-6 py-16 md:px-5 lg:px-12 xl:px-20 xl:py-16">
      <h2 className="brand-text text-4xl font-semibold text-center max-w-[692px] mx-auto">
        See how QuillAudits is a trusted partner in 1000+ Audit stories
      </h2>
      <div className="flex items-center justify-center pt-8">
        <Link
          href="#"
          className="button-gradient rounded-md px-10 py-3.5 text-white shadow-sm"
        >
          Request an Audit
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
