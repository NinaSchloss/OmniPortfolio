import { Lightbulb, AlertTriangle } from 'lucide-react';

interface Recommendation {
  insight: string;
  recommendation: string;
  category: 'critical' | 'high' | 'medium';
}

interface RecommendationsSectionProps {
  phaseNumber: string;
  title: string;
  recommendations: Recommendation[];
}

export function RecommendationsSection({ phaseNumber, title, recommendations }: RecommendationsSectionProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'critical':
        return 'border-red-500 bg-red-50';
      case 'high':
        return 'border-orange-500 bg-orange-50';
      default:
        return 'border-yellow-500 bg-yellow-50';
    }
  };

  const extractTitle = (insight: string) => {
    const colonIndex = insight.indexOf(':');
    if (colonIndex !== -1) {
      return insight.substring(0, colonIndex).trim();
    }
    return 'Critical Insight';
  };

  const extractDescription = (insight: string) => {
    const colonIndex = insight.indexOf(':');
    if (colonIndex !== -1) {
      return insight.substring(colonIndex + 1).trim();
    }
    return insight;
  };

  return (
    <div className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
            {phaseNumber}
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">{title}</h2>
        </div>

        <div className="space-y-6">
          {recommendations.map((rec, index) => (
            <div key={index} className={`rounded-2xl border-l-4 ${getCategoryColor(rec.category)} p-8 bg-white shadow-md`}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <h3 className="text-xl">{extractTitle(rec.insight)}</h3>
                  </div>
                  <p className="text-gray-700">{extractDescription(rec.insight)}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-5 h-5 text-green-600" />
                    <h3 className="text-xl">Recommendation</h3>
                  </div>
                  <p className="text-gray-700">{rec.recommendation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}