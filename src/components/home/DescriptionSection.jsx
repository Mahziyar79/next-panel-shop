import descriptionBg from "../../assets/images/descriptionSection/description-bg.svg";
import description1 from "../../assets/images/descriptionSection/description1.svg";
import description2 from "../../assets/images/descriptionSection/description2.svg";
import description3 from "../../assets/images/descriptionSection/description3.svg";
import description4 from "../../assets/images/descriptionSection/description4.svg";
import description5 from "../../assets/images/descriptionSection/description5.svg";
import TooltipComponent from "../TooltipComponent";

export default function DescriptionSection() {
  return (
    <section className="my-16 sm:my-28 grid grid-cols-10 gap-4 md:gap-8 container md:max-w-screen-xl px-5 md:px-0">
      <TooltipComponent
        tooltipTitle="با کار روی پروژه های واقعی، بازار رو از نزدیک لمس کنید"
        title="کاربردی و پروژه محور"
        imgSrc={description1}
        bgSrc={descriptionBg}
      />
      <TooltipComponent
        tooltipTitle="هر مبحث در قالب یک جلسه کوتاه و کاربردی آماده شده است"
        title="ویدئو های کوتاه و با کیفیت"
        imgSrc={description2}
        bgSrc={descriptionBg}
      />
      <TooltipComponent
        tooltipTitle="با مربی های حرفه ای و با حوصله رفع اشکال میکنید"
        title="همراهی مربی"
        imgSrc={description3}
        bgSrc={descriptionBg}
      />
      <TooltipComponent
        tooltipTitle="بهترین پشتیبانی و به روز ترین سطح آموزش موجود در سطح جهانی رو دریافت میکنید"
        title="تضمین کیفیت"
        imgSrc={description4}
        bgSrc={descriptionBg}
      />
      <TooltipComponent
        tooltipTitle="اگه راضی نبودید تا 7 روز فرصت دارید انصراف بدید"
        title="تضمین بازگشت وجه"
        imgSrc={description5}
        bgSrc={descriptionBg}
      />
    </section>
  );
}
