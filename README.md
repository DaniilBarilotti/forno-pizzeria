# FORNO — pizza & a little fire

**[Live website →](https://daniilbarilotti.github.io/forno-pizzeria/)**

Available in German and English. Menu prices in EUR.

An original German / English editorial website for a fictional Neapolitan pizzeria. Portfolio concept; no real venue, ordering service, or restaurant claims.

## Design

Tomato red, ink black, warm paper; oversized editorial typography, an editorial split hero, restrained typographic stamps and a readable menu. Responsive from 320px, native keyboard-accessible ingredient accordions, visible focus, reduced-motion support and semantic landmarks.

## Run

No build step or dependencies. Serve `dist/` with any static HTTP server. Open `dist/index.html` directly for an offline layout preview (Google Fonts needs internet; system fallbacks are included).

## Structure

- `dist/index.html` — content and metadata
- `dist/style.css` — layout, responsive styles and design tokens
- `dist/app.js` — accessible language switching with a saved device preference
- `dist/pizza.jpg`, `dist/oven.jpg` — locally hosted photography
- `.github/workflows/pages.yml` — GitHub Pages deployment

## GitHub Pages

Push this folder to a new GitHub repository. Under Settings → Pages choose GitHub Actions. The included workflow deploys the `dist` folder on pushes to `main`; it also supports manual dispatch. All paths are relative and work under repository subpaths.

## Credits

Photography licensed under the [Pexels license](https://www.pexels.com/license/): [Moussa Idrissi — pizza](https://www.pexels.com/photo/authentic-neapolitan-pizza-with-fresh-basil-29609013/) and [Arthur Brognoli — wood-fired oven](https://www.pexels.com/photo/photo-of-pizza-in-furnace-3343624/). Fonts: Golos Text and Manrope, Google Fonts / SIL Open Font License. No generated imagery.

Prices and menu are illustrative. Replace copy with verified venue information before commercial use. The menu is informational; there is deliberately no fake checkout or booking confirmation.
