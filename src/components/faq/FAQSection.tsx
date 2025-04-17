import React from 'react';
import FAQItem from './FAQItem';
import { FAQSection as FAQSectionType } from '../../types/faq';

interface FAQSectionProps {
  section: FAQSectionType;
  openItems: {[key: string]: boolean};
  onToggleItem: (itemIndex: number) => void;
  sectionIndex: number;
}

const FAQSection = ({ section, openItems, onToggleItem, sectionIndex }: FAQSectionProps) => (
  <div className="bg-white rounded-lg shadow-sm p-8">
    <h3 className="text-2xl font-serif text-gray-900 mb-6">{section.title}</h3>
    {section.description && (
      <p className="text-gray-600 mb-6">{section.description}</p>
    )}
    <div className="space-y-4">
      {section.items.map((item, itemIndex) => (
        <FAQItem
          key={itemIndex}
          item={item}
          isOpen={openItems[`${sectionIndex}-${itemIndex}`]}
          onToggle={() => onToggleItem(itemIndex)}
        />
      ))}
    </div>
  </div>
);

export default FAQSection;