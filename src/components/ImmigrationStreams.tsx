import { immigrationStreams } from "../data";
import { Check, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import LastUpdated from "./LastUpdated";

export default function ImmigrationStreams() {
  return (
    <section id="streams" className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="bg-red-50 p-2 rounded-lg text-[#D80621]">
                <Check size={20} />
              </span>
              <h2 className="font-bold text-lg md:text-xl text-gray-800">مسارات الهجرة إلى كندا من مصر</h2>
            </div>
            <LastUpdated date="سبتمبر 2026" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {immigrationStreams.map((stream, index) => {
              const Icon = stream.icon;
              return (
                <motion.div 
                  key={stream.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-4 bg-gray-50 rounded-xl border-s-4 border-[#D80621] flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon size={18} className="text-[#D80621]" />
                    <div className="font-bold text-base text-gray-800">{stream.title}</div>
                  </div>
                  <div className="text-base text-gray-600 mt-1 mb-3 flex-1">
                    {stream.description}
                  </div>
                  <ul className="space-y-1.5 mt-auto">
                    {stream.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-base text-gray-500">
                        <Check size={20} className="text-green-500 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <div className="border-t border-gray-100 pt-6 mt-2">
            <h3 className="font-bold text-base text-gray-800 mb-3">برامج الترشيح الإقليمي (PNP) لعام 2026</h3>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              تُعد <strong>برامج الترشيح الإقليمي (PNP)</strong> مساراً رئيسياً للإقامة الدائمة (PR) خارج نظام الدخول السريع الفيدرالي، حيث تستهدف كندا قبول حوالي <strong>110,000 مهاجر</strong> عبر هذا المسار في عام 2026.
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-5 text-base text-gray-700 leading-relaxed space-y-3">
              <p>
                <strong>مقاطعة بريتش كولومبيا (BC):</strong> تمت إعادة هيكلة النظام إلى ثلاثة أعمدة رئيسية: <strong>CARE</strong> (للرعاية الصحية)، <strong>BUILD</strong> (لـ 9 حرف بناء أساسية)، و <strong>INNOVATE</strong>. كما تم حجز <strong>35% من الترشيحات</strong> للمتقدمين خارج منطقة فانكوفر الكبرى.
              </p>
              <p>
                <strong>مقاطعة أونتاريو (OINP):</strong> اعتباراً من 30 مايو 2026، أطلقت المقاطعة رسمياً مسار <strong>عرض العمل</strong> (Ontario Workforce Priority Stream). ومن المخطط إطلاق ثلاثة مسارات أخرى لاحقاً تشمل: <strong>الرعاية الصحية ذات الأولوية</strong>، <strong>رائد الأعمال</strong>، و<strong>المواهب الاستثنائية</strong>.
              </p>
              <p>
                <strong>المسارات التقنية (Tech NOCs):</strong> يحصل العاملون في التكنولوجيا على مسارات سريعة مخصصة. فمثلاً، يستهدف برنامج <strong>BC PNP Tech</strong> (بسحوبات أسبوعية) مهندسي البرمجيات (NOC 21231)، المبرمجين (21230)، ومهندسي البيانات (21211).
              </p>
              <p>
                <strong>الرعاية الصحية:</strong> المهن الطبية (مثل الممرضات، الأطباء، الصيادلة، وLPNs) تمتلك الآن مسارات أولوية مخصصة في جميع المقاطعات الكندية تقريباً.
              </p>
            </div>

            <div className="bg-amber-50 border-s-4 border-amber-500 p-3 mb-2 text-base text-amber-900 rounded-e-lg">
              <strong>ملاحظة هامة:</strong> الحصول على ترشيح إقليمي (PNP) يمنحك عادة 600 نقطة إضافية في نظام الدخول السريع (Express Entry)، مما يضمن لك تقريباً الحصول على دعوة للتقديم (ITA) للإقامة الدائمة.
            </div>
          </div>
          
          <div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-base text-blue-800">
              <strong className="block mb-1">نصيحة هامة:</strong>
              نقاط الدخول السريع وفرص برامج المقاطعات تعتمد بشكل كبير على مهنتك الحالية.
            </div>
            <a href="#jobs" className="shrink-0 flex items-center gap-1.5 text-base font-bold text-blue-700 bg-white px-3 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors shadow-sm">
              استكشف الوظائف المطلوبة
              <ArrowLeft size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
