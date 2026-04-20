import { Rocket, TrendingUp, Target } from 'lucide-react';

export function FeatureFactorySection() {
  const initiatives = [
    {
      icon: TrendingUp,
      title: 'Macro-Research',
      description: 'Leveraged Mintel, Forrester, and other market research sources to identify broader omnichannel retail trends.'
    },
    {
      icon: Target,
      title: 'Competitive Benchmarking',
      description: 'Evaluated direct and indirect competitors to identify opportunities and audited the current Lowe\'s experience.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm mb-4">
            05. Overcoming the "Feature Factory"
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">Strategic Research Leadership</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            To move beyond reactive testing, a zero-budget continuous discovery initiative was launched
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {initiatives.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Result */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-10 text-center">
          <Rocket className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-3xl mb-4">Result</h3>
          <p className="text-xl text-green-50 max-w-4xl mx-auto">
            This proactive audit enabled Research to <strong>lead the roadmap rather than follow it</strong>, 
            providing Product with a pre-vetted backlog of experience enhancements.
          </p>
        </div>
      </div>
    </section>
  );
}
