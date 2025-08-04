🔐 Fraud Detection System
A modern and responsive web application that helps detect potentially fraudulent transactions by analyzing transaction data and assigning a risk score with detailed reasoning.
This system is built using React, TypeScript, Tailwind CSS, and Axios for frontend operations, and it optionally connects to a Node.js + Express backend API to simulate real-time fraud detection.

🌟 Features
Clean and dynamic transaction input form
Real-time fraud score analysis with color-coded results
Visual risk indicators (low, medium, high)
Risk factor display based on input patterns
Loading spinner animation while analyzing
Modular and reusable component structure

🛠 Tech Stack
Frontend:
React with TypeScript
Tailwind CSS for styling
Lucide-react for icons
Axios for HTTP requests
Vite as the frontend bundler
Backend (Optional):
Node.js
Express.js
CORS and JSON middleware

📁 Project Structure
The project follows a clean and organized structure:
src/components: Contains TransactionForm and FraudResult components
App.tsx: Root component managing state and logic
types.ts: Shared types for transaction and fraud data
server/: Optional backend API for fraud analysis
index.tsx, index.css: App entry point and global styles

🧪 How It Works
The user fills out transaction details: amount, merchant name, location, time, and card number.
On form submission, the data is sent to a backend endpoint for analysis.
The backend generates a random fraud score and categorizes the risk level as ow, medium, or high.
It also checks for risk flags such as high amount or suspicious card patterns.
The frontend displays the result with corresponding color coding and icons.

🧾 Sample Transaction Data
Amount: 12000
Merchant Name:ABC Store
Location: Delhi
Time: 2025-08-04 18:51
Card Number: 1234567890000000

📊 Sample Response (Backend Output)
Score: 82%
Risk Level: High
Flags: High transaction amount, Suspicious card pattern

🚀 How to Run This Project
Install project dependencies using npm install.
Run the frontend using npm run dev. It opens on http://localhost:5173.
Optionally run the backend server on http://localhost:3000 to simulate fraud detection.

🧠 Learnings from This Project
Mastery of React forms and hooks
TypeScript interfaces and prop validation
Building reusable UI components
Making API calls using Axios
Handling async state with loading and error states
Clean UI with TailwindCSS utilities

🔮 Future Improvements
Integrate real machine learning models for fraud scoring
Add user login and historical transaction dashboard
Deploy to cloud services like Vercel and Render
Add visual analytics for fraud trends
Internationalization and language support

👨‍💻 Author
This project is created by Tahir Tai.
Feel free to connect on GitHub and LinkedIn to collaborate or share feedback.

📝 License
This project is licensed under the MIT License. Feel free to use, modify, and share it with attribution.
