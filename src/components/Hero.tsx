import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative pt-10 pb-8 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
        >
          <span className="inline-block py-1 px-3 rounded text-sm bg-red-50 text-[#D80621] font-bold uppercase mb-4 tracking-wider">
            دليل محدث لعام 2026
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 tracking-tight mb-4 leading-tight">
            دليل الهجرة إلى كندا <span className="text-[#D80621]">من مصر 2026</span>
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg text-gray-500 mb-6 leading-relaxed">
            بوابتك الشاملة لتحقيق حلم الهجرة إلى كندا. تعرف على المسارات المتاحة، تكلفة المعيشة، الوظائف المطلوبة، وأفضل الفرص الدراسية.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <a 
              href="#streams" 
              className="inline-flex items-center justify-center gap-2 bg-[#D80621] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-sm text-base w-full sm:w-auto"
            >
              ابدأ رحلتك الآن
              <ArrowLeft size={20} />
            </a>
            <a 
              href="#faq" 
              className="inline-flex items-center justify-center gap-2 bg-gray-50 text-gray-700 px-6 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm text-base w-full sm:w-auto"
            >
              الأسئلة الشائعة
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
