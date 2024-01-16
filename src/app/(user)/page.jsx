import HeroSection from "@/components/home/HeroSection";
import DescriptionSection from "@/components/home/DescriptionSection";
import LatestProducts from "@/components/LatestProducts";
import ReviewSection from "@/components/home/ReviewSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DescriptionSection />
      <LatestProducts />
      <ReviewSection />
    </>
  );
}
