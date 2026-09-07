import { costOfLiving } from "../data";
import { MapPin, Wallet, Home as HomeIcon, Bus } from "lucide-react";
import { motion } from "motion/react";
import LastUpdated from "./LastUpdated";

export default function CostOfLiving() {
  return (
    <section id="cost" className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1f2937] text-white p-5 md:p-6 rounded-2xl shadow-lg border border-gray-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="font-bold text-lg md:text-xl text-red-400">تكلفة المعيشة في كندا للمصريين</h2>
            <LastUpdated date="سبتمبر 2026" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {costOfLiving.map((city, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={20} className="text-gray-400" />
                  <h3 className="text-base font-bold text-gray-100">{city.city}</h3>
                </div>

                <div className="flex justify-between items-end border-b border-gray-700 pb-2">
                  <div>
                    <div className="text-base text-gray-400 flex items-center gap-1"><HomeIcon size={20}/> إيجار</div>
                    <div className="font-bold text-lg">{city.rent} CAD</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-end border-b border-gray-700 pb-2">
                  <div>
                    <div className="text-base text-gray-400 flex items-center gap-1"><Wallet size={20}/> بقالة</div>
                    <div className="font-bold text-lg">{city.groceries} CAD</div>
                  </div>
                </div>

                <div className="flex justify-between items-end border-b border-gray-700 pb-2">
                  <div>
                    <div className="text-base text-gray-400 flex items-center gap-1"><Bus size={20}/> مواصلات</div>
                    <div className="font-bold text-lg">{city.transit} CAD</div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {city.features.map((feature, i) => (
                      <span key={i} className="bg-gray-800 text-gray-300 px-2 py-0.5 rounded text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6 p-3 bg-gray-800 rounded-lg text-base leading-relaxed text-gray-300 border border-gray-700">
            * هذه الأرقام تقديرية لمتوسط التكاليف الشهرية للفرد الواحد وقد تختلف حسب نمط الحياة وموقع السكن الدقيق. كالغاري تعتبر خياراً اقتصادياً ممتازاً.
          </div>
        </div>
      </div>
    </section>
  );
}
