import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { TransactionForm } from './components/TransactionForm';
import { FraudResult } from './components/FraudResult';
import type { Transaction, FraudScore } from './types';
import axios from 'axios';

function App() {
  const [result, setResult] = useState<FraudScore | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (transaction: Transaction) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post('http://localhost:3000/api/analyze', transaction);
      setResult(response.data);
    } catch (err) {
      setError('Failed to analyze transaction. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Fraud Detection System</h1>
          <p className="mt-2 text-gray-600">Enter transaction details to check for potential fraud made by Tahir Tai</p>
        </div>

        {error && (
          <div className="mb-8 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-6">Transaction Details</h2>
            <TransactionForm onSubmit={handleSubmit} isLoading={loading} />
          </div>

          <div>
            {result && <FraudResult result={result} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;