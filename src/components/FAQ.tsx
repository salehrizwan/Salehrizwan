import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "For custom website development, the timeline is two to three weeks."
  },
  {
    question: "Do you build E-commerce or 3D websites?",
    answer: "Yes, we can build e-commerce websites. If you need a 3D website, we can build that for you as well, but please note there are separate charges for this specialized service."
  },
  {
    question: "What happens if I need updates after the website is launched?",
    answer: "If you require updates to your website after it has been launched, we charge for those services. The first update will be provided free of charge, but subsequent updates will incur a fee."
  },
  {
    question: "What if I want design changes after the website is uploaded?",
    answer: "If you wish to make changes to a website after it has been uploaded and you are unsatisfied with the design, we will charge for the modifications."
  },
  {
    question: "What are the payment terms?",
    answer: "For project commencement, a 50% payment is required upfront. The remaining balance is due upon project completion and presentation."
  },
  {
    question: "Do you redesign existing websites?",
    answer: "Yes, redesigns are a big part of what I do. I can take your outdated website and transform it into a modern, fast, and high-converting platform while preserving your existing SEO value."
  },
  {
    question: "Will my website rank on Google?",
    answer: "Yes. All websites I build include a strong technical SEO foundation: blazing-fast loading speeds, clean semantic HTML, mobile responsiveness, proper meta tags, and Google Search Console setup."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-500">
            Everything you need to know about the process and working with me.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              key={index} 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:border-brand-orange/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-lg text-brand-black pr-8">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-orange-50 text-brand-orange' : 'text-gray-400'}`}>
                  <ChevronDown size={18} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed pt-2 border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
