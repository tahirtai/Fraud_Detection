import type { Handler } from "@netlify/functions";

// Types mirror your frontend
type Transaction = {
  amount: number;
  merchantName: string;
  location: string;
  time: string;      // "YYYY-MM-DDTHH:mm" or ISO string
  cardNumber: string;
};

type FraudScore = {
  score: number;                     // 0..1
  riskLevel: "low" | "medium" | "high";
  flags: string[];
};

export const handler: Handler = async (event) => {
  try {
    const tx: Transaction = event.body ? JSON.parse(event.body) : ({} as any);

    const flags: string[] = [];

    // Example heuristics (replace with your own logic later)
    if (tx.amount >= 50000) flags.push("Unusually high amount");

    const riskyMerchants = ["test", "scam", "fraud", "unknown"];
    if (tx.merchantName && riskyMerchants.some(m => tx.merchantName.toLowerCase().includes(m))) {
      flags.push("Risky merchant name");
    }

    if (!/^\d{16}$/.test(tx.cardNumber || "")) {
      flags.push("Invalid card number format");
    }

    if (tx.time) {
      const d = new Date(tx.time);
      const hour = d.getHours();
      if (hour >= 0 && hour <= 5) flags.push("Odd transaction time");
    }

    const riskyLocations = ["nowhere", "unknown"];
    if (tx.location && riskyLocations.includes(tx.location.toLowerCase())) {
      flags.push("Unrecognized location");
    }

    // Naive score from amount + penalties for flags
    const base = Math.min(tx.amount / 100000, 1);  // 0..1
    const flagPenalty = Math.min(flags.length * 0.15, 0.6);
    const score = Math.min(0.15 + base + flagPenalty, 1);

    let riskLevel: FraudScore["riskLevel"] = "low";
    if (score >= 0.7) riskLevel = "high";
    else if (score >= 0.3) riskLevel = "medium";

    const result: FraudScore = { score, riskLevel, flags };

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" , "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(result),
    };
  } catch (e) {
    console.error("Analyze function error:", e);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Analysis failed" }),
    };
  }
};
