import { motion } from 'motion/react';
import { Star, Quote, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: "James Thompson",
    country: "United States",
    text: "Saleh delivered an exceptional website that exceeded my expectations. His attention to detail and design aesthetic really set our brand apart. The entire process was seamless and professional.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    country: "Spain",
    text: "Working with Saleh was a fantastic experience. He understood exactly what we needed and created a site that is not only beautiful but also incredibly fast. Highly recommended!",
    rating: 5
  },
  {
    name: "David Chen",
    country: "Australia",
    text: "I'm blown away by the quality of the frontend work. The animations and transitions are so smooth, and our conversion rates have noticeably increased since the launch.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    country: "United Kingdom",
    text: "A true professional. Saleh was highly responsive and communicative throughout the project. The final result is a premium, SEO-optimized website that perfectly represents our vision.",
    rating: 5
  },
  {
    name: "Omar Al-Fayed",
    country: "United Arab Emirates",
    text: "Saleh's expertise in UI/UX design is evident in every pixel. He took our outdated site and transformed it into a modern, user-friendly platform. It's been a game-changer for us.",
    rating: 5
  },
  {
    name: "Mia Fischer",
    country: "Germany",
    text: "Very impressed with the speed and efficiency of Saleh's work. He made sure the website was fully responsive across all devices and delivered everything ahead of schedule.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-sm font-bold tracking-widest text-brand-orange uppercase mb-4">Client Success Stories</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 tracking-tight">
            Trusted Worldwide
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what business owners have to say about their experience working with me.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
              <CheckCircle size={16} className="text-green-500" />
              <span className="text-sm font-semibold text-brand-black">100% Verified Reviews</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-brand-black">5.0 Average Rating</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 relative group hover:border-brand-orange/30 transition-colors shadow-sm hover:shadow-md flex flex-col md:flex-row gap-6 md:gap-8 items-start"
            >
              <div className="flex-shrink-0 flex items-center gap-4 md:w-64 md:border-r border-gray-200 md:pr-6">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-black text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{testimonial.country}</p>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-400 italic">
            Testimonials shown here represent recent client feedback and will continue to grow as new projects are completed.
          </p>
        </div>
      </div>
    </section>
  );
}
