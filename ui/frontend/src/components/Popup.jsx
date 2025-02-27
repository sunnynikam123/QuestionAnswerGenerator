// Popup.js
import React, { useState } from 'react';

function Popup({ message }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 bg-opacity-50">
      <div className="relative w-full max-w-md p-6 dark:bg-zinc-800 bg-zinc-200 rounded-lg shadow-lg">
        <div className="flex items-start justify-between border-b pb-3">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-200">Message</h3>
          <button
            onClick={handleClose}
            className="text-zinc-400 dark:hover:text-zinc-900 hover:text-zinc-600 bg-transparent rounded-lg text-sm p-2 ml-auto inline-flex items-center"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="py-4 text-zinc-700 dark:text-zinc-50">
          {message}
        </div>
        <div className="flex justify-end pt-4 border-t">
          <button
            onClick={handleClose}
            className="bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg text-sm px-4 py-2 dark:bg-zinc-600 dark:hover:bg-zinc-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
