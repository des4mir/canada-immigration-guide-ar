import { inDemandJobs } from "../data";
import { DollarSign } from "lucide-react";
import { motion } from "motion/react";
import LastUpdated from "./LastUpdated";

export default function JobsAndSalaries() {
  return (
    <section id="jobs" className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <h2 className="font-bold text-lg md:text-xl text-gray-800">الرواتب والوظائف المطلوبة في كندا</h2>
            </div>
            <LastUpdated date="سبتمبر 2026" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {inDemandJobs.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border border-gray-100 p-4 rounded-xl hover:bg-gray-50 transition-all flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={20} className="text-gray-400" />
                    <div className="text-base text-gray-500 font-medium">{sector.sector}</div>
                  </div>
                  
                  <div className="text-lg font-bold text-[#D80621] mb-2">{sector.salary} CAD</div>
                  
                  <div className="space-y-1 mt-auto">
                    {sector.jobs.map((job, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-base text-gray-600">
                        <div className="w-1 h-1 rounded-full bg-gray-300" />
                        <span>{job}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
