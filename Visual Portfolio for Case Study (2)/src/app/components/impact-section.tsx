import { Award, TrendingUp, Target, Lightbulb } from 'lucide-react';

export function ImpactSection() {
  const impacts = [
    {
      icon: Award,
      label: 'Awards (Store Mode)',
      description: '2025 Webby Award Winner & 2025 Modern Retail Award Finalist'
    },
    {
      icon: TrendingUp,
      label: 'Product Impact',
      description: 'Informed App experience and Web MVP launch'
    },
    {
      icon: Target,
      label: 'Strategic Pivot',
      description: 'Pivoted product roadmaps toward high-value features'
    },
    {
      icon: Lightbulb,
      label: 'Analytics',
      description: 'Resolved critical "blind spots" in user analytics'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16">Project Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3">{item.label}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}