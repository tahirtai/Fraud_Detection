import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(join(__dirname, '../dist')));

// Fraud detection algorithm
function calculateFraudScore(transaction) {
  let score = 0;
  const flags = [];

  // Amount-based rules
  if (transaction.amount > 1000) {
    score += 0.3;
    flags.push('High transaction amount');
  }
  if (transaction.amount > 5000) {
    score += 0.2;
  }

  // Location-based rules
  if (transaction.location.toLowerCase().includes('foreign')) {
    score += 0.25;
    flags.push('Foreign transaction');
  }

  // Time-based rules
  const transactionHour = new Date(transaction.time).getHours();
  if (transactionHour < 6 || transactionHour > 23) {
    score += 0.2;
    flags.push('Unusual transaction time');
  }

  // Card number validation (basic check)
  if (!/^\d{16}$/.test(transaction.cardNumber)) {
    score += 0.15;
    flags.push('Invalid card number format');
  }

  // Merchant name check
  if (!transaction.merchantName || transaction.merchantName.length < 3) {
    score += 0.15;
    flags.push('Suspicious merchant name');
  }

  // Determine risk level
  let riskLevel = 'low';
  if (score > 0.7) {
    riskLevel = 'high';
  } else if (score > 0.3) {
    riskLevel = 'medium';
  }

  // Ensure score is between 0 and 1
  score = Math.min(Math.max(score, 0), 1);

  return {
    score,
    riskLevel,
    flags
  };
}

app.post('/api/analyze', (req, res) => {
  try {
    const transaction = req.body;
    const fraudScore = calculateFraudScore(transaction);
    res.json(fraudScore);
  } catch (error) {
    res.status(500).json({ error: 'Error analyzing transaction' });
  }
});

// Handle all other routes by serving the index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Fraud detection server running on port ${port}`);
});