import { useRef, useState } from 'react'
import { useRouter } from 'next/router'

export default function UploadForm() {
  const fileInput = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!fileInput.current?.files?.length) {
      setError('يرجى رفع ملف السيرة الذاتية.')
      return
    }
    const file = fileInput.current.files[0]
    const allowed = ['application/pdf', 'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain', 'application/rtf'
    ]
    if (!allowed.includes(file.type)) {
      setError('صيغة الملف غير مدعومة. الرجاء رفع ملف PDF أو DOCX أو DOC أو RTF أو TXT.')
      return
    }
    // يمكن هنا رفع الملف للـ backend
    router.push('/analysis')
  }

  return (
    <form className="bg-white shadow rounded-lg p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <label className="block font-bold mb-2">ارفع سيرتك الذاتية (PDF, DOCX, DOC, RTF, TXT)</label>
        <input ref={fileInput} type="file" accept=".pdf,.docx,.doc,.rtf,.txt" className="block w-full" />
      </div>
      <div className="flex gap-4 flex-wrap">
        <div className="flex-1 min-w-[160px]">
          <label className="block mb-1">المسمّى الوظيفي المستهدف (اختياري)</label>
          <input type="text" className="w-full border rounded px-2 py-1" placeholder="مثال: أخصائي موارد بشرية" />
        </div>
        <div className="flex-1 min-w-[110px]">
          <label className="block mb-1">المدينة (اختياري)</label>
          <input type="text" className="w-full border rounded px-2 py-1" placeholder="الرياض" />
        </div>
        <div className="flex-1 min-w-[90px]">
          <label className="block mb-1">سنوات الخبرة (اختياري)</label>
          <input type="number" min="0" className="w-full border rounded px-2 py-1" placeholder="5" />
        </div>
        <div className="flex-1 min-w-[110px]">
          <label className="block mb-1">الراتب الحالي/المتوقع (اختياري)</label>
          <input type="number" min="0" className="w-full border rounded px-2 py-1" placeholder="7500" />
        </div>
      </div>
      {error && <div className="text-red-600 font-bold">{error}</div>}
      <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-8 rounded mt-3">حلّل سيرتي الآن</button>
    </form>
  )
}