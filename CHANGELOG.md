# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0] - 2026-01-30

### Added
- Custom "MA" gradient favicon matching site branding
- Themed icons for project cards (bar chart, snowflake, code brackets)
- Resend email integration for contact form
- Email service utility (server/utils/emailService.js)
- Security policy for documentation in DEVELOPMENT.md

### Changed
- Updated page title to "Mackenzie Aylor | Portfolio"
- Fixed dotenv loading order in server.js (loads before other requires)
- Updated .env.example with email service configuration

### Removed
- LinkedIn link from footer (now shows GitHub and Email only)

## [0.2.0] - 2026-01-29

### Added
- Dark theme with neon cyan/purple accents
- Framer Motion animations throughout
- Hover-to-expand Skills section with uniform icons
- Glass morphism card styling
- Floating orbs in Hero section

### Changed
- Complete visual redesign of all sections
- Removed scroll indicator from Hero

## [0.1.1] - 2026-01-29

### Added
- Security hardening (Helmet, CORS, rate limiting)
- Input validation with express-validator
- Error boundaries for React components
- Test infrastructure (Jest/Supertest for backend, Vitest for frontend)
- Resume content for Mackenzie Aylor

## [0.1.0] - 2026-01-28

### Added
- Project initialization
- Development roadmap created
- Technology stack defined (React + Node.js)
- Phase-based development plan established
- Chat history tracking methodology documented

### Decisions Made
- Frontend: React
- Backend: Node.js
- Documentation approach: Local markdown files + git history

### Next Steps
- Finalize UI framework choice
- Choose database system
- Set up initial project scaffolding
