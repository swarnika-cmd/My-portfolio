# Swarnika Somvanshi: Portfolio

Personal portfolio site, live at [my-portfolio-nine-gold-84.vercel.app](https://my-portfolio-nine-gold-84.vercel.app).

- **Focus:** backend engineering (APIs, databases, concurrency, performance)
- **Education:** Scaler School of Technology (Undergraduate Program in Computer Science) and BITS Pilani (B.Sc. (Hons.) Computer Science), 2024 to 2028
- **Location:** Bengaluru, India
- **GitHub:** [github.com/swarnika-cmd](https://github.com/swarnika-cmd)
- **LinkedIn:** [linkedin.com/in/swarnika-somvanshi](https://linkedin.com/in/swarnika-somvanshi)

## Featured projects

| Project | What it is |
|---|---|
| [HTTP/1.1 Server](https://github.com/swarnika-cmd/HTTP-1.1-Server) | HTTP/1.1 server on raw Java sockets with a bounded worker pool, keep-alive, chunked bodies, raw-socket tests and wrk benchmarks |
| [Search Typeahead](https://github.com/swarnika-cmd/SearchTypeahead) | Trie with precomputed top-K, consistent-hash shard routing, write-behind buffer to SQLite |
| [ShieldWall Gateway](https://github.com/swarnika-cmd/ShieldWall-Gateway) | LLM API gateway: PII masking, per-project API keys, atomic Redis budgets, Celery workers |
| [Smarana](https://github.com/swarnika-cmd/Smarana-PrivacyFirstBrain) | Chrome extension with on-device embeddings, AES-GCM encryption and hybrid search |

## Stack

Vite, vanilla JavaScript, GSAP, Lenis. Deployed on Vercel (`vercel.json`: `npm run build`, output `dist/`).

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```

Base design and animation architecture by [Prashant Koirala](https://github.com/prashantkoirala465).
