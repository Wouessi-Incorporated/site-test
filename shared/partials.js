function alturaHeader(opts){
  const langPath = (opts && opts.langPath) ? opts.langPath : '/en';
  const other = langPath==='/en' ? '/fr' : '/en';
  const otherLabel = langPath==='/en' ? 'FR' : 'EN';
  return `
  <header class="nav">
    <div class="container">
      <div class="nav-inner">
        <a class="brand" href="${langPath}/">
          <img src="/assets/altura-logo.png" alt="ALTURA" />
          <span>ALTURA</span>
        </a>
        <nav class="nav-links">
          <a href="${langPath}/products.html">${langPath==='/fr'?'Produits':'Products'}</a>
          <a href="${langPath}/fit.html">${langPath==='/fr'?'Tall Fit':'Tall Fit'}</a>
          <a href="${langPath}/returns.html">${langPath==='/fr'?'Retours':'Returns'}</a>
          <a href="${langPath}/contact.html">${langPath==='/fr'?'Contact':'Contact'}</a>
        </nav>
        <div class="nav-ctl">
          <select class="select" onchange="ALTURA.setCurrency(this.value)" aria-label="Currency">
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
          <a class="btn btn-ghost" href="${other}/" onclick="ALTURA.setLang('${other.substring(1)}')">${otherLabel}</a>
          <a class="btn btn-dark" href="${langPath}/checkout.html">${langPath==='/fr'?'Panier':'Cart'} (<span data-cart-count>0</span>)</a>
        </div>
      </div>
    </div>
  </header>`;
}

function alturaFooter(langPath){
  const t = (k)=>{
    const fr = {
      about:'ALTURA — chaussures & sacs premium concus pour les personnes grandes.',
      help:'Aide',
      sizing:'Guide des tailles',
      shipping:'Livraison',
      returns:'Retours',
      trust:'Confiance',
      secure:'Paiement securise Stripe + PayPal',
      support:'Support WhatsApp',
      privacy:'Confidentialite',
      terms:'Conditions',
    };
    const en = {
      about:'ALTURA — premium shoes & bags designed for tall people.',
      help:'Help',
      sizing:'Sizing guide',
      shipping:'Shipping',
      returns:'Returns',
      trust:'Trust',
      secure:'Secure Stripe + PayPal checkout',
      support:'WhatsApp support',
      privacy:'Privacy',
      terms:'Terms',
    };
    return (langPath==='/fr'?fr:en)[k];
  };

  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="brand" style="gap:12px"><img src="/assets/altura-logo.png" alt="ALTURA" /><span>ALTURA</span></div>
          <p class="small" style="margin-top:10px">${t('about')}</p>
          <div class="hr"></div>
          <div class="small">© ${new Date().getFullYear()} ALTURA. All rights reserved.</div>
        </div>
        <div>
          <div class="card-title">${t('help')}</div>
          <div class="small" style="margin-top:10px;display:grid;gap:8px">
            <a href="${langPath}/fit.html">${t('sizing')}</a>
            <a href="${langPath}/returns.html">${t('returns')}</a>
            <a href="${langPath}/contact.html">Contact</a>
          </div>
        </div>
        <div>
          <div class="card-title">${t('trust')}</div>
          <div class="small" style="margin-top:10px;display:grid;gap:8px">
            <div>🔒 ${t('secure')}</div>
            <div>✅ ${t('support')}</div>
            <div>🧾 ${t('privacy')} • ${t('terms')}</div>
          </div>
        </div>
      </div>
    </div>
  </footer>`;
}
