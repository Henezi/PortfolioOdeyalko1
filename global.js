// ======================
// LOADER
// ======================

window.addEventListener('load', () => {

  const loader = document.querySelector('.loader');

  setTimeout(() => {

    loader.classList.add('hide');

  }, 600);

});



// =======================
// LANGUAGE SYSTEM
// =======================

const translations = {
  ru: {
    heroTitle: `ДИЗАЙН<br>БЕЗ<br>ШАБЛОНОВ`, 
    heroText: `Сайты, баннеры, инфографика и визуал, который выглядит как отдельный арт-объект.`, 
    Portfolio: `Портфолио`, 
    About: `Обо мне`, 
    heroButton: `Смотреть работы →`, 
    Designer: `Odeyalko1<br>дизайнер`, 
    aboutText: `Начинающий дизайнер, делаю стильные и понятные дизайны на заказ. <br> Работаю аккуратно, быстро и с вниманием к деталям.`, 
    Directions: `Направления`, 
    Websites: `Сайты`, 
    Websites_d: `Дизайн сайтов`, 
    Banners: `Баннеры`, 
    Banners_d: `Баннеры для социальных сетей`, 
    Infographics: `Инфографика`, 
    Infographics_d: `Карточки маркетплейсов`, 
    Preview: `Превью`, 
    Preview_d: `Превью для видео`, 
    Presentations: `Презентации`, 
    Presentations_d: `Дизайн презентаций`, 
    Contacts: `Контакты`, 
    Available: `доступно для проектов`,
    Back: `⬅ Главная страница`,
    Navigation: `Навигация`,
  },

  en: {
    heroTitle: `DESIGN<br>WITHOUT<br>TEMPLATES`, 
    heroText: `Websites, banners, infographics and visuals that look like standalone art objects.`, 
    Portfolio: `Portfolio`, 
    About: `About me`, 
    heroButton: `View projects →`, 
    Designer: `Odeyalko1<br>designer`, 
    aboutText: `Beginner designer creating stylish and clean visuals for clients. <br> I work carefully, quickly and pay attention to details.`, 
    Directions: `Directions`, 
    Websites: `Website`, 
    Websites_d: `Website Design`, 
    Banners: `Banners`, 
    Banners_d: `Banners for social<br>networks`, 
    Infographics: `Infographics`, 
    Infographics_d: `Marketplace<br>cards`, 
    Preview: `Preview`, 
    Preview_d: `Video<br>Preview`, 
    Presentations: `Presentations`, 
    Presentations_d: `Presentation design`, 
    Contacts: `Contacts`, 
    Available: `available for projects`,
    Back: `⬅ Main page`,
    Navigation: `Navigation`,
  }
};


function setLanguage(lang) {

  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-translate]').forEach((element) => {

    const key = element.dataset.translate;

    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }

  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {

    btn.classList.remove('active');

    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }

  });

}


const savedLang = localStorage.getItem('lang') || 'ru';

setLanguage(savedLang);


document.querySelectorAll('.lang-btn').forEach((btn) => {

  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  });

});