# 🧠 DocuMind AI

🤖 A real-time AI-powered PDF chatbot using LangChain & LangGraph to help users interact with documents through natural conversation.

---

## 📌 Overview

This project uses a Retrieval Augmented Generation (RAG) pipeline to process PDF documents, generate semantic embeddings, and answer user queries with context-aware AI responses.

The system leverages LangGraph agent workflows for document ingestion and retrieval orchestration, Cohere embeddings for semantic search, Supabase as a vector database, and Groq-powered Llama 3 for fast response generation.

Designed to explore intelligent document understanding and scalable AI-powered knowledge systems.

---

## 🚀 Key Features

- 🧠 **AI-Powered PDF Q&A:** Ask contextual questions from uploaded PDF documents.
- ⚡ **LangGraph Agent Workflows:** Intelligent orchestration for ingestion, retrieval, and response generation.
- 🔍 **Semantic Vector Search:** Uses Cohere embeddings with Supabase vector storage for accurate retrieval.
- 🎥 **Real-Time Streaming Responses:** Streams AI-generated answers instantly for smoother interaction.
- 📄 **Source Citations with Page Numbers:** References exact PDF pages used for generating responses.
- 💻 **Responsive Next.js Frontend:** Interactive UI designed for seamless document interaction.
- 🧩 **Modular Architecture:** Easy to extend for enterprise AI systems and multi-document workflows.

---

## 📂 Document / System Details

This project works with user-uploaded PDF documents.

- 📄 Supports document ingestion and conversational querying.
- 🗂 Embeddings are stored persistently in Supabase vector storage.
- ⚡ Optimized for fast semantic retrieval and real-time AI response generation.
- 🏷 Designed as a foundation for AI-powered document management systems and research assistants.

---

## 📁 Repository Structure

```bash
📦 documind-ai/
├── frontend/          # Next.js frontend application
├── backend/           # LangGraph + LangChain backend
├── scripts/           # Utility and ingestion scripts
├── README.md
└── package.json
```

---

## ⚙️ Installation & Setup

⚠️ Note: Ensure both frontend and backend services are running for complete functionality.

### 🔧 Requirements

Install dependencies:

```bash
yarn install
```

### ▶️ Run the Project

Clone and run:

```bash
git clone https://github.com/vishishta2805/documind-ai.git

cd documind-ai

cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

yarn install
yarn dev
```

---

## 🧠 System Architecture

A RAG-based AI pipeline built with LangChain and LangGraph:

- **Input:** Uploaded PDF documents + user query
- **Ingestion:** PDF → text chunks → semantic embeddings
- **Storage:** Embeddings stored in Supabase vector database
- **Retrieval:** Relevant chunks fetched using vector similarity search
- **Generation:** Groq-powered Llama 3 generates grounded responses
- **Output:** Streamed AI response with source page citations

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, TypeScript
- **AI Frameworks:** LangChain, LangGraph
- **LLM:** Groq (Llama 3)
- **Embeddings:** Cohere
- **Database:** Supabase Vector Store
- **Architecture:** Retrieval Augmented Generation (RAG)

---

## 🎯 Motivation

Extracting useful information from large documents is time-consuming and inefficient.

This project explores how AI-powered retrieval systems and agent workflows can simplify document interaction, improve knowledge accessibility, and act as a foundation for intelligent enterprise search systems and research assistants.

---

## 🔮 Future Improvements

- 🔐 User authentication and persistent chat history
- 📁 Multi-document conversational memory
- 🌐 Full-scale cloud deployment
- 📱 Mobile responsive optimization
- 📊 Analytics dashboard for document insights
- 📑 Support for DOCX and Excel documents
- 🚀 Advanced retrieval strategies and hybrid search

---

## 👨‍💻 Author

**Vishishta Reddy**  
🎓 Computer Science Student  

🌐 GitHub: https://github.com/vishishta2805

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch:

```bash
git checkout -b feature-name
```

3. Commit your changes:

```bash
git commit -m "Add feature"
```

4. Push to your branch:

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📜 License

MIT License — see the [LICENSE](./LICENSE) file for details.
