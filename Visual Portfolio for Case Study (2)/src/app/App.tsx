import { HeroSection } from './components/hero-section';
import { ImpactSection } from './components/impact-section';
import { ChallengeSection } from './components/challenge-section';
import { ResearchPhase } from './components/research-phase';
import { FeatureFactorySection } from './components/feature-factory-section';
import { FooterSection } from './components/footer-section';

import screenshot1 from 'figma:asset/07aa26b8022de05fb9ea26852bba5657ffefef2a.png';
import screenshot2 from 'figma:asset/8c7b0e4416b74977592ccbba3454ee2acfbb25b2.png';
import screenshot3 from 'figma:asset/36d3fe5a1f649ff4926e3febab97ebf1ca21fdd1.png';
import prototypeImage1 from 'figma:asset/a3c3b9f00193b302b5389d208b9590d203514db0.png';
import prototypeImage2 from 'figma:asset/998f61ac814bd928a6872ef7508e8076b8f56a26.png';

export default function App() {
  return (
    <main className="size-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Impact Section */}
      <ImpactSection />

      {/* Challenge Section */}
      <ChallengeSection />

      {/* Research Phase I: App Discovery */}
      <ResearchPhase
        phaseNumber="02. Research Phase I"
        title="App Discovery"
        goal="Understand DIYers' mental models around map utility, trip planning versus in-store navigation, and identify friction points."
        methodology={[
          'Contextual Inquiry (Retrospective) with 6 DIY customers',
          'Large-scale survey to quantify use patterns among store map users'
        ]}
        findings={[
          {
            title: 'The Pre-Trip Orientation',
            description: 'Many customers used the map at home to understand store layout and plan efficient routes.'
          },
          {
            title: 'Episodic vs. Continuous Use',
            description: 'In-store, the map was accessed intermittently—typically at key decision points rather than continuously.'
          },
          {
            title: 'The Connectivity Gap',
            description: 'Poor in-store Wi-Fi emerged as a major barrier. Triangulating Medallia survey data with custom survey results revealed that connectivity issues hindered omnichannel experiences.'
          }
        ]}
        outcome="Connectivity was reframed as an omnichannel enabler, not just a technical issue. Findings empowered Product partners to advocate for store-wide infrastructure improvements to support 'Endless Aisle' (i.e. continue the shopping journey online for additional items not available in-store) initiatives. Additionally, trip planning was prioritized on the Store Mode product roadmap for further exploration."
        bgColor="bg-white"
        accentColor="bg-blue-600"
      />

      {/* Research Phase II: Web MVP Launch */}
      <ResearchPhase
        phaseNumber="03. Research Phase II"
        title="The Web MVP Launch"
        goal="Enable non-app users to plan store trips and find items in store via the map entry point, which was a hyperlinked item location on the web Product Detail Page (PDP); evaluate the web MVP experience for in-store use."
        methodology={[
          'In-store moderated usability testing with 5 participants recruited via guerrilla intercepts',
          'Adaptive testing approach: condensed 15-minute sessions into 10-minute high-impact interactions to accommodate time-constrained shoppers'
        ]}
        findings={[]}
        screenshots={[screenshot1, screenshot2, screenshot3]}
        recommendations={[
          {
            insight: 'Performance is UX: The item location was the last element to load on the PDP, which may lead customers to overlook the product location on PDP.',
            recommendation: 'Prioritize technical load order for location data to reduce latency.',
            category: 'critical'
          },
          {
            insight: 'The Zoom Paradox: Zooming in revealed aisles but hid the product pin, which made it difficult for customers to orient themselves while planning their route.',
            recommendation: 'Provide high-level category visibility at full zoom-out and visual cues to maintain product context when zoomed-in.',
            category: 'high'
          },
          {
            insight: 'Lost in Space: Orientation landmarks such as entrances and exits are presented as ambiguous icons on the screen, which increased cognitive strain when trying to map their route.',
            recommendation: 'Add labeled entrances and a map key for key store services.',
            category: 'high'
          }
        ]}
        bgColor="bg-white"
        accentColor="bg-purple-600"
      />

      {/* Research Phase III: Multi-Location Complexity */}
      <ResearchPhase
        phaseNumber="04. Research Phase III"
        title="Multi-Location Complexity"
        goal="Refine the product-specific map view for items located in multiple store areas (e.g., end-cap and main aisle)."
        methodology={[
          'Usability testing with 6 customers'
        ]}
        findings={[]}
        screenshots={[prototypeImage1, prototypeImage2]}
        recommendations={[
          {
            insight: 'Ambiguous text: The "+2 more locations" label failed to communicate that products existed in multiple areas, which created a barrier to discovering additional in-store locations.',
            recommendation: 'Display all product locations simultaneously, with option to select each location to see location-specific information.',
            category: 'high'
          },
          {
            insight: 'Visual Display: A "Map + Chips" UI—displaying all product locations simultaneously with selectable chips—successfully facilitated understanding and was well-received.',
            recommendation: 'Start with this view, followed by moving into the selected location view and experience, as it reaffirms their choice.',
            category: 'high'
          },
          {
            insight: 'Visual Accessibility: The location pin color blended with other map elements, and quantity text was too small for on-the-go readability.',
            recommendation: 'Explore ways to distinguish location pin (e.g. color or suppressing other icons until selection) and emphasize/enlarge quantity information.',
            category: 'medium'
          }
        ]}
        bgColor="bg-gray-50"
        accentColor="bg-indigo-600"
      />

      {/* Feature Factory Section */}
      <FeatureFactorySection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}