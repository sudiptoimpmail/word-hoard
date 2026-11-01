# Word Hoard

Flashcards and quizzes built from my vocabulary notebook (825 words, 14 cards).

## Put it on your iPhone
1. Open **https://sudiptoimpmail.github.io/word-hoard/** in **Safari**.
2. Tap **Share** (square with arrow) → **Add to Home Screen** → **Add**.
3. Open it from the home screen. It runs full-screen and works offline after the first open.

## Hosting (GitHub Pages)
Repo **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.

## Files
- `index.html` – the app (words, meanings, examples, code)
- `pics.json` – the pictures from the notebook
- `sw.js` – offline support
- `manifest.webmanifest`, `icon-*.png` – home-screen name and icon

Progress (known / still learning, kept pictures) is saved on the phone.
To update the app, replace `index.html` (and `pics.json` if pictures changed).
