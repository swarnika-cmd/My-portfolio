# Master Knowledge Base: Swarnika Somvanshi

## 1. FULL IDENTITY & CONTACT DETAILS
- **Full Name**: Swarnika Somvanshi
- **Email**: somvanshiswarnika@gmail.com
- **Location**: Bengaluru, Karnataka, India
- **LinkedIn**: [linkedin.com/in/swarnika-somvanshi](https://linkedin.com/in/swarnika-somvanshi)
- **GitHub**: [github.com/swarnika-cmd](https://github.com/swarnika-cmd)

## 2. UNABRIDGED EDUCATION HISTORY
- **Institution**: Birla Institute of Technology and Science, Pilani
- **Degree**: B.Sc. in Computer Science
- **Location**: Pilani, India
- **Timeline**: Jul 2023 – Jul 2027

## 3. COMPLETE WORK EXPERIENCE
- **Organization**: Scaler School of Technology Incubation
- **Role**: Researcher (Mem1 - AI Memory Layer)
- **Location**: Bengaluru, Karnataka
- **Dates**: Present
- **Metrics & Responsibilities**:
  - Currently part of the incubation program at SST, researching and developing Mem1, an AI memory layer.

- **Organization**: Scaler School of Technology (Meta x OpenEnv Hackathon 2026)
- **Role**: Core Organizing Member
- **Location**: Bengaluru, Karnataka
- **Dates**: Feb 2026 - April 2026
- **Metrics & Responsibilities**:
  - Managed logistics and on-ground operations for a Meta-sponsored 24-hour hackathon with 5,000 participants.
  - Coordinated venue setup, scheduling, and real-time contingencies throughout the event.

## 4. GUIDING NARRATIVE
**"Building intelligent systems that help people make sense of information."**
The candidate consistently builds systems that help people understand, organize, evaluate, retain, and interact with information more effectively. The projects demonstrate a curious student builder who enjoys understanding how people learn, remember, evaluate, and interact with information.

## 5. PROJECT DEEP-DIVES & ORIGIN STORIES

### Project 1: AskMyDoc — RAG Document Intelligence App (from CV & `AskMyDoc-2.O-main`)
- **Information Sense-Making Theme**: Helps users converse with complex documents to extract knowledge rapidly.
- **Origin Story / Frustration**: Inspired by Google NotebookLM to turn static, overwhelming PDFs into interactive, intelligent conversations while enforcing strict grounding in the document's content. *(Need more details on specific frustrations and learnings during iterations)*.
- **Full Technical Stack**: Python 3.10+, FastAPI, Uvicorn, LangChain (Python), ChromaDB, Pinecone, Groq API (`llama-3.1-8b-instant`), HuggingFace Transformers, PyPDF, HTML, CSS, JavaScript.
- **Underlying Architecture & Workflow**: Production-ready RAG pipeline with dual-chunking Parent Document Retrieval strategy across ChromaDB/Pinecone. Utilizes conversational memory routing to autonomously reformulate follow-up questions.
- **Impact & Metrics**: Real-time LLM-as-a-judge faithfulness evaluation surfaces confidence badges to directly measure pipeline reliability.

### Project 2: Smarana v2 / BrowserMemo (from `BrowserMemo-main`)
- **Information Sense-Making Theme**: Helps users capture and remember knowledge as an intelligent, privacy-preserving second brain.
- **Origin Story / Frustration**: Designed to automatically capture, encrypt, rank, and help the user retain everything read on the web, likely driven by information overload and the desire for offline, private knowledge retrieval. *(Need more details on evolution and specific learnings)*.
- **Full Technical Stack**: TypeScript, React, Vite, Manifest V3 Service Workers, Web Crypto API, IndexedDB, Esbuild, Python, FastAPI, SQLAlchemy (Asyncio), PostgreSQL, pgvector, Docker.
- **Underlying Architecture & Workflow**: Local-first, zero-knowledge sync. On-device encryption (AES-256-GCM). Hybrid Search Engine merges server-side semantic vector search (cosine similarity via `pgvector`) with local full-text search (TF-IDF in IndexedDB) via Reciprocal Rank Fusion (RRF). Uses SuperMemo-2 spaced repetition.
- **Impact & Metrics**: Delivers unmatched retrieval accuracy while maintaining absolute privacy.

### Project 3: DeHype Pro - AI Content Intelligence Engine (from CV & `DeHype-Unveiling-the-truth-behind--main`)
- **Information Sense-Making Theme**: Helps users critically evaluate online content to fight misinformation and manipulation.
- **Origin Story / Frustration**: Built to "unveil the truth behind the hype" by detecting clickbait, bias, and emotional manipulation across any webpage or YouTube video in real time. *(Need to discover specific triggers/learnings)*.
- **Full Technical Stack**: JavaScript, Chrome Extension Manifest V3, Groq API (Llama 3.3 70B Versatile), Service Workers, Chrome Storage API, HTML, CSS.
- **Underlying Architecture & Workflow**: Background Service Worker acts as CORS proxy to route LLM requests securely. Orchestrates 6 parallel API calls per analysis (credibility, sentiment, summaries, clickbait scoring, tags, insights).
- **Impact & Metrics**: Delivers comprehensive analysis in under 5 seconds with 100% local data privacy.

### Project 4: AI-Powered Web Intelligence & Autonomous CLI Agent (from `CLI_AgentGenAi-main`)
- **Information Sense-Making Theme**: Translates complex visual interfaces into structured representations understandable by AI systems.
- **Origin Story / Frustration**: Born from the frustration that traditional scrapers rely on brittle CSS selectors. This bypasses the limitation by treating any webpage as a spatial, visual canvas. *(Need to discover iteration process)*.
- **Full Technical Stack**: Node.js, Chrome Manifest V3, Python, FastAPI, Groq SDK.
- **Underlying Architecture & Workflow**: Autonomous Node.js ReAct CLI Agent and a Universal Browser Engine that extracts visual bounding boxes, ARIA roles, CSS variables, and base64 screenshots to generate clean multimodal VLM prompts.
- **Impact & Metrics**: Built-in context truncation and intelligent exponential backoff retry logic handle rate limits seamlessly.

### Project 5: HTTP/1.1 Server From Scratch (from CV & `HTTP-1.1-Server-master`)
- **Information Sense-Making Theme**: Demonstrates curiosity about the fundamental structures of information exchange on the web.
- **Origin Story / Frustration**: Started because "most developers use HTTP every day without understanding what actually happens below the framework." Built to deeply understand the protocol level. *(Need to discover evolution and specific implementation challenges)*.
- **Full Technical Stack**: Java 17, `java.net.ServerSocket`, `java.util.concurrent.ThreadPoolExecutor`. No frameworks.
- **Underlying Architecture & Workflow**: RFC 2616-compliant server built on raw Java TCP sockets. Implements a thread pool executor. Streams files in 8KB chunks. Supports `keep-alive`.
- **Impact & Metrics**: Reduced latency by 40% (31ms mean time per request) and handled 100+ concurrent connections (~3200 requests/sec).

### Project 6: SmartInterviewBot (from CV only, no codebase found)
- **Information Sense-Making Theme**: Helps users understand career readiness and evaluate their skills.
- **Origin Story / Frustration**: To create an intelligent interview prep engine. *(Missing complete origin story and iteration details)*.
- **Full Technical Stack**: Node.js, Express.js, Groq API, Pinecone, LangChain.
- **Underlying Architecture & Workflow**: Ingests resumes, maps experience via Pinecone vector search. Generates calibrated questions. Uses SHA-256 resume hashing for session memory.
- **Verification Note**: The claim of achieving "$0 hosting and inference cost on Groq and Pinecone free tiers" is explicitly written on the CV. However, because the repository is not present in the local directory, this claim cannot be explicitly verified against code evidence right now.
- **Impact & Metrics**: Bypasses redundant chunking, reducing pipeline latency to near zero.

### Project 7: ShieldWall Gateway — Enterprise LLM Security & Telemetry Control Room
- **Information Sense-Making Theme**: Protects enterprise infrastructure and ensures security compliance while analyzing and observing LLM operations in real-time.
- **Origin Story / Frustration**: Created to provide a perimeter defense for LLM integrations, solving the issue of high corporate spends, sensitive data leaks (PII), and lack of visibility in request latency and token consumption.
- **Full Technical Stack**: Python, FastAPI, Celery, Redis, PostgreSQL, Docker, Docker Compose, HTML, CSS, JavaScript, OpenAI API, Groq API.
- **Underlying Architecture & Workflow**: Features a synchronous pipeline for real-time PII masking and streaming boundary unmasking, keeping proxy overhead under 15ms. Ingestion, pricing calculations, and NLP generation evaluations are offloaded to an asynchronous queue using Celery and Redis. Uses PostgreSQL with composite indexes for dashboard aggregation query performance.
- **Impact & Metrics**: Renders real-time telemetry, spend rankings, and diagnostics tools via a premium glassmorphic Admin Cockpit with zero latency degradation on hot paths.

### Project 8: Journal with Mr Brown — AI Voice Companion with Persistent Memory
- **Information Sense-Making Theme**: Helps users capture, reflect on, and query their personal thoughts, emotions, and life memories over time using voice interaction.
- **Origin Story / Frustration**: Created to bridge the gap between traditional static journaling and modern voice agents, providing an empathetic companion that remembers previous entries and offers deep emotional analysis without manual text entry or context loss.
- **Full Technical Stack**: TypeScript, React 19, Express.js, Node.js, Prisma ORM, PostgreSQL, pgvector, Redis, Docker, Deepgram Nova-2 API, ElevenLabs TTS API, Google Gemini 2.5 Flash, OpenAI API.
- **Underlying Architecture & Workflow**: Implements a voice processing pipeline routing audio blobs to Deepgram STT, fetching past journal contexts from PostgreSQL via a custom pgvector similarity query (`<=>` cosine operator), prompting Gemini for persona-driven empathetic chat, and speaking the response via ElevenLabs. Analyzes emotional metadata asynchronously using GPT-4o-mini JSON mode.
- **Impact & Metrics**: Implemented rate-limiting middleware with Redis and containerized the architecture with Docker Compose. Renders long-term emotional patterns in a dynamic mood heatmap calendar.

## 6. HONORS, AWARDS, & COMPETITIONS
- **Scaler School of Technology Incubation**: Selected as a Researcher for the Mem1 project.
- **Meta x OpenEnv Hackathon 2026**: Core Organizing Member.

## 7. RAW TECHNICAL SKILLS INVENTORY
- **Languages**: Java, JavaScript, TypeScript, Python, HTML, CSS, SQL
- **Web Development**: React, Node.js, Express.js, FastAPI, RESTful APIs, Socket.io, Tailwind CSS, LangChain, Vite, Esbuild, Prisma ORM
- **Databases & Vector Stores**: PostgreSQL, MySQL, MongoDB, ChromaDB, Pinecone, Redis, IndexedDB, pgvector
- **Security**: JWT, bcrypt, Asymmetric Cryptography (Ed25519), PKI, TOTP, Web Crypto API, AES-256-GCM, PBKDF2
- **Infrastructure & Tools**: Docker, Docker Compose, Git, Vercel, Uvicorn, Celery, Android Studio, Multi-threading, TCP Sockets
- **AI/ML**: Groq API, Google Gemini API, Deepgram API, ElevenLabs API, HuggingFace Transformers, RAG Pipelines, ReAct Loops, Multimodal VLM Prompting
- **Browser Tech**: Chrome Extension (Manifest V3), Service Workers, Content Scripts, DOM Manipulation, ARIA
