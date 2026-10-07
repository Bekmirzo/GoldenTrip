const text = {
    tp: {
        buxoro: {
            uz: getTourHtml('Buxoro Sayohati (2 kun 1 kecha)', 
                '<li>06:00 - Buxoroga yo\'lga chiqish</li><li>09:00 - Bahouddin Naqshband ziyoratgohi</li><li>13:00 - Tushlik (mijoz hisobidan)</li><li>14:00 - Ark qarorgohi va Poi Kalon maydoni</li><li>15:30 - Minorai Kalon va Mir Arab madrasasi</li><li>17:00 - Labi Hovuz majmuasi</li><li class="mt-3 text-success fw-bold">Narxi: 750 000 so\'m</li>', 
                'Ortga qaytish', 'Bron qilish', 'uz'),
            ru: getTourHtml('Тур в Бухару (2 дня 1 ночь)', 
                '<li>06:00 - Выезд в Бухару</li><li>09:00 - Святыня Бахауддина Накшбанда</li><li>13:00 - Обед (за счет клиента)</li><li>14:00 - Крепость Арк и Площадь Пои Калон</li><li>15:30 - Минораи Калон и Медресе Мир Араб</li><li>17:00 - Комплекс Ляби-Хауз</li><li class="mt-3 text-success fw-bold">Цена: 750 000 сум</li>', 
                'Назад', 'Забронировать', 'ru'),
            en: getTourHtml('Bukhara Tour (2 days 1 night)', 
                '<li>06:00 - Departure to Bukhara</li><li>09:00 - Bahauddin Naqshband Shrine</li><li>13:00 - Lunch (at client\'s expense)</li><li>14:00 - Ark Fortress and Poi Kalon Square</li><li>15:30 - Kalon Minaret and Mir Arab Madrasa</li><li>17:00 - Lyabi Khauz complex</li><li class="mt-3 text-success fw-bold">Price: 750,000 UZS</li>', 
                'Back', 'Book now', 'en')
        },
        samarqand: {
            uz: getTourHtml('Samarqand Sayohati (2 kun 1 kecha)', 
                '<h5 class="text-warning mt-3">1-Kun</h5><li>06:00 - Samarqandga yo\'lga chiqish (260 km)</li><li>09:30 - Imom al-Buxoriy majmuasi ziyorati</li><li>11:00 - Mirzo Ulug\'bek rasadxonasi va Xo\'ja Doniyor ziyorati</li><li>14:00 - Go\'ri Amir maqbarasi va Registon ansambli</li><h5 class="text-warning mt-3">2-Kun</h5><li>09:00 - Shohizinda majmuasi va Hazrati Xizr ziyoratgohi</li><li>11:00 - Bibixonim masjidi bilan tanishish</li><li>13:00 - Siyob bozorida xaridlar uchun vaqt</li><li class="mt-3 text-success fw-bold">Narxi: 750 000 so\'m</li>', 
                'Ortga qaytish', 'Bron qilish', 'uz'),
            ru: getTourHtml('Тур в Самарканд (2 дня 1 ночь)', 
                '<h5 class="text-warning mt-3">День 1</h5><li>06:00 - Выезд в Самарканд (260 км)</li><li>09:30 - Посещение комплекса Имама аль-Бухари</li><li>11:00 - Обсерватория Улугбека и Ходжа Дониёр</li><li>14:00 - Мавзолей Гур-Эмир и площадь Регистан</li><h5 class="text-warning mt-3">День 2</h5><li>09:00 - Комплекс Шахи-Зинда и Хазрати Хизр</li><li>11:00 - Мечеть Биби-Ханум</li><li>13:00 - Свободное время на Сиабском базаре</li><li class="mt-3 text-success fw-bold">Цена: 750 000 сум</li>', 
                'Назад', 'Забронировать', 'ru'),
            en: getTourHtml('Samarkand Tour (2 days 1 night)', 
                '<h5 class="text-warning mt-3">Day 1</h5><li>06:00 - Departure to Samarkand (260 km)</li><li>09:30 - Imam al-Bukhari complex</li><li>11:00 - Ulugbek Observatory and Khoja Doniyor</li><li>14:00 - Gur-Emir Mausoleum and Registan Square</li><h5 class="text-warning mt-3">Day 2</h5><li>09:00 - Shahi Zinda Complex and Hazrat Khizr</li><li>11:00 - Bibi-Khanym Mosque</li><li>13:00 - Free time at Siab Bazaar</li><li class="mt-3 text-success fw-bold">Price: 750,000 UZS</li>', 
                'Back', 'Book now', 'en')
        },
        toshkent: {
            uz: getTourHtml('Toshkent Sayohati (2 kun 1 kecha)', 
                '<h5 class="text-warning mt-3">1-Kun</h5><li>05:00 - Toshkent shahriga yo\'lga chiqish</li><li>09:00 - Zangiota ziyoratgohi</li><li>15:30 - Xotira maydoni, A.Temur xiyoboni, Tashkent City</li><li>18:00 - Hamza teatrida spektakl tomoshasi</li><li>21:00 - Magic City va kechki sayr</li><h5 class="text-warning mt-3">2-Kun</h5><li>09:00 - Islom sivilizatsiyasi markazi, Ice City, G\'alaba bog\'i</li><li>13:00 - Mashhur "Besh qozon" kafesida tushlik</li><li>14:30 - Toshkent shahridan qaytish</li><li class="mt-3 text-success fw-bold">Narxi: 850 000 so\'m</li>', 
                'Ortga qaytish', 'Bron qilish', 'uz'),
            ru: getTourHtml('Тур в Ташкент (2 дня 1 ночь)', 
                '<h5 class="text-warning mt-3">День 1</h5><li>05:00 - Выезд в Ташкент</li><li>09:00 - Мемориал Зангиота</li><li>15:30 - Площадь Памяти, Сквер А.Тимура, Tashkent City</li><li>18:00 - Посещение театра</li><li>21:00 - Magic City</li><h5 class="text-warning mt-3">День 2</h5><li>09:00 - Центр Исламской цивилизации, Ice City, Парк Победы</li><li>13:00 - Обед в центре плова</li><li>14:30 - Возвращение</li><li class="mt-3 text-success fw-bold">Цена: 850 000 сум</li>', 
                'Назад', 'Забронировать', 'ru'),
            en: getTourHtml('Tashkent Tour (2 days 1 night)', 
                '<h5 class="text-warning mt-3">Day 1</h5><li>05:00 - Departure to Tashkent</li><li>09:00 - Zangiota Memorial</li><li>15:30 - Memory Square, A. Timur Square, Tashkent City</li><li>18:00 - Theater visit</li><li>21:00 - Magic City</li><h5 class="text-warning mt-3">Day 2</h5><li>09:00 - Center of Islamic Civilization, Ice City, Victory Park</li><li>13:00 - Lunch at Plov Center</li><li>14:30 - Return</li><li class="mt-3 text-success fw-bold">Price: 850,000 UZS</li>', 
                'Back', 'Book now', 'en')
        },
        xiva: {
            uz: getTourHtml('Xiva Sayohati (2 kun 1 kecha)', 
                '<h5 class="text-warning mt-3">1-Kun</h5><li>03:00 - Xiva shahriga yo\'lga chiqish</li><li>12:00 - Urganch shahriga tashrif va tushlik</li><li>13:00 - Jaloliddin Manguberdi xiyoboni bo\'ylab sayohat</li><li>18:00 - Qiblai tozabog\' mehmonxonasiga joylashish</li><h5 class="text-warning mt-3">2-Kun</h5><li>09:00 - Ichan Qal\'a va Ota darvoza</li><li>10:00 - Muhammad Aminxon madrasasi va Kalta minor</li><li>12:00 - Pahlavon Mahmud maqbarasi ziyorati</li><li class="mt-3 text-success fw-bold">Narxi: 900 000 so\'m</li>', 
                'Ortga qaytish', 'Bron qilish', 'uz'),
            ru: getTourHtml('Тур в Хиву (2 дня 1 ночь)', 
                '<h5 class="text-warning mt-3">День 1</h5><li>03:00 - Выезд в Хиву</li><li>12:00 - Прибытие в Ургенч и обед</li><li>13:00 - Прогулка по аллее Джалолиддина Мангуберди</li><li>18:00 - Заселение в отель "Кибла Тозабог"</li><h5 class="text-warning mt-3">День 2</h5><li>09:00 - Ичан-Кала и Ота дарвоза</li><li>10:00 - Медресе Мухаммад Амин-хана и Кальта-минор</li><li>12:00 - Мавзолей Пахлавона Махмуда</li><li class="mt-3 text-success fw-bold">Цена: 900 000 сум</li>', 
                'Назад', 'Забронировать', 'ru'),
            en: getTourHtml('Khiva Tour (2 days 1 night)', 
                '<h5 class="text-warning mt-3">Day 1</h5><li>03:00 - Departure to Khiva</li><li>12:00 - Arrival in Urgench and lunch</li><li>13:00 - Jaloliddin Manguberdi alley</li><li>18:00 - Check-in at Qiblai Tozabog hotel</li><h5 class="text-warning mt-3">Day 2</h5><li>09:00 - Ichan-Kala and Ota Darvoza</li><li>10:00 - Muhammad Amin-khan Madrasa and Kalta Minor</li><li>12:00 - Pakhlavon Mahmud Mausoleum</li><li class="mt-3 text-success fw-bold">Price: 900,000 UZS</li>', 
                'Back', 'Book now', 'en')
        }
    },
    header_text: {
        uz: getHeaderCarousel('Sizning ishonchli hamrohingiz'),
        ru: getHeaderCarousel('Ваш надежный спутник'),
        en: getHeaderCarousel('Your reliable companion')
    },
    main: {
        uz: getMainHtml('Kompaniya haqida', 'Bizning Tur Paketlar', 'Buxoro', 'Samarqand', 'Toshkent', 'Xiva', 'Batafsil ko\'rish', 'uz'),
        ru: getMainHtml('О компании', 'Наши Турпакеты', 'Бухара', 'Самарканд', 'Ташкент', 'Хива', 'Посмотреть', 'ru'),
        en: getMainHtml('About Company', 'Our Tour Packages', 'Bukhara', 'Samarkand', 'Tashkent', 'Khiva', 'View Details', 'en')
    },
    footer_text: {
        uz: getFooterHtml('Sizning ishonchli hamrohingiz. O\'zbekiston bo\'ylab sifatli va hamyonbop sayohatlar tashkil etamiz.', 'Turistik Firmasi. Barcha huquqlar himoyalangan.', 'uz'),
        ru: getFooterHtml('Ваш надежный спутник. Мы организуем качественные и доступные туры по Узбекистану.', 'Туристическая Фирма. Все права защищены.', 'ru'),
        en: getFooterHtml('Your reliable companion. We organize high-quality and affordable tours across Uzbekistan.', 'Travel Agency. All rights reserved.', 'en')
    }
};

function getPaymentText(lng) {
    if (lng === 'uz') return "To'lovlar naqd pul yoki ko'chirish yo'li orqali amalga oshiriladi. Barcha xizmatlar sertifikatlangan va litsenziyaga ega.";
    if (lng === 'ru') return "Оплата производится наличными или перечислением. Все услуги сертифицированы.";
    if (lng === 'en') return "Payment is made in cash or by transfer. All services are certified.";
    return "To'lovlar naqd pul yoki ko'chirish yo'li orqali amalga oshiriladi. Barcha xizmatlar sertifikatlangan va litsenziyaga ega.";
}

function getPrepaymentText(lng) {
    if (lng === 'uz') return "To'lov sayohat belgilangan kundan 7-10 kun oldin 100% miqdorida oldindan to'lanishi lozim.";
    if (lng === 'ru') return "Оплата должна быть произведена в размере 100% за 7-10 дней до поездки.";
    if (lng === 'en') return "Payment must be made 100% in advance 7-10 days before the trip.";
    return "To'lov sayohat belgilangan kundan 7-10 kun oldin 100% miqdorida oldindan to'lanishi lozim.";
}

function getCompanyAboutText(lng) {
    if (lng === 'uz') return "<span class='brand-name text-dark'>GOLDEN TRIP</span> turistik firmasi turizm sohasida o'z xizmatlarini taqdim etadi. Bizning mutaxassislarimiz turizm sohasida katta tajribaga ega bo'lib, mijozlarimizga uzoq kutilgan ta'tilni muvaffaqiyatli va qiziqarli bo'lishini ta'minlash muhimligini tushungan holda har bir mijozga individual yondashuv qo'llaniladi.";
    if (lng === 'ru') return "Туристическая фирма <span class='brand-name text-dark'>GOLDEN TRIP</span> предоставляет качественные услуги в сфере туризма. Наши специалисты обладают большим опытом работы в сфере туризма и обеспечивают индивидуальный подход к каждому клиенту. Наша главная цель - сделать ваш отдых интересным и незабываемым.";
    if (lng === 'en') return "<span class='brand-name text-dark'>GOLDEN TRIP</span> travel agency provides quality services in the field of tourism. Our specialists have extensive experience in tourism and provide an individual approach to each client. Our main goal is to make your vacation interesting and unforgettable.";
    return "<span class='brand-name text-dark'>GOLDEN TRIP</span> turistik firmasi turizm sohasida o'z xizmatlarini taqdim etadi.";
}

function getServiceTexts(lng) {
    if (lng === 'uz') return { transport: "Transport Xizmati", hotel: "Mehmonxona Xizmati", guide: "Gid-Kuzatuvchi", tickets: "Barcha Chiptalar" };
    if (lng === 'ru') return { transport: "Транспортные услуги", hotel: "Гостиница", guide: "Услуги гида", tickets: "Все билеты" };
    if (lng === 'en') return { transport: "Transport Services", hotel: "Hotel", guide: "Guide Services", tickets: "All Tickets" };
    return { transport: "Transport Xizmati", hotel: "Mehmonxona Xizmati", guide: "Gid-Kuzatuvchi", tickets: "Barcha Chiptalar" };
}

function getContactTitle(lng) {
    if (lng === 'uz') return "Bog'lanish";
    if (lng === 'ru') return "Контакты";
    if (lng === 'en') return "Contact";
    return "Bog'lanish";
}

function getContactSentence(lng) {
    if (lng === 'uz') return "<span class='brand-name text-dark'>GOLDEN TRIP</span> bilan bog'lanish:";
    if (lng === 'ru') return "Связь с <span class='brand-name text-dark'>GOLDEN TRIP</span>:";
    if (lng === 'en') return "Contact <span class='brand-name text-dark'>GOLDEN TRIP</span>:";
    return "<span class='brand-name text-dark'>GOLDEN TRIP</span> bilan bog'lanish:";
}

function getContactHtml(lng) {
    const contactSentence = getContactSentence(lng);
    return `
    <div class="mt-4 p-3 bg-white rounded border border-warning">
        <h5 class="text-dark fw-bold mb-3">${contactSentence}</h5>
        <div class="d-flex flex-column gap-2">
            <div>
                <i class="fa-solid fa-phone text-warning me-2"></i><span class="text-dark fw-bold">+998 94 488 16 06</span>
                <a href="https://t.me/+998944881606" class="btn btn-sm btn-outline-info ms-2" target="_blank"><i class="fa-brands fa-telegram"></i> Telegram</a>
            </div>
            <div>
                <i class="fa-solid fa-phone text-warning me-2"></i><span class="text-dark fw-bold">+998 99 737 20 90</span>
                <a href="https://t.me/+998997372090" class="btn btn-sm btn-outline-info ms-2" target="_blank"><i class="fa-brands fa-telegram"></i> Telegram</a>
            </div>
        </div>
    </div>`;
}

function getHeaderCarousel(subtitle) {
    return `
    <style>
        .carousel-item-custom {
            height: 60vh;
            background-size: cover;
            background-position: center;
            position: relative;
        }
        .carousel-item-custom::before {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            background: rgba(0, 0, 0, 0.4); 
        }
        .carousel-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
            z-index: 2;
            width: 100%;
        }
    </style>
    
    <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
        <div class="carousel-inner">
            <div class="carousel-item active carousel-item-custom" style="background-image: url('./img/banner-1.jpg');">
                <div class="carousel-content">
                    <h1 class="display-2 text-uppercase brand-name">GOLDEN TRIP</h1>
                    <p class="fs-4 text-warning">${subtitle}</p>
                </div>
            </div>
            <div class="carousel-item carousel-item-custom" style="background-image: url('./img/banner-2.jpg');">
                <div class="carousel-content">
                    <h1 class="display-2 text-uppercase brand-name">GOLDEN TRIP</h1>
                    <p class="fs-4 text-warning">${subtitle}</p>
                </div>
            </div>
            <div class="carousel-item carousel-item-custom" style="background-image: url('./img/banner-3.jpg');">
                <div class="carousel-content">
                    <h1 class="display-2 text-uppercase brand-name">GOLDEN TRIP</h1>
                    <p class="fs-4 text-warning">${subtitle}</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>`;
}

function getTourHtml(title, schedule, backText, bookText, lng) {
    const paymentWarning = getPaymentText(lng);
    const contactHtml = getContactHtml(lng);
    
    return `
    <div class="container pb-5 mt-4">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card shadow-lg border-0 rounded-4 overflow-hidden">
                    <div class="card-header bg-dark text-white text-center py-4">
                        <h2 class="fw-bold text-warning mb-0">${title}</h2>
                    </div>
                    <div class="card-body p-5 bg-light">
                        <ul class="list-unstyled lh-lg fs-5">
                            ${schedule}
                        </ul>
                        <div class="alert alert-info mt-4">
                            <i class="fa-solid fa-circle-info me-2"></i> ${paymentWarning}
                        </div>
                        
                        ${contactHtml}

                        <div class="d-flex justify-content-between mt-5">
                            <button id="back_btn" class="btn btn-outline-dark px-4 py-2 fw-bold"><i class="fa-solid fa-arrow-left me-2"></i> ${backText}</button>
                            <button class="btn btn-success px-5 py-2 fw-bold shadow" onclick="window.open('https://t.me/+998944881606', '_blank');"><i class="fa-solid fa-check me-2"></i> ${bookText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

function getMainHtml(aboutTitle, toursTitle, btn1, btn2, btn3, btn4, moreBtn, lng) {
    const aboutText = getCompanyAboutText(lng);
    const services = getServiceTexts(lng);
    const prepaymentInfo = getPrepaymentText(lng);
    const contactHtml = getContactHtml(lng);

    return `
    <style>
        .tour-img-card {
            position: relative;
            height: 250px;
            background-size: cover;
            background-position: center;
            border-radius: 15px;
            display: flex;
            align-items: flex-end;
            padding: 20px;
            color: white;
            transition: transform 0.3s ease;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .tour-img-card::before {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1));
            border-radius: 15px;
            z-index: 1;
        }
        .tour-img-card > div {
            position: relative;
            z-index: 2;
            width: 100%;
        }
        .tour-img-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
    </style>

    <div class="container">
        <!-- Biz haqimizda bo'limi -->
        <div class="row mb-5 align-items-center bg-white rounded-4 shadow-sm overflow-hidden border">
            <div class="col-lg-6 p-0">
                <img src="./img/travel.jpg" class="img-fluid h-100" style="object-fit: cover; min-height: 400px;" alt="Sayohat va arxitektura">
            </div>
            <div class="col-lg-6 p-5">
                <h2 class="fw-bold mb-4 text-dark text-uppercase"><i class="fa-solid fa-building-flag text-warning me-2"></i>${aboutTitle}</h2>
                <p class="text-muted fs-6 lh-lg mb-4">
                    ${aboutText}
                </p>
                <div class="row g-3 mb-4">
                    <div class="col-sm-6">
                        <div class="d-flex align-items-center p-3 bg-light rounded-3 border">
                            <i class="fa-solid fa-bus text-success fs-3 me-3"></i>
                            <span class="fw-bold text-dark">${services.transport}</span>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="d-flex align-items-center p-3 bg-light rounded-3 border">
                            <i class="fa-solid fa-hotel text-success fs-3 me-3"></i>
                            <span class="fw-bold text-dark">${services.hotel}</span>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="d-flex align-items-center p-3 bg-light rounded-3 border">
                            <i class="fa-solid fa-user-tie text-success fs-3 me-3"></i>
                            <span class="fw-bold text-dark">${services.guide}</span>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="d-flex align-items-center p-3 bg-light rounded-3 border">
                            <i class="fa-solid fa-ticket text-success fs-3 me-3"></i>
                            <span class="fw-bold text-dark">${services.tickets}</span>
                        </div>
                    </div>
                </div>
                
                <div class="alert alert-warning border-0 shadow-sm m-0 p-3 mb-3">
                    <i class="fa-solid fa-circle-exclamation me-2"></i> <strong>${prepaymentInfo}</strong>
                </div>

                ${contactHtml}
            </div>
        </div>

        <!-- Tur Paketlar ro'yxati -->
        <h2 class="text-center mt-5 mb-5 fw-bold text-uppercase" style="color: #343a40;" id="tp_header">${toursTitle}</h2>
        
        <div class="row g-4 pb-5">
            <div class="col-md-6 col-lg-3">
                <div class="tour-img-card" style="background-image: url('./img/buxoro1.jpg');" id="buxoro_btn">
                    <div class="text-center">
                        <h3 class="fw-bold mb-2 text-white text-uppercase">${btn1}</h3>
                        <button class="btn btn-warning rounded-pill px-4 fw-bold mt-2 btn-sm">${moreBtn}</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="tour-img-card" style="background-image: url('./img/samarqand.jpg');" id="samarqand_btn">
                    <div class="text-center">
                        <h3 class="fw-bold mb-2 text-white text-uppercase">${btn2}</h3>
                        <button class="btn btn-warning rounded-pill px-4 fw-bold mt-2 btn-sm">${moreBtn}</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="tour-img-card" style="background-image: url('./img/Tashkent-Spread.webp');" id="toshkent_btn">
                    <div class="text-center">
                        <h3 class="fw-bold mb-2 text-white text-uppercase">${btn3}</h3>
                        <button class="btn btn-warning rounded-pill px-4 fw-bold mt-2 btn-sm">${moreBtn}</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="tour-img-card" style="background-image: url('./img/xiva1.jpg');" id="xiva_btn">
                    <div class="text-center">
                        <h3 class="fw-bold mb-2 text-white text-uppercase">${btn4}</h3>
                        <button class="btn btn-warning rounded-pill px-4 fw-bold mt-2 btn-sm">${moreBtn}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

function getFooterHtml(slogan, rights, lng) {
    const contactTitle = getContactTitle(lng);
    
    return `
    <footer class="bg-dark text-white pt-5 pb-4 mt-auto border-top border-warning border-3">
        <div class="container text-center text-md-start">
            <div class="row align-items-center">
                <div class="col-md-6 mt-3">
                    <div class="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                        <img src="./img/logo.jpg" alt="Golden Trip Logo" class="brand-logo me-3" style="height: 60px;">
                        <h4 class="text-uppercase mb-0 brand-name">GOLDEN TRIP</h4>
                    </div>
                    <p class="text-light opacity-75">${slogan}</p>
                </div>
                <div class="col-md-6 mt-3 text-center text-md-end">
                    <h5 class="text-uppercase fw-bold text-warning mb-3">${contactTitle}</h5>
                    <p class="mb-2">
                        <i class="fa-solid fa-phone me-2 text-warning"></i> +998 94 488 16 06 
                        <a href="https://t.me/+998944881606" class="text-white text-decoration-none ms-2 border-bottom border-secondary pb-1" target="_blank" title="Telegram">
                            <i class="fa-brands fa-telegram text-info"></i> Telegram
                        </a>
                    </p>
                    <p class="mb-0">
                        <i class="fa-solid fa-phone me-2 text-warning"></i> +998 99 737 20 90 
                        <a href="https://t.me/+998997372090" class="text-white text-decoration-none ms-2 border-bottom border-secondary pb-1" target="_blank" title="Telegram">
                            <i class="fa-brands fa-telegram text-info"></i> Telegram
                        </a>
                    </p>
                </div>
            </div>
            <hr class="mb-4 mt-4 border-secondary">
            <div class="text-center opacity-75">
                <p class="mb-0">© 2026 <strong class="brand-name">GOLDEN TRIP</strong> ${rights}</p>
            </div>
        </div>
    </footer>`;
}
