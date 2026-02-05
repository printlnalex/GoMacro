# Go Macro

## Project Description
Go Macro is a mobile-first Progressive Web Application (PWA) designed to assist young adults in managing nutrition decisions during high-stress periods. The application addresses "menu anxiety" and decision fatigue by assessing the user's current energy level and providing immediate, realistic food recommendations.

Unlike traditional calorie trackers that require significant manual effort, Go Macro focuses on reducing decision friction. It uses an energy-based check-in system to filter options (Low, Medium, or High effort) and utilizes a "shuffle" interface to present one option at a time. The goal is to help users maintain consistent eating habits through positive reinforcement rather than strict metric tracking.

## Features
* **Energy-Based Check-in:** Filters meal options based on the user's selected capacity (Low, Medium, or High).
* **Shuffle Decision Engine:** A card-based interface that presents single recipe recommendations to reduce choice overload.
* **Habit Flame:** A visual consistency tracker that encourages daily logging.
* **Fridge Scanner:** Computer vision integration to identify ingredients from user photos and suggest relevant recipes.
* **Smart Nudges:** SMS notifications to remind users to eat based on their schedule.

## Technology Stack
* **Frontend:** React, TypeScript, Vite, Tailwind CSS
* **Backend:** Python, FastAPI
* **Database:** PostgreSQL (Supabase)
* **AI/ML:** OpenAI Vision API
* **Deployment:** Vercel (Frontend), Render (Backend)

## Setup Instructions

### Prerequisites
* Node.js (v18 or higher)
* Python (v3.9 or higher)
* Git

### Installation

1. Clone the repository:
   git clone https://github.com/your-username/go-macro.git
   cd go-macro

2. Frontend Setup:
   cd frontend
   npm install
   npm run dev

   The application will run at http://localhost:5173. For mobile testing, use browser developer tools to toggle device emulation.

3. Backend Setup:
   Open a new terminal and navigate to the backend directory:
   cd backend

   Create and activate a virtual environment:
   python3 -m venv venv
   source venv/bin/activate

   Install dependencies:
   pip install -r requirements.txt

   Start the server:
   uvicorn main:app --reload

   The API will run at http://localhost:8000. API documentation is available at http://localhost:8000/docs.

## Contributing
1. Fork the repository.
2. Create a feature branch (git checkout -b feature/NewFeature).
3. Commit your changes (git commit -m 'Add NewFeature').
4. Push to the branch (git push origin feature/NewFeature).
5. Open a Pull Request.

## Contributors
* Alexis Lucatero - Product Manager & Frontend
* Ash Siwakoti - Frontend Developer
* Siddheshwar Tewari - Backend Developer
* Shijie Zhuang - Product Researcher
* Amanual Tedla - UX/UI Designer
