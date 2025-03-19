import {
  ConversionButton,
  ConversionOutlineButton,
} from "@/components/app/ConversionButton";
import { FaqQuestion } from "@/components/FaqQuestion";
import { Metadata } from "next";
import { BsCheck, BsChevronDown } from "react-icons/bs";

export const metadata: Metadata = {
  metadataBase: new URL("https://beyonders.com.br"),
  title: "Custom E-Learning Platform Development - Beyonders",
  description:
    "Build your own custom e-learning platform — fully tailored design, unlimited students, course management, payment integration, and advanced analytics. Scalable solutions from just $280/month. Request your quote today!",
  openGraph: {
    type: "website",
    title: "Custom E-Learning Platform Development - Beyonders",
    description:
      "Build your own custom e-learning platform — fully tailored design, unlimited students, course management, payment integration, and advanced analytics. Scalable solutions from just $280/month. Request your quote today!",
    images: ["/e-learning/banner.webp"],
  },
};

export default function ELearningPage() {
  return (
    <div className="font-poppins flex flex-col min-h-screen bg-main-black text-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 pt-32 md:py-32 md:pt-48 lg:py-40 lg:pt-52 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <video
            className="object-cover w-full h-full"
            autoPlay
            muted
            controls={false}
            loop
            preload="auto"
            playsInline
          >
            <source src="/e-learning/e-learning.mp4" type="video/mp4" />
            <p>
              Sorry, Your Browser Doesn&pos;t Support Embedded Videos.
              Here&apos;s the{" "}
              <a href="/e-learning/e-learning.mp4">Link to the video</a>
            </p>
          </video>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            <div className="text-green-500 font-medium mb-2">GO BEYOND</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Build Your Own E-Learning Platform —
              <span className="text-green-500">
                {" "}
                Custom, Scalable, and Affordable
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
              No templates. No limits. We craft platforms tailored to your
              content, with custom design, analytics, and full ownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <ConversionButton additionalClassName="bg-green-500 hover:bg-green-900 text-black font-medium px-8 py-4">
                Get a Custom Quote
              </ConversionButton>
              <ConversionOutlineButton additionalClassName="border-green-500 text-green-500 hover:bg-green-500/10 font-medium px-8 py-4">
                Start for $280/month
              </ConversionOutlineButton>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="w-full py-16 bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Still using generic platforms that limit your creativity?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Lack of flexibility to customize design & user experience",
                "High transaction fees and vendor lock-in",
                "Limited reporting and analytics for student progress",
                "No control over scaling or integrations",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-green-500/20 p-2 rounded-full">
                    <BsChevronDown className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="text-gray-300">{point}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-xl italic text-gray-300">
                It&apos;s time to own your platform — designed for{" "}
                <span className="text-green-500">your</span> content,{" "}
                <span className="text-green-500">your</span> students, and{" "}
                <span className="text-green-500">your</span> growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Launch & Grow Your Online Course Business
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Custom Design (UI/UX tailored to your brand)",
              "Course Management (modules, lessons, videos, PDFs)",
              "Quizzes & Assessments",
              "Gamification (badges, progress tracking, leaderboards)",
              "Student Management Dashboard",
              "Secure User Registration & Login",
              "Integrated Payment Gateways (Stripe, PayPal, Pix)",
              "Subscription & Membership models",
              "Drip content scheduling",
              "Email notifications (course progress, reminders)",
              "Responsive for desktop, tablet & mobile",
              "Multi-language support (optional)",
              "Live Class Integration (Zoom / Google Meet)",
              "Blog & content marketing area (optional)",
              "Advanced Analytics Dashboard (engagement, revenue, student progress)",
              "API integrations (CRM, newsletter tools, Zapier)",
              "SEO-friendly structure",
              "Video hosting integration (YouTube, Vimeo, or private hosting)",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-zinc-900/50"
              >
                <BsCheck className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400">
              No hidden fees. You own your platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-zinc-800 border-green-500/20 overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-green-500 text-black font-bold py-1 px-3 rounded-bl-lg">
                44% OFF
              </div>
              <div className="p-0">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Start Small</h3>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-4xl font-bold text-green-500">
                      $280
                    </span>
                    <span className="text-gray-400">/month</span>
                    <span className="text-gray-500 line-through text-lg">
                      $500
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6">
                    1 course, unlimited students, all features, custom design,
                    hosted and managed by us. Cancel anytime.
                  </p>
                  <ConversionButton additionalClassName="w-full bg-green-500 hover:bg-green-600 text-black">
                    Start for only $280/month
                  </ConversionButton>
                </div>
                <div className="bg-zinc-900 p-6 border-t border-zinc-700">
                  <div className="flex items-start gap-3 mb-3">
                    <BsCheck className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>
                      Continuous support, updates, and performance monitoring
                      for 3 months free
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-zinc-800 border-green-500/20 overflow-hidden">
              <div className="p-0">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Own It Forever</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-green-500">
                      $3000
                    </span>
                    <span className="text-gray-400"> flat rate</span>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Complete platform ownership, custom-built for your business,
                    no monthly fees, delivered in 30 days.
                  </p>
                  <ConversionButton additionalClassName="w-full border-green-500 text-green-500 hover:bg-green-500/10">
                    Request a Demo
                  </ConversionButton>
                </div>
                <div className="bg-zinc-900 p-6 border-t border-zinc-700">
                  <div className="flex items-start gap-3 mb-3">
                    <BsCheck className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>
                      Continuous support, updates, and performance monitoring
                      for 3 months free
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="w-full py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Case Study</h2>
            <p className="text-xl italic">
              &quot;We helped{" "}
              <a href="https://da2x.com.br" target="_blank" rel="noreferrer">
                {" "}
                <span className="text-green-500">Matheus from DA2X</span>
              </a>{" "}
              launch their custom course platform and reach 100+ active students
              in just 6 months.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Why Beyonders Section */}
      <section className="w-full py-20 bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Beyonders?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "💻",
                title: "Experts in scalable, custom e-learning platforms",
              },
              {
                icon: "⚡",
                title: "Fast delivery without sacrificing quality",
              },
              {
                icon: "🤝",
                title: "Transparent pricing, milestone-based delivery",
              },
              {
                icon: "🔎",
                title: "Post-launch monitoring & continuous optimization",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-medium">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto tracking-widest flex flex-col gap-6 divide-y-[1px] divide-black-tertiary">
            {[
              {
                question:
                  "How long does it take to build a custom e-learning platform?",
                answer:
                  "Our standard delivery time is 30 days, depending on features.",
              },
              {
                question: "Can I integrate my preferred payment system?",
                answer:
                  "Yes. We support Stripe, PayPal, and local payment gateways.",
              },
              {
                question: "Can I migrate from another platform?",
                answer:
                  "Yes. We offer migration assistance from platforms like Teachable, Kajabi, or Thinkific.",
              },
              {
                question: "What's included in the $280/month plan?",
                answer:
                  "Custom design, unlimited students, analytics, secure hosting, and support — for one course.",
              },
              {
                question: "What if I need more than one course?",
                answer:
                  "We'll create a custom quote or upgrade your subscription as your platform grows.",
              },
            ].map((faq, index) => (
              <div key={index}>
                <FaqQuestion
                  key={index}
                  title={faq.question}
                  answer={[faq.answer]}
                />
                <div className="sr-only">
                  <h4>{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Start building your own custom learning platform today.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ConversionButton additionalClassName="bg-green-500 hover:bg-green-600 text-black font-medium px-8 py-4">
                Start for $280/month
              </ConversionButton>
              <ConversionOutlineButton additionalClassName="border-green-500 text-green-500 hover:bg-green-500/10 font-medium px-8 py-4">
                Request a Custom Quote
              </ConversionOutlineButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
