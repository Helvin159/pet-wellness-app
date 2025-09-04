# Pet Wellness E-commerce App

A modern, full-stack pet wellness e-commerce application built with Next.js, Payload CMS, and Capacitor for cross-platform deployment.

## 🐾 Features

- **E-commerce Storefront**: Complete shopping experience with product catalog, cart, and checkout
- **Product Management**: Admin panel for managing products, categories, and inventory
- **User Authentication**: Secure user registration and login system
- **Order Management**: Complete order processing and tracking system
- **Mobile App**: Cross-platform mobile app using Capacitor
- **Responsive Design**: Modern UI built with Tailwind CSS and Radix UI components
- **Content Management**: Rich content editing with Payload CMS
- **Search & Filtering**: Advanced product search and category filtering

## 🛍️ Product Categories

- **Training & Cleanup**: Dog training pads, cleaning supplies
- **Waste Management**: Biodegradable poop bags, waste disposal
- **Health & Wellness**: Natural supplements, calming treats
- **Feeding Essentials**: Stainless steel bowls, feeding accessories
- **Safety & Comfort**: Orthopedic beds, safety products

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Backend & CMS
- **Payload CMS 3.54** - Headless CMS with admin panel
- **PostgreSQL** - Primary database
- **Lexical Editor** - Rich text editing
- **Sharp** - Image processing

### Mobile
- **Capacitor** - Cross-platform mobile app framework
- **iOS & Android** support

### Development Tools
- **Docker** - Containerized development environment
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Playwright** - E2E testing
- **Vitest** - Unit testing

## 📋 Prerequisites

- **Node.js** 18.20.2+ or 20.9.0+
- **pnpm** 9+ or 10+
- **PostgreSQL** database
- **Docker** (optional, for containerized development)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd pet-wellness-app
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URI=postgresql://username:password@localhost:5432/pet_wellness_db

# Payload CMS
PAYLOAD_SECRET=your-secret-key-here

# Next.js
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000

# Optional: Payload Cloud
PAYLOAD_CLOUD_EMAIL=your-email@example.com
PAYLOAD_CLOUD_API_KEY=your-api-key
```

### 4. Database Setup

Ensure PostgreSQL is running and create a database:

```sql
CREATE DATABASE pet_wellness_db;
```

### 5. Start Development Server

```bash
pnpm dev
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin

## �� Docker Development

For containerized development:

```bash
# Start services
docker-compose up

# Run in background
docker-compose up -d

# Stop services
docker-compose down
```

## 📱 Mobile App Development

### iOS Setup

```bash
# Install iOS dependencies
cd ios && pod install && cd ..

# Build for iOS
npx cap build ios

# Open in Xcode
npx cap open ios
```

### Android Setup

```bash
# Build for Android
npx cap build android

# Open in Android Studio
npx cap open android
```

## �� Testing

```bash
# Run unit tests
pnpm test:int

# Run E2E tests
pnpm test:e2e

# Run all tests
pnpm test
```

## �� Build & Deployment

### Production Build

```bash
pnpm build
pnpm start
```

### Mobile App Build

```bash
# Build web assets
pnpm build

# Sync with mobile platforms
npx cap sync

# Build mobile apps
npx cap build ios
npx cap build android
```

## ��️ Project Structure
