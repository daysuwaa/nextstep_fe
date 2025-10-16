
"use client"
import axios from 'axios';
import React from 'react';

type DeleteModalProps = {
  onClose: () => void;
  onConfirm?: () => void;
  isOpen: boolean;
  title?: string;
  message?: string;
  itemName?: string;
  entryId?: string | number;
}
const DeleteModal = ({ 
  onClose, 
  onConfirm, 
  isOpen, 
  entryId,
}: DeleteModalProps) => {
  if (!isOpen) return null;
  if (!isOpen) return null;



  const handleDeleteEntry = async (entryId: string | number | undefined) => {
  console.log("Deleting entry with ID:", entryId);
  try {
    const response = await axios.delete(`http://localhost:5068/api/v1/entries/${entryId}`);
    console.log(response.data.message);
    if (onConfirm) onConfirm();
    onClose();
  } catch (error) {
    console.error("Error deleting entry:", error.response?.data || error.message);
  }
};

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };;



  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full transform transition-all">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 id="modal-title" className="text-lg font-semibold text-gray-900">
            Confirm Deletion
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-4">
          <div className="flex items-start space-x-4">
            {/* Warning Icon */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>

            {/* Message */}
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
               Are you sure you want to delete this item?
              </p>
              <p className="mt-2 text-sm text-gray-500">
                This action cannot be undone.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >Cancel</button>
          <button onClick={() => handleDeleteEntry(entryId)}
           className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
            
            >Delete</button>
            
         
        </div>
      </div>
    </div>
  );
};

export default DeleteModal