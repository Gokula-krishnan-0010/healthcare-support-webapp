# CareSupport NGO - Mini Healthcare Support Web App

## Overview
CareSupport NGO is a concept-level web application built with Next.js to demonstrate how modern web technology and basic AI/automation can streamline healthcare support initiatives for NGOs and community organizations.

The app provides a platform for patients to request medical assistance and for volunteers to register, while using automated logic to prioritize and summarize requests.

## Tech Stack
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** React Hooks

## Key Features

### 1. Patient Support & Volunteer Form
Located at `/form`, this feature allows users to submit requests for:
- Medical Assistance
- Volunteer Registration
- Financial Aid
- General Inquiries

### 2. AI & Automation Concept
- **Automated Data Summary:** Upon form submission, the backend (`/api/submit`) analyzes the user's message and generates a concise summary.
- **Priority Tagging:** The system automatically assigns a priority level (HIGH/MEDIUM) based on keywords like "urgent" or "emergency" and the type of request.
- **Smart Formatting:** Returns a structured summary to the client for immediate feedback.

### 3. FAQ Chatbot Assistant
A floating interactive chatbot widget that provides instant responses to common questions using keyword-matching logic. Try asking about:
- "How to get help?"
- "How to volunteer?"
- "What services do you offer?"
- "Is this an emergency?"

## NGO Use Case
This prototype helps NGOs by:
- **Reducing Administrative Burden:** Automated summaries help coordinators quickly understand patient needs without reading long messages.
- **Improved Triage:** Priority tagging ensures that urgent medical needs are flagged immediately for faster response.
- **24/7 Basic Support:** The FAQ chatbot handles routine questions, freeing up staff for complex cases.
- **Centralized Data Intake:** A structured way to collect patient and volunteer information.

## Setup Instructions

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Implementation Details
- **Form Component:** `src/components/Form.tsx` handles client-side state, validation, and API interaction.
- **Chatbot Component:** `src/components/Chatbot.tsx` implements the floating UI and keyword-matching brain.
- **API Route:** `src/app/api/submit/route.ts` contains the logic for processing data and generating the "AI" summary.
