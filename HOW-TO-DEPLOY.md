# How to publish this on team100yards.github.io/100yards

1. Go to your repo `team100yards/100yards` on GitHub.
2. Upload these 6 files into the same folder that already has your logo
   (`Add file → Upload files`, drag them in): `index.html`, `academy.html`,
   `resources.html`, `contact.html`, `styles.css`, `script.js`.
3. Choose "Replace" when it asks about the existing `index.html`,
   `academy.html`, `resources.html`, and `contact.html` — this overwrites
   the old versions.
4. Commit directly to your default branch (usually `main`).
5. Wait 1–2 minutes, then reload
   https://team100yards.github.io/100yards/index.html (hard refresh /
   clear cache if you still see the old version).

Nothing else in your repo needs to change — the logo file
`100 yards logo.png` stays exactly where it is; the pages now reference
it with `%20` in place of the space, which is the correct, safe way to
link to a file with a space in its name.

## One recommended follow-up
Rename `100 yards logo.png` to `logo.png` (no space) at some point — it's
not urgent since the pages work either way now, but filenames with
spaces are a common source of broken links elsewhere (README previews,
social share cards, other tools). If you do rename it, update the `src=`
and `og:image` references in the HTML files to match.
