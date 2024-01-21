import CheckSection from "@/common/CheckSection";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { HomeRepairServiceOutlined } from "@mui/icons-material";

const AboutMe = () => {
  return (
    <section className="px-3 md:px-0">
      <h2 className="text-2xl font-black mb-2">مختصری در مورد من</h2>
      <p>
        یه عاشق برنامه نویسی که سعی میکنه همیشه چیزای جدید یاد بگیره و در کنارش
        به مباحث مدیریتی هم خیلی علاقه داره :)
      </p>
      <p className="mt-1">
        سال 1398 و همزمان با دانشگاه وارد بازار کار شدم و سعی کردم این مدت
        بهترین خودم باشم و رو به جلو پیش برم ، البته الان هم هدفم همین هست 😀
      </p>
      <h2 className="text-2xl font-black my-6">تجربیات</h2>
      <div className="flex flex-wrap w-full gap-8">
        <div className="flex gap-x-3 w-full md:w-[47%] shadow-lg p-4 rounded-md">
          <div>
            <div className="dark:bg-mainyellow bg-mainGreen p-2 rounded-full relative before:content-[''] before:absolute before:top-[100%] before:left-[50%] before:bg-mainGreen before:rounded-lg dark:before:bg-mainyellow before:w-[2px] before:h-24">
              <HomeRepairServiceOutlined color="action" />
            </div>
          </div>
          <div className="flex flex-col ">
            <span>
              <span className="bg-[#eee] dark:bg-[#363636] dark:text-gray-300 text-gray-500 rounded-full text-sm px-3 py-1">
                {toPersianNumbers(1402)} - تاکنون
              </span>
            </span>
            <h3 className="text-[23px] font-bold dark:text-white mt-3 mb-1 text-[#313131]">
              برنامه نویس فرانت اند
            </h3>
            <h3 className="text-[14px] text-gray-500 dark:text-gray-300 mb-3">
              هلدینگ تجازت الکترونیک اول
            </h3>
            <div className="flex flex-col gap-y-2">
              <CheckSection title="تکنولوژی های مورد استفاده : Reactjs , Nextjs , Tailwindcss , React query , React hook forms , ant design" />
              <CheckSection title="توسعه و طراحی پنل ادمین شرکت" />
              <CheckSection title="کار در پروژه با اسکیل بزرگ" />
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 w-full md:w-[47%] shadow-lg p-4 rounded-md">
          <div>
            <div className="dark:bg-mainyellow bg-mainGreen p-2 rounded-full relative before:content-[''] before:absolute before:top-[100%] before:left-[50%] before:bg-mainGreen before:rounded-lg dark:before:bg-mainyellow before:w-[2px] before:h-24">
              <HomeRepairServiceOutlined color="action" />
            </div>
          </div>
          <div className="flex flex-col ">
            <span>
              <span className="bg-[#eee] dark:bg-[#363636] dark:text-gray-300 text-gray-500 rounded-full text-sm px-3 py-1">
                {toPersianNumbers(1399)} - تاکنون
              </span>
            </span>
            <h3 className="text-[23px] font-bold dark:text-white mt-3 mb-1 text-[#313131]">
              وب دولوپر
            </h3>
            <h3 className="text-[14px] text-gray-500 dark:text-gray-300 mb-3">
              CMC Marketing Agency (Canada)
            </h3>
            <div className="flex flex-col gap-y-2">
              <CheckSection title="تکنولوژی های مورد استفاده : wordpress , html , css , javascript , php" />
              <CheckSection title="برنامه نویس وردپرس" />
              <CheckSection title="توسعه و طراحی سایت های شرکت" />
              <CheckSection title="تجربه کار با شرکت کانادایی و پروژه های خارجی" />
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 w-full md:w-[47%] shadow-lg p-4 rounded-md">
          <div>
            <div className="dark:bg-mainyellow bg-mainGreen p-2 rounded-full relative before:content-[''] before:absolute before:top-[100%] before:left-[50%] before:bg-mainGreen before:rounded-lg dark:before:bg-mainyellow before:w-[2px] before:h-24">
              <HomeRepairServiceOutlined color="action" />
            </div>
          </div>
          <div className="flex flex-col ">
            <span>
              <span className="bg-[#eee] dark:bg-[#363636] dark:text-gray-300 text-gray-500 rounded-full text-sm px-3 py-1">
                {toPersianNumbers(1401)} - {toPersianNumbers(1402)}
              </span>
            </span>
            <h3 className="text-[23px] font-bold dark:text-white mt-3 mb-1 text-[#313131]">
              وب دولوپر
            </h3>
            <h3 className="text-[14px] text-gray-500 dark:text-gray-300 mb-3">
              آژانس تبلیغاتی لیموشیرین
            </h3>
            <div className="flex flex-col gap-y-2">
              <CheckSection title="تکنولوژی های مورد استفاده : wordpress , html , css , javascript , php" />
              <CheckSection title="برنامه نویس وردپرس" />
              <CheckSection title="توسعه و طراحی سایت های شرکت" />
              <CheckSection title="همکاری با شرکت ها و پروژه های بزرگی مانند طراحی لندینگ باشگاه پرسپولیس ،طراحی لندنیگ شهرفرش ،طراحی سایت آکادمی استعدادیابی سایدا و ..." />
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 w-full md:w-[47%] shadow-lg p-4 rounded-md">
          <div>
            <div className="dark:bg-mainyellow bg-mainGreen p-2 rounded-full relative before:content-[''] before:absolute before:top-[100%] before:left-[50%] before:bg-mainGreen before:rounded-lg dark:before:bg-mainyellow before:w-[2px] before:h-24">
              <HomeRepairServiceOutlined color="action" />
            </div>
          </div>
          <div className="flex flex-col ">
            <span>
              <span className="bg-[#eee] dark:bg-[#363636] dark:text-gray-300 text-gray-500 rounded-full text-sm px-3 py-1">
                {toPersianNumbers(1400)} - {toPersianNumbers(1400)}
              </span>
            </span>
            <h3 className="text-[23px] font-bold dark:text-white mt-3 mb-1 text-[#313131]">
              برنامه نویس فرانت اند
            </h3>
            <h3 className="text-[14px] text-gray-500 dark:text-gray-300 mb-3">
              رتیناتک | RetinaTech
            </h3>
            <div className="flex flex-col gap-y-2">
              <CheckSection title="تکنولوژی های مورد استفاده : Reactjs , Tailwindcss , React query , mui" />
              <CheckSection title="توسعه و طراحی پنل ادمین شرکت ایرانسل" />
              <CheckSection title="کار در پروژه با اسکیل بزرگ و شرکت ایرانسل" />
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 w-full md:w-[47%] shadow-lg p-4 rounded-md">
          <div>
            <div className="dark:bg-mainyellow bg-mainGreen p-2 rounded-full relative before:content-[''] before:absolute before:top-[100%] before:left-[50%] before:bg-mainGreen before:rounded-lg dark:before:bg-mainyellow before:w-[2px] before:h-24">
              <HomeRepairServiceOutlined color="action" />
            </div>
          </div>
          <div className="flex flex-col ">
            <span>
              <span className="bg-[#eee] dark:bg-[#363636] dark:text-gray-300 text-gray-500 rounded-full text-sm px-3 py-1">
                {toPersianNumbers(1400)} - {toPersianNumbers(1400)}
              </span>
            </span>
            <h3 className="text-[23px] font-bold dark:text-white mt-3 mb-1 text-[#313131]">
              برنامه نویس فرانت اند
            </h3>
            <h3 className="text-[14px] text-gray-500 dark:text-gray-300 mb-3">
              SarvFinance
            </h3>
            <div className="flex flex-col gap-y-2">
              <CheckSection title="تکنولوژی های مورد استفاده : Reactjs , Tailwindcss , Websocket , binance" />
              <CheckSection title="توسعه و طراحی پنل ادمین شرکت و اتصال پنل به ربات تریدر شرکت" />
              <CheckSection title="کار با ابزار های چارت مانند Recharts و Binance Api" />
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 w-full md:w-[47%] shadow-lg p-4 rounded-md">
          <div>
            <div className="dark:bg-mainyellow bg-mainGreen p-2 rounded-full relative before:content-[''] before:absolute before:top-[100%] before:left-[50%] before:bg-mainGreen before:rounded-lg dark:before:bg-mainyellow before:w-[2px] before:h-24">
              <HomeRepairServiceOutlined color="action" />
            </div>
          </div>
          <div className="flex flex-col ">
            <span>
              <span className="bg-[#eee] dark:bg-[#363636] dark:text-gray-300 text-gray-500 rounded-full text-sm px-3 py-1">
                {toPersianNumbers(1399)} - {toPersianNumbers(1398)}
              </span>
            </span>
            <h3 className="text-[23px] font-bold dark:text-white mt-3 mb-1 text-[#313131]">
              طراح سایت
            </h3>
            <h3 className="text-[14px] text-gray-500 dark:text-gray-300 mb-3">
              آژانس تبلیغاتی مارکتگرام
            </h3>
            <div className="flex flex-col gap-y-2">
              <CheckSection title="تکنولوژی های مورد استفاده : wordpress , html , css , javascript" />
              <CheckSection title="طراح سایت وردپرس" />
              <CheckSection title="توسعه و طراحی سایت های شرکت" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
