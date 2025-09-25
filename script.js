const barbers = [
  {
    id: 'keskin-makas',
    name: 'Keskin Makas Erkek Kuaförü',
    area: 'Moda',
    rating: 4.8,
    reviewCount: 128,
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

      const header = document.createElement('header');
      header.className = 'card__header';
      const title = document.createElement('h3');
      title.className = 'card__title';
      title.textContent = barber.name;
      const rating = document.createElement('span');
      rating.className = 'card__rating';
      rating.innerHTML = `⭐️ ${barber.rating.toFixed(1)} · ${barber.reviewCount}+ değerlendirme`;
      header.append(title, rating);

      const location = document.createElement('p');
      location.className = 'card__location';
      location.textContent = `Mahalle: ${barber.area}`;

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

      card.append(header, location, servicesList, footer, reviewsContainer);
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
