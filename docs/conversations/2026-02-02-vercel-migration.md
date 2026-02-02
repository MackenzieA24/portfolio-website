# Conversation Log: Vercel Migration & Project Cleanup
**Date:** February 2, 2026
**Session:** Architecture Migration
**Participants:** User, Claude Code

---

## Summary
Migrated the portfolio from Express backend to Vercel serverless architecture. Removed the entire server folder, set up Resend email integration for the contact form, added security headers, and significantly simplified the project structure.

---

## Key Changes Made

### 1. Vercel Serverless Migration
- Created `api/contact.js` - Vercel serverless function using Resend API
- Configured `vercel.json` with build settings and security headers
- Frontend now uses relative URLs (`/api/contact`) instead of `localhost:5000`

### 2. Server Folder Removal
- Deleted entire `server/` directory (~200MB of dependencies)
- Removed Express, Nodemailer, Mongoose, Helmet, and all Express middleware
- Project no longer has MongoDB dependency

### 3. Environment Simplification
- Moved `.env` from `server/` to project root
- Removed `client/.env` and `client/.env.example` (no longer needed)
- Simplified `.env.example` to only Resend variables

### 4. Security Headers Added
Security headers configured in `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()

### 5. Testing Infrastructure
- Removed `server/__tests__/` (tested Express routes that no longer exist)
- Created `api/contact.test.js` for Vercel function (tests need mock fixes)
- Added Vitest to root `package.json`

---

## Decisions Made

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Email Service | Resend with onboarding sender | No domain verification needed, serverless-friendly |
| Local Development | `vercel dev` | Matches production environment |
| Rate Limiting | Removed (rely on Vercel + Resend limits) | Serverless doesn't support in-memory rate limiting |
| Server Folder | Delete entirely | Dead code for Vercel deployment |
| Testing | Vitest at root level | Consistent with client, modern test runner |

---

## Files Created

1. **api/contact.js** - Vercel serverless function for contact form
2. **api/contact.test.js** - Tests for the serverless function
3. **vercel.json** - Vercel deployment configuration
4. **package.json** (root) - Root package with vitest and resend
5. **vitest.config.js** - Test configuration

---

## Files Deleted

1. **server/** - Entire directory removed
   - server.js, routes/, middleware/, utils/, config/, models/
   - package.json, node_modules/
   - __tests__/
2. **client/.env** - No longer needed
3. **client/.env.example** - No longer needed

---

## Files Modified

1. **.env.example** - Simplified to Resend-only variables
2. **client/src/services/api.js** - Uses relative URLs by default

---

## Project Structure After Changes

```
portfolio-website/
├── api/
│   ├── contact.js          # Vercel serverless function
│   └── contact.test.js     # API tests
├── client/
│   ├── src/                # React frontend
│   ├── package.json
│   └── node_modules/
├── docs/
│   └── conversations/      # Session logs
├── .env                    # RESEND_API_KEY, CONTACT_EMAIL
├── .env.example
├── package.json            # Root (vitest, resend)
├── vercel.json             # Deployment config
└── node_modules/           # Root deps
```

---

## Follow-Up Topics for Next Session

1. Deploy to Vercel and test contact form
2. Fix API test mocking issues (vi.mock with ES modules)
3. Consider removing unused React Router DOM
4. Test Resend email delivery in production

---

## Notes

- API tests currently fail due to ES module mocking complexity with vitest
- Project went from 3 package.json files to 2
- Removed ~200MB of server dependencies
- Contact form uses `onboarding@resend.dev` sender (no domain verification required)

---

**Files Modified:** 5
**Files Created:** 5
**Files Deleted:** ~15+ (entire server folder)
**Next Session Goals:** Deploy to Vercel, test contact form in production
