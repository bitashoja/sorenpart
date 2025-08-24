# سورنا پارت - فروشگاه قطعات خودرو

این پروژه یک فروشگاه آنلاین قطعات خودرو است که با React و Tailwind CSS ساخته شده است.

## ویژگی‌ها

- نمایش محصولات با grid responsive
- جستجوی محصولات
- فیلتر بر اساس دسته‌بندی
- سبد خرید
- احراز هویت کاربر
- مدیریت سفارشات

## تکنولوژی‌های استفاده شده

- React 18
- Tailwind CSS
- Context API برای state management
- Fetch API برای ارتباط با backend

## نصب و اجرا

### پیش‌نیازها
- Node.js (نسخه 14 یا بالاتر)
- npm یا yarn

### نصب dependencies
```bash
npm install
```

### اجرا در محیط development
```bash
npm start
```

### ساخت نسخه production
```bash
npm run build
```

## تنظیمات API

برای استفاده از API، آدرس سرور backend را در فایل `src/services/api.js` تنظیم کنید:

```javascript
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-url.com/api'  // آدرس سرور production
  : 'http://localhost:3000/api';        // آدرس localhost
```

## استقرار روی Vercel

1. پروژه را به GitHub push کنید
2. در Vercel، پروژه جدید ایجاد کنید
3. از GitHub import کنید
4. تنظیمات build:
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

## ساختار پروژه

```
src/
├── components/          # کامپوننت‌های React
│   ├── Header.jsx      # هدر سایت
│   ├── Footer.jsx      # فوتر سایت
│   ├── Category.jsx    # نمایش دسته‌بندی‌ها
│   └── Product.jsx     # نمایش محصولات
├── context/            # Context API
│   └── AppContext.js   # مدیریت state های اصلی
├── services/           # سرویس‌های API
│   └── api.js         # توابع ارتباط با backend
└── App.js             # کامپوننت اصلی
```

## نکات مهم

- مطمئن شوید که سرور backend شما در حال اجرا است
- در production، آدرس API را به درستی تنظیم کنید
- برای routing بهتر، از React Router استفاده کنید
- فایل‌های محیطی (.env) را در .gitignore قرار دهید

## پشتیبانی

برای سوالات و مشکلات، لطفاً issue در GitHub ایجاد کنید.
