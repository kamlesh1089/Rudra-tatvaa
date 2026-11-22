# GitHub Pages visual preview

This repository contains a Next.js project intended for **full-stack hosting later**. GitHub Pages can host a public static **visual preview only**, and must never accept payments or customer booking data.

## Once an empty GitHub repo exists
1. Upload this repository to `kamlesh1089/Rudra-tatvaa` with the GitHub connector or git push.
2. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. The `Publish visual preview (GitHub Pages)` workflow runs after pushing `main`.
4. Check `https://kamlesh1089.github.io/Rudra-tatvaa/` after a successful workflow.

The source app includes a deliberately disabled `/api/bookings` route, which is removed *only during the static Pages build*. Its service pages explain that booking/OTP/payments are not configured and the confirmation button stays disabled.

The original Setav site is a reference, not an integrated calendar. Availability, customer data and payment gateways will be completely independent on the new production host.

**Do not point GoDaddy DNS to GitHub Pages for the production launch.** Choose a full-stack deployment host once database, OTP, payments and admin features are implemented and tested. Do not push secrets to GitHub.

**Temporary asset caveat:** reference photographs and service illustrations still load from Setav URLs. Copy licensed original assets to `public/assets` and update `lib/config.js` before finalizing the website. No sensitive keys are included in this repository.
