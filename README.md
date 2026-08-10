# RankPilot

An AI SEO and content-intelligence platform — **[rankpilot-h3jpc.web.app](https://rankpilot-h3jpc.web.app)**

Point it at a URL and it fetches the page for real, then uses Gemini to score structure, content and readability, suggest keywords, and assess competitive positioning.

Built and operated by [DigiScalability](https://digiscalability.com).

## The idea worth stealing: provenance as a type

AI tools are very good at producing a confident number. The most interesting thing in this codebase is the machinery for refusing to.

Every analysis result carries an explicit **provenance** flag — `measured`, `estimated`, or `simulated` — surfaced in the UI as live / mixed / synthetic badges. It is a typed field derived from whether the crawler actually returned page content, not a label someone remembers to set:

- Results are tagged from the orchestrator's own data-integrity flag, so a run that fell back to synthetic content reports itself as synthetic
- The two unimplemented analysis types return **HTTP 501** rather than a plausible fabrication
- Sales, marketing and finance dashboards render honest empty states for a user with no data; the populated versions sit behind an explicit demo flag

If you take one thing from this repository, take that: make "how do we know this?" a field in your schema, not a footnote in your docs.

## Stack

Next.js 15 (App Router) · TypeScript · React · Tailwind + shadcn/ui · Firebase (Auth, Firestore, Cloud Functions) · Cloud Run · Google Genkit + Gemini · Stripe (Checkout, Billing Portal, Connect) · Google Search Console API · Zod · Playwright

## Running it locally

```bash
npm install
cp .env.example .env.local   # then supply your own keys
npm run dev
```

Every integration is configured through environment variables — see `.env.example` for the full list and `SECRETS.md` for how they map to Secret Manager in deployment. No credentials are committed to this repository.

## Status — read this before judging it

RankPilot is **pre-launch**. There are no paying customers, no revenue, and no users beyond the founder's own test accounts. It is published as an engineering reference, not as a product pitch.

It is also honest about what it is not:

- **Not a rank tracker or backlink tool.** There is no SERP, rank, or backlink data source behind it — no Ahrefs, SEMrush, DataForSEO or Moz integration. Competitor comparisons are model-generated and labelled `simulated` in the code.
- **Not answer-engine measurement.** "AI Visibility" is a model's assessment of a page's content, not measured citations in ChatGPT, Perplexity, or Google AI Overviews.
- **Not a complete integration catalogue.** Of the registered connectors, most are roadmap entries behind an env-gated scaffold.

This snapshot is a fresh publication of the current source. The development history is kept in a private repository.

## License

Source-visible, all rights reserved — see [LICENSE](./LICENSE).
