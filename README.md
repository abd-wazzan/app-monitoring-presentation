# Application Monitoring: Beyond the Usual

A modern web-based presentation about advanced monitoring strategies for the Syrian Developers Event 2025.

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The presentation will be available at:
- **Slides:** http://localhost:3030/
- **Presenter Mode:** http://localhost:3030/presenter/
- **Overview:** http://localhost:3030/overview/

### Build for Production
```bash
# Build static site
npm run build

# Export to PDF
npm run export
```

## 📋 Presentation Outline

1. **Title Slide** - Introduction to modern monitoring
2. **Why Monitor?** - The business case for advanced monitoring
3. **Types Overview** - Infrastructure, RUM, and Synthetic monitoring
4. **Synthetic Monitoring** - Deep dive with code examples
5. **Key Features** - Multi-location testing, complex journeys
6. **Synthetic vs Health Checks** - Why basic monitoring isn't enough
7. **Live Demo** - Interactive monitoring dashboard
8. **Product Analytics** - Understanding user behavior
9. **Real Use Cases** - Practical examples and results
10. **Key Takeaways** - Main lessons and best practices
11. **Q&A** - Tools, resources, and discussion

## 🛠️ Features

- **Interactive Components** - Live monitoring dashboard simulation
- **Code Examples** - Real synthetic monitoring scripts
- **Modern Design** - Professional theme with smooth transitions
- **Presenter Mode** - Speaker notes and presentation controls
- **Export Options** - PDF export for offline sharing

## 🌍 Deployment Options

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

### GitHub Pages
1. Build: `npm run build`
2. Push `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 📱 Presentation Tips

### Navigation
- **Space/Right Arrow:** Next slide
- **Left Arrow:** Previous slide
- **F:** Fullscreen mode
- **O:** Overview mode
- **P:** Presenter mode

### Presenter Mode Features
- Speaker notes for each slide
- Timer and slide counter
- Next slide preview
- Drawing tools

## 🔧 Customization

### Themes
Change the theme in `slides.md` frontmatter:
```yaml
theme: seriph  # or default, apple, etc.
```

### Components
Add custom Vue components in the `components/` directory:
- `MonitoringDashboard.vue` - Interactive monitoring simulation

### Styling
Customize styles using:
- UnoCSS classes in slides
- Custom CSS in `<style>` blocks
- Theme overrides in `style.css`

## 📊 Interactive Elements

The presentation includes:
- **Live Dashboard** - Simulated monitoring data with real-time updates
- **Code Highlighting** - Syntax-highlighted monitoring scripts
- **Click Animations** - Progressive content reveal
- **Smooth Transitions** - Professional slide transitions

## 🎯 Target Audience

- **Developers** interested in modern monitoring strategies
- **DevOps Engineers** looking to improve observability
- **Technical Leaders** evaluating monitoring solutions
- **Syrian Developer Community** - tailored for regional considerations

## 📚 Resources Mentioned

### Synthetic Monitoring Tools
- Playwright (open source)
- Puppeteer (Google)
- DataDog Synthetics
- New Relic Synthetics
- Pingdom

### Product Analytics Tools
- Mixpanel
- Amplitude
- PostHog (open source)
- Google Analytics 4
- Segment

## 🤝 Contributing

Feel free to:
- Add more code examples
- Improve the interactive dashboard
- Suggest additional monitoring tools
- Enhance the visual design
- Add more regional context

## 📄 License

This presentation is open source and available for educational use.

---

**Built with [Slidev](https://sli.dev/) - Presentation slides for developers**
