# GasFlow - Online Gas Delivery Platform

**🌐 Live Website:** https://gas-agency-system-mjd3.vercel.app

---

## What is GasFlow?

GasFlow is a modern web application for booking and managing gas delivery services. Users can book gas, make payments, and track orders. Admins can manage bookings and assign drivers.

---

## Features

### User Features
- Create account & login
- Book gas with date/time selection
- Multiple payment methods (Card, UPI, Wallet)
- Track order status
- View booking history
- Manage profile

### Admin Features
- View all bookings
- Update delivery status
- Assign drivers
- See analytics & revenue
- Manage customers

---

## Demo Login

**User Account:**
\`\`\`
Email: user@example.com
Password: (any password)
\`\`\`

**Admin Account:**
\`\`\`
Email: admin@gasflow.com
Password: admin123
\`\`\`

---

## Quick Start

### Install & Run Locally

\`\`\`bash
# Clone repo
git clone https://github.com/KoduruVijayKumar/Gas-Agency-System.git
cd Gas-Agency-System

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

Visit http://localhost:3000

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

---

## Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Deployment:** Vercel

---

## Project Structure

\`\`\`
app/
├── page.tsx                    # Landing page
├── auth/
│   ├── login/page.tsx         # User login
│   ├── signup/page.tsx        # User signup
│   └── admin-login/page.tsx   # Admin login
└── dashboard/
    ├── user/
    │   ├── page.tsx           # User dashboard
    │   ├── bookings/page.tsx  # Booking list
    │   ├── book/page.tsx      # Create booking
    │   ├── payment/page.tsx   # Payment
    │   └── profile/page.tsx   # User profile
    └── admin/
        ├── page.tsx           # Admin dashboard
        └── bookings/page.tsx  # Admin bookings

components/
├── user-sidebar.tsx           # User navigation
├── admin-sidebar.tsx          # Admin navigation
└── ui/                        # UI components
\`\`\`

---

## How to Deploy on Vercel (Free)

1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Select "Import Git Repository"
4. Choose "Gas-Agency-System"
5. Click "Deploy"
6. Your live website is ready!

---

## Troubleshooting

### Port 3000 already in use?
\`\`\`bash
# Kill process using port 3000
lsof -ti:3000 | xargs kill -9
\`\`\`

### Build errors?
\`\`\`bash
rm -rf .next node_modules
npm install
npm run dev
\`\`\`

---

## Future Enhancements

- Real payment gateway (Paytm/Razorpay)
- Email & SMS notifications
- Live GPS tracking
- Driver app
- Rating & reviews
- Subscription plans

---

## Support

- **GitHub:** https://github.com/KoduruVijayKumar/Gas-Agency-System
- **Report Issues:** https://github.com/KoduruVijayKumar/Gas-Agency-System/issues
- **Email:** support@gasflow.com

---

## License

MIT License - Free to use and modify


Created By
K.Vijay Kumar Reddy

THANK YOU
