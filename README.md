# Chamethya Yasodie — Portfolio

A personal portfolio website showcasing my journey as a Computer Science undergraduate — including my projects, skills, education, and contact information.

 **Live Site:** [chamethyay.github.io/Chamethya-Portfolio](https://chamethyay.github.io/Chamethya-Portfolio/)

---

## About

This portfolio serves as my digital resume and a central place to explore my work. It highlights my background in full-stack development and reflects my passion for building practical, well-crafted software.

---

## Sections

- **Home** — Introduction and a brief overview of who I am
- **About** — My background, interests, and goals
- **Skills** — Technical skills, programming languages, and tools
- **Projects** — Highlighted projects with descriptions and links
- **Education** — Academic background and relevant coursework
- **Contact** — Ways to get in touch

---

## Featured Projects

###  Safety on Speed — Cross Platform Mobile App
**React Native (Expo), TypeScript, Node.js (Express)**
- One-tap SOS system triggering automated calls (119 & guardians) with real-time GPS tracking
- Twilio Voice API for automated calls with pre-recorded messages
- Google Maps & Places APIs with the Haversine formula to locate and rank nearest emergency services
- Real-time features: live tracking, heat maps, safety ratings, and contact management

  ###  CareerForge — AI-Powered Career Operating System
**React Native (Expo), TypeScript, Supabase, Claude API**
- Built a cross-platform mobile app that helps CS students go from learning to internship-ready through personalised AI roadmaps, skill tracking, and project guidance
- Integrated the Claude API (Forge AI) as a 24/7 career mentor — context-aware responses built from each user's goal, skill level, and role interests stored in Supabase
- Implemented a dynamic Internship Readiness Score calculated from skills completed, projects built, consistency, and technical depth — updating in real time as users progress
- Designed a PostgreSQL schema on Supabase with Row Level Security enforced at the database level across all tables, ensuring strict per-user data isolation
- Built an AI Portfolio Generator that transforms completed projects into GitHub descriptions, STAR-format CV bullet points, and LinkedIn summaries in one tap
- 🔗 [View on GitHub](https://github.com/chamethyaY/CareerForge)


###  Employee Management System
**Java, Spring Boot, Thymeleaf**
- Full-stack CRUD app with Spring Data JPA and Java Collections for employee data management
- Modular backend using Java OOP principles with Spring Boot controllers and services
- Dynamic web pages with Thymeleaf — conditional rendering, data binding, and client-side validation

###  Graph Acyclicity Validator
**Algorithms & Data Structures**
- Cycle detection in directed graphs using the Sink Elimination Algorithm
- Adjacency List + Reverse Map for efficient vertex removal and real-time sink identification

###  Smart Campus Sensor & Room Management API
**Java 17, JAX-RS (Jersey), Grizzly HTTP Server, Maven**
- RESTful API managing Rooms, Sensors, and Sensor Readings with a versioned resource hierarchy and HATEOAS discovery endpoint
- Thread-safe in-memory data store using `ConcurrentHashMap` — no external database required
- Custom exception mappers for clean JSON error responses and a JAX-RS logging filter for request/response observability
- 🔗 [View on GitHub](https://github.com/chamethyaY/smart-campus-api)

  ###  Graph Acyclicity Validator
**Algorithms & Data Structures**
- Cycle detection in directed graphs using the Sink Elimination Algorithm
- Adjacency List + Reverse Map for efficient vertex removal and real-time sink identification


###  Dual-Stage Lung Cancer Detection
**Python, PyTorch, MONAI, XGBoost, Grad-CAM, SHAP, Streamlit**
- Built a two-stage ML pipeline that first analyses CT scan images via a CNN (PyTorch + MONAI) to detect suspicious nodules, then scores patient risk using XGBoost on metadata such as age, smoking history, and nodule size
- Combined both models using a stacking ensemble for improved diagnostic accuracy over either model alone
- Integrated Grad-CAM heatmaps to visually highlight the CT scan regions driving each prediction, and SHAP plots to explain the metadata model's risk factors — making results interpretable for clinical use
- Trained on the LIDC-IDRI dataset of 1,018 CT scans with radiologist annotations from The Cancer Imaging Archive
- Delivered a Streamlit web app allowing users to upload scans and metadata and receive a combined risk prediction with visual explanations
- 🔗 [View on GitHub](https://github.com/chamethyaY/Dual-Stage-Lung-Cancer-Detection-)

---

## Tech Stack

- **React 19** + **TypeScript** — UI and typed codebase
- **Vite** — fast dev server and build tool
- **TanStack Router / Query** — routing and data fetching
- **Tailwind CSS** + **Radix UI** — styling and accessible UI primitives
- **Deployed on Vercel** (with optional Cloudflare Workers support)

---

## Getting Started

To run this locally:

```bash
git clone https://github.com/chamethyay/Chamethya-Portfolio.git
cd Chamethya-Portfolio
npm install
npm run dev
```

---

## Contact

Feel free to reach out or connect with me through the contact section on the site.

---

> Built  by Chamethya Yasodie
