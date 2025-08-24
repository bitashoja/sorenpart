import React from "react";

export default function Category() {
  return (
   <div className="mt-8 px-4">
     <div>
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">دسته بندی محصولات</h1>
      <div className="flex justify-center items-center gap-6 max-w-7xl mx-auto">
        <div className="w-[280px] h-[280px] border border-gray-200 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group">
          <img
            src="../images/blocking.jpeg"
            alt="قطعات جلوبندی"
            className="w-[120px] h-[120px] object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-lg font-semibold text-gray-700 text-center px-2">قطعات جلوبندی</h3>
        </div>
        <div className="w-[280px] h-[280px] border border-gray-200 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group">
          <img
            src="../images/engine.jpg"
            alt="قطعات موتوری و فرمان"
            className="w-[120px] h-[120px] object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-lg font-semibold text-gray-700 text-center px-2">قطعات موتوری و فرمان</h3>
        </div>
        <div className="w-[280px] h-[280px] border border-gray-200 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group">
          <img
            src="../images/pad.jpg"
            alt="لنت خودروهای ایرانی و خارجی"
            className="w-[120px] h-[120px] object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-lg font-semibold text-gray-700 text-center px-2">لنت خودروهای ایرانی و خارجی</h3>
        </div>
        <div className="w-[280px] h-[280px] border border-gray-200 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group">
          <img
            src="../images/electricity.jpg"
            alt="قطعات برقی"
            className="w-[120px] h-[120px] object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-lg font-semibold text-gray-700 text-center px-2">قطعات برقی</h3>
        </div>
        <div className="w-[280px] h-[280px] border border-gray-200 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group">
          <img
            src="../images/gearbox.png"
            alt="شیلنگ و تسمه و بلبرینگ ها"
            className="w-[120px] h-[120px] object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-lg font-semibold text-gray-700 text-center px-2">شیلنگ و تسمه و بلبرینگ ها</h3>
        </div>
      </div>
    </div>
    <div className="mt-12">
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">پرفروش ترین کالاها</h1>
      <div className="flex justify-center items-center gap-6 max-w-7xl mx-auto">
        <div className="w-[320px] h-[320px] border border-gray-200 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group">
          <img
            src="../images/blocking.jpeg"
            alt="قطعات جلوبندی"
            className="w-[80px] h-[80px] object-cover rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-base font-semibold text-gray-700 text-center px-2 mb-2">شیلنگ طول (متری) ضد بنزین 2جداره سایز 8</h3>
          <span className="text-gray-500 text-sm mb-1">100,000 تومان</span>
          <span className="text-green-500 text-sm">موجود در انبار</span>
        </div>
        <div className="w-[320px] h-[320px] border border-gray-200 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group">
          <img
            src="../images/electricity.jpg"
            alt="قطعات برقی"
            className="w-[80px] h-[80px] object-cover rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-base font-semibold text-gray-700 text-center px-2 mb-2">قطعات برقی</h3>
          <span className="text-gray-500 text-sm mb-1">75,000 تومان</span>
          <span className="text-green-500 text-sm">موجود در انبار</span>
        </div>
        <div className="w-[320px] h-[320px] border border-gray-200 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group">
          <img
            src="../images/gearbox.png"
            alt="شیلنگ و تسمه و بلبرینگ ها"
            className="w-[80px] h-[80px] object-cover rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-base font-semibold text-gray-700 text-center px-2 mb-2">شیلنگ و تسمه و بلبرینگ ها</h3>
          <span className="text-gray-500 text-sm mb-1">150,000 تومان</span>
          <span className="text-green-500 text-sm">موجود در انبار</span>
        </div>
      </div>
    </div>
    <div className="relative">
      <img src="../images/pic.jpg" alt="banner" className="w-full max-w-7xl mx-auto h-[200px] object-cover rounded-2xl mt-12" />
      <button 
        onClick={() => console.log('دکمه خرید کلیک شد')}
        className="absolute bottom-6 left-64 bg-orange-600 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        خرید کنید
      </button>
    </div>
    <div className="mt-12">
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">جدیدترین محصولات</h1>
      <div className="flex justify-center items-center gap-6 max-w-7xl mx-auto">
        <div className="w-[320px] h-[320px] border border-gray-200 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group">
          <img
            src="../images/blocking.jpeg"
            alt="قطعات جلوبندی"
            className="w-[80px] h-[80px] object-cover rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-base font-semibold text-gray-700 text-center px-2 mb-2">واشر منیفولد دود پژو۲۰۰۰(فلزی)</h3>
          <span className="text-gray-500 text-sm mb-3">100,000 تومان</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-600 transition-colors duration-200"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </div>
        <div className="w-[320px] h-[320px] border border-gray-200 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group">
          <img
            src="../images/electricity.jpg"
            alt="قطعات برقی"
            className="w-[80px] h-[80px] object-cover rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-base font-semibold text-gray-700 text-center px-2 mb-2">قطعات برقی</h3>
          <span className="text-gray-500 text-sm mb-3">75,000 تومان</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-600 transition-colors duration-200"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </div>
        <div className="w-[320px] h-[320px] border border-gray-200 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group">
          <img
            src="../images/gearbox.png"
            alt="شیلنگ و تسمه و بلبرینگ ها"
            className="w-[80px] h-[80px] object-cover rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-base font-semibold text-gray-700 text-center px-2 mb-2">شیلنگ و تسمه و بلبرینگ ها</h3>
          <span className="text-gray-500 text-sm mb-3">150,000 تومان</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-600 transition-colors duration-200"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </div>
      </div>
    </div>
         <div className="mt-12">
       <div className="flex gap-6 max-w-7xl mx-auto">
        <div className="relative flex-1">
          <img src="../images/Electric-motor.png" alt="موتور برقی" className="w-full h-[200px] object-cover rounded-2xl" />
                     <button 
             onClick={() => console.log('موتور برقی خریداری شد')}
             className="absolute bottom-11 left-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300"
           >
             خرید کن
           </button>
        </div>
        <div className="relative flex-1">
          <img src="../images/Compressor.png" alt="کمپرسور" className="w-full h-[200px] object-cover rounded-2xl" />
                     <button 
             onClick={() => console.log('کمپرسور خریداری شد')}
             className="absolute bottom-11 left-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300"
           >
             خرید کن
           </button>
        </div>
      </div>
    </div>
    <div className="mt-12">
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">پیشنهاد های سورنا پارت</h1>
      <div className="flex justify-center items-center gap-6 max-w-7xl mx-auto">
                                   <div className="w-[320px] h-[320px] rounded-2xl bg-white hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group">
            <img
              src="../images/blocking.jpeg"
              alt="قطعات جلوبندی"
              className="w-[80px] h-[80px] object-cover rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-base font-semibold text-gray-700 text-center px-2 mb-2">شیلنگ طول (متری) ضد بنزین 2جداره سایز 8</h3>
            <span className="text-gray-500 text-sm mb-3">100,000 تومان</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-600 transition-colors duration-200"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </div>
          <div className="w-[320px] h-[320px] rounded-2xl bg-white hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group">
            <img
              src="../images/electricity.jpg"
              alt="قطعات برقی"
              className="w-[80px] h-[80px] object-cover rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-base font-semibold text-gray-700 text-center px-2 mb-2">قطعات برقی</h3>
            <span className="text-gray-500 text-sm mb-3">75,000 تومان</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-600 transition-colors duration-200"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </div>
          <div className="w-[320px] h-[320px] rounded-2xl bg-white hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group">
            <img
              src="../images/gearbox.png"
              alt="شیلنگ و تسمه و بلبرینگ ها"
              className="w-[80px] h-[80px] object-cover rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-base font-semibold text-gray-700 text-center px-2 mb-2">شیلنگ و تسمه و بلبرینگ ها</h3>
            <span className="text-gray-500 text-sm mb-3">150,000 تومان</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-600 transition-colors duration-200"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </div>
      </div>
    </div>
   </div>
  );
}

