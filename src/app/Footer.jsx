import Image from "next/image";
import zarin from "../assets/images/zarin.png";

const Footer = () => {
  return (
    <footer className="py-6 md:py-8 text-secondary-600 mt-10 border-t-2 border-t-gray-200 bg-gray-200 px-4 rounded-t-3xl">
      <div className="grid gap-10 md:gap-14 grid-cols-5 grid-row-2 container md:max-w-screen-xl mx-auto">
        <div className="col-span-5 md:col-span-2 flex flex-col justify-start">
          <div>
            <h2 class="text-primary font-bold text-xs sm:text-sm mb-4">
              آکادمی آنلاین فرانت هوکس، دوره های کوچ محور
              <strong>برنامه نویسی وب</strong>
            </h2>
            <div class="sm:leading-7 text-xs sm:text-sm leading-5">
              <span>
                <strong>صاحب محمدی هستم ، برنامه نویس وب</strong> و مدیر وبسایت
                آموزشی فرانت هوکس.
              </span>
              <p className="leading-5 md:leading-7">
                ارائه آموزشی کاربردی، پروژه محور در کنار مربی هدف اصلی ماست.
                ابتدا در یک مسیر یادگیری دقیق قرار می گیرید. به بازار کار برسید.
                علاوه بر این، پشتیبانی دوره ها مدام العمر است و برای همیشه به
                سوالات شما پاسخ داده می شود. این یعنی خلق یک تجربه خوب در یک
                مسیر مشخص به همراه مربی و پشتیبان.
                <br />
                شما می توانید از طریق ،با من در ارتباط باشید
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-5 md:col-span-1">
          <h3 class="text-xl mb-4 text-secondary-700 ">بخش های سایت</h3>
          <nav>
            <ul className="text-sm">
              <li className="list-disc py-2 list-inside">دوره های آموزشی</li>
              <li className="list-disc py-2 list-inside">دوره های آموزشی</li>
              <li className="list-disc py-2 list-inside">دوره های آموزشی</li>
              <li className="list-disc py-2 list-inside">دوره های آموزشی</li>
            </ul>
          </nav>
        </div>
        <div className="col-span-5 md:col-span-1">
          <h3 class="text-xl mb-4 text-secondary-700 ">دوره های آموزشی</h3>
          <nav>
            <ul className="text-sm">
              <li className="list-disc py-2 list-inside">دوره های آموزشی</li>
              <li className="list-disc py-2 list-inside">دوره های آموزشی</li>
              <li className="list-disc py-2 list-inside">دوره های آموزشی</li>
              <li className="list-disc py-2 list-inside">دوره های آموزشی</li>
            </ul>
          </nav>
        </div>
        <div className="col-span-5 md:col-span-1">
            <Image src={zarin} alt="zarinpal logo" width={70} height={100} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
