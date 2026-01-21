(function(){
  const LS_CURRENCY='altura_currency';
  const LS_LANG='altura_lang';

  function detectLang(){
    const saved = localStorage.getItem(LS_LANG);
    if(saved==='en' || saved==='fr') return saved;
    const nav = (navigator.language || 'en').toLowerCase();
    if(nav.startsWith('fr')) return 'fr';
    return 'en';
  }

  function setLang(lang){
    localStorage.setItem(LS_LANG, lang);
  }

  function detectCurrency(){
    const saved = localStorage.getItem(LS_CURRENCY);
    if(saved==='EUR' || saved==='USD') return saved;
    return 'EUR';
  }

  function setCurrency(cur){
    localStorage.setItem(LS_CURRENCY, cur);
    document.dispatchEvent(new CustomEvent('altura:currency', {detail:cur}));
  }

  function formatMoney(amount, currency){
    try{
      return new Intl.NumberFormat(undefined,{style:'currency',currency}).format(amount);
    }catch(e){
      return (currency==='EUR'?'€':'$') + amount.toFixed(2);
    }
  }

  function applyPrices(){
    const cur = detectCurrency();
    document.querySelectorAll('[data-price-eur][data-price-usd]').forEach(el=>{
      const eur = parseFloat(el.getAttribute('data-price-eur'));
      const usd = parseFloat(el.getAttribute('data-price-usd'));
      const v = cur==='USD'?usd:eur;
      el.textContent = formatMoney(v, cur);
    });
    const badge = document.querySelector('[data-currency-badge]');
    if(badge) badge.textContent = cur;
  }

  // Cart (localStorage)
  const LS_CART='altura_cart_v1';
  function loadCart(){
    try{ return JSON.parse(localStorage.getItem(LS_CART)||'[]'); }catch(e){ return []; }
  }
  function saveCart(items){ localStorage.setItem(LS_CART, JSON.stringify(items||[])); }
  function addToCart(item){
    const cart = loadCart();
    cart.push(item);
    saveCart(cart);
    document.dispatchEvent(new CustomEvent('altura:cart',{detail:cart}));
  }
  function cartCount(){ return loadCart().length; }

  function bindCartBadge(){
    const el = document.querySelector('[data-cart-count]');
    if(!el) return;
    el.textContent = cartCount();
    document.addEventListener('altura:cart', (e)=>{ el.textContent = (e.detail||[]).length; });
  }

  function bootRootRedirect(){
    // If we are on / (root), redirect to saved/detected lang
    const path = window.location.pathname;
    if(path==='/' || path==='/index.html'){
      const lang = detectLang();
      window.location.replace('/'+lang+'/');
    }
  }

  window.ALTURA = {
    detectLang, setLang,
    detectCurrency, setCurrency,
    applyPrices,
    addToCart, loadCart, saveCart
  };

  document.addEventListener('DOMContentLoaded', ()=>{
    bootRootRedirect();
    applyPrices();
    bindCartBadge();
    document.addEventListener('altura:currency', applyPrices);
  });
})();
