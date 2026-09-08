# Galbha Remedies — Website

React (Vite) single-page site for Galbha Remedies.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Adding real product data

Product placeholders live in a single data file — dropping in real product
copy/images is a data change, not a template rewrite:

- `src/data/therapeuticAreas.js` — the 8 therapeutic-area categories.
- `src/data/products.js` — placeholder product records per category. Replace
  the generated placeholder entries with real `{ id, name, therapeuticArea,
  composition, packSize, description, image }` records.

## Founder photo

`src/pages/Home.jsx` (§05 Founder section) renders a labeled placeholder
frame (`.founder-portrait`) sized for a 480×560 portrait. Once a real photo
is supplied, replace the placeholder `<div>` with an `<img>`.
