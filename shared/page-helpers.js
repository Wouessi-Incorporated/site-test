(function(){
  function getLangFromPath(){
    const p = window.location.pathname;
    if(p.startsWith('/fr/')) return 'fr';
    return 'en';
  }
  function t(key){
    const fr={
      products:'Produits',
      shoes:'Chaussures',
      bags:'Sacs',
      women:'Femmes',
      men:'Hommes',
      unisex:'Unisexe',
      size:'Taille',
      add:'Ajouter au panier',
      buy:'Acheter maintenant',
      trust:'Retours offerts • Paiement securise • Support WhatsApp',
      checkout:'Paiement',
      cart:'Panier',
      empty:'Panier vide',
      customer:'Informations client',
      email:'Email',
      phone:'Telephone',
      address:'Adresse',
      pay:'Payer',
      total:'Total',
      items:'Articles'
    };
    const en={
      products:'Products',
      shoes:'Shoes',
      bags:'Bags',
      women:'Women',
      men:'Men',
      unisex:'Unisex',
      size:'Size',
      add:'Add to cart',
      buy:'Buy now',
      trust:'Free returns • Secure checkout • WhatsApp support',
      checkout:'Checkout',
      cart:'Cart',
      empty:'Your cart is empty',
      customer:'Customer details',
      email:'Email',
      phone:'Phone',
      address:'Address',
      pay:'Pay',
      total:'Total',
      items:'Items'
    };
    return (getLangFromPath()==='fr'?fr:en)[key] || key;
  }
  window.ALTURA_T = t;
})();
