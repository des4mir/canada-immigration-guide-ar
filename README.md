# Canada Immigration Guide (Arabic)

An Arabic-language, single-page guide for prospective immigrants from Egypt to
Canada. It presents 2026-oriented information about immigration streams,
studying, living costs, in-demand jobs, universities, sources, and frequently
asked questions. The site also includes an optional Gemini-powered chat
assistant that answers using the guide's bundled reference data.

## Tech Stack

- React 19, TypeScript, and Vite
- Tailwind CSS
- Express server for the application and chat API
- Google GenAI SDK for streamed chat responses

## Prerequisites

- Node.js 18 or newer
- A Gemini API key when using the chat assistant

## Getting Started

Install dependencies with your preferred package manager:

```bash
npm install
```

Copy the example environment file and set your Gemini API key:

```bash
Copy-Item .env.example .env
```

Set `GEMINI_API_KEY` in `.env`, then start the development server:

```bash
npm run dev
```

The app is served at `http://localhost:3000`.

## Environment Variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `GEMINI_API_KEY` | Yes, for chat | API key used by the server-side Gemini client. |
| `APP_URL` | No | Hosting URL when a deployment environment needs it. |
| `NODE_ENV` | No | Set to `production` when running the built server. |

Never commit a populated `.env` file. `.env.example` contains placeholder
values only.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts Express with Vite middleware for local development. |
| `npm run build` | Builds the client into `dist/` and bundles the server. |
| `npm start` | Runs the production server from `dist/server.cjs`. |
| `npm run preview` | Serves the Vite production build for local preview. |
| `npm run lint` | Type-checks the project without emitting files. |

## Production Build

```bash
npm run build
$env:NODE_ENV = "production"
npm start
```

The production server serves the built application and exposes `POST /api/chat`.
That endpoint accepts a Gemini `contents` array and returns a stream of
server-sent events. Keep `GEMINI_API_KEY` on the server; it is never needed in
browser code.

## Project Structure

```text
src/
  components/   Page sections and chat interface
  data.ts       Guide content used by the UI and chat context
  App.tsx       Application composition
server.ts       Express server and Gemini chat endpoint
.env.example    Environment variable template
```

## Content Notice

Immigration rules and eligibility can change. The guide's figures and guidance
are informational, may become outdated, and are not legal or immigration
advice. Confirm important decisions with official IRCC resources and qualified
professionals.
