import { ResearchPhase } from '../components/research-phase';

// Overriding HeroSection for reuse requires a custom implementation here or modifying the original.
// Since we want to keep the original content intact without breaking the Lowe's page, 
// we will build a tailored Hero and Challenge for this page using the same Tailwind classes.
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AlertCircle, Zap, Mail, Phone, Linkedin } from 'lucide-react';

export function BounceRateCaseStudy() {
  const methodologies = [
    'Split Usability Testing',
    '5-Second Testing',
    'Unmoderated Interviews',
    'Thematic Analysis',
    'Competitor Benchmarking'
  ];

  return (
    <main className="size-full">
      {/* Custom Hero Section */}
      <section aria-label="Hero" className="relative min-h-screen flex flex-col overflow-hidden bg-purple-900">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920"
            alt="UX Research Analytics"
            loading="lazy"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-purple-900/60 to-purple-950/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex-1 flex flex-col justify-center">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-600/90 backdrop-blur-sm rounded-full text-sm mx-auto">
            UX Researcher
          </div>
          <h1 className="text-5xl md:text-7xl mb-6">
            Reducing Homepage Bounce Rate
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-purple-200">
            Multi-phased research to establish trust and credibility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg text-purple-100">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
              <span>Product Site 'X'</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-white text-center text-xl mb-6">Methodologies Used</h3>
            <div className="flex flex-wrap justify-center items-center gap-3 text-white/90">
              {methodologies.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-sm md:text-base">{item}</span>
                  {index < methodologies.length - 1 && (
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm mb-4">
              01. The Challenge
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">Alarmingly High Bounce Rate</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080"
                alt="Product Analytics"
                loading="lazy"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2 text-red-900">The Problem</h3>
                    <p className="text-gray-700">
                      Product Site 'X' utilizes a state-of-the-art API to construct products in a creative, personalized way. However, Analytics raised a concern about an <strong>alarmingly high bounce rate upon landing</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2 text-orange-900">The Paradox</h3>
                    <p className="text-gray-700">
                      The site's performance was excellent and its function was clear. The layout was clean and had plenty of whitespace. If the audience was highly qualified and the site functioned flawlessly, <strong>what more did users need?</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Phase 1: Split Usability Test */}
      <ResearchPhase
        phaseNumber="02. Research Phase I"
        title="Competitor Benchmarking"
        goal="Determine what aspects contribute to a more trustworthy and credible first impression in the industry."
        methodology={[
          "Split usability test of Product Site 'X' against competitor site 'Y'",
          "Participants were given a scenario and presented with self-guided tasks",
          "Ranked the site on a 3-pt scale on trustworthiness and credibility"
        ]}
        findings={[
          {
            title: 'Credibility Impact of Whitespace',
            description: 'Lack of content & imagery and excessive white space/simplicity on site \'X\' left participants feeling it was a "work in progress," resulting in lower levels of credibility.'
          },
          {
            title: 'Trust vs. Security',
            description: 'Nearly half of participants indicated they did not trust site \'X\' despite it having a secured URL and privacy statement. Meanwhile, transparency into pricing and customer support made competitor \'Y\' feel trustworthy.'
          }
        ]}
        recommendations={[
          {
            insight: 'Missing Context: Site \'X\' needed to make it clear that it is non-transactional (a launching pad for partner retailers), and it needed content to feel more legitimate.',
            recommendation: 'Incorporate partner retailers\' logos onto the landing page to evoke trust by leveraging the brand power of familiar partners.',
            category: 'critical'
          }
        ]}
        bgColor="bg-purple-50"
        accentColor="bg-purple-600"
      />

      {/* Research Phase 2: 5-Second Test */}
      <ResearchPhase
        phaseNumber="03. Research Phase II"
        title="5-Second Flash Test"
        goal="Evaluate whether incorporating partner logos on the homepage evokes feelings of trust and credibility before users bounce."
        methodology={[
          "5-second test to determine flash judgments of credibility",
          "Two groups: control (without logos) and experimental (with logos)",
          "Followed by ranking the site on trust and describing recall"
        ]}
        findings={[
          {
            title: 'Effective Trust Building',
            description: 'Incorporating the logos effectively established trust and credibility in first impressions. Participants in the logos group latched on to the "trusted partners" in their explanations.'
          }
        ]}
        outcome="The hypothesis was validated: Partner logos served as an immediate credibility anchor, providing a quick, low-effort implementation to reduce initial bounce rates."
        bgColor="bg-white"
        accentColor="bg-indigo-600"
      />

      {/* Research Phase 3: Generative Interviews */}
      <ResearchPhase
        phaseNumber="04. Research Phase III"
        title="Generative Content Strategy"
        goal="Utilize themes derived from user interviews to develop a robust content strategy for the homepage to increase time spent on page."
        methodology={[
          "Unmoderated interviews on the target audience",
          "Evaluated prompts seeking the product, purchase process, and post-purchase next steps",
          "Thematic analysis to identify key themes throughout the user journey"
        ]}
        findings={[
          {
            title: 'Journey Mapping',
            description: 'Identified critical themes important to the user before, during, and after the purchase process that were previously missing from the site\'s clean but sparse layout.'
          }
        ]}
        outcome="Insights guided a new content strategy to encourage purchase and inform users of various uses and benefits, providing the necessary 'texture' to keep users engaged beyond the initial landing."
        bgColor="bg-gray-50"
        accentColor="bg-blue-600"
      />

      {/* Reused Footer Section (Since it contains general project info, we'll keep it or create a simplified one) */}
      <footer className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400">
              © 2026 Nina Schloss UX Research Portfolio
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-center text-gray-400">
              <a href="tel:2406146357" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>240-614-6357</span>
              </a>
              <a href="mailto:nina.n.schloss@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>nina.n.schloss@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/ninaschloss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
