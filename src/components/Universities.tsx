import { universities } from "../data";
import { BookOpen, MapPin, Award } from "lucide-react";
import { motion } from "motion/react";
import LastUpdated from "./LastUpdated";

export default function Universities() {
  return (
    <section id="universities" className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <h2 className="font-bold text-lg md:text-xl text-gray-800">أفضل الجامعات الكندية وتكاليف الدراسة 2026</h2>
            <LastUpdated date="سبتمبر 2026" />
          </div>
          
          <p className="text-base text-gray-700 mb-4 leading-relaxed">
            الرسوم الدراسية للطلاب الدوليين تختلف بشكل كبير حسب المقاطعة والتخصص الأكاديمي. وفقاً لتوقعات هيئة الإحصاء الكندية لعام 2025/2026، فإن المتوسط الوطني يبلغ <strong>41,746 دولار كندي/سنوياً</strong> لبرامج البكالوريوس، و <strong>24,028 دولار كندي/سنوياً</strong> لبرامج الدراسات العليا.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-5 text-base text-gray-700 leading-relaxed">
            <h4 className="font-bold mb-2">متوسط الرسوم للبكالوريوس حسب المقاطعة (سنوياً):</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li><strong>أونتاريو:</strong> 49,802 دولار كندي (الأعلى تكلفة)</li>
              <li><strong>بريتش كولومبيا:</strong> 39,851 دولار كندي</li>
              <li><strong>كيبيك:</strong> 36,279 دولار كندي</li>
              <li><strong>ألبرتا:</strong> 34,880 دولار كندي</li>
              <li><strong>نيوفاوندلاند ولابرادور:</strong> 18,867 دولار كندي (الأقل تكلفة)</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {universities.map((uni, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-3 p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-base font-bold text-gray-600 shrink-0 mt-0.5">
                  0{index + 1}
                </div>
                <div className="flex-1">
                  <div className="text-base font-bold text-gray-800 mb-1">{uni.name}</div>
                  <div className="text-base text-gray-500 mb-2">{uni.description}</div>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <MapPin size={10} />
                      <span>{uni.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-[#D80621] font-medium">
                      <Award size={10} />
                      <span>{uni.rank}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-4 bg-blue-50 p-2.5 rounded-lg text-base text-blue-700 font-medium">
            ملاحظة: خريجي هذه الجامعات يحصلون على نقاط إضافية في نظام الدخول السريع.
          </div>
        </div>
      </div>
    </section>
  );
}
