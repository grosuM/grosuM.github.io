# Contact Information Update Guide / Instrukcje aktualizacji danych kontaktowych

## How to update your contact information / Jak zaktualizować swoje dane kontaktowe

Open the file: `/contact.html`

Look for the following sections and replace the placeholder text with your actual information:

### 1. Your Name / Twoje imię i nazwisko

Find:
```html
<p>[Wpisz swoje imię i nazwisko]</p>
```

Replace with your name, for example:
```html
<p>Jan Kowalski</p>
```

### 2. Email / Email

Find:
```html
<p><a href="mailto:twoj.email@example.com">twoj.email@example.com</a></p>
```

Replace with your email (update both the `href` and the display text):
```html
<p><a href="mailto:jan.kowalski@startertransport.pl">jan.kowalski@startertransport.pl</a></p>
```

### 3. Phone / Telefon

Find:
```html
<p><a href="tel:+48123456789">+48 123 456 789</a></p>
```

Replace with your phone number (update both the `href` and the display text):
```html
<p><a href="tel:+48501234567">+48 501 234 567</a></p>
```

### 4. Address / Adres

Find:
```html
<p>[Wpisz swój adres]<br>Miasto, Kod pocztowy</p>
```

Replace with your address:
```html
<p>ul. Transportowa 123<br>00-001 Warszawa</p>
```

### 5. Tax ID (NIP)

Find:
```html
<p>[Wpisz swój NIP]</p>
```

Replace with your NIP:
```html
<p>123-456-78-90</p>
```

---

## Complete Example / Kompletny przykład

Here's what a complete contact info section should look like after updating:

```html
<div class="contact-info-item">
  <div class="contact-info-icon">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
    </svg>
  </div>
  <div>
    <strong data-i18n="contactName">Twoje imię i nazwisko</strong>
    <p>Jan Kowalski</p>
  </div>
</div>

<div class="contact-info-item">
  <div class="contact-info-icon">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  </div>
  <div>
    <strong data-i18n="contactEmail">Email</strong>
    <p><a href="mailto:jan.kowalski@startertransport.pl">jan.kowalski@startertransport.pl</a></p>
  </div>
</div>

<div class="contact-info-item">
  <div class="contact-info-icon">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  </div>
  <div>
    <strong data-i18n="contactPhone">Telefon</strong>
    <p><a href="tel:+48501234567">+48 501 234 567</a></p>
  </div>
</div>

<div class="contact-info-item">
  <div class="contact-info-icon">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  </div>
  <div>
    <strong data-i18n="contactAddress">Adres</strong>
    <p>ul. Transportowa 123<br>00-001 Warszawa</p>
  </div>
</div>

<div class="contact-info-item">
  <div class="contact-info-icon">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
  </div>
  <div>
    <strong data-i18n="contactNip">NIP</strong>
    <p>123-456-78-90</p>
  </div>
</div>
```

---

## Tips / Wskazówki

- **Always update both** the `href` attribute and the display text for email and phone links
- **Keep the HTML structure** intact - only change the text content inside `<p>` tags
- **Test your links** by clicking on email and phone links to make sure they work correctly
- **Use proper formatting** for phone numbers (spaces or dashes for readability)

---

**Zawsze aktualizuj zarówno** atrybut `href`, jak i tekst wyświetlany dla linków e-mail i telefonu
**Zachowaj strukturę HTML** - zmieniaj tylko zawartość tekstową wewnątrz tagów `<p>`
**Przetestuj swoje linki** klikając na nie, aby upewnić się, że działają poprawnie
**Używaj odpowiedniego formatowania** dla numerów telefonów (spacje lub myślniki dla czytelności)
