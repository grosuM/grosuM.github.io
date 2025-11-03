# Starter Transport - Professional Transport & Logistics Website

A modern, bilingual (Polish/English) website for a transport and freight forwarding company.

## 🌟 Features

- **Fully Bilingual**: Complete Polish and English translations with easy language switching
- **Modern Design**: Clean, professional design inspired by leading transport companies
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **Performance**: Optimized with minimal dependencies and fast loading

## 📄 Pages

1. **Homepage (index.html)** - Professional landing page with:
   - Hero section with call-to-action
   - Features showcase (Experience, Reliability, Safety, Competitive pricing)
   - Trust indicators

2. **About Us (about.html)** - Company information including:
   - Mission statement
   - Company values
   - Team introduction
   - Experience and statistics
   - Professional imagery

3. **Services (services.html)** - Service offerings:
   - Freight & Haulage
   - Local & Last-mile Delivery
   - Logistics Planning
   - Detailed feature lists for each service

4. **For Carriers (carrier.html)** - Carrier partnership page:
   - Attractive offer presentation
   - Benefits for carriers
   - Requirements
   - Professional icons and layouts

5. **Contact (contact.html)** - Simple, professional contact page:
   - Easy-to-update contact information
   - Professional card layout
   - Business hours
   - Service area map

## 🎨 Customization

### Adding Your Logo

See [LOGO_INSTRUCTIONS.md](LOGO_INSTRUCTIONS.md) for detailed instructions on:
- Where to place your logo file
- Recommended formats and sizes
- How to update references in HTML files

### Updating Contact Information

See [CONTACT_UPDATE_GUIDE.md](CONTACT_UPDATE_GUIDE.md) for step-by-step guide on updating:
- Your name
- Email address
- Phone number
- Physical address
- Tax ID (NIP)

### Changing Colors

Edit `/style.css` and modify the CSS custom properties at the top:

```css
:root{
  --brand-primary: #0066ff;  /* Main brand color */
  --accent: #00ccff;         /* Accent color */
  --contrast: #111827;       /* Text color */
  --muted: #6b7280;         /* Secondary text */
  --surface: #ffffff;       /* Card background */
  --bg: #f5f7fa;           /* Page background */
}
```

## 🌍 Language Switching

The website automatically:
- Saves the user's language preference in localStorage
- Switches all text content dynamically
- Updates the language toggle button

To add more translations, edit `/assets/lang-switch.js` and add keys to the `translations` object.

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

This is a static website that can be hosted on:
- GitHub Pages (current setup)
- Netlify
- Vercel
- Any web server

Simply upload all files to your web server or push to GitHub Pages.

## 📝 File Structure

```
.
├── index.html              # Homepage
├── about.html             # About Us page
├── services.html          # Services page
├── carrier.html           # For Carriers page
├── contact.html           # Contact page
├── style.css              # Main stylesheet
├── assets/
│   ├── lang-switch.js     # Language switching functionality
│   ├── logo-placeholder.svg
│   ├── hero-truck.svg
│   ├── team.svg
│   ├── map.svg
│   ├── ico-freight.svg
│   ├── ico-local.svg
│   └── ico-plan.svg
├── LOGO_INSTRUCTIONS.md   # Logo setup guide
├── CONTACT_UPDATE_GUIDE.md # Contact info update guide
└── README.md              # This file
```

## 🔧 Maintenance

### Regular Updates

1. Keep contact information current
2. Update statistics on About page
3. Refresh service offerings as needed
4. Add new translations as content grows

### Adding New Pages

1. Copy an existing HTML file
2. Update the content
3. Add navigation links in all pages
4. Add translations to `lang-switch.js`

## 📞 Support

For questions or issues with the website:
- Check the documentation files (LOGO_INSTRUCTIONS.md, CONTACT_UPDATE_GUIDE.md)
- Review the code comments in HTML and CSS files
- All files are well-commented for easy understanding

## ✨ Credits

- Icons: SVG inline icons
- Fonts: Google Fonts (Inter)
- Design: Custom, inspired by modern transport companies

---

**Ready to launch!** Update your contact information and logo, then you're good to go! 🚚
