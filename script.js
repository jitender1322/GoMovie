/*
  Movie discovery demo interactions.
  - Builds carousels with Swiper
  - Creates reusable media cards
  - Adds simple keyboard scrolling and search focus
  - Initializes AOS scroll animations
*/

const sampleItems = [
  {
    title: "Inception",
    kind: "Movie",
    year: "2010",
    img: "https://www.themoviedb.org/t/p/w1280/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
  },
  {
    title: "Interstellar",
    kind: "Movie",
    year: "2014",
    img: "https://image.tmdb.org/t/p/w342/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    title: "The Dark Knight",
    kind: "Movie",
    year: "2008",
    img: "https://image.tmdb.org/t/p/w342/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    title: "John Wick",
    kind: "Movie",
    year: "2014",
    img: "https://image.tmdb.org/t/p/w342/b9uYMMbm87IBFOq59pppvkkkgNg.jpg",
  },
  {
    title: "Joker",
    kind: "Movie",
    year: "2019",
    img: "https://image.tmdb.org/t/p/w342/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    title: "Dune",
    kind: "Movie",
    year: "2021",
    img: "https://image.tmdb.org/t/p/w342/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  },
  {
    title: "Avatar",
    kind: "Movie",
    year: "2009",
    img: "https://image.tmdb.org/t/p/w342/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
  },
  {
    title: "Breaking Bad",
    kind: "Show",
    year: "2008",
    img: "https://image.tmdb.org/t/p/w342/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
  },
  {
    title: "Stranger Things",
    kind: "Show",
    year: "2016",
    img: "https://image.tmdb.org/t/p/w342/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
  },
  {
    title: "The Witcher",
    kind: "Show",
    year: "2019",
    img: "https://image.tmdb.org/t/p/w342/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
  },
  {
    title: "Rise of the Guardians",
    kind: "Movie",
    year: "2012",
    img: "https://image.tmdb.org/t/p/w342/qayga07ICNDswm0cMJ8P3VwklFZ.jpg",
  },
  {
    title: "It",
    kind: "Movie",
    year: "2017",
    img: "https://image.tmdb.org/t/p/w342/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
  },
];

function createCard({ title, kind, year, img }) {
  const a = document.createElement("a");
  a.href = "#";
  a.className = "media-card block w-[140px] sm:w-[176px] select-none";
  a.setAttribute("title", title);

  a.innerHTML = `
    <div class="relative overflow-hidden rounded-2xl bg-card hover:bg-cardHover transition shadow-soft">
      <img class="card-image h-[200px] sm:h-[240px] w-full object-cover" src="${img}" alt="${title}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/342x513/111316/6b7280?text=No+Image';" />
      <button class="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black/90 opacity-0 group-hover:opacity-100 transition" aria-label="Play">
        <i class="ri-play-fill text-lg"></i>
      </button>
    </div>
    <div class="pt-2">
      <div class="truncate font-medium">${title}</div>
      <div class="text-xs text-white/60">${kind} • ${year}</div>
    </div>
  `;
  return a;
}

function buildRow(swiperContainer) {
  // Ensure structure exists for Swiper if only container was provided
  if (!swiperContainer.querySelector(".swiper-wrapper")) {
    const wrapper = document.createElement("div");
    wrapper.className = "swiper-wrapper";
    swiperContainer.appendChild(wrapper);
  }

  const wrapper = swiperContainer.querySelector(".swiper-wrapper");
  sampleItems.forEach((item) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide !w-auto";
    slide.appendChild(createCard(item));
    wrapper.appendChild(slide);
  });

  // Add nav if missing
  if (!swiperContainer.querySelector(".swiper-button-prev")) {
    const prev = document.createElement("div");
    prev.className =
      "swiper-button-prev !left-0 !text-white/80 hover:!text-white";
    const next = document.createElement("div");
    next.className =
      "swiper-button-next !right-0 !text-white/80 hover:!text-white";
    swiperContainer.append(prev, next);
  }

  // Init Swiper
  return new Swiper(swiperContainer, {
    slidesPerView: 2,
    spaceBetween: 12,
    freeMode: true,
    mousewheel: { forceToAxis: true },
    keyboard: { enabled: true },
    navigation: {
      nextEl: swiperContainer.querySelector(".swiper-button-next"),
      prevEl: swiperContainer.querySelector(".swiper-button-prev"),
    },
    breakpoints: {
      360: { slidesPerView: 2, spaceBetween: 12 },
      640: { slidesPerView: 3, spaceBetween: 14 },
      768: { slidesPerView: 4, spaceBetween: 16 },
      1024: { slidesPerView: 5, spaceBetween: 18 },
      1280: { slidesPerView: 6, spaceBetween: 20 },
    },
  });
}

function initAllRows() {
  document.querySelectorAll('[data-swiper="row"]').forEach(buildRow);
}

function enableKeyboardSearch() {
  const input = document.getElementById("searchInput");
  if (!input) return;
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      input.focus();
    }
  });
}

function initAOS() {
  if (window.AOS) {
    AOS.init({ duration: 600, once: true, offset: 60, easing: "ease-out" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initAllRows();
  enableKeyboardSearch();
  initAOS();
});
