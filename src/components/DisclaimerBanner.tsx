import { useState, useEffect } from "react";
import { X, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has dismissed the banner in this session
    const isDismissed = sessionStorage.getItem("disclaimerDismissed");
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem("disclaimerDismissed", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-amber-50 border-b border-amber-200 overflow-hidden relative z-50"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-start gap-3">
            <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={20} />
            <p className="text-base text-amber-800 flex-1 leading-relaxed">
              <strong>تنويه هام:</strong> هذا الموقع دليل عام غير رسمي وغير تابع لأي جهة حكومية أو غير حكومية، كندية أو مصرية. المعلومات قد تتغير، يرجى مراجعة المصادر الرسمية مثل موقع الهجرة الكندية (IRCC) أو السفارة الكندية للحصول على معلومات دقيقة ومحدثة.
            </p>
            <button 
              onClick={handleDismiss}
              className="text-amber-600 hover:text-amber-900 transition-colors p-1 rounded hover:bg-amber-100 shrink-0"
              aria-label="إغلاق التنويه"
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
