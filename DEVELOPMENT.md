# Development Workflow

## For Claude Code Sessions

**MANDATORY: Documentation Protocol**

Every Claude Code session working on this project MUST:

1. **Start Session:**
   - Read the main [README.md](README.md) for project overview
   - Read the latest conversation log in [docs/conversations/](docs/conversations/)
   - Review [CHANGELOG.md](CHANGELOG.md) for recent changes

2. **During Session:**
   - Document all user prompts (full quotes)
   - Document all Claude responses (full quotes)
   - Note all actions taken (file operations, commands run)
   - Record decisions made

3. **End Session:**
   - Update or create conversation log in `docs/conversations/YYYY-MM-DD-topic.md`
   - Update CHANGELOG.md with any code changes
   - Ensure all exchanges are documented

## Conversation Log Format

See [docs/conversations/2026-01-28-project-kickoff.md](docs/conversations/2026-01-28-project-kickoff.md) for the established format.

### Required Sections:
- Session header (date, participants, summary)
- Full conversation with exchanges numbered
- User prompts (quoted)
- Claude responses (quoted)
- Actions taken
- Decisions made
- Files created/modified
- Follow-up items

## File Naming Convention

Conversation logs: `YYYY-MM-DD-brief-topic-description.md`
- Multiple sessions same day: Continue in same file or add `-session-2` suffix
- New topics: Create new file with descriptive name

## Why This Matters

Since Claude Code sessions start fresh each time:
- Documentation is the ONLY way to maintain project context
- Conversation logs help understand past decisions
- Future Claude instances need this to continue work effectively
- User can track progress and reference past discussions

---

## Security Policy for Documentation

**MANDATORY: Sensitive Information Handling**

When writing conversation logs and documentation, Claude MUST:

1. **Omit** any `.env` variable names, values, or structure
2. **Omit** any API key references or redacted outputs
3. **Only document** that a feature was implemented (e.g., "Email integration was added") without configuration specifics
4. **Not reference** commands used to inspect environment files or sensitive configurations
5. **Never include** database connection strings, authentication tokens, or credentials

This policy ensures that conversation logs remain safe to commit to version control without exposing sensitive project configuration.

---

## Quick Start for New Sessions

When resuming work:
1. User should mention: "Check DEVELOPMENT.md and follow the documentation protocol"
2. Claude should read: README.md → latest conversation log → CHANGELOG.md
3. Ask user what they want to work on this session
4. Document everything as we go
5. Update conversation log before session ends
