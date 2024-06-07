import React from 'react';
import Toast from '../components/Toast';
import useToast from '../hooks/useToast';

export default function Home() {
  const { toasts, addToast, removeToast } = useToast();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50 space-y-4">
      <button onClick={() => addToast('success', 'Success notification', 'top-left')} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Success (Top Left)</button>
      <button onClick={() => addToast('info', 'Info notification', 'top-right')} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Info (Top Right)</button>
      <button onClick={() => addToast('warning', 'Warning notification', 'top-center')} className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Warning (Top Center)</button>
      <button onClick={() => addToast('error', 'Error notification', 'bottom-center')} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Error (Bottom Center)</button>

      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          type={toast.type}
          message={toast.message}
          position={toast.position}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}
