# 🤖 Interview Prep AI

<div align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Groq-LLaMA%203.3-F55036?style=for-the-badge&logo=meta&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
</div>

<br />

> **AI-Powered Interview Preparation Platform** — Generate role-specific questions, explore AI answers, pin important Q&As, and dive deeper into any concept using cutting-edge LLMs.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎯 **Role-Specific Questions** | Generate tailored interview Q&As for any tech role and experience level |
| ⚡ **AI-Powered Answers** | Get detailed, beginner-friendly answers powered by Meta's LLaMA 3.3 via Groq |
| 📌 **Pin & Organize** | Pin important questions to the top of your session for quick review |
| 🧠 **Concept Deep Dive** | Click "Learn More" on any question to get an in-depth AI explanation |
| 🚀 **Load More Q&A** | Dynamically expand any session with fresh questions without losing progress |
| 🔐 **JWT Auth** | Secure login/signup with bcrypt password hashing and JWT token sessions |
| 📸 **Profile Photo Upload** | Upload a profile picture stored via local server uploads |

---

## 🛠️ Tech Stack

### Frontend
- **React 19** with React Router DOM v7
- **Vite 7** — lightning-fast build tool
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — smooth animations
- **Groq SDK / Axios** — API communication
- **React Markdown + Syntax Highlighter** — rich AI response rendering
- **react-hot-toast** — toast notifications

### Backend
- **Node.js + Express 5** — REST API server
- **MongoDB + Mongoose** — data persistence
- **Groq SDK** (`llama-3.3-70b-versatile`) — AI question & explanation generation
- **JWT + bcryptjs** — authentication & security
- **Multer** — file upload middleware

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- MongoDB Atlas account
- Groq API key (free at [console.groq.com](https://console.groq.com/keys))

---

### 1. Clone the Repo

```bash
git clone https://github.com/Deepakdass1326/Ai-Interview-Preparation.git
cd Ai-Interview-Preparation
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `backend/.env` file:

```env
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/interviewPrepAI
JWT_SECRET=your_super_secret_jwt_key
GROQ_API_KEY=gsk_your_groq_api_key_here
PORT=8000
```

Start the backend:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend/vite-project
npm install
```

Create a `frontend/vite-project/.env` file:

```env
VITE_BASE_URL=http://localhost:8000
```

Start the frontend:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) 🎉

---

## 📁 Project Structure

```
Ai-Interview-Preparation/
├── backend/
│   ├── config/            # MongoDB connection
│   ├── controllers/       # Auth, Session, Question, AI controllers
│   ├── middlewares/       # JWT Auth, Multer upload
│   ├── models/            # User, Session, Question schemas
│   ├── routes/            # Express route definitions
│   ├── utils/             # Prompt templates
│   └── server.js          # Entry point
│
└── frontend/vite-project/
    ├── public/
    └── src/
        ├── assets/
        ├── components/
        │   ├── Cards/     # SummaryCard, QuestionCard, ProfileInfoCard
        │   ├── Inputs/    # Input, ProfilePhotoSelector
        │   ├── Loader/    # SpinnerLoader, SkeletonLoader
        │   ├── layouts/   # Navbar, DashboardLayout
        │   ├── Drawer.jsx
        │   └── Modal.jsx
        ├── context/       # UserContext
        ├── pages/
        │   ├── Auth/      # Login, SignUp
        │   ├── Home/      # Dashboard, CreateSessionForm
        │   ├── InterviewPrep/
        │   └── LandingPage.jsx
        └── utils/         # apiPaths, axiosInstance, helper, data
```

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | Login and receive JWT |
| `GET` | `/api/auth/profile` | Get logged-in user profile |
| `POST` | `/api/auth/upload-image` | Upload profile image |

### Sessions
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/sessions/create` | Create a new interview session |
| `GET` | `/api/sessions/my-sessions` | Get all sessions of logged-in user |
| `GET` | `/api/sessions/:id` | Get a session with all questions |
| `DELETE` | `/api/sessions/:id` | Delete session and its questions |

### Questions
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/questions/add` | Add more questions to a session |
| `POST` | `/api/questions/:id/pin` | Toggle pin status of a question |
| `POST` | `/api/questions/:id/note` | Update note on a question |

### AI
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/ai/generate-questions` | Generate Q&A using LLaMA 3.3 |
| `POST` | `/api/ai/generate-explanation` | Generate concept explanation |

---

## 🎨 Design Highlights

- **Premium Design System** — Sora + Inter fonts, orange & purple accent palette
- **Glassmorphism Navbar** — Frosted glass sticky nav
- **Animated Landing Page** — Floating hero, gradient text, pulse-glow badge
- **Interactive Cards** — Lift-on-hover session cards with gradient header bands
- **Collapsible Q&A** — Smooth height-animated question cards with pinning
- **AI Sidebar Drawer** — Slide-in concept explanation panel
- **Dark CTA Banner** — Deep navy gradient call-to-action section

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

MIT © 2025 [Deepak Dass](https://github.com/Deepakdass1326)
