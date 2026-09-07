import { BookOpen, ExternalLink } from "lucide-react";

export default function Sources() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-50 p-5 md:p-6 rounded-2xl border border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={20} className="text-gray-500" />
            <h2 className="font-bold text-base text-gray-800">المصادر والبيانات المرجعية</h2>
          </div>
          <p className="text-base text-gray-500 mb-4 leading-relaxed">
            تم جمع الأرقام والمعلومات الواردة في هذا الدليل كمرجع تقريبي فقط. تعتمد الأرقام على تحديثات الربع الثالث من عام 2026.
          </p>
          <ul className="text-base text-gray-600 space-y-3">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />
              <div>
                <strong>إدارة الهجرة واللاجئين والمواطنة الكندية (IRCC):</strong> 
                <span className="text-gray-500 block mt-0.5">تحديثات سحوبات الدخول السريع (Express Entry) وفئات المهن المطلوبة (Category-based draws).</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />
              <div>
                <strong>هيئة الإحصاء الكندية (Statistics Canada):</strong> 
                <span className="text-gray-500 block mt-0.5">بيانات الرواتب التقريبية (تختلف الأرقام الدقيقة حسب المقاطعة، مستوى الخبرة، وأكواد NOC) وتوقعات تكلفة المعيشة.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
