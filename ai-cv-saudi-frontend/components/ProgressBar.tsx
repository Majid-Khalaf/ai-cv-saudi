export default function ProgressBar({ currentStep }: { currentStep: number }) {
  const steps = ['رفع السيرة', 'تحليل', 'تحسين', 'تحميل']
  return (
    <div className="flex gap-3 justify-center my-6">
      {steps.map((step, i) => (
        <div key={step} className={`px-4 py-2 rounded-full font-bold ${i <= currentStep ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-600'}`}>
          {step}
        </div>
      ))}
    </div>
  )
}