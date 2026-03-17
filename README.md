# Holy Pav Website MVP

Bengaluru-first, bilingual (English + Kannada) food ordering frontend for **Holy Pav**.

## Features

- Next.js App Router + TypeScript + Tailwind CSS
- Premium-minimal theme with responsive pages
- Routes: `/`, `/menu`, `/cart`, `/wishlist`, `/checkout`, `/contact`, `/order/confirmation`
- Cart and wishlist with `localStorage` persistence
- Checkout flow with delivery details, mock payment step, and WhatsApp fallback CTA
- Razorpay-ready payment interface (mock implementation included)
- Basic analytics event hooks for funnel steps
- Unit/integration tests via Vitest

## Environment Variables

Copy `.env.example` to `.env.local` and fill values:

```bash
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxx
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

## Scripts

```bash
npm run dev        # local development
npm run lint       # lint checks
npm test           # run unit/integration tests
npm run build      # production build
npm run start      # run production server
```

## Notes

- Current checkout uses `MockPaymentGateway`.
- `RazorpayPaymentGateway` interface and class are ready for backend/API wiring.
