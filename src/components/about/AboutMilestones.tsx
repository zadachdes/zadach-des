import React from 'react';
import { Hammer, Computer, Ruler, Building2 } from 'lucide-react';

const milestones = [
  {
    icon: <Hammer className="w-6 h-6" />,
    period: "Early Years",
    title: "Cabinet Shop Beginnings",
    description: "Started in my uncle's cabinet shop, crafting skateboard planks and learning woodworking fundamentals."
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    period: "Early 20s",
    title: "Framing Contractor",
    description: "Built custom stick-built homes in prestigious developments, gaining deep understanding of construction."
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    period: "Early 90s",
    title: "Design Transition",
    description: "Began creating custom home designs, transitioning from drafting table to CAD in 1992."
  },
  {
    icon: <Computer className="w-6 h-6" />,
    period: "Present",
    title: "3D Innovation",
    description: "Mastered SketchUp for precise 3D visualization, revolutionizing the design process."
  }
];

const AboutMilestones = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
    {milestones.map((milestone, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
        <div className="text-gray-900 mb-4">{milestone.icon}</div>
        <div className="text-sm text-gray-500 mb-2">{milestone.period}</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
        <p className="text-gray-600 text-sm">{milestone.description}</p>
      </div>
    ))}
  </div>
);

export default AboutMilestones;