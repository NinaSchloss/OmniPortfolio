import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/875d1543ccd466d0cb54f4927a011af45218cc81.png';

export function HeroSection() {
  const methodologies = [
    'Remote Moderated and In-Person Usability Testing',
    'Contextual Inquiry',
    'User Surveys',
    'Macro Research',
    'Competitive Benchmarking',
    'Heuristic Analysis'
  ];

  return (
    <section aria-label="Hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={heroImage}
          alt="Lowe's store interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex-1 flex flex-col justify-center">
        <div className="inline-block mb-6 px-4 py-2 bg-blue-600/90 backdrop-blur-sm rounded-full text-sm mx-auto">
          Senior UX Researcher
        </div>
        <h1 className="text-5xl md:text-7xl mb-6">
          Bridging the Physical and Digital Divide
        </h1>
        <p className="text-2xl md:text-3xl mb-8 text-gray-200">
          Optimizing the Lowe's Omnichannel Store Map Experience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            <span>Lowe's Mobile App & Web (Store Mode)</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            <span>2025 Webby Award Winner</span>
          </div>
        </div>
      </div>

      {/* Methodologies */}
      <div className="relative z-10 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-white text-center text-xl mb-6">Methodologies Used</h3>
          <div className="flex flex-wrap justify-center items-center gap-3 text-white/90">
            {methodologies.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-sm md:text-base">{item}</span>
                {index < methodologies.length - 1 && (
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}