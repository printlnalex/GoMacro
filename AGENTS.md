## Cursor Cloud specific instructions

### Project overview
Go Macro is a mobile-first nutrition PWA with two services:
- **Frontend** (React + TypeScript + Vite + Tailwind CSS 4) in `frontend/`
- **Backend** (Python FastAPI) in `backend/`

The frontend currently uses 100% mock data and localStorage for auth; it does not call the backend. The backend is a stub API.

### Running services
- **Frontend dev server**: `npm run dev` from repo root (proxies to `frontend/`). Serves at `localhost:5173`.
- **Backend dev server**: `cd backend && source venv/bin/activate && uvicorn main:app --reload`. Serves at `localhost:8000`. API docs at `/docs`.

### Lint / Build / Test
- **Lint**: `npm run lint` from repo root (runs ESLint). Note: there are pre-existing lint errors in `src/context/AuthContext.tsx` (unused vars + fast-refresh warning).
- **Build**: `npm run build` from repo root (runs `tsc -b && vite build`).
- No automated test suite exists yet.

### Gotchas
- `python3.12-venv` system package is required to create the backend virtualenv; it is pre-installed in the environment snapshot.
- The root `package.json` has a `postinstall` hook that cascades `npm install` into `frontend/`, so running `npm install` at the root handles both.
- Backend `requirements.txt` includes `supabase` and `openai` but neither is imported or used yet; no API keys or `.env` files are needed.
