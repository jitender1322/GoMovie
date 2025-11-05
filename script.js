/*
  Movie discovery demo interactions.
  - Builds carousels with Swiper
  - Creates reusable media cards
  - Adds simple keyboard scrolling and search focus
  - Initializes AOS scroll animations
*/

// Default set
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

// Section-specific item pools
const itemsHotstar = [
  {
    title: "RRR",
    kind: "Movie",
    year: "2022",
    img: "https://image.tmdb.org/t/p/w342/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
  },
  {
    title: "K.G.F: Chapter 2",
    kind: "Movie",
    year: "2022",
    img: "https://image.tmdb.org/t/p/w342/7q448EVOnuE3gVAx24krzO7SNXM.jpg",
  },
  {
    title: "Taare Zameen Par",
    kind: "Movie",
    year: "2007",
    img: "https://image.tmdb.org/t/p/w342/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg",
  },
  {
    title: "Dangal",
    kind: "Movie",
    year: "2016",
    img: "https://image.tmdb.org/t/p/w342/p2lVAcPuRPSO8Al6hDDGw0OgMi8.jpg",
  },
  {
    title: "Drishyam",
    kind: "Movie",
    year: "2015",
    img: "https://www.themoviedb.org/t/p/w1280/gIClWRv5OSe8rl5Koi0AeUcCZ9Z.jpg",
  },
  {
    title: "Premam",
    kind: "Movie",
    year: "2015",
    img: "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/7555/1711712987555-i",
  },
  {
    title: "Bhaag Milkha Bhaag",
    kind: "Movie",
    year: "2013",
    img: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/bXywc0CEzS1fIshPWWi4V8A58U3.jpg",
  },
  {
    title: "Pink",
    kind: "Movie",
    year: "2016",
    img: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/6xNhnyKm2M5FEOY7xv5iKiQ5P3.jpg",
  },
];

const itemsCrunchyroll = [
  {
    title: "Jujutsu Kaisen",
    kind: "Show",
    year: "2020",
    img: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/fHpKWq9ayzSk8nSwqRuaAUemRKh.jpg",
  },
  {
    title: "Chainsaw Man",
    kind: "Show",
    year: "2022",
    img: "https://image.tmdb.org/t/p/w342/npdB6eFzizki0WaZ1OvKcJrWe97.jpg",
  },
  {
    title: "Demon Slayer",
    kind: "Show",
    year: "2019",
    img: "https://image.tmdb.org/t/p/w342/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
  },
  {
    title: "Spy x Family",
    kind: "Show",
    year: "2022",
    img: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/7NAvPYPAu7MeHwP8E9sn81PqsRh.jpg",
  },
  {
    title: "One Punch Man",
    kind: "Show",
    year: "2015",
    img: "https://image.tmdb.org/t/p/w342/iE3s0lG5QVdEHOEZnoAxjmMtvne.jpg",
  },
  {
    title: "Attack on Titan",
    kind: "Show",
    year: "2013",
    img: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
  },
  {
    title: "Made in Abyss",
    kind: "Show",
    year: "2017",
    img: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/f6U3odfIb3pCXMGKRTQGGF9o1Qg.jpg",
  },
  {
    title: "The Elusive Samurai",
    kind: "Show",
    year: "2024",
    img: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/f9ZgHhSwJKkoaVAuYz4uJaHsqii.jpg",
  },
];

const itemsNetflix = [
  {
    title: "Extraction",
    kind: "Movie",
    year: "2020",
    img: "https://image.tmdb.org/t/p/w342/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
  },
  {
    title: "Red Notice",
    kind: "Movie",
    year: "2021",
    img: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
  },
  {
    title: "The Adam Project",
    kind: "Movie",
    year: "2022",
    img: "https://image.tmdb.org/t/p/w342/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
  },
  {
    title: "Money Heist",
    kind: "Show",
    year: "2017",
    img: "https://image.tmdb.org/t/p/w342/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
  },
  {
    title: "Wednesday",
    kind: "Show",
    year: "2022",
    img: "https://image.tmdb.org/t/p/w342/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
  },
  {
    title: "Squid Game",
    kind: "Show",
    year: "2021",
    img: "https://image.tmdb.org/t/p/w342/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
  },
  {
    title: "The Gray Man",
    kind: "Movie",
    year: "2022",
    img: "https://image.tmdb.org/t/p/w342/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg",
  },
  {
    title: "Enola Holmes",
    kind: "Movie",
    year: "2020",
    img: "https://image.tmdb.org/t/p/w342/riYInlsq2kf1AWoGm80JQW5dLKp.jpg",
  },
];

const itemsPrime = [
  {
    title: "The Tomorrow War",
    kind: "Movie",
    year: "2021",
    img: "https://image.tmdb.org/t/p/w342/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
  },
  {
    title: "Reacher",
    kind: "Show",
    year: "2022",
    img: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/31GlRQMiDunO8cl3NxTz34U64rf.jpg",
  },
  {
    title: "The Boys",
    kind: "Show",
    year: "2019",
    img: "https://image.tmdb.org/t/p/w342/stTEycfG9928HYGEISBFaG1ngjM.jpg",
  },
  {
    title: "Jack Ryan",
    kind: "Show",
    year: "2018",
    img: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/cO4py3L3q5GNPrA0qr1wVDrosK1.jpg",
  },
  {
    title: "Coming 2 America",
    kind: "Movie",
    year: "2021",
    img: "https://image.tmdb.org/t/p/w342/nWBPLkqNApY5pgrJFMiI9joSI30.jpg",
  },
  {
    title: "Cinderella",
    kind: "Movie",
    year: "2021",
    img: "https://image.tmdb.org/t/p/w342/clDFqATL4zcE7LzUwkrVj3zHvk7.jpg",
  },
  {
    title: "The Peripheral",
    kind: "Show",
    year: "2022",
    img: "https://image.tmdb.org/t/p/w342/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg",
  },
  {
    title: "Sound of Metal",
    kind: "Movie",
    year: "2019",
    img: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/3178oOJKKPDeQ2legWQvMPpllv.jpg",
  },
];

function createCard({ title, kind, year, img }) {
  const a = document.createElement("a");
  a.href = "https://www.effectivegatecpm.com/xbxge0yu80?key=5757f358d7451434fc2ae21125bb4dda";
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
  const sectionTitle = swiperContainer.closest("section")?.dataset?.title || "";
  let pool = sampleItems;
  if (sectionTitle.includes("JioHotstar")) pool = itemsHotstar;
  else if (sectionTitle.includes("Crunchyroll")) pool = itemsCrunchyroll;
  else if (sectionTitle.includes("Netflix")) pool = itemsNetflix;
  else if (sectionTitle.includes("Prime")) pool = itemsPrime;

  pool.forEach((item) => {
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
