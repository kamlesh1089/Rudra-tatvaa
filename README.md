# RudraTatvaa — website source

This is an **initial independent implementation**, not the completed, production-ready website.

The same site is intended for `RudraTatvaa.com`; Setav is a reference/test site only. No cross-platform booking synchronization is required.

## GitHub Pages (static visual preview)

A Pages workflow is included for the `kamlesh1089/Rudra-tatvaa` repository. See `docs/GITHUB_PAGES.md`. It publishes a **static website preview with booking payments deliberately disabled**. GitHub Pages cannot run the server-side booking, OTP or payment backend.

## Local development

```bash
npm install
npm run dev
```

## Independent production plan

Use a server-capable host (for example Vercel or an appropriate Hostinger plan), provision a database and secure admin panel, set up the booking scheduler, OTP authentication, payment provider, webhook verification and notification flows, then connect the GoDaddy domain. Publish only after full E2E acceptance testing.

Original detailed handoff: `docs/IMPLEMENTATION_NOTES.md`.

## Preview limits

This GitHub Pages build is a static visual preview. It is not a live appointment system. Booking forms are displayed for comparison only and cannot be submitted. Customer data is not saved; OTP and payments are disabled. The design is a close initial implementation, not yet pixel-perfect.
