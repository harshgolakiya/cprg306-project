"use client";
import { useState } from 'react';

export default function PostalCodeInput({ onSubmit }) {
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[A-Za-z0-9\s\-]+$/.test(postalCode)) {
      setError(true);
      return;
    }

    setError(false);
    const normalizedPostalCode = postalCode.trim();
    onSubmit(normalizedPostalCode);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center">Enter Your Postal Code</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={postalCode}
          onChange={(e) => {
            setPostalCode(e.target.value);
            setError(false);
          }}
          placeholder="e.g., 10001, SW1A 1AA, 123-4567"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
        {error && <p className="text-red-500 text-sm font-semibold">Please enter a valid postal code.</p>}
      </form>
    </div>
  );
}
