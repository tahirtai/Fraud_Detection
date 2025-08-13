🚨 Fraud Detection System
A modern AI-powered fraud detection web app built with React, Tailwind CSS, and Lucide Icons. This tool allows users to enter transaction details and instantly check for potential fraudulent activity, providing a risk score, risk level, and possible fraud indicators.

📌 Features
✅ Interactive Transaction Form – Easily input details like amount, merchant name, location, time, and card number.
✅ Real-Time Fraud Analysis – Communicates with a backend API to analyze risk.
✅ Risk Score Visualization – Displays a percentage-based fraud probability with color indicators.
✅ Risk Level Classification – Categorizes results into Low, Medium, or High risk.
✅ Flagged Risk Factors – Shows potential suspicious patterns detected.
✅ Responsive & Modern UI – Styled with Tailwind CSS and enhanced with Lucide React Icons.

🛠️ Tech Stack
Frontend:

React – UI library

TypeScript – Type-safe code

Tailwind CSS – Modern utility-first styling

Lucide React – Icons for intuitive UI feedback

Axios – API requests

Clsx – Conditional class handling

Backend (Assumed API):

Node.js / Express (Custom fraud detection endpoint at /api/analyze)

Fraud detection logic / ML model

📂 Project Structure
pgsql
Copy
Edit
📦 fraud-detection-system
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 TransactionForm.tsx   # User input form
 ┃ ┃ ┣ 📜 FraudResult.tsx       # Result display UI
 ┃ ┣ 📜 App.tsx                  # Main app container
 ┃ ┣ 📜 types.ts                 # TypeScript types
 ┣ 📜 package.json
 ┣ 📜 README.md
🚀 Getting Started
1️⃣ Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/fraud-detection-system.git
cd fraud-detection-system
2️⃣ Install dependencies
bash
Copy
Edit
npm install
3️⃣ Start the development server
bash
Copy
Edit
npm run dev
The app will be available at http://localhost:5173 (Vite default) or http://localhost:3000 (if using CRA).

🔌 API Endpoint
The app sends a POST request to:

bash
Copy
Edit
http://localhost:3000/api/analyze
Example Request Body:
json
Copy
Edit
{
  "amount": 200,
  "merchantName": "Amazon",
  "location": "New York",
  "time": "2025-08-12T14:30",
  "cardNumber": "1234567890123456"
}
Example Response:
json
Copy
Edit
{
  "score": 0.85,
  "riskLevel": "high",
  "flags": ["Unusual location", "Large transaction amount"]
}
📸 Screenshots
🔹 Transaction Form
(Example form for entering details)

🔹 Fraud Result
(Example output with risk score & factors)

📌 Notes
Ensure your backend API is running before testing.

Adjust the API endpoint in App.tsx if needed.

For production, replace http://localhost:3000 with your live API URL.

👨‍💻 Author
Tahir Tai
📧 tahirtai147@gmail.com
🔗 GitHub | LinkedIn

📜 License
This project is licensed under the MIT License – feel free to use, modify, and distribute.
