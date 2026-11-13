# Swarnika Somvanshi: Portfolio

Personal portfolio site, live at [my-portfolio-nine-gold-84.vercel.app](https://my-portfolio-nine-gold-84.vercel.app).

- **Focus:** backend engineering (APIs, databases, concurrency, performance)
- **Education:** B.Sc. (Hons.) Computer Science, BITS Pilani, 2028
- **GitHub:** [github.com/swarnika-cmd](https://github.com/swarnika-cmd)
- **LinkedIn:** [linkedin.com/in/swarnika-somvanshi](https://linkedin.com/in/swarnika-somvanshi)

## Featured projects

| Project | What it is |
|---|---|
| [HTTP/1.1 Server](https://github.com/swarnika-cmd/HTTP-1.1-Server) | HTTP/1.1 server on raw Java sockets with a bounded worker pool, keep-alive, chunked bodies, raw-socket tests and wrk benchmarks |
| [Search Typeahead](https://github.com/swarnika-cmd/SearchTypeahead) | Trie with precomputed top-K, consistent-hash shard routing, write-behind buffer to SQLite; a radix trie cut heap at 1M terms from 4,477 to 529.2 MiB (lookup p99 2.92 µs); 105 tests |
| [ShieldWall Gateway](https://github.com/swarnika-cmd/ShieldWall-Gateway) | LLM API gateway: PII masking, per-project API keys, atomic Redis budgets, Celery workers; 2 workers healthy in 3 of 3 runs at 400 req/s vs 0 of 3 for one worker (200 ms mock upstream); 104 tests |
| [Smarana](https://github.com/swarnika-cmd/Smarana-PrivacyFirstBrain) | Chrome extension with on-device embeddings, AES-GCM encryption and hybrid search |
| [AskMyDoc V2](https://github.com/swarnika-cmd/AskMyDoc-2.O) | Document QA (FastAPI, LangChain, ChromaDB, all-MiniLM-L6-v2; Ollama with a request-time Groq fallback) with an evaluation harness: 150-question golden set over 8 public PDFs; hybrid BM25 + dense retrieval with RRF raised recall@5 from 0.800 to 0.869 over the shipped parent-child design (130 answerable questions, retrieval only) |

## Stack

Vite, vanilla JavaScript, GSAP, Lenis. Deployed on Vercel (`vercel.json`: `npm run build`, output `dist/`).

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```

Base design and animation architecture by [Prashant Koirala](https://github.com/prashantkoirala465).
