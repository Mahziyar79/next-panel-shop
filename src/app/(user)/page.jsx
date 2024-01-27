import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/home/HeroSection"));
const DescriptionSection = dynamic(() => import("@/components/home/DescriptionSection"));
const ReviewSection = dynamic(() => import("@/components/home/ReviewSection"));
const FrontRoad = dynamic(() => import("@/components/home/FrontRoad"));
const WelcomeModal = dynamic(() => import("@/components/home/WelcomeModal"));
const LatestProducts = dynamic(() => import("@/components/LatestProducts"));

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
