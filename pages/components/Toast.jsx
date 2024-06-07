import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Toast = ({ type, message, position, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
  };

  const typeClasses = {
    success: 'bg-green-500',
    info: 'bg-blue-500',
    warning: 'bg-orange-500',
    error: 'bg-red-500',
  };

  const hoverClasses = 'hover:bg-opacity-75';

  return (
    <div className={`fixed ${positionClasses[position]} ${typeClasses[type]} text-white px-4 py-3 rounded-lg shadow-lg animate-fade-in ${hoverClasses}`}>
      <div className="flex items-center">
        <span className="flex-grow">{message}</span>
        <button onClick={onClose} className="ml-4 hover:bg-white/20 p-1 rounded">
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

Toast.propTypes = {
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']).isRequired,
  message: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top-left', 'top-right', 'top-center', 'bottom-center']).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
