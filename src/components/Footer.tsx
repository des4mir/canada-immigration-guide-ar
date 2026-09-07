import { AlertTriangle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-8">
      <div className="max-w-7xl mx-auto px-6 py-4 border-b border-gray-200">
        <div className="flex items-start gap-2 text-sm text-gray-500 bg-gray-100 p-3 rounded-lg">
          <AlertTriangle size={18} className="shrink-0 text-gray-400 mt-0.5" />
          <p className="leading-relaxed">
            <strong>تنويه عام:</strong> هذا الموقع دليل عام غير رسمي وغير تابع لأي جهة حكومية أو غير حكومية، كندية أو مصرية. المعلومات قد تتغير، يرجى مراجعة المصادر الرسمية مثل موقع الهجرة الكندية (IRCC) أو السفارة الكندية للحصول على معلومات دقيقة ومحدثة.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-base text-gray-500">
        <div>© 2026 دليل الهجرة الكندي للمصريين - بوابة مستقلة للمعلومات</div>
        <div className="flex gap-4 font-medium">
          <span className="hover:text-gray-800 cursor-pointer">سياسة الخصوصية</span>
          <span className="hover:text-gray-800 cursor-pointer">شروط الاستخدام</span>
          <span className="hover:text-gray-800 cursor-pointer">تواصل معنا</span>
        </div>
      </div>
    </footer>
  );
}
