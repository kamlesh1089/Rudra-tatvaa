# RudraTatvaa.com — Independent website (implementation starter)

This repository is the **first implementation pass**, not a production-ready replica. The original Setav site stays untouched and will be kept as an internal reference/test site. The two booking databases and calendars will remain independent; **no synchronization** is required.

## Included now
- Full homepage section order and brand palette based on reference inspection.
- Main section copy, images references, navigation, FAQ, contact email functionality.
- A catalogue of 30 priced service variants and unique URL routes.
- Booking UI with forms differentiated by appointment vs asynchronous readings.
- Mobile and desktop layouts.
- A **disabled** booking submission endpoint, intentionally preventing collection of personal data or payment before backend readiness.

## Not yet production complete
- Pixel-by-pixel visual parity: requires side-by-side screenshot review and adjustment.
- Local copies of images (current preview uses Setav images while new host assets are pending); see `docs/ASSET_MANIFEST.md`.
- Independent appointment availability, inventory holds, timezone conversion and confirmation.
- OTP provider integration, secure session management and identity verification.
- Production database (encrypted customer data), retention/deletion procedures, backend management, privacy policy.
- Razorpay or approved payment provider integration including webhooks, refunds and reconciliation.
- Admin panel, notifications, rescheduling and cancellation policies.
- Google/GoDaddy domain DNS, SSL, search metadata and production deployment.

## Development
```
npm install
npm run dev
```
Visit http://localhost:3000.

## Production acceptance gates
1. All approved photos/assets hosted from RudraTatvaa.com.
2. Desktop + mobile visual parity audit (page and all 30 service links).
3. Appointment slots computed only from the new website's availability database. No Setav integration.
4. Transaction-safe slot holds to avoid double booking **within RudraTatvaa.com**.
5. Valid mobile OTP verification and payment webhook before accepting a booking.
6. No sensitive customer data sent to third parties except configured processors.
7. E2E test of paid booking, failed payment, duplicate payment, rescheduling, and refunds.
8. User approval to connect the GoDaddy domain and enable indexing.

**Security:** The code intentionally returns HTTP 503 on booking attempts; never turn on checkout before the independent backend is configured.
