import { ImageWithFallback } from './figma/ImageWithFallback';
import { AlertCircle, Zap } from 'lucide-react';

export function ChallengeSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
            01. The Challenge
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">The "Why" Behind the Data</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MjQ1Nzc2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Data analytics"
              loading="lazy"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2 text-red-900">The Analytics Gap</h3>
                  <p className="text-gray-700">
                    Analytics revealed <strong>high engagement</strong> with the Lowe's Store Map but 
                    failed to capture user intent. Users frequently accessed the map <strong>before 
                    visiting the store</strong>, yet the motivation behind this pre-trip behavior remained unclear.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2 text-orange-900">The "Feature Factory" Problem</h3>
                  <p className="text-gray-700">
                    The product team faced rapid roadmap execution that risked reducing Research to a 
                    <strong> validation checkpoint</strong> rather than a <strong>strategic partner</strong> in decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
