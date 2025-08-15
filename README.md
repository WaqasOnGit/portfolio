# Portfolio Website - React + TailwindCSS

A professional, modern portfolio website built with React.js and TailwindCSS. This project showcases modern web development practices with a component-based architecture, smooth animations, and responsive design.

## ✨ Features

- **Modern React Architecture**: Built with React 18, hooks, and functional components
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Smooth Animations**: CSS animations and scroll-triggered reveals
- **Dark/Light Theme**: Toggle between themes with localStorage persistence
- **Component-Based**: Modular, reusable components for easy maintenance
- **Performance Optimized**: Intersection Observer for scroll animations
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🚀 Tech Stack

- **Frontend**: React 18, JSX
- **Styling**: TailwindCSS, Custom CSS
- **Build Tool**: Vite
- **Icons**: Font Awesome 6
- **Fonts**: Inter, JetBrains Mono
- **Animations**: CSS Keyframes, Intersection Observer

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation with theme toggle
│   ├── Hero.jsx        # Hero section with particles
│   ├── About.jsx       # About section with stats
│   ├── Skills.jsx      # Skills and expertise
│   ├── Projects.jsx    # Project showcase with modals
│   ├── Testimonials.jsx # Client testimonials
│   ├── Contact.jsx     # Contact form and info
│   └── Footer.jsx      # Footer with back-to-top
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles and Tailwind
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

## 🎨 Customization

### Colors & Themes
- Edit CSS variables in `src/index.css` under `:root` and `[data-theme="light"]`
- Modify Tailwind config in `tailwind.config.js`

### Content
- Update personal information in each component
- Modify project data in `Projects.jsx`
- Change testimonials in `Testimonials.jsx`
- Update contact information in `Contact.jsx`

### Styling
- Modify Tailwind classes in components
- Add custom CSS in `src/index.css`
- Update animations and keyframes

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## 🎭 Animations

- **Scroll Reveals**: Elements animate in when scrolled into view
- **Hover Effects**: Interactive elements with smooth transitions
- **Particle System**: Floating particles in hero section
- **Typewriter Effect**: Animated text in hero section
- **Smooth Scrolling**: Navigation between sections

## 🔧 Development

### Adding New Components
1. Create component file in `src/components/`
2. Import in `App.jsx`
3. Add to the main render function

### Adding New Sections
1. Create component with proper section ID
2. Add navigation link in `Navbar.jsx`
3. Update scroll handling if needed

### Styling Guidelines
- Use TailwindCSS classes when possible
- Add custom CSS only for complex animations
- Maintain consistent spacing with Tailwind's spacing scale
- Use CSS variables for theme colors

## 📦 Build & Deploy

### Vite Configuration
- Configured for React with JSX support
- Development server with hot reload
- Production build optimization
- Source maps for debugging

### Deployment
- Build the project: `npm run build`
- Deploy the `dist` folder to your hosting service
- Configure your hosting service for SPA routing if needed

## 🐛 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- --port 3001
```

**TailwindCSS not working**
```bash
# Rebuild Tailwind
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
```

**Dependencies issues**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue on GitHub or contact me directly.

---

**Built with ❤️ using React and TailwindCSS**
