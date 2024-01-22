import Image from "next/image";
import zarin from "../assets/images/zarin.png";

const Footer = () => {
  return (
    <footer className="py-6 md:py-8 text-secondary-600 mt-10 border-t-2 border-t-gray-200 bg-gray-200 px-4 rounded-t-3xl">
      <div className="grid gap-10 md:gap-14 grid-cols-5 grid-row-2 container md:max-w-screen-xl mx-auto">
        <div className="col-span-5 md:col-span-2 flex flex-col justify-start">
          <div>
            <h2 className="text-primary font-bold text-sm mb-4">
              آکادمی آنلاین فرانت هوکس، دوره های کوچ محور
              <strong>برنامه نویسی وب</strong>
            </h2>
            <div className="sm:leading-7 text-sm leading-5">
              <p className="leading-5 md:leading-7">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف .بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-5 md:col-span-1">
          <h3 className="text-xl mb-4 text-secondary-700 ">بخش های سایت</h3>
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
          <h3 className="text-xl mb-4 text-secondary-700 ">دوره های آموزشی</h3>
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
