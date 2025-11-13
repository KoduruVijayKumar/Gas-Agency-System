# GasFlow - Online Gas Delivery Platform

A modern, full-featured web application for booking and managing gas delivery services. Built with Next.js, React, and Tailwind CSS.

## Live Demo Features

- Professional landing page with service overview
- User authentication (signup/login)
- Real-time booking system with multiple gas types
- Payment gateway integration (Card, UPI, Wallet)
- User dashboard with order tracking
- Admin dashboard with booking management
- Responsive design for all devices

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone <your-repo-url>
cd gasflow

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Demo Credentials

### User
- Email: user@example.com
- Password: Any password (demo signup enabled)

### Admin
- Email: admin@gasflow.com
- Password: admin123

## Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

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
│       │   ├── bookings/page.tsx   # Bookings list
│       │   ├── book/page.tsx       # Booking form
│       │   ├── payment/page.tsx    # Payment page
│       │   └── profile/page.tsx    # Profile page
│       └── admin/
│           ├── page.tsx            # Admin dashboard
│           └── bookings/page.tsx   # Admin bookings
├── components/
│   ├── user-sidebar.tsx            # User navigation
│   ├── admin-sidebar.tsx           # Admin navigation
│   └── ui/                         # UI components
├── lib/
│   └── utils.ts                    # Utilities
└── public/                         # Static files
\`\`\`

## Technologies Used

- **Frontend**: Next.js 16, React 19.2, TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Tailwind CSS animations
- **Forms**: Native HTML forms with validation

## Features

### User Features
✓ Landing page with features showcase
✓ User registration and login
✓ Dashboard with statistics
✓ Book gas delivery
✓ Multiple gas types (14kg, 5kg, Piped)
✓ Date/time slot selection
✓ Address management
✓ Payment processing (Card, UPI, Wallet)
✓ Order history and tracking
✓ Profile management

### Admin Features
✓ Admin login
✓ Dashboard with key metrics
✓ Booking management
✓ Driver assignment
✓ Order tracking
✓ Revenue analytics
✓ Customer management

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms
- Netlify
- AWS
- DigitalOcean
- Heroku

See DEPLOYMENT_GUIDE.md for detailed instructions.

## Future Enhancements

- Payment gateway integration (Paytm, Razorpay)
- Real-time SMS/Email notifications
- Live tracking with maps
- Driver management system
- Customer support chat
- Advanced analytics
- Mobile app version

## Troubleshooting

**Port 3000 already in use?**
\`\`\`bash
lsof -ti:3000 | xargs kill -9
npm run dev
\`\`\`

**Build errors?**
\`\`\`bash
rm -rf .next node_modules
npm install
npm run dev
\`\`\`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For support, issues, or feature requests, please open an issue on GitHub.

---

**Made with ❤️ by GasFlow Team**
