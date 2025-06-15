import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';

interface CalendlyPopupProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyPopup: React.FC<CalendlyPopupProps> = ({ url, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg w-[100%] max-w-[1000px] h-[100%] max-h-[750px] relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
        >
          ✕
        </button>
        <InlineWidget
          url={url}
          styles={{
            height: '100%',
            width: '100%'
          }}
        />
      </div>
    </div>
  );
};

export default CalendlyPopup; 