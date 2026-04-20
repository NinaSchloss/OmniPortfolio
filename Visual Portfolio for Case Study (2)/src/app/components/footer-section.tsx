import { Award, Mail, Linkedin, Globe } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-3xl mb-6">About This Project</h3>
            <p className="text-gray-300 text-lg mb-6">
              This UX research case study demonstrates strategic research leadership in optimizing 
              omnichannel retail experiences for Lowe's Store Mode, resulting in award-winning product innovation.
            </p>
            <div className="flex items-center gap-3 text-gray-300">
              <Award className="w-6 h-6 text-yellow-400" />
              <span className="text-lg">2025 Webby Award Winner & 2025 Modern Retail Award Finalist</span>
            </div>
          </div>

          <div>
            <h3 className="text-3xl mb-6">Key Outcomes</h3>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 flex-shrink-0" />
                <span>Informed App experience and Web MVP launch</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 flex-shrink-0" />
                <span>Pivoted product roadmaps toward high-value feature integration</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 flex-shrink-0" />
                <span>Resolved critical "blind spots" in user analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 flex-shrink-0" />
                <span>Led strategic research initiatives beyond reactive testing</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2026 UX Research Portfolio - Lowe's Omnichannel Case Study
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}