import Head from 'next/head'
import UploadForm from '../components/UploadForm'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import PrivacyNotice from '../components/PrivacyNotice'

export default function Home() {
  return (
    <>
      <Head>
        <title>حلّل سيرتك وطوّرها خلال دقائق — للسوق السعودي</title>
        <meta name="description" content="حلّل سيرتك الذاتية واحصل على تحليل شامل وتحسين احترافي متوافق مع السوق السعودي وأنظمة ATS." />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-6">
        <section className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-3 text-blue-800">حلّل سيرتك وطوّرها خلال دقائق — للسوق السعودي</h1>
          <p className="mb-4 text-lg">حمّل سيرتك الذاتية، واستلم تحليلاً دقيقًا مع تحسينات واقعية وفرص مناسبة في سوق العمل السعودي.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 mb-8">
            <div className="bg-blue-50 rounded-lg px-6 py-3 shadow w-full md:w-1/3">
              <p className="font-bold">تحليل واقتراحات قابلة للتنفيذ</p>
            </div>
            <div className="bg-blue-50 rounded-lg px-6 py-3 shadow w-full md:w-1/3">
              <p className="font-bold">قوالب متوافقة مع ATS</p>
            </div>
            <div className="bg-blue-50 rounded-lg px-6 py-3 shadow w-full md:w-1/3">
              <p className="font-bold">تقدير راتب واقعي للسوق السعودي</p>
            </div>
          </div>
          <a href="#upload" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition">ابدأ التحليل الآن</a>
        </section>

        <section id="upload" className="mb-10">
          <UploadForm />
        </section>

        <HowItWorks />

        <Testimonials />

        <FAQ />
      </main>
      <PrivacyNotice />
    </>
  )
}