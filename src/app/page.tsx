import CTASection from "@/components/CTASection";
import ContentSection from "@/components/ContentSection";
import HeroSection from "@/components/HeroSection";
import NewsletterSection from "@/components/NewsletterSection";
import TableSection from "@/components/TableSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TableSection />
      <CTASection />
      <ContentSection />
      <NewsletterSection />
    </main>
  );
}
