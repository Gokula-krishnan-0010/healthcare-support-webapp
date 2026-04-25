# CareSupport NGO - Mini Healthcare Support Web App

## 🌟 Project Vision & Philosophy

CareSupport NGO is more than just a website; it is a **"low-barrier technology" concept prototype** designed specifically for community-led healthcare initiatives. 

### The Approach: Accessibility & Trust
- **Low-Barrier Entry:** By removing the requirement for an email address in the support form, we prioritize **immediate access and privacy**. This reduces the "friction" for patients who may not have regular access to email or who are concerned about data tracking.
- **Privacy-First Design:** Data is handled locally and summarized for NGO coordinators, ensuring that the primary focus is on care delivery rather than data collection.
- **Cost-Effective Intelligence:** Instead of expensive LLM subscriptions, we use a **Local RAG (Retrieval-Augmented Generation)** approach. This provides instant, reliable health advice without incurring API costs, making it sustainable for small NGOs.

---

## 🚀 Features & User Guide

### 1. RAG Health Assistant (Chatbot)
The floating assistant uses **Retrieval-Augmented Generation** to provide specific first-aid and healthcare information. It searches a local "Knowledge Base" to find the most relevant advice.

**How to use:**
- Click the blue bubble in the bottom right.
- Type your health-related questions.
- **Try these example queries:**
  - *"How do I stop heavy bleeding?"*
  - *"What is the first aid for an open wound?"*
  - *"I have a cough and a stuffy nose, what should I do?"*
  - *"How can I volunteer for the NGO?"*

### 2. Automated Support Triage (Form)
Located at `/form`, this tool streamlines how an NGO processes requests.

**How to use:**
- Fill in your **Name**, **Phone Number**, and the **Type of Request**.
- Describe your situation in the message box.
- **Automation at work:** On submission, the system automatically analyzes your message to assign a **Priority Level** (e.g., tagging "urgent" cases as HIGH priority) and generates a concise **Automated Summary** for the coordinator.

### 3. Adaptive Dark Mode
The application respects your system preferences and provides a manual toggle in the navigation bar. Dark mode reduces eye strain during nighttime use and improves accessibility for users with light sensitivity.

---

## 🛠 Tech Stack
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Engine:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Theme Management:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📦 Local Setup & Development

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the prototype.

### How RAG Works Here
The system consists of three parts:
1. **Knowledge Base (`src/lib/knowledge.ts`):** A curated set of health advice.
2. **Retrieval (`src/lib/rag.ts`):** A scoring algorithm that matches user queries to the knowledge base.
3. **Augmentation (`src/app/api/chat/route.ts`):** An API that combines retrieved context with a conversational response template.

---

## 🏥 NGO Use Case
A community coordinator can deploy this tool to:
- **Triage Patients:** Instantly identify high-priority medical needs.
- **Automate FAQs:** Reduce manual workload by letting the chatbot handle routine health questions.
- **Coordinate Volunteers:** Seamlessly collect registration data through the same interface.
