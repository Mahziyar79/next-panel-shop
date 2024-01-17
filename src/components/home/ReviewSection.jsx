import Image from "next/image";
import descriptionBg from "../../assets/images/DescriptionSection/description-bg.svg";
import reviewBg from "../../assets/images/review.svg";
import LatestReviewsSlider from "./LatestReviewsSlider";

const ReviewSection = () => {
  return (
    <section className="mt-10 mb-10 md:mb-20 py-10">
      <div className="container xl:max-w-screen-xl">
        <div className="flex flex-col gap-y-8 md:flex-row md:justify-between md:items-center md:gap-x-10">
          <div className="lg:w-1/3 px-4 md:px-0">
            <div>
              <div className="flex items-center gap-x-3 lg:gap-x-7 mb-4 lg:mb-8">
                <div className="p-1 relative flex items-center justify-center w-12 h-12 lg:w-20 lg:h-20 drop-shadow-xl">
                  <Image
                    src={descriptionBg}
                    alt="description bg"
                    className="w-full h-full top-0 left-0 absolute z-1 "
                  />
                  <Image
                    src={reviewBg}
                    alt="description1"
                    className="h-9 w-9 z-10 md:shadow-warranty-icon"
                  />
                </div>
                <h2 class="font-black text-secondary-900 text-xl lg:text-4xl">
                  نظرات دانشجویان
                </h2>
              </div>
              <p class="text-xs opacity-80 text-secondary-900 mr-5 lg:mr-8 lg:text-base leading-6 lg:leading-8">
                اینا فقط بخش کوچکی از تجربه دانشجویان فرانت هوکس هست
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center overflow-x-hidden">
            <div className="relative overflow-x-hidden lg:p-4 py-10">
              <LatestReviewsSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
