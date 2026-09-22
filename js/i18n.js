// =============================================
//   Studio Diana — i18n  (en · ru · fr)
//
//   Markup hooks:
//     data-i18n             → textContent
//     data-i18n-placeholder → placeholder
//     data-i18n-alt         → alt
//     data-i18n-aria        → aria-label
//
//   To add a language: add a block to TRANSLATIONS
//   and a <button data-lang="xx"> to .lang-switch.
// =============================================

const TRANSLATIONS = {

  /* ------------------------------------------------ English ---- */
  en: {
    'meta.title':       'Studio Diana — Photography',
    'meta.description': 'Portrait, wedding and lifestyle photography by Diana — genuine, light-filled images made with care.',

    'nav.about':     'About',
    'nav.portfolio': 'Portfolio',
    'nav.services':  'Services',
    'nav.contact':   'Contact',
    'nav.toggle':    'Toggle menu',
    'nav.language':  'Language',

    'hero.tagline': 'capturing moments that last forever',
    'hero.cta':     'View Portfolio',
    'hero.scroll':  'scroll',

    'about.label': 'About me',
    'about.title': "Hello, I'm Diana",
    'about.p1':    "I'm a portrait and lifestyle photographer based in the heart of the city. My work is rooted in genuine connection — I believe the best photographs happen when people feel at ease, seen, and celebrated exactly as they are.",
    'about.p2':    "With over eight years behind the lens, I've had the privilege of documenting weddings, families, and personal milestones across Europe and beyond. Light, emotion, and authenticity drive every frame I take.",
    'about.cta':   'Work with me',
    'about.alt':   'Diana — photographer',

    'portfolio.label': 'Work',
    'portfolio.title': 'Portfolio',

    'filter.all':       'All',
    'filter.portrait':  'Portraits',
    'filter.wedding':   'Weddings',
    'filter.lifestyle': 'Lifestyle',

    'alt.portrait':  'Portrait',
    'alt.wedding':   'Wedding',
    'alt.lifestyle': 'Lifestyle',
    'alt.lightbox':  'Enlarged photo',

    'lightbox.close': 'Close',
    'lightbox.prev':  'Previous',
    'lightbox.next':  'Next',

    'services.label': 'What I offer',
    'services.title': 'Services',

    'services.portrait.title': 'Portrait Sessions',
    'services.portrait.text':  'Individual, couples, and family portraits in studio or on location. Relaxed, guided, and entirely tailored to you.',
    'services.portrait.price': 'from $250',

    'services.wedding.title': 'Wedding Coverage',
    'services.wedding.text':  "Full-day or half-day wedding photography. Candid moments, artful details, and memories you'll treasure forever.",
    'services.wedding.price': 'from $1,800',

    'services.lifestyle.title': 'Lifestyle & Brand',
    'services.lifestyle.text':  'Authentic lifestyle imagery for personal brands, entrepreneurs, and small businesses.',
    'services.lifestyle.price': 'from $400',

    'testimonials.label':  'Kind words',
    'testimonials.1.quote': '“Diana has an incredible eye and an even warmer heart. Our wedding photos are beyond anything we imagined. We felt so comfortable the entire day.”',
    'testimonials.1.cite':  '— Sophie & Luca, married 2024',
    'testimonials.2.quote': '“I’ve never felt confident in front of a camera before, but Diana put me completely at ease. The portraits she delivered were stunning.”',
    'testimonials.2.cite':  '— Mia K., portrait client',
    'testimonials.3.quote': '“Professional, creative, and incredibly talented. Diana understood our brand vision immediately and delivered images that elevated our whole identity.”',
    'testimonials.3.cite':  '— Aria Studio, brand client',
    'testimonials.dot1':   'Testimonial 1',
    'testimonials.dot2':   'Testimonial 2',
    'testimonials.dot3':   'Testimonial 3',

    'contact.label':         'Get in touch',
    'contact.title':         "Let's create something beautiful together",
    'contact.text':          "Have a project in mind or just want to say hello? Fill in the form and I'll get back to you within 48 hours.",
    'contact.emailLabel':    'Email',
    'contact.locationLabel': 'Location',
    'contact.locationValue': 'Available worldwide',

    'form.name':               'Name',
    'form.namePlaceholder':    'Your name',
    'form.email':              'Email',
    'form.service':            'Service',
    'form.serviceDefault':     'Select a service…',
    'form.servicePortrait':    'Portrait Session',
    'form.serviceWedding':     'Wedding Coverage',
    'form.serviceLifestyle':   'Lifestyle & Brand',
    'form.serviceOther':       'Other',
    'form.message':            'Message',
    'form.messagePlaceholder': 'Tell me about your project…',
    'form.submit':             'Send Message',
    'form.error':              'Please fill in all required fields.',
    'form.success':            "Thank you! I'll be in touch within 48 hours.",

    'footer.rights': 'Studio Diana. All rights reserved.'
  },

  /* ------------------------------------------------ Русский ---- */
  ru: {
    'meta.title':       'Studio Diana — Фотография',
    'meta.description': 'Портретная, свадебная и lifestyle-съёмка. Диана — фотограф: живые, наполненные светом кадры.',

    'nav.about':     'Обо мне',
    'nav.portfolio': 'Портфолио',
    'nav.services':  'Услуги',
    'nav.contact':   'Контакты',
    'nav.toggle':    'Открыть меню',
    'nav.language':  'Язык',

    'hero.tagline': 'мгновения, которые остаются навсегда',
    'hero.cta':     'Смотреть портфолио',
    'hero.scroll':  'вниз',

    'about.label': 'Обо мне',
    'about.title': 'Здравствуйте, я Диана',
    'about.p1':    'Я фотограф: снимаю портреты и lifestyle, работаю в самом центре города. В основе моей работы — живой контакт с человеком. Я уверена, что лучшие кадры получаются тогда, когда людям спокойно и они чувствуют, что их принимают такими, какие они есть.',
    'about.p2':    'За восемь с лишним лет за камерой мне посчастливилось снимать свадьбы, семьи и важные личные события по всей Европе и за её пределами. Свет, эмоция и искренность — то, ради чего я делаю каждый кадр.',
    'about.cta':   'Обсудить съёмку',
    'about.alt':   'Диана — фотограф',

    'portfolio.label': 'Работы',
    'portfolio.title': 'Портфолио',

    'filter.all':       'Все',
    'filter.portrait':  'Портреты',
    'filter.wedding':   'Свадьбы',
    'filter.lifestyle': 'Лайфстайл',

    'alt.portrait':  'Портрет',
    'alt.wedding':   'Свадьба',
    'alt.lifestyle': 'Лайфстайл',
    'alt.lightbox':  'Фотография крупным планом',

    'lightbox.close': 'Закрыть',
    'lightbox.prev':  'Предыдущее фото',
    'lightbox.next':  'Следующее фото',

    'services.label': 'Что я предлагаю',
    'services.title': 'Услуги',

    'services.portrait.title': 'Портретная съёмка',
    'services.portrait.text':  'Индивидуальные, парные и семейные портреты — в студии или на локации. Спокойно, с подсказками и полностью под вас.',
    'services.portrait.price': 'от $250',

    'services.wedding.title': 'Свадебная съёмка',
    'services.wedding.text':  'Съёмка свадьбы на полный или половину дня. Живые моменты, красивые детали и воспоминания, которые останутся навсегда.',
    'services.wedding.price': 'от $1 800',

    'services.lifestyle.title': 'Лайфстайл и бренд',
    'services.lifestyle.text':  'Живые lifestyle-кадры для личных брендов, предпринимателей и небольшого бизнеса.',
    'services.lifestyle.price': 'от $400',

    'testimonials.label':  'Отзывы',
    'testimonials.1.quote': '«У Дианы невероятный взгляд и ещё более тёплое сердце. Наши свадебные фотографии превзошли всё, что мы могли представить. Весь день мы чувствовали себя совершенно свободно.»',
    'testimonials.1.cite':  '— Софи и Лука, свадьба 2024',
    'testimonials.2.quote': '«Я никогда не чувствовала себя уверенно перед камерой, но с Дианой мне было абсолютно легко. Портреты получились потрясающие.»',
    'testimonials.2.cite':  '— Мия К., портретная съёмка',
    'testimonials.3.quote': '«Профессионально, творчески и очень талантливо. Диана сразу поняла идею нашего бренда и сделала кадры, которые подняли весь наш стиль на новый уровень.»',
    'testimonials.3.cite':  '— Aria Studio, съёмка для бренда',
    'testimonials.dot1':   'Отзыв 1',
    'testimonials.dot2':   'Отзыв 2',
    'testimonials.dot3':   'Отзыв 3',

    'contact.label':         'Связаться',
    'contact.title':         'Давайте создадим вместе что-то красивое',
    'contact.text':          'Есть идея съёмки или просто хотите поздороваться? Заполните форму — я отвечу в течение 48 часов.',
    'contact.emailLabel':    'Почта',
    'contact.locationLabel': 'Где я снимаю',
    'contact.locationValue': 'Работаю по всему миру',

    'form.name':               'Имя',
    'form.namePlaceholder':    'Ваше имя',
    'form.email':              'Почта',
    'form.service':            'Услуга',
    'form.serviceDefault':     'Выберите услугу…',
    'form.servicePortrait':    'Портретная съёмка',
    'form.serviceWedding':     'Свадебная съёмка',
    'form.serviceLifestyle':   'Лайфстайл и бренд',
    'form.serviceOther':       'Другое',
    'form.message':            'Сообщение',
    'form.messagePlaceholder': 'Расскажите о вашей съёмке…',
    'form.submit':             'Отправить',
    'form.error':              'Пожалуйста, заполните все обязательные поля.',
    'form.success':            'Спасибо! Я свяжусь с вами в течение 48 часов.',

    'footer.rights': 'Studio Diana. Все права защищены.'
  },

  /* ------------------------------------------------ Français ---- */
  fr: {
    'meta.title':       'Studio Diana — Photographie',
    'meta.description': 'Photographie de portrait, de mariage et lifestyle par Diana — des images sincères et lumineuses, réalisées avec soin.',

    'nav.about':     'À propos',
    'nav.portfolio': 'Portfolio',
    'nav.services':  'Prestations',
    'nav.contact':   'Contact',
    'nav.toggle':    'Ouvrir le menu',
    'nav.language':  'Langue',

    'hero.tagline': 'des instants qui durent pour toujours',
    'hero.cta':     'Voir le portfolio',
    'hero.scroll':  'défiler',

    'about.label': 'À propos de moi',
    'about.title': 'Bonjour, je suis Diana',
    'about.p1':    'Je suis photographe de portrait et de lifestyle, installée en plein cœur de la ville. Mon travail repose sur une vraie rencontre\u00A0: les plus belles photographies naissent lorsque les gens se sentent à l’aise, regardés et célébrés tels qu’ils sont.',
    'about.p2':    'Avec plus de huit ans derrière l’objectif, j’ai eu le privilège de photographier des mariages, des familles et de grands moments de vie en Europe et ailleurs. La lumière, l’émotion et l’authenticité guident chacune de mes images.',
    'about.cta':   'Travaillons ensemble',
    'about.alt':   'Diana — photographe',

    'portfolio.label': 'Réalisations',
    'portfolio.title': 'Portfolio',

    'filter.all':       'Tout',
    'filter.portrait':  'Portraits',
    'filter.wedding':   'Mariages',
    'filter.lifestyle': 'Lifestyle',

    'alt.portrait':  'Portrait',
    'alt.wedding':   'Mariage',
    'alt.lifestyle': 'Lifestyle',
    'alt.lightbox':  'Photo agrandie',

    'lightbox.close': 'Fermer',
    'lightbox.prev':  'Précédent',
    'lightbox.next':  'Suivant',

    'services.label': 'Ce que je propose',
    'services.title': 'Prestations',

    'services.portrait.title': 'Séances portrait',
    'services.portrait.text':  'Portraits individuels, en couple ou en famille, en studio ou en extérieur. Une séance détendue, guidée et entièrement pensée pour vous.',
    'services.portrait.price': 'à partir de 250 $',

    'services.wedding.title': 'Reportage de mariage',
    'services.wedding.text':  'Couverture de mariage à la journée ou à la demi-journée. Des instants sur le vif, des détails soignés et des souvenirs précieux pour toujours.',
    'services.wedding.price': 'à partir de 1 800 $',

    'services.lifestyle.title': 'Lifestyle & marque',
    'services.lifestyle.text':  'Des images lifestyle authentiques pour les marques personnelles, les entrepreneurs et les petites entreprises.',
    'services.lifestyle.price': 'à partir de 400 $',

    'testimonials.label':  'Ils en parlent',
    'testimonials.1.quote': '«\u00A0Diana a un œil incroyable et un cœur encore plus chaleureux. Nos photos de mariage dépassent tout ce que nous avions imaginé. Nous nous sommes sentis à l’aise toute la journée.\u00A0»',
    'testimonials.1.cite':  '— Sophie & Luca, mariés en 2024',
    'testimonials.2.quote': '«\u00A0Je ne m’étais jamais sentie à l’aise devant un objectif, mais Diana m’a tout de suite mise en confiance. Les portraits sont magnifiques.\u00A0»',
    'testimonials.2.cite':  '— Mia K., cliente portrait',
    'testimonials.3.quote': '«\u00A0Professionnelle, créative et incroyablement talentueuse. Diana a compris l’univers de notre marque dès le premier échange et nous a livré des images qui ont sublimé toute notre identité.\u00A0»',
    'testimonials.3.cite':  '— Aria Studio, cliente marque',
    'testimonials.dot1':   'Témoignage 1',
    'testimonials.dot2':   'Témoignage 2',
    'testimonials.dot3':   'Témoignage 3',

    'contact.label':         'Me contacter',
    'contact.title':         'Créons ensemble quelque chose de beau',
    'contact.text':          'Un projet en tête ou simplement envie de dire bonjour\u00A0? Remplissez le formulaire et je vous réponds sous 48 heures.',
    'contact.emailLabel':    'E-mail',
    'contact.locationLabel': 'Localisation',
    'contact.locationValue': 'Disponible dans le monde entier',

    'form.name':               'Nom',
    'form.namePlaceholder':    'Votre nom',
    'form.email':              'E-mail',
    'form.service':            'Prestation',
    'form.serviceDefault':     'Choisissez une prestation…',
    'form.servicePortrait':    'Séance portrait',
    'form.serviceWedding':     'Reportage de mariage',
    'form.serviceLifestyle':   'Lifestyle & marque',
    'form.serviceOther':       'Autre',
    'form.message':            'Message',
    'form.messagePlaceholder': 'Parlez-moi de votre projet…',
    'form.submit':             'Envoyer',
    'form.error':              'Merci de remplir tous les champs obligatoires.',
    'form.success':            'Merci\u00A0! Je vous recontacte sous 48 heures.',

    'footer.rights': 'Studio Diana. Tous droits réservés.'
  }
};

// ---------- Setup ----------
const SUPPORTED_LANGS = Object.keys(TRANSLATIONS);
const FALLBACK_LANG   = 'en';
const STORAGE_KEY     = 'studiodiana:lang';

let currentLang = FALLBACK_LANG;

// ---------- Which language do we start with? ----------
// 1. ?lang=xx in the URL   2. the visitor's last choice   3. browser language   4. English
function detectLang() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (fromUrl && SUPPORTED_LANGS.includes(fromUrl.toLowerCase())) return fromUrl.toLowerCase();

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  } catch (err) { /* storage blocked — fall through */ }

  const prefs = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language];

  for (const pref of prefs) {
    const base = String(pref || '').slice(0, 2).toLowerCase();
    if (SUPPORTED_LANGS.includes(base)) return base;
  }
  return FALLBACK_LANG;
}

// ---------- Lookup ----------
function t(key) {
  const dict = TRANSLATIONS[currentLang] || {};
  if (key in dict) return dict[key];
  const fallback = TRANSLATIONS[FALLBACK_LANG];
  return key in fallback ? fallback[key] : key;
}

// ---------- Paint the page ----------
function translateDocument() {
  document.documentElement.setAttribute('lang', currentLang);
  document.title = t('meta.title');

  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', t('meta.description'));

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    el.setAttribute('alt', t(el.dataset.i18nAlt));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isCurrent = btn.dataset.lang === currentLang;
    btn.classList.toggle('active', isCurrent);
    btn.setAttribute('aria-pressed', String(isCurrent));
  });
}

function setLang(lang, { persist = true, syncUrl = true } = {}) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = FALLBACK_LANG;
  currentLang = lang;

  if (persist) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (err) { /* ignore */ }
  }
  if (syncUrl) {
    // keeps the link shareable without reloading or losing the #section
    // (throws on file:// — harmless, the page still switches)
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState(null, '', url);
    } catch (err) { /* ignore */ }
  }

  translateDocument();
  document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
}

// ---------- Language switcher ----------
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// ---------- Go ----------
setLang(detectLang(), { persist: false, syncUrl: false });

window.i18n = {
  t,
  setLang,
  get lang() { return currentLang; },
  supported: SUPPORTED_LANGS
};
