# 🛍️ Full-Stack E-Commerce Application

A modern, fully-responsive e-commerce platform built with Angular 20.x, featuring a complete shopping experience with user authentication, product management, cart functionality, and admin capabilities. Inspired by Amazon.in's design principles with custom enhancements.
---

## ✨ Key Features

### 🔐 Authentication & User Management
- **User Registration** - Complete signup flow with form validation
- **User Login** - Secure authentication with JWT tokens
- **User Profile** - Personalized user dashboard with order history
- **Session Management** - Persistent login with token refresh
- **Password Recovery** - Email-based password reset functionality

### 🛒 Shopping Experience
- **Product Catalog** - Browse extensive product collections
- **Product Details** - Comprehensive product view with images, descriptions, pricing
- **Category Filtering** - Filter products by multiple categories
- **Advanced Search** - Search products by name, category, or keywords
- **Product Pagination** - Efficient navigation through large product lists
- **Sort & Filter** - Price range, ratings, availability filters

### 🛍️ Shopping Cart
- **Add to Cart** - Seamless product addition with animations
- **Quantity Management** - Increase/decrease item quantities
- **Cart Persistence** - Cart saved across sessions
- **Real-time Updates** - Live cart total and item count
- **Remove Items** - Easy item removal with confirmation
- **Cart Summary** - Detailed price breakdown before checkout

### 🎨 User Interface
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Hamburger Menu** - Collapsible side navigation for mobile users
- **Dynamic Sidebar** - Category navigation with toggle functionality
- **Hero Carousel** - Auto-sliding banner with promotional content
- **Smooth Animations** - Slide-in, fade, and transition effects
- **Toast Notifications** - Real-time feedback for user actions
- **Loading States** - Skeleton screens and progress indicators
- **Modal Dialogs** - Popup confirmations and information displays

### 📱 Mobile-First Approach
- **Touch-Optimized** - Swipe gestures and touch-friendly interface
- **Mobile Navigation** - Bottom navigation bar for easy access
- **Responsive Images** - Optimized image loading for different screen sizes
- **Mobile Menu** - Full-screen overlay navigation
- **Media Queries** - Custom breakpoints for all device sizes

### 🎯 Advanced Functionality
- **Product Grid Layout** - Dynamic 3/4 column grid based on sidebar state
- **Lazy Loading** - On-demand component and image loading
- **State Management** - RxJS-based reactive state management
- **Error Handling** - Comprehensive error catching and user feedback
- **Form Validation** - Real-time input validation with error messages

### 🔔 Notifications & Feedback
- **Success Toasts** - Green notifications for successful actions
- **Error Alerts** - Red notifications for failures
- **Warning Messages** - Yellow notifications for important info
- **Info Popups** - Blue notifications for general information
- **Floating Notifications** - Non-intrusive corner notifications
- **Auto-dismiss** - Timed automatic notification dismissal

---

## 🏗️ Technical Architecture

### Frontend Stack
```
- Angular 20.x (Standalone Components)
- TypeScript 5.x
- RxJS (Reactive Programming)
- Bootstrap 5.3.2
- SCSS/SASS
- Bootstrap Icons
```

### Backend Stack (API Integration Ready)
```
- RESTful API Architecture
- JWT Authentication
- Node.js/Express (or your choice)
- MongoDB/PostgreSQL (database ready)
- File Upload Support
- Rate Limiting & Security
```

### Development Tools
```
- Angular CLI
- Git Version Control
- NPM Package Manager
- Chrome DevTools
- Responsive Design Testing
```


---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v20.x)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app

# Install dependencies
npm install

# Start development server
ng serve

# Open browser
http://localhost:4200
```

### Build for Production

```bash
# Production build
ng build --configuration production

# Output directory
dist/ecommerce-app/
```

---

## 📱 Features Breakdown

### 1. **User Authentication Flow**
```
Signup → Email Verification → Login → Dashboard
↓
Access Protected Routes (Cart, Profile, Orders)
```

### 2. **Shopping Journey**
```
Browse Products → Filter by Category → View Details
↓
Add to Cart → Adjust Quantity → Proceed to Checkout
↓
Enter Shipping Info → Payment → Order Confirmation
```

### 3. **Product Filtering System**
- Multi-select category filters
- Price range slider
- Rating filters
- Availability filters
- Brand filters
- Real-time filter updates

### 4. **Pagination Implementation**
- Configurable items per page (12, 24, 48)
- Page number navigation
- Previous/Next buttons
- Jump to page functionality
- Total results display

### 5. **Cart Management**
- Add products with size/color variants
- Update quantities (min: 1, max: stock limit)
- Remove items with confirmation
- Save for later functionality
- Apply coupon codes
- Calculate tax and shipping
- Display estimated delivery

### 6. **Notification System**
```typescript
// Toast Types
- Success: Product added, Order placed
- Error: Authentication failed, Out of stock
- Warning: Low stock, Session expiring
- Info: New features, Updates
```

---

## 🎨 Design Features

### Responsive Breakpoints
```scss
// Mobile
@media (max-width: 576px) { }

// Tablet
@media (min-width: 577px) and (max-width: 768px) { }

// Desktop
@media (min-width: 769px) and (max-width: 1200px) { }

// Large Desktop
@media (min-width: 1201px) { }
```

### Animation Library
- Slide-in sidebar (300ms ease-in-out)
- Fade-in products (200ms)
- Bounce toast notifications (400ms)
- Carousel transitions (500ms)
- Button hover effects (150ms)
- Loading spinners

### Color Palette
```scss
$primary: #007185;      // Links, CTAs
$secondary: #232f3e;    // Headers, Footer
$accent: #febd69;       // Buttons, Highlights
$success: #28a745;      // Success messages
$danger: #dc3545;       // Error messages
$warning: #ffc107;      // Warnings
$info: #17a2b8;         // Info messages
```

---

## 🔒 Security Features

- JWT Token Authentication
- HTTP-Only Cookies
- CSRF Protection
- XSS Prevention
- SQL Injection Protection
- Rate Limiting
- Secure Password Hashing
- Input Sanitization

---

## 📊 Performance Optimizations

- Lazy Loading Modules
- Image Optimization
- Code Splitting
- Tree Shaking
- AOT Compilation
- Service Worker (PWA ready)
- Gzip Compression
- CDN Integration

---

## 🧪 Testing

```bash
# Unit tests
ng test

# E2E tests
ng e2e

# Code coverage
ng test --code-coverage
```

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

---

## 📈 Future Enhancements

- [ ] Wishlist functionality
- [ ] Product comparison
- [ ] Live chat support
- [ ] Social media integration
- [ ] Multi-language support
- [ ] Currency converter
- [ ] Advanced analytics dashboard
- [ ] Seller portal
- [ ] Order tracking
- [ ] Push notifications
- [ ] Progressive Web App (PWA)
- [ ] Voice search
- [ ] AR product preview

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@HardChamp22](https://github.com/HardChamp22)
- LinkedIn: [Hardik Negi](www.linkedin.com/in/hardik-negi-18h7022)
- Email: negihardik1018@gmail.com

---

## 🙏 Acknowledgments

- Angular Team for the amazing framework
- Bootstrap Team for the UI toolkit
- Community contributors
- Open source libraries used

---


## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

**Made with ❤️ and Angular**
