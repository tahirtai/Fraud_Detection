export interface Transaction {
  amount: number;
  merchantName: string;
  location: string;
  time: string;
  cardNumber: string;
}

export interface FraudScore {
  score: number;
  riskLevel: 'low' | 'medium' | 'high';
  flags: string[];
}