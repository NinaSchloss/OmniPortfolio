import { Users, FileSearch, CheckCircle, ArrowRight, AlertTriangle, Lightbulb } from 'lucide-react';
import { useState } from 'react';

interface Finding {
  title: string;
  description: string;
}

interface Recommendation {
  insight: string;
  recommendation: string;
  category: 'critical' | 'high' | 'medium';
}

interface ResearchPhaseProps {
  phaseNumber: string;
  title: string;
  goal: string;
  methodology: string[];
  findings: Finding[];
  recommendations?: Recommendation[];
  screenshots?: string[];
  outcome?: string;
  bgColor?: string;
  accentColor?: string;
}

export function ResearchPhase({
  phaseNumber,
  title,
  goal,
  methodology,
  findings,
  recommendations,
  screenshots,
  outcome,
  bgColor = 'bg-white',
  accentColor = 'bg-blue-600'
}: ResearchPhaseProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'critical':
        return 'border-red-500 bg-red-50';
      case 'high':
        return 'border-orange-500 bg-orange-50';
      default:
        return 'border-orange-500 bg-red-50';
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

  const getInsightIcon = (title: string) => {
    // Use checkmark for "Visual Display" insight
    if (title.toLowerCase().includes('visual display')) {
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    }
    return <AlertTriangle className="w-5 h-5 text-red-600" />;
  };

  const getCardBorderColor = (title: string) => {
    // Use green border for "Visual Display" insight
    if (title.toLowerCase().includes('visual display')) {
      return 'border-green-500 bg-red-50';
    }
    return null; // Will use default category color
  };

  return (
    <section className={`py-20 px-6 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
            {phaseNumber}
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">{title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Goal */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className={`w-12 h-12 ${accentColor} rounded-xl flex items-center justify-center mb-4`}>
              <FileSearch className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl mb-3">Goal</h3>
            <p className="text-gray-700">{goal}</p>
          </div>

          {/* Methodology */}
          <div className="bg-white rounded-2xl p-8 shadow-lg md:col-span-2">
            <div className={`w-12 h-12 ${accentColor} rounded-xl flex items-center justify-center mb-4`}>
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl mb-4">Methodology</h3>
            <ul className="space-y-2">
              {methodology.map((method, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{method}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Findings */}
        {findings.length > 0 && (
          <div className="mb-12">
            <h3 className="text-3xl mb-6">Key Findings</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {findings.map((finding, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <h4 className="text-xl mb-3">{finding.title}</h4>
                  <p className="text-gray-700">{finding.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Screenshots */}
        {screenshots && screenshots.length > 0 && (
          <div className="mb-6">
            <div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto">
              {screenshots.map((screenshot, index) => (
                <div 
                  key={index} 
                  className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedImage(screenshot)}
                >
                  <img src={screenshot} alt={`Screenshot ${index + 1}`} loading="lazy" className="w-full h-auto" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommendations */}
        {recommendations && recommendations.length > 0 && (
          <div className="mb-12">
            <h3 className="text-3xl mb-6">Critical Insights & Recommendations</h3>
            <div className="space-y-4">
              {recommendations.map((rec, index) => {
                const title = extractTitle(rec.insight);
                const description = extractDescription(rec.insight);
                const icon = getInsightIcon(title);
                const cardBorderColor = getCardBorderColor(title);
                return (
                  <div key={index} className={`rounded-2xl border-l-4 ${cardBorderColor || getCategoryColor(rec.category)} p-6 bg-white shadow-md`}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          {icon}
                          <h4 className="text-xl">{title}</h4>
                        </div>
                        <p className="text-gray-700">{description}</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Lightbulb className="w-5 h-5 text-green-600" />
                          <h4 className="text-xl">Recommendation</h4>
                        </div>
                        <p className="text-gray-700">{rec.recommendation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Strategic Outcome */}
        {outcome && (
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <div className="flex items-start gap-4">
              <ArrowRight className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl mb-3">Strategic Impact</h3>
                <p className="text-lg text-green-50">{outcome}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              className="absolute -top-12 right-0 text-white text-lg hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ✕ Close
            </button>
            <img 
              src={selectedImage} 
              alt="Full size screenshot" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}