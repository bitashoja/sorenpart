import React from "react";
import { Search, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-[120px] bg-violet-600 px-6 shadow-md sticky top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-4">
        <Search className="w-6 h-6 hover:text-gray-300 text-white cursor-pointer" />
        <ShoppingBag className="w-6 h-6 hover:text-gray-300 text-white cursor-pointer" />
        <span className="hover:text-gray-300 text-white font-vazir cursor-pointer">
          ثبت نام / ورود
        </span>
      </div>

      <div className="flex items-center gap-6">
        <ul className="flex gap-6">
          <li className="hover:text-gray-300 text-white font-vazir cursor-pointer">
            صفحه اصلی
          </li>
          <li className="hover:text-gray-300 text-white font-vazir cursor-pointer">
            فروشگاه
          </li>
          <li className="hover:text-gray-300 text-white font-vazir cursor-pointer">
            وبلاگ
          </li>
          <li className="hover:text-gray-300 text-white font-vazir cursor-pointer">
            درباره ما
          </li>
          <li className="hover:text-gray-300 text-white font-vazir cursor-pointer">
            تماس با ما
          </li>
          <li className="hover:text-gray-300 text-white font-vazir cursor-pointer">
            سوالات متداول
          </li>
        </ul>
        <img
          src="../images/logo.png"
          alt="logo"
          className="w-8 h-8 hover:text-gray-300 text-white rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
}
