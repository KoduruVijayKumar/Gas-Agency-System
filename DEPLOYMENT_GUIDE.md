# GasFlow - Gas Agency System Deployment Guide

## Project Overview
GasFlow is a complete online gas booking and delivery platform with user dashboard, admin panel, real-time bookings, and payment integration capabilities.

## Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager
- Git (for version control)

### Installation Steps

1. **Clone or Download the Repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd gasflow
   npm install
   \`\`\`

2. **Run Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**
   \`\`\`bash
   npm run build
   npm start
   \`\`\`

## Features Included

### User Features
- Landing page with features showcase
- User authentication (Login/Signup)
- Dashboard with order statistics
- Booking management system
- Multiple gas types and quantities
- Date/time slot selection
- Address management
- Payment gateway integration (Card, UPI, Wallet)
- Profile management
- Order history and tracking

### Admin Features
- Admin login with demo credentials (admin@gasflow.com / admin123)
- Admin dashboard with key metrics
- Booking management and tracking
- Driver assignment
- Order status management
- Revenue tracking
- Customer analytics

## Demo Credentials

### User Account
- Email: user@example.com
- Password: Any password (demo signup enabled)

### Admin Account
- Email: admin@gasflow.com
- Password: admin123

## File Structure

\`\`\`
gasflow/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── auth/
│   │   ├── login/page.tsx          # User login
│   │   ├── signup/page.tsx         # User signup
│   │   └── admin-login/page.tsx    # Admin login
│   └── dashboard/
│       ├── user/
│       │   ├── page.tsx            # User dashboard
│       │   ├── bookings/page.tsx   # User bookings list
│       │   ├── book/page.tsx       # Booking form
│       │   ├── payment/page.tsx    # Payment page
│       │   └── profile/page.tsx    # User profile
│       └── admin/
│           ├── page.tsx            # Admin dashboard
│           └── bookings/page.tsx   # Admin bookings management
├── components/
│   ├── user-sidebar.tsx            # User navigation
│   ├── admin-sidebar.tsx           # Admin navigation
│   └── ui/                         # UI component library
├── lib/
│   └── utils.ts                    # Utility functions
├── hooks/
│   └── use-toast.ts                # Toast hook
└── public/                         # Static assets

\`\`\`

## Deployment Options

### Option 1: Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

### Option 2: Deploy to Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy

### Option 3: Deploy to Other Platforms

- **Heroku**: Use Node.js buildpack, set start command to `npm start`
- **AWS**: Use Elastic Beanstalk or AppRunner
- **DigitalOcean**: Use App Platform

## Environment Variables

No environment variables are required for the demo. For production:

- Add your payment gateway keys (Paytm, Razorpay, etc.)
- Database connection strings
- Email service credentials
- API endpoints

## Tech Stack

- **Frontend**: Next.js 16, React 19.2, TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: localStorage (demo), React hooks
- **Forms**: HTML5 forms with validation
- **UI Effects**: Tailwind animations

## Key Features to Implement Next

1. Backend API integration
2. Payment gateway (Paytm, Razorpay)
3. Database (PostgreSQL, MongoDB)
4. Email notifications
5. SMS notifications
6. Real-time tracking with WebSockets
7. User authentication with JWT
8. Admin analytics and reports
9. Driver management system
10. Customer support chat

## Troubleshooting

### Port Already in Use
\`\`\`bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Then run: npm run dev
\`\`\`

### Build Errors
\`\`\`bash
# Clear Next.js cache
rm -rf .next
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run dev
\`\`\`

### Module Not Found
\`\`\`bash
npm install
npm run dev
\`\`\`

## Support & Documentation

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com
- shadcn/ui: https://ui.shadcn.com
- React: https://react.dev

## License

This project is open source and available under the MIT License.

## Contact

For support, please reach out to: support@gasflow.com
