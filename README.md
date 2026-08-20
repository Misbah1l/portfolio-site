# 🌐 Personal Portfolio Website + AI Assistant

This repository contains my personal portfolio website, built to showcase my background, technical skills, projects, internships, resume, and contact information.

The portfolio focuses on **Backend Development, Artificial Intelligence, REST APIs, databases, and computer vision**.

It also includes a **personal AI assistant** integrated into the portfolio. Visitors can ask questions about my skills, projects, experience, and technical background.

## 🚀 Live Website

https://misbah1l.github.io/portfolio-site/

## 🤖 Personal AI Assistant

The portfolio includes an AI-powered assistant called **Ask Misbah AI**.

Visitors can ask questions such as:

* What AI projects has Misbah built?
* What are Misbah's core technical skills?
* Tell me about Misbah's LLM Customer Request Triage API.
* Which technologies has Misbah used for backend development?
* What internships has Misbah completed?

The assistant uses a FastAPI backend and an LLM accessed through OpenRouter.

### How It Works

```text
Visitor
   ↓
Portfolio Website
   ↓
JavaScript Fetch Request
   ↓
FastAPI /chat Endpoint
   ↓
OpenRouter LLM
   ↓
AI-generated Response
   ↓
Portfolio Chat Interface
```

The AI assistant is designed to provide responses based on information about my professional background, projects, skills, and experience.

## 📌 Portfolio Features

* Responsive personal portfolio
* Professional landing page
* About Me section
* Featured projects
* Complete projects showcase
* Technical skills section
* Downloadable resume
* Contact page
* GitHub and LinkedIn links
* Mobile-friendly layout
* GitHub Pages deployment
* Integrated personal AI assistant
* AI-powered question answering
* FastAPI backend for AI requests
* LLM integration through OpenRouter

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend & AI

* Python
* FastAPI
* OpenAI Python SDK
* OpenRouter
* Large Language Models

### Development Tools

* Git
* GitHub
* Uvicorn
* VS Code

## 📂 Website Pages

* Home
* About
* Projects
* Skills
* Resume
* Contact

## 📁 Project Structure

```text
portfolio-site/
│
├── index.html
├── about.html
├── projects.html
├── skills.html
├── resume.html
├── contact.html
├── style.css
├── script.js
├── README.md
│
├── assets/
│   └── images/
│       └── resume/
│           └── Misbah_Saeed_Resume.pdf
│
└── ai-agent/
    ├── main.py
    ├── config.py
    ├── knowledge.py
    ├── prompts.py
    ├── requirements.txt
    ├── .env
    └── venv/
```

> `.env` and `venv/` are excluded from Git using `.gitignore` and should never be committed to the repository.

## 💼 Featured Projects

### LLM Customer Request Triage API

An AI-powered backend API built with FastAPI and an OpenRouter-hosted LLM to classify customer requests. It includes background job processing, retry handling, SQLite storage, and job status tracking.

**Technologies:** Python, FastAPI, OpenRouter, SQLite

### Smart FAQ AI Chatbot

An AI-powered FAQ chatbot built using Flask and NLP techniques. It uses TF-IDF Vectorization and Cosine Similarity to match user questions with relevant answers.

**Technologies:** Python, Flask, NLP, NLTK, Scikit-learn

### Object Detection & Tracking System

A computer vision system using YOLOv8 for object detection and Deep SORT for multi-object tracking. The system provides unique tracking IDs, bounding boxes, class labels, and FPS information.

**Technologies:** Python, YOLOv8, Deep SORT, OpenCV, NumPy

## 📚 Other Projects

### Task API with SQLite

A RESTful CRUD API developed using FastAPI and SQLite with persistent data storage, request validation, and interactive Swagger API documentation.

**Technologies:** Python, FastAPI, SQLite, Pydantic, Uvicorn

### AI Language Translation Tool

A multilingual web application built with Flask and Google Translator services. It supports automatic language detection, translation, language swapping, text download, counters, and text-to-speech.

**Technologies:** Python, Flask, JavaScript, Bootstrap, Deep Translator

### Online Food Ordering System

A web-based food ordering application built with Flask and MongoDB. Customers can register, browse the menu, place and manage orders, while an admin dashboard provides order and sales management.

**Technologies:** Python, Flask, MongoDB, HTML5, CSS3

## 💼 Internship Experience

### Backend AI Engineering Intern — FlyRank

Worked on backend and AI-focused development projects involving Python, FastAPI, REST APIs, LLM integration, background jobs, databases, and software engineering practices.

### AI Engineering Intern — CodeAlpha

Developed AI and machine learning projects including an AI language translation tool, FAQ chatbot, and object detection and tracking system.

## ⚙️ Running the AI Assistant Locally

### 1. Navigate to the AI agent

```bash
cd ai-agent
```

### 2. Create and activate a virtual environment

Windows PowerShell:

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure the API key

Create a `.env` file inside the `ai-agent` directory:

```text
OPENROUTER_API_KEY=your_api_key_here
```

Never commit the actual API key to GitHub.

### 5. Start the FastAPI server

```bash
uvicorn main:app --reload
```

The backend will run at:

```text
http://127.0.0.1:8000
```

FastAPI documentation is available at:

```text
http://127.0.0.1:8000/docs
```

### 6. Start the portfolio frontend

Open `index.html` using a local development server such as VS Code Live Server.

The frontend communicates with the FastAPI `/chat` endpoint to send questions to the AI assistant.

## 🔐 Security

Sensitive credentials are stored in environment variables rather than being hard-coded into the application.

The repository excludes:

* `.env`
* `venv/`
* `__pycache__/`
* Python cache files

The OpenRouter API key must never be uploaded to GitHub.

## 📄 Resume

The portfolio includes my latest resume covering:

* Internship experience
* Backend and AI projects
* Technical skills
* Academic projects
* Education
* Relevant certifications

## 📬 Contact

* **Email:** [misbahsaeed795@gmail.com](mailto:misbahsaeed795@gmail.com)
* **GitHub:** https://github.com/Misbah1l
* **LinkedIn:** https://www.linkedin.com/in/misbah-saeed-4272b83a9

## 🎓 Education

**BS Computer Science**

Institute of Space Technology (IST)

## 📖 Portfolio Context

This portfolio was developed during my **FlyRank Internship** as part of my professional development and AI fluency work.

The integrated AI assistant demonstrates the practical use of an LLM-powered application within a real personal website.

## 👩‍💻 Author

**Misbah Saeed**

Backend AI Engineering Intern @ FlyRank

AI Engineering Intern @ CodeAlpha

BS Computer Science Student

Institute of Space Technology (IST)

---

⭐ Feedback and suggestions are welcome.
