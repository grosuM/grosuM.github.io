// Language switcher with flag icons
(function() {
  'use strict';

  // Get current language from localStorage or default to 'pl'
  let currentLang = localStorage.getItem('language') || 'pl';

  // Language content for different pages
  const translations = {
    pl: {
      // Navigation
      navAbout: 'O firmie',
      navServices: 'Usługi',
      navCarrier: 'Dla przewoźnika',
      navContact: 'Kontakt',
      skipLink: 'Przejdź do treści',
      toggleNav: 'Przełącz nawigację',
      changeLang: 'Zmień język',
      
      // Index page
      heroTitle: 'Profesjonalny transport dla Twojego biznesu',
      heroSub: 'Kompleksowe usługi transportowe dla przewoźników i firm: fracht, dostawy lokalne, planowanie logistyki. Proste wdrożenie, przejrzyste ceny i narzędzia do rozwoju.',
      ctaQuote: 'Bezpłatna wycena',
      ctaServices: 'Zobacz usługi',
      trust1: 'Wsparcie 24/7',
      trust2: 'Przejrzyste ceny',
      trust3: 'Zaufani kierowcy',
      
      // Footer
      footerText: 'Starter Transport · Pomagamy nowym operatorom dostarczać na czas.',
      footerServices: 'Usługi',
      footerAbout: 'O firmie',
      footerContact: 'Kontakt',
    },
    en: {
      // Navigation
      navAbout: 'About',
      navServices: 'Services',
      navCarrier: 'For Carriers',
      navContact: 'Contact',
      skipLink: 'Skip to content',
      toggleNav: 'Toggle navigation',
      changeLang: 'Change language',
      
      // Index page
      heroTitle: 'Start your transport business with confidence',
      heroSub: 'Affordable, reliable freight and local delivery solutions built for new transport companies — simple onboarding, transparent pricing, and tools to scale.',
      ctaQuote: 'Get a free quote',
      ctaServices: 'See services',
      trust1: '24/7 Support',
      trust2: 'Transparent Pricing',
      trust3: 'Trusted Drivers',
      
      // Footer
      footerText: 'Starter Transport · Helping new operators deliver on time.',
      footerServices: 'Services',
      footerAbout: 'About',
      footerContact: 'Contact',
    }
  };

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updateContent();
    updateLangButton();
  }

  function updateContent() {
    const t = translations[currentLang];
    
    // Update elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });
  }

  function updateLangButton() {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      const flags = {
        pl: '🇵🇱',
        en: '🇬🇧'
      };
      const otherLang = currentLang === 'pl' ? 'en' : 'pl';
      langBtn.innerHTML = `${flags[currentLang]} ${currentLang.toUpperCase()} / ${flags[otherLang]} ${otherLang.toUpperCase()}`;
    }
  }

  function toggleLanguage() {
    const newLang = currentLang === 'pl' ? 'en' : 'pl';
    setLanguage(newLang);
  }

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLang);
    
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', toggleLanguage);
    }
  });
})();
