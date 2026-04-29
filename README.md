# 头头咖啡屋 (Tito's Cafe)

A Furry-themed merchandise website for Tito's Cafe, featuring character profiles, merchandise shop, art gallery, and more.

## Features

- 🎨 **Character Showcase** - Meet Tito, TigerZ, and the whole cafe crew
- 🛒 **Merchandise Shop** - Browse and purchase Furry-themed products
- 🖼️ **Art Gallery** - View fan art and official illustrations
- 📖 **About Page** - Learn about the cafe's story and philosophy
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- ⚡ **Smooth Animations** - CSS animations and interactive elements

## Tech Stack

- HTML5
- CSS3 (Custom properties, Grid, Flexbox, Animations)
- Vanilla JavaScript
- No frameworks or build tools required

## Project Structure

```
titocafe-pre/
├── index.html              # Homepage
├── css/
│   └── style.css         # Main stylesheet
├── js/
│   └── main.js           # Interactive features
├── pages/
│   ├── characters.html   # Character profiles
│   ├── shop.html         # Merchandise shop
│   ├── gallery.html      # Art gallery
│   └── about.html        # About page
├── assets/
│   └── images/          # All image assets
├── netlify.toml         # Netlify configuration
└── _redirects           # URL redirect rules
```

## Deployment

This site is configured for deployment on Netlify:

1. Push to GitHub repository `titocafe-pre` (branch: `hunyuan3`)
2. Connect repository to Netlify
3. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root)

## Local Development

Simply open `index.html` in a web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Credits

- Website design and development: WorkBuddy AI
- Character designs: Various artists (credits in respective pages)
- Special thanks to the Furry community

## License

© 2024 Tito's Cafe. All rights reserved.
