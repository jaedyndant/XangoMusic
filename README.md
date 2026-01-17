# Xango Music - Redesigned Website

A modern, responsive redesign of the Xango Music website built with Next.js 14, featuring a curated world music record store, distribution services, and magazine.

About Xango Music

Xango Music is a comprehensive world music ecosystem featuring:

- **Record Store**: Curated collection of world music vinyl and CDs
- **Xango Music Distribution (XMD)**: Global distribution services for world music artists
- **Xangoma Magazine**: In-depth articles, reviews, and cultural insights

Key Features

### Design Principles
- **Immediate Understanding**: Clear communication of Xango's identity as a world music specialist
- **Visual Hierarchy**: Clean, uncluttered layout with generous spacing
- **Brand Consistency**: Preserved brand colors with purposeful use of Xango red
- **Responsive Design**: Optimized for all devices and screen sizes

### Core Functionality
- **Sticky Navigation**: Always-visible header with logo, slogan, and navigation
- **Advanced Catalogue**: Visual grid/list views with filtering and search
- **Facebook-Style News Feed**: Editorial news and reviews presentation
- **Integrated Ecosystem**: Clear connections between store, distribution, and magazine

### Technical Features
- **Next.js 14**: Modern React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling with custom Xango theme
- **Responsive Components**: Mobile-first design approach
- **Performance Optimized**: Fast loading and smooth interactions

Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd XangoMusic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Sticky navigation header
│   ├── Footer.tsx      # Site footer
│   ├── NewsFeed.tsx    # Facebook-style news feed
│   ├── FeaturedReleases.tsx
│   ├── CatalogueGrid.tsx
│   └── CatalogueFilters.tsx
├── catalogue/          # Music catalogue pages
├── news/              # News and reviews
├── distribution/      # XMD distribution services
├── magazine/          # Xangoma magazine
├── contact/           # Contact page
├── globals.css        # Global styles and Tailwind
├── layout.tsx         # Root layout
└── page.tsx          # Homepage
```

Design System

### Colors
- **Xango Red**: `#DC2626` - Primary brand color for links and CTAs
- **Nardo Grey**: `#4A4A4A` - Navigation and container backgrounds
- **Dark**: `#1F2937` - Text and headings
- **Light**: `#F9FAFB` - Backgrounds and subtle elements

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: Clear distinction between headings, body text, and metadata

### Components
- **xango-button**: Primary action buttons
- **xango-card**: Content cards with consistent styling
- **xango-link**: Branded link styling
- **xango-container**: Consistent page width and padding

Catalogue Features

### Visual Layout
- **Grid/List Views**: Toggle between visual grid and detailed list
- **Large Cover Art**: Prominent album artwork display
- **Clean Information**: Artist, title, medium, country, style, and price
- **No Database Clutter**: Removed info icons, tips, and unnecessary elements

### Filtering & Search
- **Dropdown Filters**: Medium (vinyl/CD), style, country, price range
- **Search Functionality**: Artist, title, country, and style search
- **Quick Filters**: Preset filter combinations

### Interactive Elements
- **Hover Effects**: Smooth transitions and overlay actions
- **Favorites**: Heart icon for wishlist functionality
- **Share Options**: Social sharing capabilities
- **Add to Cart**: Streamlined purchase flow

News & Reviews

### Facebook-Style Feed
- **Editorial Layout**: Clean, non-cluttered presentation
- **Content Types**: News, reviews, artist features, behind-the-scenes
- **Engagement**: Like, comment, and share functionality
- **Visual Content**: Image support with proper aspect ratios

### Content Categories
- **Album Reviews**: In-depth music analysis
- **Artist Interviews**: Personal stories and insights
- **News Updates**: Industry news and announcements
- **Cultural Features**: Background and context articles

Distribution & Magazine

### Xango Music Distribution (XMD)
- **Service Overview**: Global distribution capabilities
- **Artist Development**: Support and growth services
- **Analytics**: Performance insights and reporting
- **Partnership**: Clear call-to-action for artists

### Xangoma Magazine
- **Article Showcase**: Featured content with excerpts
- **Category Organization**: Interviews, reviews, features, analysis
- **Newsletter Signup**: Subscription management
- **Archive Access**: Historical content browsing

Responsive Design

### Mobile-First Approach
- **Collapsible Navigation**: Hamburger menu for mobile
- **Touch-Friendly**: Appropriate button sizes and spacing
- **Optimized Images**: Responsive image handling
- **Performance**: Fast loading on all devices

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Organization
- **Components**: Reusable UI elements
- **Pages**: Route-based page components
- **Styles**: Tailwind utilities with custom classes
- **Types**: TypeScript interfaces and types

Future Enhancements

### Phase 2 Features
- **User Accounts**: Registration and login
- **Shopping Cart**: Full e-commerce functionality
- **Payment Integration**: Secure checkout process
- **Order Tracking**: Purchase history and status
- **Wishlist**: Saved items functionality

### Content Management
- **Admin Panel**: Content management system
- **Dynamic Content**: Database-driven catalogue
- **SEO Optimization**: Meta tags and structured data
- **Analytics**: User behavior tracking

Support

For questions about the redesign or technical implementation:
- **Email**: dev@xangomusic.com
- **Documentation**: See inline code comments
- **Issues**: Use GitHub issues for bug reports

License

This project is proprietary to Xango Music. All rights reserved.

---

Built with care for world music lovers everywhere.