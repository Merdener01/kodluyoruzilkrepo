const barbers = [
  {
    id: 'keskin-makas',
    name: 'Keskin Makas Erkek Kuaförü',
    area: 'Moda',
    rating: 4.8,
    reviewCount: 128,
    photos: [
      'https://images.unsplash.com/photo-1585341490940-0da6429b2210?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1592014869384-1f119811e7af?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1573496799515-eebbb63814f2?auto=format&fit=crop&w=800&q=80'
    ],
    location: {
      address: 'Moda Caddesi No:45, Kadıköy/İstanbul',
      mapUrl: 'https://maps.google.com/?q=Moda+Caddesi+No:45+Kadıköy'
    },
    services: [
      { name: 'Saç Kesimi', price: 320, duration: 35 },
      { name: 'Sakal Tıraşı', price: 160, duration: 20 },
      { name: 'Saç & Sakal Paket', price: 420, duration: 50 },
      { name: 'Cilt Bakımı', price: 280, duration: 40 }
    ],
    reviews: [
      { user: 'Mert A.', rating: 5, comment: 'Randevu saatinde alındım, işçilik kusursuz. Fiyat/performans açısından çok memnun kaldım.' },
      { user: 'Levent K.', rating: 4.5, comment: 'Salon çok temiz, saç kesiminde detaylara dikkat ediyorlar. Tekrar geleceğim.' }
    ]
  },
  {
    id: 'retro-cut',
    name: 'Retro Cut Barber Shop',
    area: 'Kadıköy Rıhtım',
    rating: 4.6,
    reviewCount: 96,
    photos: [
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600180758890-6d225ed2b23b?auto=format&fit=crop&w=800&q=80'
    ],
    location: {
      address: 'Rıhtım Caddesi No:18, Kadıköy/İstanbul',
      mapUrl: 'https://maps.google.com/?q=Rıhtım+Caddesi+No:18+Kadıköy'
    },
    services: [
      { name: 'Saç Kesimi', price: 290, duration: 40 },
      { name: 'Sakal Tıraşı', price: 150, duration: 25 },
      { name: 'Renklendirme', price: 380, duration: 55 }
    ],
    reviews: [
      { user: 'Onur B.', rating: 4.5, comment: 'Berberler çok ilgiliydi, sakal tıraşı tam istediğim gibi oldu.' },
      { user: 'Koray D.', rating: 4, comment: 'Retro atmosferi çok hoşuma gitti, fiyatlar makul.' }
    ]
  },
  {
    id: 'blades-and-brews',
    name: 'Blades & Brews',
    area: 'Fikirtepe',
    rating: 4.9,
    reviewCount: 182,
    photos: [
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515136577506-0a3b66db0c1d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1621600288082-1db5178727b5?auto=format&fit=crop&w=800&q=80'
    ],
    location: {
      address: 'Söğütlüçeşme Mah. Mandıra Cad. No:12, Fikirtepe/İstanbul',
      mapUrl: 'https://maps.google.com/?q=Söğütlüçeşme+Mandıra+Cad.+No:12+Fikirtepe'
    },
    services: [
      { name: 'Saç Kesimi', price: 350, duration: 40 },
      { name: 'Sakal Tıraşı', price: 190, duration: 20 },
      { name: 'Saç & Sakal Paket', price: 480, duration: 55 },
      { name: 'Masaj', price: 220, duration: 30 }
    ],
    reviews: [
      { user: 'Burak Y.', rating: 5, comment: 'Özel içecek ikramları ve profesyonel yaklaşım mükemmeldi.' },
      { user: 'Yiğit T.', rating: 4.5, comment: 'Fiyatlar biraz yüksek ama verdiğiniz paraya değer bir deneyim.' }
    ]
  },
  {
    id: 'ustura-34',
    name: 'Ustura 34',
    area: 'Acıbadem',
    rating: 4.4,
    reviewCount: 74,
    photos: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522336283703-8c9b76e7d0e6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571434106435-42c8b0c79b60?auto=format&fit=crop&w=800&q=80'
    ],
    location: {
      address: 'Acıbadem Caddesi No:22, Üsküdar/İstanbul',
      mapUrl: 'https://maps.google.com/?q=Acıbadem+Caddesi+No:22+Üsküdar'
    },
    services: [
      { name: 'Saç Kesimi', price: 260, duration: 35 },
      { name: 'Sakal Tıraşı', price: 130, duration: 18 },
      { name: 'Saç & Sakal Paket', price: 360, duration: 45 }
    ],
    reviews: [
      { user: 'Sinan P.', rating: 4, comment: 'Randevu sistemi çok hızlı, çalışanlar güler yüzlü.' },
      { user: 'Akın Z.', rating: 4.2, comment: 'Saç kesimini çok beğendim, fiyatlar bölgedeki diğer yerlere göre uygun.' }
    ]
  },
  {
    id: 'atolye-berber',
    name: 'Atölye Berber',
    area: 'Koşuyolu',
    rating: 4.7,
    reviewCount: 89,
    photos: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80&sat=-100',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80'
    ],
    location: {
      address: 'Koşuyolu Mah. Taşköprü Sok. No:5, Kadıköy/İstanbul',
      mapUrl: 'https://maps.google.com/?q=Koşuyolu+Taşköprü+Sokak+No:5+Kadıköy'
    },
    services: [
      { name: 'Saç Kesimi', price: 310, duration: 35 },
      { name: 'Sakal Tıraşı', price: 170, duration: 20 },
      { name: 'Cilt Bakımı', price: 250, duration: 40 },
      { name: 'Köpük Masajı', price: 200, duration: 25 }
    ],
    reviews: [
      { user: 'Ege S.', rating: 4.8, comment: 'Salonun dekoru harika, çalışanlar çok profesyonel.' },
      { user: 'Umut V.', rating: 4.6, comment: 'Hijyen konusunda içim çok rahat, sakal tıraşı çok iyi.' }
    ]
  },
  {
    id: 'moda-barber-co',
    name: 'Moda Barber Co.',
    area: 'Moda',
    rating: 4.5,
    reviewCount: 65,
    photos: [
      'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1620332322103-1d5aa72e3444?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559599238-53cb6469515f?auto=format&fit=crop&w=800&q=80'
    ],
    location: {
      address: 'Moda Mah. Leylek Sok. No:9, Kadıköy/İstanbul',
      mapUrl: 'https://maps.google.com/?q=Moda+Leylek+Sokak+No:9+Kadıköy'
    },
    services: [
      { name: 'Saç Kesimi', price: 275, duration: 30 },
      { name: 'Sakal Tıraşı', price: 140, duration: 18 },
      { name: 'Saç & Sakal Paket', price: 360, duration: 45 }
    ],
    reviews: [
      { user: 'Cem A.', rating: 4.5, comment: 'Online randevu sistemi çok kolay, fiyatlar dengeli.' },
      { user: 'Hakan R.', rating: 4.2, comment: 'Bekleme yok, hizmet hızlı ve kaliteli.' }
    ]
  }
];

const areaFilter = document.getElementById('areaFilter');
const serviceFilter = document.getElementById('serviceFilter');
const searchInput = document.getElementById('searchInput');
const comparisonTableBody = document.querySelector('#comparisonTable tbody');
const barberCards = document.getElementById('barberCards');
const averagePriceEl = document.getElementById('averagePrice');
const bestPriceEl = document.getElementById('bestPrice');
const barberCountEl = document.getElementById('barberCount');
const reviewTemplate = document.getElementById('reviewTemplate');

const formatCurrency = (value) => new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
  maximumFractionDigits: 0
}).format(value);

const buildBadge = (text, type) => {
  const span = document.createElement('span');
  span.className = `badge ${type ? `badge--${type}` : ''}`.trim();
  span.textContent = text;
  return span;
};

function populateFilters() {
  const areas = Array.from(new Set(barbers.map((barber) => barber.area))).sort();
  const services = Array.from(new Set(barbers.flatMap((barber) => barber.services.map((service) => service.name)))).sort();

  areaFilter.innerHTML = '<option value="all">Tüm Mahalleler</option>' + areas.map((area) => `<option value="${area}">${area}</option>`).join('');
  serviceFilter.innerHTML = ['<option value="all">Tüm Hizmetler</option>']
    .concat(services.map((service) => `<option value="${service}">${service}</option>`))
    .join('');

  if (services.length) {
    serviceFilter.value = services[0];
  }
}

function getFilteredBarbers() {
  const areaValue = areaFilter.value;
  const serviceValue = serviceFilter.value;
  const searchTerm = searchInput.value.trim().toLowerCase();

  return barbers.filter((barber) => {
    const matchesArea = areaValue === 'all' || barber.area === areaValue;
    const matchesService = serviceValue === 'all' || barber.services.some((service) => service.name === serviceValue);
    const matchesSearch = barber.name.toLowerCase().includes(searchTerm);
    return matchesArea && matchesService && matchesSearch;
  });
}

function renderStats(filteredBarbers) {
  const serviceValue = serviceFilter.value;
  const servicePrices = [];

  if (serviceValue === 'all') {
    averagePriceEl.textContent = 'Hizmet seçiniz';
    bestPriceEl.textContent = '-';
  } else {
    filteredBarbers.forEach((barber) => {
      const service = barber.services.find((item) => item.name === serviceValue);
      if (service) {
        servicePrices.push(service.price);
      }
    });

    if (!servicePrices.length) {
      averagePriceEl.textContent = 'Bilgi yok';
      bestPriceEl.textContent = '-';
    } else {
      const avg = servicePrices.reduce((sum, price) => sum + price, 0) / servicePrices.length;
      const best = Math.min(...servicePrices);
      averagePriceEl.textContent = formatCurrency(avg);
      bestPriceEl.textContent = formatCurrency(best);
    }
  }

  barberCountEl.textContent = filteredBarbers.length.toString();
}

function renderComparisonTable(filteredBarbers) {
  const serviceValue = serviceFilter.value;
  comparisonTableBody.innerHTML = '';

  if (serviceValue === 'all') {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 4;
    cell.className = 'empty-state';
    cell.textContent = 'Karşılaştırma için bir hizmet seçiniz.';
    row.appendChild(cell);
    comparisonTableBody.appendChild(row);
    return;
  }

  const rows = filteredBarbers
    .map((barber) => {
      const service = barber.services.find((item) => item.name === serviceValue);
      if (!service) {
        return null;
      }
      return {
        barber,
        service
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.service.price - b.service.price);

  if (!rows.length) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 4;
    cell.className = 'empty-state';
    cell.textContent = 'Bu filtrelerle eşleşen hizmet bulunamadı.';
    row.appendChild(cell);
    comparisonTableBody.appendChild(row);
    return;
  }

  const bestPrice = rows[0].service.price;
  const averagePrice = rows.reduce((sum, item) => sum + item.service.price, 0) / rows.length;

  rows.forEach(({ barber, service }) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = barber.name;
    const areaCell = document.createElement('td');
    areaCell.textContent = barber.area;
    const priceCell = document.createElement('td');
    priceCell.textContent = formatCurrency(service.price);
    const ratingCell = document.createElement('td');
    ratingCell.textContent = `${barber.rating.toFixed(1)} / 5`;

    const difference = service.price - averagePrice;
    if (service.price === bestPrice) {
      priceCell.appendChild(document.createTextNode(' '));
      priceCell.appendChild(buildBadge('En uygun', 'best'));
    } else if (difference > 0) {
      priceCell.appendChild(document.createTextNode(' '));
      priceCell.appendChild(buildBadge(`Ort. +${difference.toFixed(0)}₺`, 'pricey'));
    }

    row.append(nameCell, areaCell, priceCell, ratingCell);
    comparisonTableBody.appendChild(row);
  });
}

function renderBarberCards(filteredBarbers) {
  barberCards.innerHTML = '';

  if (!filteredBarbers.length) {
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    emptyState.textContent = 'Seçtiğiniz kriterlerde berber bulunamadı. Farklı filtreleri deneyin.';
    barberCards.appendChild(emptyState);
    return;
  }

  filteredBarbers
    .sort((a, b) => b.rating - a.rating)
    .forEach((barber) => {
      const card = document.createElement('article');
      card.className = 'card';

      const media = document.createElement('div');
      media.className = 'card__media';
      const mainPhoto = document.createElement('img');
      mainPhoto.className = 'card__photo';
      const [primaryPhoto, ...otherPhotos] = barber.photos ?? [];
      mainPhoto.src = primaryPhoto || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80';
      mainPhoto.alt = `${barber.name} salonundan ortam fotoğrafı`;
      media.appendChild(mainPhoto);

      if (otherPhotos.length) {
        const strip = document.createElement('div');
        strip.className = 'card__photo-strip';
        otherPhotos.slice(0, 3).forEach((photoUrl, index) => {
          const thumb = document.createElement('img');
          thumb.className = 'card__photo-thumb';
          thumb.src = photoUrl;
          thumb.alt = `${barber.name} salonundan ortam fotoğrafı ${index + 2}`;
          strip.appendChild(thumb);
        });
        media.appendChild(strip);
      }

      const header = document.createElement('header');
      header.className = 'card__header';
      const title = document.createElement('h3');
      title.className = 'card__title';
      title.textContent = barber.name;
      const rating = document.createElement('span');
      rating.className = 'card__rating';
      rating.innerHTML = `⭐️ ${barber.rating.toFixed(1)} · ${barber.reviewCount}+ değerlendirme`;
      header.append(title, rating);

      const locationWrapper = document.createElement('div');
      locationWrapper.className = 'card__location';

      const locationInfo = document.createElement('div');
      locationInfo.className = 'card__location-info';

      const locationIcon = document.createElement('span');
      locationIcon.className = 'card__location-icon';
      locationIcon.setAttribute('aria-hidden', 'true');
      locationIcon.textContent = '📍';

      const locationDetails = document.createElement('div');
      locationDetails.className = 'card__location-details';
      const neighborhood = document.createElement('span');
      neighborhood.className = 'card__location-neighborhood';
      neighborhood.textContent = barber.area;
      const address = document.createElement('span');
      address.className = 'card__location-address';
      address.textContent = barber.location?.address || barber.area;
      locationDetails.append(neighborhood, address);

      locationInfo.append(locationIcon, locationDetails);
      locationWrapper.appendChild(locationInfo);

      if (barber.location?.mapUrl) {
        const mapLink = document.createElement('a');
        mapLink.className = 'card__map-link';
        mapLink.href = barber.location.mapUrl;
        mapLink.target = '_blank';
        mapLink.rel = 'noopener';
        mapLink.textContent = 'Haritada Gör';
        mapLink.setAttribute('aria-label', `${barber.name} konumunu haritada aç`);
        locationWrapper.appendChild(mapLink);
      }

      const servicesList = document.createElement('div');
      servicesList.className = 'card__services';

      barber.services.forEach((service) => {
        const serviceRow = document.createElement('div');
        serviceRow.className = 'service';

        const name = document.createElement('span');
        name.className = 'service__name';
        name.textContent = `${service.name} · ${service.duration} dk`;

        const price = document.createElement('span');
        price.className = 'service__price';
        price.textContent = formatCurrency(service.price);

        serviceRow.append(name, price);
        servicesList.appendChild(serviceRow);
      });

      const footer = document.createElement('footer');
      footer.className = 'card__footer';
      const cta = document.createElement('a');
      cta.className = 'card__cta';
      cta.href = `https://wa.me/905555555555?text=${encodeURIComponent('Merhaba, ' + barber.name + ' için randevu talep ediyorum.')}`;
      cta.target = '_blank';
      cta.rel = 'noopener';
      cta.textContent = 'Randevu Al';
      footer.appendChild(cta);

      const reviewsContainer = document.createElement('div');
      reviewsContainer.className = 'reviews';

      barber.reviews.forEach((review) => {
        const fragment = reviewTemplate.content.cloneNode(true);
        fragment.querySelector('.review__user').textContent = review.user;
        fragment.querySelector('.review__rating').textContent = `⭐️ ${review.rating.toFixed(1)}`;
        fragment.querySelector('.review__comment').textContent = review.comment;
        reviewsContainer.appendChild(fragment);
      });

      card.append(media, header, locationWrapper, servicesList, footer, reviewsContainer);
      barberCards.appendChild(card);
    });
}

function updateUI() {
  const filteredBarbers = getFilteredBarbers();
  renderStats(filteredBarbers);
  renderComparisonTable(filteredBarbers);
  renderBarberCards(filteredBarbers);
}

function init() {
  populateFilters();
  areaFilter.addEventListener('change', updateUI);
  serviceFilter.addEventListener('change', updateUI);
  searchInput.addEventListener('input', () => {
    window.clearTimeout(searchInput._debounce);
    searchInput._debounce = window.setTimeout(updateUI, 200);
  });
  updateUI();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
