# Claude Code Session Start Checklist

Use this checklist at the beginning of EVERY Claude Code session for this project.

## For User: Starting a New Session

When you start a new Claude Code session, say:

> "Please read DEVELOPMENT.md and follow the documentation protocol for this project."

Or more simply:

> "Check the session start checklist and document our conversation."

## For Claude: Session Start Protocol

- [ ] Read [README.md](README.md) - Project overview and current status
- [ ] Read [DEVELOPMENT.md](DEVELOPMENT.md) - Documentation requirements
- [ ] Read latest conversation log in [docs/conversations/](docs/conversations/)
- [ ] Read [CHANGELOG.md](CHANGELOG.md) - Recent changes
- [ ] Ask user what they want to work on this session
- [ ] Confirm you will document the conversation

## During Session

- [ ] Quote all user prompts verbatim
- [ ] Quote all your conversational responses
- [ ] Document all actions taken (files read, commands run, etc.)
- [ ] Note all decisions made
- [ ] Track files created or modified

## End of Session

- [ ] Update or create conversation log in `docs/conversations/`
- [ ] Update CHANGELOG.md if code changes were made
- [ ] Ensure all exchanges are documented
- [ ] List action items for next session

---

## Quick Reference

**Conversation log location:** `docs/conversations/YYYY-MM-DD-topic.md`
**Template:** [docs/conversations/TEMPLATE.md](docs/conversations/TEMPLATE.md)
**Documentation guide:** [DEVELOPMENT.md](DEVELOPMENT.md)

---

**Why this matters:** Each Claude Code session starts fresh with no memory. Documentation is the only continuity mechanism.
