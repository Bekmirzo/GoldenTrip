const main_content = document.getElementById('main_content');
const nav_asosiy = document.getElementById('nav_asosiy');
const lang_dropdown = document.getElementById('lang_dropdown');
const header_text = document.getElementById('header_text');
const dw_main = document.getElementById('dw_main');
const footer_content = document.getElementById('footer_content');

lang_dropdown.onclick = function (event) {
  const target = event.target.closest('button');
  if (!target) return;
  const lng = target.getAttribute('lng');
  if(!lng) return;

  sessionStorage.setItem('language', lng);
  dw_main.innerHTML = `<i class="fa-solid fa-globe me-1"></i> ` + target.innerText;
  
  const stat = sessionStorage.getItem('stat') || 'asosiy';
  if(stat === 'asosiy') {
      asosiy();
  } else {
      renderTourPage(stat);
  }
};

window.onload = function () {
  let language = sessionStorage.getItem('language');
  if (!language) {
      language = 'uz'; 
      sessionStorage.setItem('language', language);
  }
  
  if (language === 'uz') dw_main.innerHTML = `<i class="fa-solid fa-globe me-1"></i> O‘zbek`;
  if (language === 'ru') dw_main.innerHTML = `<i class="fa-solid fa-globe me-1"></i> Русский`;
  if (language === 'en') dw_main.innerHTML = `<i class="fa-solid fa-globe me-1"></i> English`;

  sessionStorage.setItem('stat', 'asosiy');
  asosiy();
}

nav_asosiy.onclick = asosiy;

function asosiy() {
  const language = sessionStorage.getItem('language');
  
  if (header_text) header_text.innerHTML = text.header_text[language];
  if (main_content) main_content.innerHTML = text.main[language];
  if (footer_content) footer_content.innerHTML = text.footer_text[language];
  
  const buxoroBtn = document.getElementById('buxoro_btn');
  const samarqandBtn = document.getElementById('samarqand_btn');
  const toshkentBtn = document.getElementById('toshkent_btn');
  const xivaBtn = document.getElementById('xiva_btn');

  if (buxoroBtn) buxoroBtn.onclick = () => renderTourPage('buxoro');
  if (samarqandBtn) samarqandBtn.onclick = () => renderTourPage('samarqand');
  if (toshkentBtn) toshkentBtn.onclick = () => renderTourPage('toshkent');
  if (xivaBtn) xivaBtn.onclick = () => renderTourPage('xiva');

  sessionStorage.setItem('stat', 'asosiy');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderTourPage(tourName) {
  const language = sessionStorage.getItem('language');
  
  if (header_text) header_text.innerHTML = ''; 
  if (main_content) main_content.innerHTML = text.tp[tourName][language];
  if (footer_content) footer_content.innerHTML = text.footer_text[language];
  
  const backBtn = document.getElementById('back_btn');
  if (backBtn) backBtn.onclick = asosiy;

  sessionStorage.setItem('stat', tourName);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}