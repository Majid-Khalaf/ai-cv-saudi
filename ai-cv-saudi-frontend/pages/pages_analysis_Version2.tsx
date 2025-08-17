import { useRouter } from 'next/router'
import { useState } from 'react'
import ProgressBar from '../components/ProgressBar'

export default function Analysis() {
  const router = useRouter()
  const [improve, setImprove] = useState<null | boolean>(null)

  // افتراض بيانات تحليلية (يجب جلبها من backend فعليًا)
  const analysis = {
    summary: "محترف موارد بشرية بخبرة تزيد عن 5 سنوات...",
    strengths: ["خبرة في التوظيف", "تحليل البيانات"],
    weaknesses: ["قلة الدورات الحديثة"],
    atsScore: 70,
    atsRecommendations: ["أضف كلمات مفتاحية", "استخدم أرقامًا"],
    suggestedJobs: [
      { title: "أخصائي موارد بشرية", description: "..." },
      { title: "مشرف عمليات", description: "..." },
    ],
    salaryRange: { min: 7000, avg: 9500, max: 12000, note: "الأرقام تقديرية وقد تختلف حسب الشركة والمزايا." }
  }

  if (improve === true) {
    router.push('/improve')
    return null
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-6">
      <ProgressBar currentStep={1} />
      <h1 className="text-xl font-bold mb-4 text-blue-800">بطاقة تحليل سيرتك الذاتية</h1>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="mb-3">
          <span className="font-bold">ملخص سريع:</span> <span>{analysis.summary}</span>
        </div>
        <div className="mb-3">
          <span className="font-bold">نقاط القوة:</span>
          <ul className="list-disc pr-6">{analysis.strengths.map((s, i) => (<li key={i}>{s}</li>))}</ul>
        </div>
        <div className="mb-3">
          <span className="font-bold">نقاط الضعف:</span>
          <ul className="list-disc pr-6">{analysis.weaknesses.map((s, i) => (<li key={i}>{s}</li>))}</ul>
        </div>
        <div className="mb-3">
          <span className="font-bold">توافق ATS:</span>
          <div className="w-full bg-gray-100 rounded overflow-hidden h-5 my-2">
            <div className="bg-blue-700 h-5" style={{ width: `${analysis.atsScore}%` }}></div>
          </div>
          <span className="font-bold">{analysis.atsScore}/100</span>
          <ul className="list-disc pr-6">{analysis.atsRecommendations.map((r, i) => (<li key={i}>{r}</li>))}</ul>
        </div>
        <div className="mb-3">
          <span className="font-bold">الوظائف المناسبة بالسعودية:</span>
          <ul className="list-disc pr-6">{analysis.suggestedJobs.map((j, i) => (<li key={i}><span className="font-bold">{j.title}</span>: {j.description}</li>))}</ul>
        </div>
        <div className="mb-3">
          <span className="font-bold">نطاق الرواتب المتوقع (ريال سعودي):</span>
          <div className="pr-6">
            <span className="font-bold">من:</span> {analysis.salaryRange.min} &nbsp;
            <span className="font-bold">متوسط:</span> {analysis.salaryRange.avg} &nbsp;
            <span className="font-bold">إلى:</span> {analysis.salaryRange.max}
          </div>
          <div className="text-xs text-gray-600">{analysis.salaryRange.note}</div>
        </div>
      </div>
      <div className="text-center my-6">
        <div className="font-bold mb-4 text-lg">هل ترغب أن نعيد صياغة سيرتك ونحسّنها لك؟</div>
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-8 rounded mx-2" onClick={() => setImprove(true)}>نعم</button>
        <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-8 rounded mx-2" onClick={() => setImprove(false)}>لاحقًا</button>
      </div>
    </main>
  )
}