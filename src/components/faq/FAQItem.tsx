import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem as FAQItemType } from '../../types/faq';

interface FAQItemProps {
  item: FAQItemType;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ item, isOpen, onToggle }: FAQItemProps) => (
  <div className="border-b border-gray-200 pb-4">
    <button
      className="w-full flex justify-between items-start text-left"
      onClick={onToggle}
    >
      <span className="text-lg font-medium text-gray-900">{item.question}</span>
      <ChevronDown 
        className={`w-5 h-5 text-gray-500 transition-transform ${
          isOpen ? 'transform rotate-180' : ''
        }`}
      />
    </button>
    {isOpen && (
      <div className="mt-4 prose prose-gray max-w-none">
        {item.answer}
      </div>
    )}
  </div>
);

export default FAQItem;