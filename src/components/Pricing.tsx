import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: "Beginner",
    description: "Perfect for individuals and small businesses",
    price: "PKR 25k",
    priceSuffix: "(USD $99)",
    features: [
      "Up to 2 Pages",
      "Mobile Responsive",
      "Contact Form",
      "WhatsApp Integration",
      "Basic SEO Setup",
      "Fast Loading",
      "7 Days Free Support"
    ],
    popular: false
  },
  {
    name: "Startup",
    description: "Perfect for growing businesses",
    price: "PKR 40k",
    priceSuffix: "(USD $159)",
    features: [
      "Up to 5 Pages",
      "Premium Design",
      "Mobile Responsive",
      "Google Indexing",
      "Basic Speed Optimization",
      "WhatsApp Integration",
      "Contact Forms",
      "30 Days Free Support"
    ],
    popular: true
  },
  {
    name: "Business",
    description: "Best for established businesses",
    price: "PKR 60k",
    priceSuffix: "(USD $299)",
    features: [
      "Up to 10 Pages",
      "Custom UI/UX Design",
      "Advanced SEO Setup",
      "Blog or Portfolio",
      "Booking / Inquiry Forms",
      "Google Maps Integration",
      "Performance Optimization",
      "45 Days Support"
    ],
    popular: false
  },
  {
    name: "Pro",
    description: "For premium brands and growing companies",
    price: "PKR 100k+",
    priceSuffix: "(From $599)",
    features: [
      "Fully Custom Design",
      "Unlimited Pages",
      "Advanced Animations",
      "Admin Dashboard (if required)",
      "API Integrations",
      "Priority Development",
      "60 Days Priority Support"
    ],
    popular: false
  },
  {
    name: "Enterprise",
    description: "Tailored solutions for large businesses",
    price: "Custom",
    priceSuffix: "Quote",
    features: [
      "SaaS Platforms",
      "AI Integrations",
      "Multi-language Support",
      "Business Automation",
      "Complex Dashboards",
      "Dedicated Project Planning",
      "Long-term Maintenance"
    ],
    popular: false
  }
];

const maintenancePlans = [
  { name: "Standard", price: "$25" },
  { name: "Business", price: "$50" },
  { name: "Premium", price: "$75" }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">Transparent Pricing</h2>
          <p className="text-xl text-gray-500 font-inter">
            Premium investments for premium returns. Select the tier that fits your goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-24">
          {packages.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-white flex flex-col rounded-3xl p-8 border ${plan.popular ? 'border-brand-orange shadow-xl relative lg:-translate-y-2 z-10' : 'border-gray-100 shadow-sm'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-brand-black mb-2">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-6 h-10">{plan.description}</p>
              <div className="text-4xl font-bold text-brand-black mb-8 font-inter tracking-tight flex items-end gap-1">
                {plan.price}
                {plan.priceSuffix && <span className="text-base text-gray-400 font-normal pb-1">{plan.priceSuffix}</span>}
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <Check size={20} className="text-brand-orange shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`block w-full py-4 text-center rounded-xl font-bold transition-colors mt-auto ${
                  plan.popular 
                    ? 'bg-brand-orange text-white hover:bg-orange-600' 
                    : 'bg-gray-50 text-brand-black hover:bg-gray-200 border border-gray-200'
                }`}
              >
                Request Quote
              </a>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm text-center">
          <h3 className="text-2xl font-bold text-brand-black mb-4">Maintenance & Retainer Plans</h3>
          <p className="text-gray-500 mb-8">Ongoing support to keep your website fast, secure, and up to date.</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {maintenancePlans.map((plan, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="text-lg font-bold text-brand-black mb-2">{plan.name}</div>
                <div className="text-3xl font-black text-brand-orange">{plan.price}<span className="text-sm text-gray-400 font-medium">/mo</span></div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-12">
            <h3 className="text-2xl font-bold text-brand-black mb-4">Need something custom?</h3>
            <p className="text-gray-500 mb-6">If your project doesn't fit into these packages, we can build a personalized solution.</p>
            <a href="#contact" className="inline-block bg-brand-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg">
              Contact me for a personalized quote
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
