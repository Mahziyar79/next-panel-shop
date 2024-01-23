import HeroSection from "@/components/home/HeroSection";
import DescriptionSection from "@/components/home/DescriptionSection";
import LatestProducts from "@/components/LatestProducts";
import ReviewSection from "@/components/home/ReviewSection";
import FrontRoad from "@/components/home/FrontRoad";
import WelcomeModal from "@/components/home/WelcomeModal";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

export default function Home() {
  return (
    <ErrorBoundary errorComponent={<Error />}>
      <WelcomeModal />
      <HeroSection />
      <DescriptionSection />
      <LatestProducts />
      <ReviewSection />
      <FrontRoad />
    </ErrorBoundary>
  );
}
