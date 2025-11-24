// Language switcher with flag icons
(function() {
  'use strict';

  // Get current language from localStorage or default to 'pl'
  let currentLang = localStorage.getItem('language') || 'pl';

  // Language content for different pages
  const translations = {
    pl: {
      // Navigation
      navAbout: 'Firma',
      navAboutUs: 'O nas',
      navOurValues: 'Nasze wartości',
      navOurExperience: 'Nasze doświadczenie',
      navServices: 'Usługi',
      navCarrier: 'Dla przewoźnika',
      navContact: 'Kontakt',
      skipLink: 'Przejdź do treści',
      toggleNav: 'Przełącz nawigację',
      changeLang: 'Zmień język',
      
      // Index page
      heroTitle: 'MIGRO<br>Twój partner w transporcie i logistyce.',
      heroSub: 'Kompleksowa obsługa transportu dla firm i przewoźników - przejrzyście, szybko, bez zbędnych formalności.',
      ctaQuote: 'Bezpłatna wycena',
      ctaServices: 'Zobacz usługi',
      trust1: 'Profesjonalne wsparcie',
      trust2: 'Przejrzyste ceny',
      trust3: 'Zaufani kierowcy',
      
      // Features section
      featuresTitle: 'Dlaczego my?',
      featuresLead: 'Profesjonalne rozwiązania transportowe dostosowane do Twoich potrzeb',
      feature1Title: 'Doświadczenie',
      feature1Desc: 'Lata doświadczenia w transporcie krajowym i międzynarodowym',
      feature2Title: 'Niezawodność',
      feature2Desc: 'Terminowe dostawy i profesjonalna obsługa',
      feature3Title: 'Bezpieczeństwo',
      feature3Desc: 'Pełne ubezpieczenie i monitorowanie przesyłek',
      feature4Title: 'Konkurencyjne ceny',
      feature4Desc: 'Transparentne stawki bez ukrytych kosztów',
      
      // About page
      aboutTitle: 'O nas',
      aboutHeroTitle: 'MIGRO, Twój partner w transporcie',
      aboutHeroDesc: 'Zapewniamy kompleksowe usługi transportowe z pasją i zaangażowaniem',
      aboutMissionTitle: 'O nas',
      aboutMissionDesc: 'Jesteśmy firmą specjalizującą się w organizacji transportu kontenerowego, plandekowego, chłodniczego oraz wywrotek. Pracujemy zarówno z przewoźnikami, jak i firmami, które potrzebują pewnych i terminowych dostaw.',
      aboutMissionDesc2: 'Naszą rolą jest dopasowanie odpowiedniego środka transportu, zaplanowanie trasy oraz czuwanie nad realizacją zlecenia — od pierwszego kontaktu aż po dostarczenie ładunku do miejsca docelowego.',
      aboutMissionDesc3: 'Stawiamy na komunikację, przejrzyste warunki i partnerskie podejście. Nie obiecujemy „niemożliwego" — po prostu dowozimy to, co ustalamy.',
      aboutValuesTitle: 'Nasze wartości',
      aboutValue1: 'Rzetelność i terminowość',
      aboutValue2: 'Bezpieczeństwo przewożonych ładunków',
      aboutValue3: 'Partnerskie relacje z klientami',
      aboutValue4: 'Ciągły rozwój i innowacje',
      aboutExperienceTitle: 'Nasze doświadczenie',
      aboutExperienceDesc: 'Choć jesteśmy młodą firmą na rynku, nasze doświadczenie wynika z wieloletniej pracy w branży transportowej i logistycznej. Zbudowaliśmy sieć sprawdzonych przewoźników, z którymi współpracujemy na co dzień — dzięki temu jesteśmy w stanie szybko reagować, dobierać właściwe rozwiązania i gwarantować terminowość.',
      aboutExperienceDesc2: 'Naszą przewagą jest elastyczność i osobiste podejście do każdego zlecenia.',
      aboutStat1: 'Zrealizowanych zleceń',
      aboutStat2: 'Partnerów biznesowych',
      aboutStat3: 'Wsparcie dla klientów',
      
      // Services page
      servicesTitle: 'Nasze usługi',
      servicesLead: 'Odkryj pełen zakres naszych usług transportowych',
      serviceFreightTitle: 'Transport i fracht',
      serviceFreightDesc: 'Kompleksowy transport regionalny i międzynarodowy: przesyłki paletowe, wsparcie dokumentacyjne i śledzenie. Idealne rozwiązanie dla regularnych i jednorazowych ładunków.',
      serviceFreightList1: 'Konkurencyjne stawki regionalne i międzynarodowe',
      serviceFreightList2: 'Wsparcie w zakresie dokumentacji i celów',
      serviceFreightList3: 'System śledzenia przesyłek online',
      serviceLocalTitle: 'Dostawy lokalne i ostatniej mili',
      serviceLocalDesc: 'Dostawy miejskie i tego samego dnia, krajowe usługi door-to-door oraz delikatna obsługa towarów wrażliwych.',
      serviceLocalList1: 'Planowanie tras i harmonogramów',
      serviceLocalList2: 'Obsługa towarów delikatnych z potwierdzeniem odbioru',
      servicePlanningTitle: 'Planowanie logistyki',
      servicePlanningDesc: 'Optymalizacja tras, modelowanie kosztów i doradztwo, aby pomóc Ci rozwijać działalność bezpiecznie i rentownie.',
      servicePlanningList1: 'Optymalizacja tras i kosztów',
      servicePlanningList2: 'Szkolenia kierowców i moduły wdrożeniowe',
      ctaGetQuote: 'Zapytaj o wycenę',
      
      // Carrier page
      carrierTitle: 'Dla przewoźnika',
      carrierLead: 'Dołącz do naszej sieci transportowej i rozwijaj swój biznes',
      carrierBenefitsTitle: 'Korzyści dla przewoźników',
      carrierBenefit1: 'Stały dostęp do zleceń transportowych',
      carrierBenefit2: 'Konkurencyjne stawki i terminowe płatności',
      carrierBenefit3: 'Wsparcie logistyczne i administracyjne',
      carrierBenefit4: 'Szkolenia i rozwój kompetencji',
      carrierRequirementsTitle: 'Wymagania',
      carrierReq1: 'Aktualne ubezpieczenie OCP i AC',
      carrierReq2: 'Sprawny pojazd z aktualnym przeglądem',
      carrierReq3: 'Doświadczenie w transporcie krajowym/międzynarodowym',
      carrierReq4: 'Rzetelność i terminowość',
      carrierOfferTitle: 'Nasza oferta',
      carrierOffer1Title: 'Regularne zlecenia',
      carrierOffer1Desc: 'Zapewniamy stały dostęp do zleceń transportowych na trasach krajowych i międzynarodowych',
      carrierOffer2Title: 'Wsparcie',
      carrierOffer2Desc: 'Profesjonalne wsparcie logistyczne i administracyjne przez całą dobę',
      carrierOffer3Title: 'Terminowe płatności',
      carrierOffer3Desc: 'Gwarantujemy terminowe rozliczenia i konkurencyjne stawki za wykonane przewozy',
      carrierCtaContact: 'Skontaktuj się z nami',
      carrierLookingForTitle: 'Kogo aktualnie szukamy?',
      carrierLookingForMega: 'Przewoźników z naczepą MEGA',
      carrierLookingForDesc: 'Dołącz do zespołu profesjonalistów i wykorzystaj pełny potencjał swojej floty',
      carrierLookingForOffer: '<strong style="font-size: 1.3rem;">Oferujemy:</strong><br>Regularne zlecenia • Atrakcyjne stawki • Profesjonalne wsparcie logistyczne • Terminowe płatności',
      carrierApplyNow: 'Aplikuj już teraz!',
      
      // Contact page
      contactTitle: 'Kontakt',
      contactLead: 'Skontaktuj się z nami - odpowiemy w ciągu jednego dnia roboczego',
      contactInfoTitle: 'Dane kontaktowe',
      contactName: 'Twoje imię i nazwisko',
      contactEmail: 'Email',
      contactPhone: 'Telefon',
      contactAddress: 'Adres',
      contactNip: 'NIP',
      contactHoursTitle: 'Obsługa klienta',
      contactHours: 'Jesteśmy do Twojej dyspozycji przez cały tydzień',
      contactEmergency: 'Profesjonalna obsługa i szybki kontakt',
      
      // Footer
      footerText: 'MIGRO · Profesjonalny transport międzynarodowy',
      footerServices: 'Usługi',
      footerCompany: 'Firma',
      footerAbout: 'O nas',
      footerContact: 'Kontakt',
      footerInfo: 'Informacje',
      footerAllRights: 'Wszelkie prawa zastrzeżone.',
      footerDescription: 'Profesjonalny transport międzynarodowy. Kontenery, plandeki, chłodnie, wywrotki, naczepy MEGA.',
      navDocuments: 'Dokumenty',
      
      // Brand
      brandText: 'MIGRO Spedycja',
      
      // Services page content
      servicesHeroTitle: '<span class="highlight-blue">Dowozimy Twoje ładunki</span> wszędzie, gdzie trzeba!',
      servicesHeroDesc: 'Wychodzimy z założenia, że nie ma rzeczy niemożliwych.<br>Transportujemy prawie wszystko — od kontenerów morskich, przez ładunki paletowe i chłodnicze, po owoce i warzywa na wywrotkach.<br>Dopasowujemy środek transportu, planujemy trasę i dbamy o terminowość na każdym etapie.<br>Ty mówisz co, gdzie i kiedy — my zajmujemy się resztą.',
      serviceContainersTitle: 'Kontenery',
      serviceContainersDesc: 'Kontenery morskie o różnych rozmiarach. Idealne do transportu międzynarodowego i ładunków wielkogabarytowych.',
      serviceContainersSummary: 'Niezawodny transport kontenerów morskich w całej Europie',
      serviceTarpaulinsTitle: 'Plandeki',
      serviceTarpaulinsDesc: 'Uniwersalne naczepy plandekowe. Szybki załadunek i rozładunek, idealne do ładunków paletowych.',
      serviceTarpaulinsSummary: 'Elastyczne rozwiązania dla ładunków paletowych',
      serviceRefrigeratedTitle: 'Chłodnie',
      serviceRefrigeratedDesc: 'Transport chłodniczy z kontrolą temperatury. Świeże produkty, owoce i warzywa w doskonałym stanie.',
      serviceRefrigeratedSummary: 'Kontrolowana temperatura dla świeżych produktów',
      serviceTippersTitle: 'Wywrotki',
      serviceTippersDesc: 'Naczepy samowyładowcze do materiałów sypkich, owoców i warzyw. Szybki rozładunek na miejscu.',
      serviceTippersSummary: 'Szybki transport materiałów sypkich',
      serviceMegaTitle: 'Naczepy MEGA',
      serviceMegaDesc: 'Zwiększona przestrzeń ładunkowa. Idealne do lekkich, objętościowych towarów wymagających więcej miejsca.',
      serviceMegaSummary: 'Maksymalna pojemność dla lekkich ładunków',
      
      // Documents page
      documentsTitle: 'Dokumenty',
      documentsDesc: 'Ważne informacje i dokumenty dotyczące działalności MIGRO',
      documentsCompanyDocs: 'Dokumenty firmowe',
      documentsPageInProgress: 'Strona w przygotowaniu. Wkrótce znajdziesz tutaj wszystkie niezbędne dokumenty.',
      documentsPrivacyPolicy: 'Polityka prywatności',
      documentsRegulations: 'Regulamin',
      documentsInProgress: 'W przygotowaniu',
      documentsQuestions: 'Masz pytania? Skontaktuj się z nami',
    },
    en: {
      // Navigation
      navAbout: 'Company',
      navAboutUs: 'About Us',
      navOurValues: 'Our Values',
      navOurExperience: 'Our Experience',
      navServices: 'Services',
      navCarrier: 'For Carriers',
      navContact: 'Contact',
      skipLink: 'Skip to content',
      toggleNav: 'Toggle navigation',
      changeLang: 'Change language',
      
      // Index page
      heroTitle: 'MIGRO<br>Your transport and logistics partner.',
      heroSub: 'Comprehensive transport services for companies and carriers - transparent, fast, without unnecessary formalities.',
      ctaQuote: 'Free quote',
      ctaServices: 'See services',
      trust1: 'Professional Support',
      trust2: 'Transparent Pricing',
      trust3: 'Trusted Drivers',
      
      // Features section
      featuresTitle: 'Why choose us?',
      featuresLead: 'Professional transport solutions tailored to your needs',
      feature1Title: 'Experience',
      feature1Desc: 'Years of experience in domestic and international transport',
      feature2Title: 'Reliability',
      feature2Desc: 'On-time deliveries and professional service',
      feature3Title: 'Safety',
      feature3Desc: 'Full insurance and shipment tracking',
      feature4Title: 'Competitive pricing',
      feature4Desc: 'Transparent rates with no hidden costs',
      
      // About page
      aboutTitle: 'About Us',
      aboutHeroTitle: 'MIGRO, Your transport partner',
      aboutHeroDesc: 'We provide comprehensive transport services with passion and commitment',
      aboutMissionTitle: 'About Us',
      aboutMissionDesc: 'We are a company specializing in organizing container, tarpaulin, refrigerated and dump truck transport. We work with both carriers and companies that need reliable and timely deliveries.',
      aboutMissionDesc2: 'Our role is to match the appropriate means of transport, plan the route and oversee the implementation of the order — from the first contact to the delivery of the cargo to the destination.',
      aboutMissionDesc3: 'We focus on communication, transparent terms and a partnership approach. We don\'t promise the "impossible" — we simply deliver what we agree on.',
      aboutValuesTitle: 'Our Values',
      aboutValue1: 'Reliability and timeliness',
      aboutValue2: 'Safety of transported cargo',
      aboutValue3: 'Partnership relations with clients',
      aboutValue4: 'Continuous development and innovation',
      aboutExperienceTitle: 'Our Experience',
      aboutExperienceDesc: 'Although we are a young company on the market, our experience comes from many years of work in the transport and logistics industry. We have built a network of proven carriers with whom we cooperate on a daily basis — thanks to this, we are able to react quickly, select the right solutions and guarantee timeliness.',
      aboutExperienceDesc2: 'Our advantage is flexibility and a personal approach to each order.',
      aboutStat1: 'Completed orders',
      aboutStat2: 'Business partners',
      aboutStat3: 'Customer support',
      
      // Services page
      servicesTitle: 'Our Services',
      servicesLead: 'Discover the full range of our transport services',
      serviceFreightTitle: 'Freight & Haulage',
      serviceFreightDesc: 'Comprehensive regional and international freight: palletized shipments, documentation support and tracking. Ideal for scheduled and ad-hoc loads.',
      serviceFreightList1: 'Competitive regional and international rates',
      serviceFreightList2: 'Customs and documentation support',
      serviceFreightList3: 'Online shipment tracking system',
      serviceLocalTitle: 'Local & Last-mile Delivery',
      serviceLocalDesc: 'Urban and same-day delivery options, nationwide door-to-door services, and white-glove handling for fragile goods.',
      serviceLocalList1: 'Route planning and scheduling',
      serviceLocalList2: 'Fragile goods handling with delivery confirmation',
      servicePlanningTitle: 'Logistics Planning',
      servicePlanningDesc: 'Route optimization, cost modeling and consulting to help you grow your business safely and profitably.',
      servicePlanningList1: 'Route and cost optimization',
      servicePlanningList2: 'Driver training and onboarding modules',
      ctaGetQuote: 'Get a quote',
      
      // Carrier page
      carrierTitle: 'For Carriers',
      carrierLead: 'Join our transport network and grow your business',
      carrierBenefitsTitle: 'Benefits for Carriers',
      carrierBenefit1: 'Constant access to transport orders',
      carrierBenefit2: 'Competitive rates and timely payments',
      carrierBenefit3: 'Logistics and administrative support',
      carrierBenefit4: 'Training and skill development',
      carrierRequirementsTitle: 'Requirements',
      carrierReq1: 'Current cargo and liability insurance',
      carrierReq2: 'Operational vehicle with valid inspection',
      carrierReq3: 'Experience in domestic/international transport',
      carrierReq4: 'Reliability and punctuality',
      carrierOfferTitle: 'Our Offer',
      carrierOffer1Title: 'Regular Orders',
      carrierOffer1Desc: 'We provide constant access to transport orders on domestic and international routes',
      carrierOffer2Title: 'Support',
      carrierOffer2Desc: 'Professional logistics and administrative support around the clock',
      carrierOffer3Title: 'Timely Payments',
      carrierOffer3Desc: 'We guarantee timely settlements and competitive rates for completed transports',
      carrierCtaContact: 'Contact us',
      carrierLookingForTitle: 'Who are we currently looking for?',
      carrierLookingForMega: 'Carriers with MEGA trailers',
      carrierLookingForDesc: 'Join our team of professionals and unlock the full potential of your fleet',
      carrierLookingForOffer: '<strong style="font-size: 1.3rem;">We offer:</strong><br>Regular orders • Attractive rates • Professional logistics support • Timely payments',
      carrierApplyNow: 'Apply now!',
      
      // Contact page
      contactTitle: 'Contact',
      contactLead: 'Get in touch - we typically respond within one business day',
      contactInfoTitle: 'Contact Information',
      contactName: 'Your Name',
      contactEmail: 'Email',
      contactPhone: 'Phone',
      contactAddress: 'Address',
      contactNip: 'Tax ID',
      contactHoursTitle: 'Customer Service',
      contactHours: 'We are at your disposal throughout the week',
      contactEmergency: 'Professional service and quick contact',
      
      // Footer
      footerText: 'MIGRO · Professional international transport',
      footerServices: 'Services',
      footerCompany: 'Company',
      footerAbout: 'About Us',
      footerContact: 'Contact',
      footerInfo: 'Information',
      footerAllRights: 'All rights reserved.',
      footerDescription: 'Professional international transport. Containers, tarpaulins, refrigerated, tippers, MEGA trailers.',
      navDocuments: 'Documents',
      
      // Brand
      brandText: 'MIGRO Freight',
      
      // Services page content
      servicesHeroTitle: '<span class="highlight-blue">We deliver your cargo</span> wherever it needs to go!',
      servicesHeroDesc: 'We believe that nothing is impossible.<br>We transport almost everything — from sea containers, palletized and refrigerated loads, to fruits and vegetables in tipper trucks.<br>We match the right transport, plan the route and ensure punctuality at every stage.<br>You tell us what, where and when — we take care of the rest.',
      serviceContainersTitle: 'Containers',
      serviceContainersDesc: 'Sea containers of various sizes. Ideal for international transport and oversized cargo.',
      serviceContainersSummary: 'Reliable sea container transport across Europe',
      serviceTarpaulinsTitle: 'Tarpaulins',
      serviceTarpaulinsDesc: 'Universal tarpaulin trailers. Quick loading and unloading, ideal for palletized cargo.',
      serviceTarpaulinsSummary: 'Flexible solutions for palletized cargo',
      serviceRefrigeratedTitle: 'Refrigerated',
      serviceRefrigeratedDesc: 'Refrigerated transport with temperature control. Fresh products, fruits and vegetables in perfect condition.',
      serviceRefrigeratedSummary: 'Temperature-controlled transport for fresh products',
      serviceTippersTitle: 'Tippers',
      serviceTippersDesc: 'Self-unloading trailers for bulk materials, fruits and vegetables. Quick unloading on site.',
      serviceTippersSummary: 'Fast transport of bulk materials',
      serviceMegaTitle: 'MEGA Trailers',
      serviceMegaDesc: 'Increased cargo space. Ideal for light, voluminous goods requiring more space.',
      serviceMegaSummary: 'Maximum capacity for lightweight cargo',
      
      // Documents page
      documentsTitle: 'Documents',
      documentsDesc: 'Important information and documents regarding MIGRO operations',
      documentsCompanyDocs: 'Company Documents',
      documentsPageInProgress: 'Page under construction. You will find all necessary documents here soon.',
      documentsPrivacyPolicy: 'Privacy Policy',
      documentsRegulations: 'Terms & Conditions',
      documentsInProgress: 'Coming soon',
      documentsQuestions: 'Have questions? Contact us',
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
          // Use innerHTML for elements that may contain HTML tags like <br>
          el.innerHTML = t[key];
        }
      }
    });
  }

  // Flag emoji mapping at module level for better performance
  const flags = {
    pl: '🇵🇱',
    en: '🇬🇧'
  };

  function updateLangButton() {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
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
