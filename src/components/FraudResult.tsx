import React from 'react';
import { AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';
import type { FraudScore } from '../types';
import { clsx } from 'clsx';

interface Props {
  result: FraudScore;
}

export function FraudResult({ result }: Props) {
  const { score, riskLevel, flags } = result;

  const getScoreColor = () => {
    if (score < 0.3) return 'text-green-600';
    if (score < 0.7) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getIcon = () => {
    switch (riskLevel) {
      case 'low':
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'medium':
        return <AlertCircle className="w-6 h-6 text-yellow-600" />;
      case 'high':
        return <AlertTriangle className="w-6 h-6 text-red-600" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Fraud Analysis Result</h3>
        {getIcon()}
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-1">Risk Score</div>
        <div className={clsx('text-2xl font-bold', getScoreColor())}>
          {(score * 100).toFixed(1)}%
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-1">Risk Level</div>
        <div className={clsx('font-semibold', {
          'text-green-600': riskLevel === 'low',
          'text-yellow-600': riskLevel === 'medium',
          'text-red-600': riskLevel === 'high'
        })}>
          {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)}
        </div>
      </div>

      {flags.length > 0 && (
        <div>
          <div className="text-sm text-gray-600 mb-2">Risk Factors</div>
          <ul className="space-y-1">
            {flags.map((flag, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2" />
                {flag}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}