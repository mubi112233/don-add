# Project

## How can I edit this code?

Use your preferred IDE locally:

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Enter the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm i

# Start the dev server
npm run dev
```

You need Node.js and npm installed. We recommend using nvm: https://github.com/nvm-sh/nvm#installing-and-updating

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

You can deploy with any static hosting provider that supports Vite builds, such as Vercel, Netlify, or GitHub Pages. Run:

```sh
npm run build
```

Then upload the `dist/` folder to your hosting provider.

## Internationalization (i18n)

This project uses i18next + react-i18next.

- Config: `src/i18n.ts`
- Locales: `src/locales/en.json`, `src/locales/de.json`
- App entry imports i18n in `src/main.tsx`
- Example usage in components: `const { t } = useTranslation();` then `t("navbar.services")`

### Language toggle

- The Navbar includes a DE/EN toggle.
- Selected language is persisted in `localStorage` under key `lang`.
- On load, the saved language is applied automatically.

### Add a new language

1. Create a new file: `src/locales/<lang>.json` (e.g., `fr.json`).
2. Add your translations mirroring the structure in `en.json`.
3. Register it in `src/i18n.ts` under `resources` and optionally set as `fallbackLng`.
4. Replace hardcoded strings with translation keys using `t("...")`.

Example `en.json` snippet:

```json
{
  "navbar": {
    "services": "Services"
  }
}
```

### Test plan

- Start the app: `npm run dev`.
- Verify Navbar items render translated labels.
- Click the DE/EN toggle; ensure text updates immediately.
- Refresh the page; ensure the selected language persists.
