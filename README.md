# Yara Vasquez - Portfolio Website

Personal portfolio showcasing my work as a software engineer specializing in accessible web development and inclusive design.

## 🌐 Live Site

**Coming soon:** `https://yarahub25.github.io/portfolio/`

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Custom Properties, Grid, Flexbox), Vanilla JavaScript
- **Design:** Custom design with focus on accessibility and minimalism
- **Fonts:** Google Fonts (Poppins, Inter)
- **Images:** Optimized with TinyPNG for performance
- **Hosting:** GitHub Pages
- **Accessibility:** WCAG 2.1 AA compliant, keyboard navigation, screen reader tested

## ✨ Features

- ✅ **Responsive design** - Mobile-first approach (320px to 4K)
- ✅ **Accessible navigation** - Full keyboard and screen reader support
- ✅ **Smooth animations** - Marquee tickers with pause-on-hover
- ✅ **Project showcase** - CareConnect healthcare app with 10 screenshots
- ✅ **High contrast** - All colors meet WCAG AA standards (8.35:1 ratio)
- ✅ **Performance optimized** - Lazy loading images, GPU-accelerated animations
- ✅ **No dependencies** - Pure HTML/CSS/JS (no build tools required)

## 🚀 Running Locally

### Option 1: Simple HTTP Server
```bash
# Clone the repo
git clone https://github.com/YaraHub25/portfolio.git
cd portfolio

# Start a local server (Python)
python3 -m http.server 8000

# Or using Node.js
npx serve

# Open in browser
# http://localhost:8000
```

### Option 2: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. Portfolio opens at `http://127.0.0.1:5500/`

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── style.css               # All styles (including animations)
├── script.js               # JavaScript interactions
├── Yara.jpg               # Hero background image
├── assets/
│   └── careconnect/       # CareConnect project screenshots (10 images)
│       ├── splash.png
│       ├── login-page.png
│       ├── demo.png
│       ├── patient-homepage.png
│       ├── patient-features.png
│       ├── notification-banner.png
│       ├── caregiver-homepage.png
│       ├── caregiver-features.png
│       ├── accessibility.png
│       └── profile-settings.png
├── README.md              # This file
└── ACCESSIBILITY.md       # Accessibility compliance checklist
```

## ♿ Accessibility

This site is built with accessibility as a **core principle**, not an afterthought:

### WCAG 2.1 AA Compliance ✓
- ✅ **Color Contrast:** All text meets minimum 4.5:1 ratio (accent color: 8.35:1)
- ✅ **Semantic HTML:** Proper heading hierarchy, landmark regions
- ✅ **ARIA Labels:** Descriptive labels on all interactive elements
- ✅ **Keyboard Navigation:** Full site navigable with Tab/Shift+Tab/Enter
- ✅ **Screen Reader Support:** Tested with VoiceOver, NVDA, JAWS
- ✅ **Focus Indicators:** Visible 2px amber outline on all focusable elements
- ✅ **Reduced Motion:** Respects `prefers-reduced-motion` preference
- ✅ **Touch Targets:** All interactive elements ≥ 44x44px (mobile standards)
- ✅ **Alt Text:** Descriptive alt text on all images
- ✅ **Responsive:** Readable at 200% zoom, no horizontal scrolling

### Testing Tools Used
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - All colors pass ✓
- axe DevTools - No violations ✓
- Chrome Lighthouse - Accessibility score: 100 ✓
- WAVE - No errors ✓

See [ACCESSIBILITY.md](./ACCESSIBILITY.md) for complete checklist and testing procedures.

## 🎨 Design Highlights

- **Full-width hero background** with gradient overlay for text readability
- **Animated marquee tickers** showing value propositions and tech stack
- **Mobile-sized portfolio images** (max 350px) for optimal viewing
- **Smooth scrolling navigation** with active state indicators
- **Hover effects** with subtle transforms and shadows
- **Professional color scheme** - Dark theme with warm amber accents

## 📬 Contact

**Yara Vasquez**
- 📧 Email: [yaralili15@gmail.com](mailto:yaralili15@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/yaralili](https://www.linkedin.com/in/yaralili/)
- 🐙 GitHub: [github.com/YaraHub25](https://github.com/YaraHub25)
- 📸 Instagram: [instagram.com/yaralili](https://www.instagram.com/yaralili/)

## 🎓 Education

<<<<<<< HEAD
**Master of Science in Software Engineering** - University of Maryland Global Campus (December 2024)
=======
**Master of Science in Software Engineering** - University of Maryland Global Campus (December 2025)
>>>>>>> f4bb6bf803ddcb12e3f867c79c85f2b57fb52e37

## 🚧 Roadmap

- [ ] Add Resume section with downloadable PDF
- [ ] Add more projects (second and third project cards)
- [ ] Implement contact form with validation
- [ ] Add blog section for technical writing
- [ ] Enable GitHub Pages deployment
- [ ] Add animations on scroll for project cards

## 📄 License

MIT License - Feel free to fork and use as a template! Just give credit and remove my personal info.

---

<<<<<<< HEAD
**Built with ♥ by Yara Vasquez** | Focused on accessibility, inclusivity, and clean code
=======
**Built with ♥ by Yara Vasquez** | Focused on accessibility, inclusivity, and clean code
>>>>>>> f4bb6bf803ddcb12e3f867c79c85f2b57fb52e37
