# Logo Instructions / Instrukcje dotyczące logo

## Where to place your logo / Gdzie umieścić logo

Your logo should be a **PNG file with transparent background** / Logo powinno być **plikiem PNG z przezroczystym tłem**.

### Option 1: Replace the placeholder file / Opcja 1: Zamień plik zastępczy

Replace the existing placeholder file:
```
/assets/logo-placeholder.svg
```

With your PNG file. Rename your logo file to `logo-placeholder.svg` (or keep it as PNG and update the references below).

### Option 2: Add a new logo file / Opcja 2: Dodaj nowy plik logo

1. Upload your PNG logo to the `/assets/` folder with the name `logo.png`
2. Update all HTML files to reference your new logo

### Files to update / Pliki do aktualizacji

If you choose to use a different filename (e.g., `logo.png`), you need to update the following references in these files:

**In all HTML files (index.html, about.html, services.html, carrier.html, contact.html):**

Find and replace:
```html
<img src="assets/logo-placeholder.svg" alt="Logo" width="80" height="80" />
```

With:
```html
<img src="assets/logo.png" alt="Logo" width="80" height="80" />
```

**Also update the footer logo references:**

Find and replace:
```html
<img src="assets/logo-placeholder.svg" alt="Starter Transport logo" width="32" height="32" />
```

With:
```html
<img src="assets/logo.png" alt="Starter Transport logo" width="32" height="32" />
```

### Recommended logo size / Zalecany rozmiar logo

- **Header logo**: 80px x 80px (or proportional)
- **Footer logo**: 32px x 32px (or proportional)
- **Format**: PNG with transparent background / PNG z przezroczystym tłem
- **File size**: Keep under 100KB for optimal loading / Poniżej 100KB dla optymalnego ładowania

### Example / Przykład

If your logo file is named `company-logo.png`, place it in:
```
/assets/company-logo.png
```

Then update all occurrences of:
```html
src="assets/logo-placeholder.svg"
```

To:
```html
src="assets/company-logo.png"
```

---

## Quick Reference / Szybki przewodnik

1. **Save your logo** as PNG with transparent background / **Zapisz logo** jako PNG z przezroczystym tłem
2. **Upload to**: `/assets/logo.png`
3. **Update references** in: `index.html`, `about.html`, `services.html`, `carrier.html`, `contact.html`
4. **Look for**: `<img src="assets/logo-placeholder.svg"`
5. **Replace with**: `<img src="assets/logo.png"`
