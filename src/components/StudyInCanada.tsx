import { GraduationCap, BookOpen, Clock, FileCheck } from "lucide-react";
import { motion } from "motion/react";

export default function StudyInCanada() {
  const steps = [
    {
      title: "القبول الجامعي (LOA)",
      description: "الحصول على خطاب قبول رسمي من مؤسسة تعليمية معتمدة (DLI).",
      icon: BookOpen
    },
    {
      title: "القدرة المالية",
      description: "إثبات توفر المبالغ الكافية لتغطية الرسوم الدراسية ونفقات المعيشة للعام الأول.",
      icon: FileCheck
    },
    {
      title: "تصريح العمل بعد التخرج",
      description: "الحصول على PGWP يتيح لك العمل لاكتساب خبرة كندية تؤهلك للإقامة الدائمة.",
      icon: Clock
    }
  ];

  return (
    <section id="study" className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-6 lg:items-stretch">
          
          {/* Content */}
          <div className="flex-1 w-full">
            <h2 className="font-bold text-lg md:text-xl text-gray-800 mb-4">الدراسة وتصريح العمل ما بعد التخرج (PGWP)</h2>
            
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              تعتبر كندا وجهة دراسية رائدة، حيث يوفر نظامها التعليمي مساراً للحصول على الإقامة الدائمة عبر <strong>تصريح العمل ما بعد التخرج (PGWP)</strong>. هذا التصريح هو خطوة حاسمة لاكتساب الخبرة الكندية المؤهلة للهجرة.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-5 text-base text-gray-700 leading-relaxed space-y-3">
              <p>
                <strong>شروط اللغة (منذ نوفمبر 2024 ومستمرة في 2026):</strong> يشترط على خريجي <strong>الدرجات الجامعية (البكالوريوس فأعلى)</strong> إثبات كفاءة لغوية لا تقل عن <strong>CLB/NCLC 7</strong>. أما لخريجي <strong>الكليات والدبلومات والشهادات</strong>، فالحد الأدنى هو <strong>CLB/NCLC 5</strong> (في جميع المهارات الأربع).
              </p>
              <p>
                <strong>شروط التخصصات:</strong> خريجو <strong>الدرجات العلمية (البكالوريوس فأعلى)</strong> مؤهلون للحصول على التصريح بغض النظر عن مجال دراستهم. في المقابل، خريجو <strong>الدبلومات والشهادات (الكليات)</strong> يجب أن يكونوا قد أكملوا برامجهم في مجالات معتمدة (CIP code).
              </p>
              <p>
                <strong>إضافات 2026 للمجالات المعتمدة للدبلومات:</strong> دبلومات تكنولوجيا المعلومات (تطوير البرمجيات، الأمن السيبراني، إدارة الشبكات)، تمريض LPN/RPN، بعض شهادات الحرف النقابية، وإدارة الطهي بنظام التدريب التعاوني (Co-op).
              </p>
              <p>
                <strong>المجالات المستبعدة للدبلومات:</strong> إدارة الأعمال العامة، التسويق، إدارة الفعاليات، المساعدين القانونيين، ومعظم برامج الكليات الخاصة.
              </p>
              <p>
                <strong>مدة التصريح:</strong> يحصل خريجو <strong>الماجستير</strong> تلقائياً على تصريح عمل لمدة <strong>3 سنوات</strong> بغض النظر عن طول البرنامج، بشرط أن يكون 8 أشهر أو أكثر.
              </p>
            </div>

            <div className="bg-amber-50 border-s-4 border-amber-500 p-3 mb-5 text-base text-amber-900 rounded-e-lg">
              <strong>ملاحظة هامة:</strong> البرامج الدراسية التي تقل مدتها عن 8 أشهر لا تؤهل أبداً للحصول على تصريح PGWP. تأكد من توافق برنامجك مع شروط IRCC قبل التسجيل.
            </div>

            <div className="space-y-3">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-2.5 border border-gray-50 rounded-xl bg-gray-50/50"
                  >
                    <div className="shrink-0 w-10 h-10 rounded bg-white border border-gray-100 shadow-sm flex items-center justify-center text-blue-600">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-800">{step.title}</h4>
                      <p className="text-base text-gray-500 mt-0.5">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Image/Graphic */}
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/3] lg:aspect-auto lg:absolute lg:inset-0 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
                alt="طلاب في جامعة كندية" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Removed Floating Badge per user request */}
          </div>
          
        </div>
      </div>
    </section>
  );
}
