import { useState } from 'react'
import ProgressBar from '../components/ProgressBar'

export default function Improve() {
  const [lang, setLang] = useState('both')
  const [template, setTemplate] = useState('simple')
  const [coverLetter, setCoverLetter] = useState(true)
  const [loading, setLoading] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)

  const handleConfirm = async () => {
    setLoading(true)
    // ارسال الخيارات إلى backend (هنا إرسال بيانات تجريبية)
    setTimeout(() => {
      setDownloadUrl('/outputs/CV_YourName_2025-08-17.zip')
      setLoading(false)
    }, 2000)
  }

  return (
    <main className="max-w-xl mx-auto px-4 py-6">
      <ProgressBar currentStep={2} />
      <h1 className="text-xl font-bold mb-3 text-blue-800">خيارات تحسين السيرة الذاتية</h1>
      <form className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="mb-4">
          <label className="block font-bold mb-2">لغة السيرة</label>
          <select value={lang} onChange={e => setLang(e.target.value)} className="border rounded px-2 py-1 w-full">
            <option value="ar">العربية فقط</option>
            <option value="en">الإنجليزية فقط</option>
            <option value="both">العربية + الإنجليزية</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">قالب التصميم</label>
          <select value={template} onChange={e => setTemplate(e.target.value)} className="border rounded px-2 py-1 w-full">
            <option value="simple">بسيط</option>
            <option value="professional">احترافي</option>
            <option value="modern">حديث</option>
          </select>
        </div>
        <div className="mb-4 flex items-center">
          <input id="coverLetter" type="checkbox" checked={coverLetter} onChange={e => setCoverLetter(e.target.checked)} className="ml-2" />
          <label htmlFor="coverLetter">إضافة Cover Letter (رسالة تعريفية)</label>
        </div>
        <button type="button" onClick={handleConfirm} disabled={loading} className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-8 rounded mt-3 w-full">
          {loading ? "يتم الآن تجهيز الملفات..." : "إنشاء وتحميل الملفات"}
        </button>
      </form>
      {downloadUrl && (
        <div className="text-center">
          <a href={downloadUrl} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-8 rounded" download>
            تحميل كل الملفات كـ ZIP
          </a>
        </div>
      )}
    </main>
  )
}