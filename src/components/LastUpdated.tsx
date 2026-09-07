import { Calendar } from "lucide-react";

export default function LastUpdated({ date = "سبتمبر 2026" }: { date?: string }) {
  return (
    <div className="flex items-center gap-1.5 text-sm text-gray-500 bg-gray-50/80 px-2 py-1 rounded-md w-fit border border-gray-100">
      <Calendar size={20} />
      <span>آخر تحديث: {date}</span>
    </div>
  );
}
