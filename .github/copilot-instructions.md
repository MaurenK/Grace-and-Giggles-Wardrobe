# Copilot Instructions for Grace & Giggles Wardrobe

## Project Overview
This is a static web project for a kids' wardrobe rental service, focused on maternity, baby shower, and milestone event dress hire. The codebase is organized for easy extension and maintenance, with a clear separation of HTML, CSS, and JavaScript assets.

## Architecture & Structure
- **HTML files**: `index.html` (main landing page), `catalogue.html` (dress catalogue)
- **Assets**: All images are in `src/pictures/` and `src/ChatGPT Image Sep 19, 2025, 12_23_41 PM.png` (logo)
- **Components**: Shared HTML fragments (e.g., `src/components/header.html`) can be reused for consistent navigation.
- **Scripts**: All JavaScript is in `src/scripts/app.js`. Handles UI interactivity (e.g., carousel navigation for dress items).
- **Styles**: All CSS is in `src/styles/main.css`. Uses a soft, pastel color palette and section-based styling.

## Developer Workflows
- **Local Development**: Use `npm start` to launch `live-server` for hot-reloading and local preview. The server root is `src/`.
- **Build**: No formal build process; static files only. The `build` script is a placeholder.
- **No tests**: There are no automated tests or test frameworks configured.

## Project-Specific Patterns
- **Navigation**: Navigation bars are styled with `.nav-btn` and link to anchor sections or other pages.
- **Catalogue**: Dress items are rendered as `.dress-item` cards in a flexbox `.catalogue` container. Images are referenced relative to the HTML file location.
- **Carousel**: JavaScript in `app.js` expects `.dress-item` elements and `.left-arrow`/`.right-arrow` for navigation. Ensure these classes exist in the HTML for carousel features.
- **Section Styling**: Each `<section>` uses a different pastel background via CSS `section:nth-of-type(n)` selectors.

## Integration Points
- **Contact Info**: WhatsApp and email links are hardcoded in the HTML footer and terms section.
- **External Dependencies**: Only `live-server` (for development) is used; no other npm packages or frameworks.

## Conventions & Recommendations
- Keep all new images in `src/pictures/` and reference them with relative paths.
- Place new scripts in `src/scripts/` and styles in `src/styles/`.
- For new pages, copy navigation and footer structure from `index.html` for consistency.
- Use semantic HTML and keep inline styles minimal; prefer CSS in `main.css`.
- If adding interactivity, extend `app.js` and ensure new UI elements have unique class names.

## Example: Adding a New Dress
1. Add the image to `src/pictures/`.
2. Add a new `.dress-item` block in `catalogue.html` with the correct image path and details.
3. No backend or database integration; all data is static.

---
If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.