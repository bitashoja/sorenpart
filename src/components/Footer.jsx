import React from "react";

export default function Footer() {
  return (
    <footer className="bg-violet-600 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section with car brand logos */}
        <div className="flex justify-between items-center mb-6">
          <img
            src="../images/sipa.png"
            alt="سایپا"
            className="w-[80px] h-[80px] object-cover rounded-lg hover:scale-110 transition-transform duration-300"
          />
          <img
            src="../images/iran-Photoroom.png"
            alt="ایران خودرو"
            className="w-[80px] h-[80px] object-cover rounded-lg hover:scale-110 transition-transform duration-300"
          />
          <img
            src="../images/nissan-Photoroom.png"
            alt="نیسان"
            className="w-[80px] h-[80px] object-cover rounded-lg hover:scale-110 transition-transform duration-300"
          />
          <img
            src="../images/kia.png"
            alt="کیا"
            className="w-[80px] h-[80px] object-cover rounded-lg hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        {/* Main content section with two divs side by side */}
        <div className="flex gap-8 mb-12">
          {/* Left div with flex row layout */}
          <div className="flex flex-row gap-8 flex-1">
            {/* Newsletter section */}
            <div className="flex flex-col items-center">
              <span className="text-white font-semibold mb-4">عضویت در خبرنامه</span>
              <div className="flex gap-4">
                <img
                  src="../images/samandehi_logo.png"
                  alt="ساماندهی"
                  className="w-[80px] h-[80px] object-cover rounded-lg hover:scale-110 transition-transform duration-300"
                />
                <img
                  src="../images/enamad_logo.png"
                  alt="اعتماد الکترونیک"
                  className="w-[80px] h-[80px] object-cover rounded-lg hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            
            {/* Useful links section */}
            <div className="flex flex-col">
              <span className="text-white font-semibold mb-4">لینک‌های مفید</span>
              <ul className="text-white space-y-2">
                <li>
                  <a href="#" className="hover:text-orange-200 transition-colors">
                    قطعات جلوبندی
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-200 transition-colors">
                    قطعات موتوری و فرمان
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-200 transition-colors">
                    لنت خودروهای ایرانی و خارجی
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-200 transition-colors">
                    قطعات برقی
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-200 transition-colors">
                    قطعات گیربکس و مکانیزم ها
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-200 transition-colors">
                    شیلنگ و تسمه و بلبرینگ ها
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Quick access section */}
            <div className="flex flex-col">
              <span className="text-white font-semibold mb-4">دسترسی سریع</span>
              <ul className="text-white space-y-2">
                <li>
                  <a href="#" className="hover:text-orange-200 transition-colors">
                    سوالات متداول
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-200 transition-colors">
                    صفحه محصول
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-200 transition-colors">
                    وبلاگ 
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-200 transition-colors">
                    تماس با ما
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right div with description */}
          <div className="flex-1">
            <p className="text-white text-right leading-relaxed">
              نورا پارت با فراهم آوردن تنوع معقولی از محصولات در کنار عرضه با قیمت مناسب آن‌ها، 
              به دنبال خرید راحت و رضایت‌بخش قطعات خودرو برای همراهان خودش است و این مهم را 
              با مهیا کردن امکان بررسی فنی و کاربردی قطعات و ارائه محتوای مناسب و غنی محقق می‌سازد.
            </p>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="text-center text-white">
          <p className="text-sm">© 2024 سورنا پارت. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
