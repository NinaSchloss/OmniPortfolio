import { Link } from 'react-router';
import { ArrowRight, User } from 'lucide-react';
import { FooterSection } from '../components/footer-section';

export function HomePage() {
  const caseStudies = [
    {
      id: 'lowes',
      title: "Optimizing the Lowe's Omnichannel Store Map Experience",
      description: "Bridging the physical and digital divide. A multi-phased UX research initiative that won the 2025 Webby Award.",
      link: '/lowes-case-study',
      color: 'bg-blue-600',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080'
    },
    {
      id: 'bounce-rate',
      title: "Reducing Homepage Bounce Rate",
      description: "Multi-phased research to establish trust and credibility on a product landing page.",
      link: '/reducing-bounce-rate',
      color: 'bg-purple-600',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080'
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Intro Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-8 flex items-center justify-center overflow-hidden shadow-lg">
            <User className="w-12 h-12 text-gray-500" />
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 font-light">
            Hi there, I'm <span className="font-semibold">Nina Schloss</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 leading-relaxed space-y-6">
            <p className="font-medium text-gray-800">
              Senior UX Researcher | Product Strategist
            </p>
            <p>
              I bridge the gap between human intent and digital execution within a range of industries including complex e-commerce and regulated environments. Helping teams move beyond the feature factory, I use mixed-methods research to quantify the frequency and impact of user needs. My work provides the strategic compass teams need to navigate constraints and build effortless, transformative digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6 flex-1">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-12 text-center text-gray-800">Selected Work</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {caseStudies.map((study) => (
              <Link 
                key={study.id} 
                to={study.link}
                className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 opacity-20 ${study.color}`} />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {study.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    View Case Study
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
