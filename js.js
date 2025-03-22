// Define an array of products


const products = [
  { id: 1, name: 'valentino born in roma uomo', image: 'https://en.bloomingdales.com.kw/dw/image/v2/BDSP_PRD/on/demandware.static/-/Sites-bloomingdales-master-catalog/default/dw0cdd9e59/sfcc-blm-production/2/1/6/2/5/216257043_IN.jpg?sw=435&sh=650&q=100', price: 120, summary: 'Valentino Born in Roma Uomo is an intense, masculine fragrance that combines elegance with a modern edge. Its inspired by the energy and charm of Rome, blending rich, aromatic notes to create a strong and lasting scent.', gender: 'Male' },
  { id: 2, name: 'stronger with you intensely', image: 'https://cdn.notinoimg.com/detail_main_lq/armani/3614272225718_01-o/emporio-stronger-with-you-intensely___190118.jpg', price: 125, summary: 'If youre looking for a fragrance that s good for winter , Stronger With You Intensely is a perfect choice. Its mix of vanilla, cinnamon, and amber gives off a warm, cozy vibe that s great for cooler weather and lasts all day without being overpowering', gender: 'Male' },
  { id: 3, name: 'jean paul gaultier le male elixir', image: 'https://fimgs.net/mdimg/perfume/375x500.81642.jpg', price: 180, summary: 'Le Male Elixir offers a captivating blend of aromatic and sweet notes, appealing to those seeking a modern twist on classic masculinity.', gender: 'Male' },
  { id: 4, name: 'jean paul gaultier le beau', image: 'https://fimgs.net/mdimg/perfume/375x500.88836.jpg', price: 170, summary: 'Le Beau by Jean Paul Gaultier offers a distinctive blend of tropical and woody notes, making it a suitable choice for casual and warm-weather wear. Its unique composition sets it apart, appealing to those seeking a fragrance with a fresh yet sensual character', gender: 'Male' },
  { id: 5, name: 'dior homme intense 100ml', image: 'https://fimgs.net/mdimg/perfume/375x500.13016.jpg', price: 155, summary: 'The fragrance opens with a soft lavender note, followed by the powdery and musky sweetness of iris and ambrette, balanced by pear. The base is warm and woody with cedar and vetiver, giving it a refined and masculine character. It s known for its strong longevity and sillage and is ideal for evening wear and colder seasons', gender: 'Male' },
  { id: 6, name: 'parfums de marly PERCIVAL EAU DE PARFUM', image: 'https://parfums-de-marly.com/cdn/shop/files/PERCIVAL_125ml_1.png?v=1728466360&width=533', price: 255, summary: 'Parfums de Marly Percival Eau de Parfum is a vibrant, fresh, and sophisticated fragrance that captures a sense of modern elegance. Known for its clean, crisp scent, it combines citrus and aromatic notes with a touch of sweetness, making it versatile for both day and night wear', gender: 'Male' },
  { id: 7, name: 'Xerjoff Erba Pura - Eau de Parfum Unisex Fragrance', image: 'https://cms.brnstc.de/product_images/680x930_retina/cpro/media/images/product/24/1/8054320902584_0_1705661846230.jpg', price: 220, summary: 'Xerjoff Erba Pura Eau de Parfum is a luxurious, unisex fragrance that offers a refreshing, vibrant, and fruit-forward experience. It is known for its blend of fresh, fruity notes balanced with warm, musky undertones, creating a scent that feels both energizing and sophisticated', gender: 'Unisex' },
  { id: 8, name: 'Acqua di Giò Profondo Parfum Giorgio Armani', image: 'https://fimgs.net/mdimg/perfume/375x500.90451.jpg', price: 100, summary: 'Acqua di Giò Profondo Parfum by Giorgio Armani is a refined and fresh take on the classic Acqua di Giò, offering a deeper, more intense version while still maintaining its signature aquatic freshness. Its a sophisticated, unisex fragrance with modern, invigorating notes, making it perfect for those who appreciate a balance of fresh, mineral, and woody elements', gender: 'Male' },
  { id: 9, name: 'Maison Francis Kurkdjian Baccarat Rouge 540 Pure Perfume', image: 'https://www.franciskurkdjian.com/dw/image/v2/BJSB_PRD/on/demandware.static/-/Sites-mfk-master-catalog/default/dwf62a7f6b/Packshots%202022/Rouge%20540/PACKSHOT_ROUGE_540_70ML_EXT_VUE1-FACE_FOND-TRANSPARENT_460x460.png?sw=640&sh=640&strip=false', price: 350, summary: 'Maison Francis Kurkdjian Baccarat Rouge 540 Pure Perfume is a luxurious oriental floral fragrance with notes of saffron, jasmine, amberwood, ambergris, fir resin, and cedar. It’s warm, sweet, and woody with strong sillage and long-lasting performance (8–12+ hours). Perfect for evening wear and special occasion', gender: 'Unisex' },
  { id: 10, name: 'parfums de marly Althair Eau de Parfum 75ml', image: 'https://cdn11.bigcommerce.com/s-mqq1i1xa2c/images/stencil/1280x1280/products/159633/5507078/976417_NA_1__22837.1700157696.jpg?c=1', price: 250, summary: 'Parfums de Marly Althair Eau de Parfum is a warm amber-vanilla fragrance with spicy notes of cinnamon and cardamom, sweet bourbon vanilla, and a woody praline base. Long-lasting with strong sillage, perfect for cooler weather and evening wear', gender: 'Male' },
  { id: 11, name: 'Tom Ford Vanille Fatale Eau de Parfum 50ml', image: 'https://parigallery.com/cdn/shop/files/tom-ford-vanille-fatale-edp-50ml.png?v=1711541702&width=1100', price: 450, summary: 'Tom Ford Vanille Fatale is a warm, spicy vanilla fragrance with rich notes of saffron, myrrh, coffee, and tobacco. Long-lasting with moderate to strong sillage, ideal for fall, winter, and evening wear', gender: 'Male' },
  { id: 12, name: 'Armani Prive Vert Malachite 100ml', image: 'https://parigallery.com/cdn/shop/products/101121PER00205.jpg?v=1639401533&width=1100', price: 330, summary: 'Armani Privé Vert Malachite is a creamy floral-woody fragrance with notes of bitter orange, jasmine, and vanilla. Long-lasting with strong sillage, ideal for spring, fall, and evening wear', gender: 'Female' },
  { id: 13, name: 'louis vuitton imagination 100ml', image: 'https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-imagination--LP0219_PM2_Front%20view.jpg', price: 550, summary: 'Louis Vuitton Imagination is a fresh and sophisticated fragrance with citrus, amber, and tea notes. It opens with vibrant bergamot and orange, followed by spicy ginger and neroli, and finishes with warm ambrox and tea, creating an elegant and modern scent', gender: 'Male' },
  { id: 14, name: 'jean Paul Gaultier Les Males De Le Beau Le Parfum', image: 'https://fimgs.net/mdimg/perfume/375x500.72158.jpg', price: 180, summary: 'Jean Paul Gaultier Le Beau Le Parfum is an intense and seductive fragrance with a woody and oriental character. It opens with fresh bergamot and coconut, followed by sweet tonka bean and creamy sandalwood, creating a rich and sensual scent with long-lasting depth', gender: 'Male' },
  { id: 15, name: 'Dior Sauvage Elixir', image: 'https://www.houseofwhiffs.com/wp-content/uploads/2023/03/Sauvage-Elixir-60ML.png', price: 160, summary: 'Dior Sauvage Elixir is an intense and bold fragrance with a spicy, woody character. It opens with fresh grapefruit and warm cinnamon, followed by rich nutmeg and lavender, and finishes with deep sandalwood and licorice, creating a powerful and long-lasting scent', gender: 'Male' },
  { id: 16, name: 'Calvin Klein - Beauty (W) EDP 100ml', image: 'https://static.thcdn.com/images/large/original//productimg/1600/1600/11079226-9194958619240903.jpg', price: 65, summary: 'Calvin Klein Beauty Eau de Parfum captures the essence of feminine elegance and sophistication. This fragrance opens with top notes of ambrette seeds, leading to a heart of jasmine, and settles into base notes of cedarwood. The result is a harmonious blend that exudes confidence and grace.', gender: 'Female' },
  { id: 17, name: 'Calvin Klein - CK IN2U Her (W) EDT 50ml', image: 'https://fattalbeauty.com/cdn/shop/files/69500_68c8936f-adf1-4e68-bc29-d466387315cd.png?v=1691603894', price: 38, summary: 'CK IN2U Her by Calvin Klein is a fresh and youthful fragrance designed for the spontaneous woman. It features a blend of citrus and floral notes, including pink grapefruit and sugar orchid, balanced by a base of neon amber and red cedar.', gender: 'Female' },
  { id: 18, name: 'Calvin Klein - CK IN2U Him (M) EDT 100ml', image: 'https://static.thcdn.com/images/large/original//productimg/1600/1600/11210338-1565061544534758.jpg', price: 56, summary: 'CK IN2U Him by Calvin Klein is a modern fragrance for the adventurous man. It opens with notes of lime and gin fizz, transitions to a heart of cocoa bean, and finishes with vetiver and musk, offering a fresh yet warm aroma.', gender: 'Male' },
  { id: 19, name: 'Calvin Klein - CK One (M) EDT 100ml', image: 'https://cdn.paris-avenues.com/image/cache/catalog/Product2/88300107407-Calvin-Klein-Ck-One-Edt-100-Ml--550x550.jpg', price: 53, summary: 'CK One is a unisex fragrance by Calvin Klein that embodies a clean and contemporary scent. With notes of pineapple, green tea, and amber, this fragrance offers a refreshing and balanced aroma, making it versatile for daily use.', gender: 'Unisex' },
  { id: 20, name: 'Calvin Klein - Euphoria Liquid Gold (W) EDP 100ml', image: 'https://www.beautybuys.com/media/catalog/product/cache/39943af0042da80245beeebb3d36feeb/e/u/euppgp100s-calvin-klein-euphoria-pure-gold-femme-eau-de-parfum-spray-100ml_1_xjumzirvn7gko4ym.jpg', price: 135, summary: 'Euphoria Liquid Gold by Calvin Klein is a luxurious and intense fragrance for women. It combines rich notes of cinnamon, black orchid, and sandalwood, resulting in a deep and captivating scent that exudes opulence and mystery.', gender: 'Female' },
  { id: 21, name: 'Dolce & Gabbana - Devotion (M) EDP 100ml', image: 'https://fimgs.net/mdimg/perfume/375x500.84951.jpg', price: 135, summary: 'Dolce & Gabbana\'s Devotion Eau de Parfum for men captures the essence of Mediterranean life. It blends notes of candied citrus and orange blossom with a base of sweet vanilla, offering a scent that is both warm and sensual.', gender: 'Male' },
  { id: 22, name: 'Dolce & Gabbana - Devotion Intense (W) EDP 100ml', image: 'https://www.sephora.com/productimages/sku/s2800415-main-zoom.jpg?imwidth=612', price: 155, summary: 'Devotion Intense by Dolce & Gabbana is a rich and alluring fragrance for women. It features a blend of deep floral notes, combined with warm undertones, creating a scent that is both passionate and enduring.', gender: 'Female' },
  { id: 23, name: 'Dolce & Gabbana - K (M) EDP 100ml', image: 'https://m.media-amazon.com/images/I/51aLVEkkSBL.jpg', price: 105, summary: 'K by Dolce & Gabbana is a masculine fragrance that combines citrus freshness with spicy and woody undertones, creating a powerful and charismatic scent.', gender: 'Male' },
  { id: 24, name: 'Dolce & Gabbana - Light Blue (W) EDT 100ml', image: 'https://xpressions.ae/cdn/shop/files/Untitled-design-2_800x.png?v=1683622318', price: 105, summary: 'Light Blue by Dolce & Gabbana is a fresh and fruity fragrance with notes of Sicilian lemon, green apple, and cedarwood, evoking the essence of a Mediterranean summer.', gender: 'Female' },
  { id: 25, name: 'Dolce & Gabbana - Light Blue Eau Intense (M) EDP 100ml', image: 'https://fimgs.net/mdimg/perfume/375x500.44035.jpg', price: 95, summary: 'Light Blue Eau Intense for men offers a deeper and more intense version of the classic Light Blue scent, blending fresh aquatic notes with amber and musk.', gender: 'Male' },
  { id: 26, name: 'Dolce & Gabbana - Light Blue Sun (W) EDT 100ml', image: 'https://cdn.paris-avenues.com/image/cache/catalog/Product2/3423478517455-Dolce-&-Gabbana-Light-Blue-Sun-Pour-Femme-Edt-100-Ml--623x673.jpg', price: 125, summary: 'Light Blue Sun by Dolce & Gabbana is a sunny and radiant fragrance with notes of coconut water, frangipani, and amber, capturing the warmth of summer.', gender: 'Female' },
  { id: 27, name: 'Dolce & Gabbana - Q (W) EDP 100ml', image: 'https://hermitage.am/storage/10552/1690290106.jpg', price: 145, summary: 'Q by Dolce & Gabbana is a regal and captivating fragrance with notes of Sicilian lemon, cherry, and cedarwood, evoking a sense of elegance and strength.', gender: 'Female' },
  { id: 28, name: 'Dolce & Gabbana - The One (M) EDP 100ml', image: 'https://www.beirutdutyfree.com/media/products/large/6992_1629372321_theoneformeneaudeparfum100150ml.png', price: 105, summary: 'The One for men by Dolce & Gabbana is a warm and spicy fragrance with notes of grapefruit, ginger, and tobacco, creating a sophisticated and timeless scent.', gender: 'Male' },
  { id: 29, name: 'Versace - Crystal Noir (W) EDP 90ml', image: 'https://skinsociety.me/cdn/shop/files/versace-crystal-noir-eau-de-parfum-skin-society-shop-address-country-2.jpg?v=1686485842', price: 111, summary: 'An exotic and sensual scent with notes of gardenia, amber, and coconut.', gender: 'Female' },
  { id: 30, name: 'Versace - Dylan Blue (M) EDT 100ml', image: 'https://cdn2.easycosmetic.be/images/Produkte/D2/versace-pour-homme-dylan-blue-edt-vapo-30ml.png', price: 95, summary: 'A powerful and fresh fragrance with notes of bergamot, grapefruit, and black pepper.', gender: 'Male' },
  { id: 31, name: 'Versace - Eros (M) EDP 100ml', image: 'https://m.media-amazon.com/images/I/51OeIdhUpnL._AC_.jpg', price: 95, summary: 'A masculine fragrance with notes of mint, vanilla, and tonka bean.', gender: 'Male' },
  { id: 32, name: 'Versace - Eros (M) Parfum 100ml', image: 'https://tse4.mm.bing.net/th?id=OIP.Z1I4wOcQgyFa6SNWz4GltAHaHa&w=474&h=474&c=7', price: 124, summary: 'A rich and sensual scent with notes of mint, vanilla, and cedarwood.', gender: 'Male' },
  { id: 33, name: 'Versace - Eros Flame (M) EDP 100ml', image: 'https://www.fridaycharm.com/cdn/shop/products/Versace-Eros-Flame-EDP-M-100ml-2.jpg?v=1674135638', price: 88, summary: 'A spicy and woody scent with notes of mandarin, black pepper, and vanilla.', gender: 'Male' },
  { id: 34, name: 'Versace - Oud Oriental (W) EDP 100ml', image: 'https://faces.pearlbrandsonline.com/wp-content/uploads/sites/2/2023/09/8011003818167.jpg', price: 110, summary: 'A warm and intense fragrance with notes of saffron, rose, and oud wood.', gender: 'Female' },
  { id: 35, name: 'Versace - Pour Homme (M) EDT 100ml', image: 'https://perfumegallery.ae/cdn/shop/files/Untitleddesign_7_f8ed4902-5bfe-42d5-a034-3b93446ce10e.png?v=1685966328', price: 76, summary: 'A classic masculine fragrance with notes of lemon, cedar, and tonka bean.', gender: 'Male' },
  { id: 36, name: 'Yves Saint Laurent - Black Opium (W) EDP 90ml', image: 'https://www.perfumeprice.co.uk/media/catalog/product/cache/4d0c0c97ad4ceee2ad08254a2e252c9a/b/l/blackopium90mledp.jpg', price: 143, summary: 'A bold and addictive fragrance with notes of coffee, vanilla, and white flowers, perfect for those who love a sensual and mysterious scent.', gender: 'Female' },
  { id: 37, name: 'Yves Saint Laurent - Libre (W) EDP 90ml', image: 'https://www.bluesalon.com/cdn/shop/files/YSL121PER00167.jpg?v=1698838946', price: 137, summary: 'A modern and empowering fragrance blending lavender, orange blossom, and musk, symbolizing freedom and femininity.', gender: 'Female' },
  { id: 38, name: 'Yves Saint Laurent - Libre Intense (W) EDP 90ml', image: 'https://www.lookfantastic.com/images?url=https://static.thcdn.com/productimg/original/12607161-7424936820895099.jpg&format=webp&auto=avif&width=985&height=985&fit=cover', price: 152, summary: 'A deeper, more intense version of Libre, with rich notes of vanilla, lavender, and orchid, exuding confidence and sophistication.', gender: 'Female' },
  { id: 39, name: 'Yves Saint Laurent - Myslf (M) EDP 100ml', image: 'https://m.media-amazon.com/images/I/412TXqfY5jL._SL1000_.jpg', price: 141, summary: 'A warm and woody fragrance with notes of orange blossom, bourbon vanilla, and sandalwood, perfect for the modern, self-assured man.', gender: 'Male' },
  { id: 40, name: 'Yves Saint Laurent - Y (M) EDP 100ml', image: 'https://www.yslbeauty.sa/dw/image/v2/BDCL_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dwb551142f/Fragrance/Y_EDP/3614272050341_60ml_y-eau-de-parfum_Alt1.png?sw=500&sh=600', price: 133, summary: 'A fresh and spicy fragrance with bergamot, ginger, and woody notes, embodying a youthful and energetic spirit.', gender: 'Male' },
  { id: 41, name: 'Yves Saint Laurent - Y Le Parfum (M) EDP 100ml', image: 'https://www.bigbrands.ae/wp-content/uploads/2022/11/YVES-SAINT-LAURENT-Y-LE-PARFUM-M-EDP-100-ML-VAPO-500-%C3%97-500-px-2.png', price: 150, summary: 'A richer, more intense version of Y, with notes of tonka bean, sage, and cedarwood, offering a refined and luxurious experience.', gender: 'Male' },
  { id: 42, name: 'Roberto Cavalli - Florence (W) EDP 75ml', image: 'https://cdn.ae1stcry.com/brainbees/images/products/438x531/83fffae0e1c84a.webp', price: 87, summary: 'A floral and elegant fragrance with notes of gardenia, jasmine, and sandalwood, perfect for a sophisticated and timeless appeal.', gender: 'Female' },
  { id: 43, name: 'Roberto Cavalli - Gold Collection Royal Soul (U) Parfum 100ml', image: 'https://www.myperfumeshop.com.au/cdn/shop/files/roberto-cavalli-royal-soul-edp-perfume-cologne-800498.png?v=1719364305&width=1000', price: 145, summary: 'A luxurious and unisex fragrance with notes of bergamot, patchouli, and amber, exuding opulence and depth.', gender: 'Unisex' },
  { id: 44, name: 'Roberto Cavalli - Gold Collection Sublime Tonka (U) EDP 100ml', image: 'https://perfumeunlimited.com/media/catalog/product/cache/426571a213995d0f26cf05297c4bc27d/r/o/roberto_cavalli_gold_collection_sublime_tonka_unisex_eau_de_parfum_100ml1.jpg', price: 139, summary: 'A warm and sensual unisex fragrance with notes of tonka bean, vanilla, and almond, offering a rich and comforting aroma.', gender: 'Unisex' },
  { id: 45, name: 'Roberto Cavalli - Just Cavalli (M) EDT 75ml', image: 'https://media.theperfumeshop.com/medias/sys_master/prd-images/h2c/he3/8865136640030/zoom-front-1131390_420x420/roberto-cavalli-just-cavalli-eau-de-toilette-spray-420x420', price: 53, summary: 'A fresh and masculine fragrance with notes of cardamom, leather, and vetiver, perfect for a modern and confident man.', gender: 'Male' },
  { id: 46, name: 'Roberto Cavalli - Nero Assoluto (W) EDP 75ml', image: 'https://www.myperfumeshop.com.au/cdn/shop/products/roberto-cavalli-nero-assoluto-edp-perfume-cologne-662883.png?v=1679262195', price: 73, summary: 'A bold and mysterious fragrance with notes of black pepper, jasmine, and patchouli, perfect for a daring and glamorous woman.', gender: 'Female' },
  { id: 47, name: 'Roberto Cavalli - Paradiso (W) EDP 100ml', image: 'https://fimgs.net/mdimg/perfume/375x500.28609.jpg', price: 83, summary: 'A vibrant and tropical fragrance with notes of coconut, vanilla, and tiare flower, evoking the essence of a sunny paradise.', gender: 'Female' },
  { id: 48, name: 'Roberto Cavalli - Paradiso Azzaru (W) EDP 75ml', image: 'https://static.thcdn.com/images/large/original//productimg/1600/1600/13935358-1364998476372910.jpg', price: 77, summary: 'A fresh and aquatic fragrance with notes of bergamot, jasmine, and musk, capturing the spirit of the Mediterranean sea.', gender: 'Female' },
  { id: 49, name: 'Roberto Cavalli - Roberto Cavalli (W) EDP 75ml', image: 'https://orisdi.com/cdn/shop/products/roberto-cavalli-perfume.jpg?v=1559804978', price: 65, summary: 'A sensual and floral fragrance with notes of orange blossom, vanilla, and amber, embodying femininity and allure.', gender: 'Female' },
  { id: 50, name: 'Roberto Cavalli - Uomo (M) EDT 100ml', image: 'https://www.feelingsexy.com.au/images/products/allproducts/ROBERTOCAVALLI_UOMO_NEW100.jpg', price: 64, summary: 'A woody and spicy fragrance with notes of violet, leather, and vetiver, perfect for a refined and masculine man.', gender: 'Male' },
  { id: 51, name: 'Roberto Cavalli - Uomo (M) Parfum 100ml', image: 'https://cdn2.jomashop.com/media/catalog/product/cache/0ee3019724ce73007b606b54ba535a23/r/o/roberto-cavalli-mens-uomo-parfum-spray-338-oz-tester-fragrances-3616303445294.jpg?width=546&height=546', price: 83, summary: 'A richer and more intense version of Uomo, with deeper notes of leather, amber, and patchouli, exuding sophistication.', gender: 'Male' },
  { id: 52, name: 'Roberto Cavalli - Uomo La Notte (M) EDT 100ml', image: 'https://fimgs.net/mdimg/perfume/375x500.51656.jpg', price: 85, summary: 'A dark and seductive fragrance with notes of black pepper, incense, and leather, perfect for a mysterious and charismatic man.' },
  { id: 53, name: 'Orto Parisi - Terroni (U) Parfum 50ml', image: 'https://noseparis.com/media/catalog/product/cache/a9f4498212a9683d6979f3cb70158f71/o/r/ortoparisi-terroni_2.png', price: 195, summary: 'Orto Parisi Terroni is a deep and earthy unisex fragrance inspired by volcanic soil. It features rich notes of leather, amber, and spices, evoking the essence of primal energy and passion.', gender: 'Unisex' }

] 
// ✅ Function to load items dynamically
function loadItems(filteredProducts = products) {
  const itemListElement = document.getElementById('item-list');
  itemListElement.innerHTML = ''; // Clear existing content

  filteredProducts.forEach(product => {
    const div = document.createElement('div');
    div.className = 'item';

    // Add the image
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    div.appendChild(img);

    // Add the name
    const p = document.createElement('p');
    p.textContent = product.name;
    div.appendChild(p);

    // Add the price
    const price = document.createElement('p');
    price.textContent = `${product.price}$`;
    div.appendChild(price);

    // Add the "Add to Cart" button
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.style.fontWeight = 'bold';
    button.onclick = () => addToCart(product);
    div.appendChild(button);

    // Add the item to the list
    itemListElement.appendChild(div);

    // Add click event to the image
    img.onclick = () => {
      localStorage.setItem('productName', product.name);
      localStorage.setItem('productprice', product.price);
      localStorage.setItem('imgsrc', product.image);
      localStorage.setItem('sammary', product.summary);
      window.location.href = 't3.html';
    };
  });
}

// ✅ Function to filter products by gender and search input
function filterProducts() {
  const filterValue = document.getElementById('filterInput').value.toLowerCase();
  const currentPage = window.location.pathname.split('/').pop(); // Get the current page (man.html or woman.html)

  let filteredProducts = products;

  // Filter by gender based on the current page
  if (currentPage === 'man.html') {
    // Display Male and Unisex products
    filteredProducts = products.filter(product => product.gender === 'Male' || product.gender === 'Unisex');
  } else if (currentPage === 'woman.html') {
    // Display Female and Unisex products
    filteredProducts = products.filter(product => product.gender === 'Female' || product.gender === 'Unisex');
  }

  // Further filter by search input
  filteredProducts = filteredProducts.filter(product =>
    product.name.toLowerCase().includes(filterValue)
  );

  loadItems(filteredProducts); // Load filtered products
}

// ✅ Function to add an item to the cart
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

// ✅ Function to display cart items on Page 2
function displayCartItems() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsElement = document.getElementById('cart-items');
  const total = document.getElementById('total1');
  cartItemsElement.innerHTML = '';

  let totalPrice = 0;
  cart.forEach((item, index) => {
    const li = document.createElement('li');

    // Add the image
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.style.width = '60px';
    li.appendChild(img);

    // Add the item name and price
    const span = document.createElement('span');
    span.textContent = `${item.name} ${item.price}$`;
    li.appendChild(span);

    // Add the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.onclick = () => deleteFromCart(index);
    deleteButton.style.marginLeft = '35px';
    deleteButton.style.color = 'white';
    deleteButton.style.background = '#333';
    deleteButton.style.marginTop = '10px';
    deleteButton.style.width = '50px';
    deleteButton.style.height = '50px';
    deleteButton.style.backgroundColor = 'transparent';
    deleteButton.style.borderColor = '#333';
    deleteButton.style.fontSize = '11px';
    li.appendChild(deleteButton);

    cartItemsElement.appendChild(li);
    totalPrice += item.price;
  });

  total.textContent = `${totalPrice}$`;
  localStorage.setItem('price', totalPrice);
}

// ✅ Function to clear the cart
function clearCart() {
  localStorage.removeItem('cart');
  alert('Cart cleared!');
  displayCartItems();
  localStorage.removeItem('price');
  window.location.href = 't.html';
}

// ✅ Navigation Buttons
document.getElementById('p').onclick = function () {
  window.location.href = 't1.html';
};

document.getElementById('back-btn').onclick = function () {
  history.back();
};

// ✅ Load items on page load
loadItems();

document.getElementById('getitems').onclick = function () {
  window.location.href = 't1.html';
};

window.addEventListener('storage', function (event) {
  if (event.key == 'targit') {
    this.document.getElementById('button').click();
  }
});

// ✅ Function to delete an item from the cart
function deleteFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1); // Remove item at the specified index
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems(); // Refresh cart display
}
