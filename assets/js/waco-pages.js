/* =========================================================
  WACO PAGES JS
  Version: 1.0.4
  Includes:
  1. Reveal on scroll
  2. Hero Swiper
  3. Applications Swiper
========================================================= */

(function () {
  var revealItems = document.querySelectorAll('.waco-reveal');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.14
    });

    revealItems.forEach(function (item, index) {
      item.style.transitionDelay = Math.min(index % 4, 3) * 0.08 + 's';
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add('is-visible');
    });
  }
})();

(function () {
  if (typeof Swiper === 'undefined') return;

  new Swiper('.waco-hero-swiper', {
    loop: true,
    speed: 850,
    effect: 'slide',
    autoplay: {
      delay: 5200,
      disableOnInteraction: false
    },
    pagination: {
      el: '.waco-hero-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.waco-hero-next',
      prevEl: '.waco-hero-prev'
    }
  });

  new Swiper('.waco-app-swiper', {
    loop: true,
    speed: 650,
    spaceBetween: 18,
    slidesPerView: 1.08,
    pagination: {
      el: '.waco-app-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.waco-app-next',
      prevEl: '.waco-app-prev'
    },
    breakpoints: {
      640: {
        slidesPerView: 1.8,
        spaceBetween: 18
      },
      900: {
        slidesPerView: 2.45,
        spaceBetween: 20
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 22
      }
    }
  });
})();


/* =========================================================
  Product filter
========================================================= */
(function () {
  var filterWrap = document.querySelector('[data-waco-product-filter]');
  if (!filterWrap) return;

  var buttons = filterWrap.querySelectorAll('[data-filter]');
  var cards = document.querySelectorAll('.waco-product-card[data-category]');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.getAttribute('data-filter');

      buttons.forEach(function (item) {
        item.classList.remove('is-active');
      });
      button.classList.add('is-active');

      cards.forEach(function (card) {
        var category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
})();

/* =========================================================
  Product detail legacy gallery
========================================================= */
(function () {
  var gallery = document.querySelector('[data-waco-gallery]');
  var mainImage = document.querySelector('[data-waco-main-image]');
  if (!gallery || !mainImage) return;
  var buttons = gallery.querySelectorAll('[data-image]');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var image = button.getAttribute('data-image');
      buttons.forEach(function (item) { item.classList.remove('is-active'); });
      button.classList.add('is-active');
      mainImage.style.background = "url('" + image + "') center / cover no-repeat";
    });
  });
})();

/* =========================================================
  Product detail tabs
========================================================= */
(function () {
  var tabs = document.querySelector('[data-waco-tabs]');
  if (!tabs) return;
  var buttons = tabs.querySelectorAll('[data-tab]');
  var panels = tabs.querySelectorAll('[data-tab-panel]');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var target = button.getAttribute('data-tab');
      buttons.forEach(function (item) { item.classList.remove('is-active'); });
      panels.forEach(function (panel) { panel.classList.remove('is-active'); });
      button.classList.add('is-active');
      var activePanel = tabs.querySelector('[data-tab-panel="' + target + '"]');
      if (activePanel) activePanel.classList.add('is-active');
    });
  });
})();

/* =========================================================
  Product quantity controls
========================================================= */
(function () {
  var minus = document.querySelector('[data-waco-qty-minus]');
  var plus = document.querySelector('[data-waco-qty-plus]');
  var input = document.querySelector('[data-waco-qty-input]');
  if (!minus || !plus || !input) return;
  function normalize(value) {
    var number = parseInt(value, 10);
    if (Number.isNaN(number) || number < 1) return 1;
    return number;
  }
  minus.addEventListener('click', function () { input.value = Math.max(1, normalize(input.value) - 1); });
  plus.addEventListener('click', function () { input.value = normalize(input.value) + 1; });
  input.addEventListener('change', function () { input.value = normalize(input.value); });
})();

/* =========================================================
  Product option active states
========================================================= */
(function () {
  var groups = document.querySelectorAll('.waco-product-options');
  groups.forEach(function (group) {
    var buttons = group.querySelectorAll('button');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        buttons.forEach(function (item) { item.classList.remove('is-active'); });
        button.classList.add('is-active');
      });
    });
  });
})();


/* =========================================================
  Product detail Swiper gallery v1.2.1
========================================================= */
(function () {
  if (typeof Swiper === 'undefined') return;

  var mainEl = document.querySelector('[data-waco-detail-main-swiper]');
  var thumbEl = document.querySelector('[data-waco-detail-thumb-swiper]');
  if (!mainEl || !thumbEl) return;

  var thumbsSwiper = new Swiper(thumbEl, {
    spaceBetween: 12,
    slidesPerView: 4,
    watchSlidesProgress: true,
    freeMode: true,
    breakpoints: {
      761: {
        slidesPerView: 5,
        spaceBetween: 14
      }
    }
  });

  var mainSwiper = new Swiper(mainEl, {
    spaceBetween: 0,
    speed: 550,
    navigation: {
      nextEl: '.waco-detail-gallery-next',
      prevEl: '.waco-detail-gallery-prev'
    },
    thumbs: {
      swiper: thumbsSwiper
    }
  });

  var colorButtons = document.querySelectorAll('[data-waco-color-index]');
  colorButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var index = parseInt(button.getAttribute('data-waco-color-index'), 10);
      if (Number.isNaN(index)) return;
      mainSwiper.slideTo(index);
      if (thumbsSwiper.slideTo) {
        thumbsSwiper.slideTo(index);
      }
    });
  });

  mainSwiper.on('slideChange', function () {
    var index = mainSwiper.activeIndex;
    colorButtons.forEach(function (button) {
      button.classList.remove('is-active');
      if (parseInt(button.getAttribute('data-waco-color-index'), 10) === index) {
        button.classList.add('is-active');
      }
    });
  });
})();


/* =========================================================
  Product detail stable carousel v1.2.3
  This does not depend on Swiper, so local preview remains stable.
========================================================= */
(function () {
  var gallery = document.querySelector('[data-waco-detail-gallery]');
  if (!gallery) return;

  var track = gallery.querySelector('[data-waco-detail-track]');
  var slides = gallery.querySelectorAll('.waco-product-main-slide');
  var thumbs = gallery.querySelectorAll('[data-waco-detail-thumb]');
  var prev = gallery.querySelector('[data-waco-detail-prev]');
  var next = gallery.querySelector('[data-waco-detail-next]');
  var colorButtons = document.querySelectorAll('[data-waco-detail-color]');
  var activeIndex = 0;

  if (!track || !slides.length) return;

  function setActive(index) {
    var total = slides.length;
    activeIndex = ((index % total) + total) % total;
    track.style.transform = 'translate3d(' + (-activeIndex * 100) + '%, 0, 0)';

    thumbs.forEach(function (thumb) {
      thumb.classList.toggle('is-active', parseInt(thumb.getAttribute('data-waco-detail-thumb'), 10) === activeIndex);
    });

    colorButtons.forEach(function (button) {
      var colorIndex = parseInt(button.getAttribute('data-waco-detail-color'), 10);
      if (!Number.isNaN(colorIndex)) {
        button.classList.toggle('is-active', colorIndex === activeIndex);
      }
    });
  }

  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var index = parseInt(thumb.getAttribute('data-waco-detail-thumb'), 10);
      if (!Number.isNaN(index)) {
        setActive(index);
      }
    });
  });

  colorButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var index = parseInt(button.getAttribute('data-waco-detail-color'), 10);
      if (!Number.isNaN(index)) {
        setActive(index);
      }
    });
  });

  if (prev) {
    prev.addEventListener('click', function () {
      setActive(activeIndex - 1);
    });
  }

  if (next) {
    next.addEventListener('click', function () {
      setActive(activeIndex + 1);
    });
  }

  setActive(0);
})();


/* =========================================================
  Product detail old circular magnifier disabled in v1.2.4
  Desktop hover zoom for the active main image.
========================================================= */
(function () {
  var gallery = document.querySelector('[data-waco-detail-gallery]');
  if (!gallery) return;

  var mediaQuery = window.matchMedia('(max-width: 760px)');

  function setupImage(image) {
    if (!image || image.dataset.zoomReady === 'true') return;

    image.dataset.zoomReady = 'true';

    var lens = document.createElement('span');
    lens.className = 'waco-zoom-lens';
    image.appendChild(lens);

    function getImageUrl() {
      return image.getAttribute('data-zoom-image') || '';
    }

    function moveLens(event) {
      if (mediaQuery.matches) return;

      var rect = image.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;

      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        image.classList.remove('is-zooming');
        return;
      }

      var xPercent = (x / rect.width) * 100;
      var yPercent = (y / rect.height) * 100;

      lens.style.left = x + 'px';
      lens.style.top = y + 'px';
      lens.style.backgroundImage = "url('" + getImageUrl() + "')";
      lens.style.backgroundPosition = xPercent + '% ' + yPercent + '%';

      image.classList.add('is-zooming');
    }

    image.addEventListener('mouseenter', function (event) {
      if (mediaQuery.matches) return;
      moveLens(event);
    });

    image.addEventListener('mousemove', moveLens);

    image.addEventListener('mouseleave', function () {
      image.classList.remove('is-zooming');
    });
  }

  function setupAll() {
    gallery.querySelectorAll('.waco-product-main-image').forEach(setupImage);
  }

  setupAll();

  var observer = new MutationObserver(setupAll);
  observer.observe(gallery, {
    childList: true,
    subtree: true
  });
})();


/* =========================================================
  WooCommerce-style product zoom v1.2.4
  Hover zoom + click lightbox for product detail images.
========================================================= */
(function () {
  var gallery = document.querySelector('[data-waco-detail-gallery]');
  if (!gallery) return;

  var mediaQuery = window.matchMedia('(max-width: 760px)');
  var track = gallery.querySelector('[data-waco-detail-track]');
  var slides = Array.prototype.slice.call(gallery.querySelectorAll('.waco-product-main-slide'));
  var openButton = gallery.querySelector('[data-waco-lightbox-open]');
  var lightbox = document.querySelector('[data-waco-lightbox]');
  var lightboxImage = document.querySelector('[data-waco-lightbox-image]');
  var closeButton = document.querySelector('[data-waco-lightbox-close]');
  var lightboxPrev = document.querySelector('[data-waco-lightbox-prev]');
  var lightboxNext = document.querySelector('[data-waco-lightbox-next]');
  var currentIndex = 0;

  function getActiveIndex() {
    if (!track || !slides.length) return currentIndex;
    var transform = track.style.transform || '';
    var match = transform.match(/translate3d\((-?\d+(?:\.\d+)?)%/);
    if (match) {
      currentIndex = Math.abs(parseInt(match[1], 10)) / 100;
    }
    if (Number.isNaN(currentIndex)) currentIndex = 0;
    return Math.max(0, Math.min(slides.length - 1, Math.round(currentIndex)));
  }

  function getImageByIndex(index) {
    var slide = slides[index];
    if (!slide) return null;
    return slide.querySelector('.waco-product-main-image');
  }

  function getImageUrl(index) {
    var image = getImageByIndex(index);
    if (!image) return '';
    return image.getAttribute('data-zoom-image') || '';
  }

  function setupHoverZoom(image) {
    if (!image || image.dataset.wcZoomReady === 'true') return;
    image.dataset.wcZoomReady = 'true';

    image.addEventListener('mousemove', function (event) {
      if (mediaQuery.matches) return;

      var rect = image.getBoundingClientRect();
      var x = ((event.clientX - rect.left) / rect.width) * 100;
      var y = ((event.clientY - rect.top) / rect.height) * 100;

      image.style.transformOrigin = x + '% ' + y + '%';
      image.classList.add('is-wc-zooming');
      image.classList.remove('is-zooming');
    });

    image.addEventListener('mouseleave', function () {
      image.classList.remove('is-wc-zooming');
      image.classList.remove('is-zooming');
      image.style.transformOrigin = 'center center';
    });

    image.addEventListener('click', function () {
      openLightbox(getActiveIndex());
    });
  }

  function setupAllImages() {
    gallery.querySelectorAll('.waco-product-main-image').forEach(setupHoverZoom);
  }

  function openLightbox(index) {
    if (!lightbox || !lightboxImage) return;
    currentIndex = typeof index === 'number' ? index : getActiveIndex();
    var url = getImageUrl(currentIndex);
    if (!url) return;
    lightboxImage.style.backgroundImage = "url('" + url + "')";
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.documentElement.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
  }

  function moveLightbox(direction) {
    if (!slides.length) return;
    currentIndex = ((currentIndex + direction) % slides.length + slides.length) % slides.length;
    var url = getImageUrl(currentIndex);
    if (url && lightboxImage) {
      lightboxImage.style.backgroundImage = "url('" + url + "')";
    }
  }

  setupAllImages();

  if (openButton) {
    openButton.addEventListener('click', function () {
      openLightbox(getActiveIndex());
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', function () {
      moveLightbox(-1);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', function () {
      moveLightbox(1);
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', function (event) {
    if (!lightbox || !lightbox.classList.contains('is-open')) return;

    if (event.key === 'Escape') {
      closeLightbox();
    }

    if (event.key === 'ArrowLeft') {
      moveLightbox(-1);
    }

    if (event.key === 'ArrowRight') {
      moveLightbox(1);
    }
  });
})();


/* =========================================================
  Product detail 02 Swiper gallery v1.3.0
  Isolated Swiper test version for product-detail-02.html.
========================================================= */
(function () {
  if (typeof Swiper === 'undefined') return;

  var page = document.querySelector('.waco-product-detail-swiper-page');
  if (!page) return;

  var mainEl = page.querySelector('[data-waco-pd2-main-swiper]');
  var thumbEl = page.querySelector('[data-waco-pd2-thumb-swiper]');
  if (!mainEl || !thumbEl) return;

  var thumbSwiper = new Swiper(thumbEl, {
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesProgress: true,
    freeMode: true,
    breakpoints: {
      761: {
        slidesPerView: 5,
        spaceBetween: 14
      }
    }
  });

  var mainSwiper = new Swiper(mainEl, {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 520,
    loop: false,
    navigation: {
      nextEl: page.querySelector('.waco-pd2-next'),
      prevEl: page.querySelector('.waco-pd2-prev')
    },
    thumbs: {
      swiper: thumbSwiper
    }
  });

  var colorButtons = page.querySelectorAll('[data-waco-pd2-color]');

  function setColorActive(index) {
    colorButtons.forEach(function (button) {
      var colorIndex = parseInt(button.getAttribute('data-waco-pd2-color'), 10);
      if (!Number.isNaN(colorIndex)) {
        button.classList.toggle('is-active', colorIndex === index);
      }
    });
  }

  colorButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var index = parseInt(button.getAttribute('data-waco-pd2-color'), 10);
      if (Number.isNaN(index)) return;
      mainSwiper.slideTo(index);
      thumbSwiper.slideTo(index);
      setColorActive(index);
    });
  });

  mainSwiper.on('slideChange', function () {
    setColorActive(mainSwiper.activeIndex);
  });

  /* WooCommerce-style hover zoom for Swiper version */
  var mediaQuery = window.matchMedia('(max-width: 760px)');

  function setupZoom(image) {
    if (!image || image.dataset.pd2ZoomReady === 'true') return;
    image.dataset.pd2ZoomReady = 'true';

    image.addEventListener('mousemove', function (event) {
      if (mediaQuery.matches) return;
      var rect = image.getBoundingClientRect();
      var x = ((event.clientX - rect.left) / rect.width) * 100;
      var y = ((event.clientY - rect.top) / rect.height) * 100;
      image.style.transformOrigin = x + '% ' + y + '%';
      image.classList.add('is-wc-zooming');
    });

    image.addEventListener('mouseleave', function () {
      image.classList.remove('is-wc-zooming');
      image.style.transformOrigin = 'center center';
    });

    image.addEventListener('click', function () {
      openLightbox(mainSwiper.activeIndex);
    });
  }

  page.querySelectorAll('.waco-pd2-main-image').forEach(setupZoom);

  /* Lightbox for Swiper test page */
  var openButton = page.querySelector('[data-waco-pd2-lightbox-open]');
  var lightbox = document.querySelector('[data-waco-pd2-lightbox]');
  var lightboxImage = document.querySelector('[data-waco-pd2-lightbox-image]');
  var closeButton = document.querySelector('[data-waco-pd2-lightbox-close]');
  var lightboxPrev = document.querySelector('[data-waco-pd2-lightbox-prev]');
  var lightboxNext = document.querySelector('[data-waco-pd2-lightbox-next]');
  var currentIndex = 0;

  function getImageUrl(index) {
    var image = page.querySelectorAll('.waco-pd2-main-image')[index];
    return image ? image.getAttribute('data-zoom-image') : '';
  }

  function openLightbox(index) {
    if (!lightbox || !lightboxImage) return;
    currentIndex = typeof index === 'number' ? index : mainSwiper.activeIndex;
    var url = getImageUrl(currentIndex);
    if (!url) return;
    lightboxImage.style.backgroundImage = "url('" + url + "')";
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.documentElement.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
  }

  function moveLightbox(direction) {
    var total = page.querySelectorAll('.waco-pd2-main-image').length;
    if (!total) return;
    currentIndex = ((currentIndex + direction) % total + total) % total;
    var url = getImageUrl(currentIndex);
    if (url && lightboxImage) {
      lightboxImage.style.backgroundImage = "url('" + url + "')";
    }
  }

  if (openButton) {
    openButton.addEventListener('click', function () {
      openLightbox(mainSwiper.activeIndex);
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', function () {
      moveLightbox(-1);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', function () {
      moveLightbox(1);
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', function (event) {
    if (!lightbox || !lightbox.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') moveLightbox(-1);
    if (event.key === 'ArrowRight') moveLightbox(1);
  });
})();


/* =========================================================
  Blog filter v1.4.0
========================================================= */
(function () {
  var filterWrap = document.querySelector('[data-waco-blog-filter]');
  if (!filterWrap) return;

  var buttons = filterWrap.querySelectorAll('[data-filter]');
  var cards = document.querySelectorAll('.waco-blog-card[data-category]');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.getAttribute('data-filter');

      buttons.forEach(function (item) {
        item.classList.remove('is-active');
      });
      button.classList.add('is-active');

      cards.forEach(function (card) {
        var category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
})();


/* =========================================================
  Featured blog Swiper v1.4.1
========================================================= */
(function () {
  if (typeof Swiper === 'undefined') return;

  var el = document.querySelector('[data-waco-featured-blog-swiper]');
  if (!el) return;

  new Swiper(el, {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 650,
    loop: true,
    autoplay: {
      delay: 4200,
      disableOnInteraction: false
    },
    pagination: {
      el: el.querySelector('.waco-featured-blog-pagination'),
      clickable: true
    }
  });
})();


/* =========================================================
  Featured blog Swiper fix v1.4.2
  Initializes after DOM is ready and forces Swiper to recalculate layout.
========================================================= */
(function () {
  function initFeaturedBlogSwiper() {
    if (typeof Swiper === 'undefined') return;

    var el = document.querySelector('[data-waco-featured-blog-swiper]');
    if (!el || el.dataset.wacoFeaturedReady === 'true') return;

    el.dataset.wacoFeaturedReady = 'true';

    var instance = new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 650,
      loop: true,
      autoHeight: false,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 4200,
        disableOnInteraction: false
      },
      pagination: {
        el: el.querySelector('.waco-featured-blog-pagination'),
        clickable: true
      }
    });

    window.setTimeout(function () {
      if (instance && instance.update) {
        instance.update();
      }
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFeaturedBlogSwiper);
  } else {
    initFeaturedBlogSwiper();
  }
})();


/* =========================================================
  Featured posts Swiper v1.4.3
  Full-card carousel: image + text slide together.
========================================================= */
(function () {
  function initFeaturedPostsSwiper() {
    if (typeof Swiper === 'undefined') return;

    var el = document.querySelector('[data-waco-featured-posts-swiper]');
    if (!el || el.dataset.wacoFeaturedPostsReady === 'true') return;

    el.dataset.wacoFeaturedPostsReady = 'true';

    var pagination = el.parentElement ? el.parentElement.querySelector('.waco-featured-posts-pagination') : null;

    var instance = new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 650,
      loop: true,
      autoHeight: false,
      grabCursor: true,
      simulateTouch: true,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 4200,
        disableOnInteraction: false
      },
      pagination: {
        el: pagination,
        clickable: true
      }
    });

    window.setTimeout(function () {
      if (instance && instance.update) {
        instance.update();
      }
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFeaturedPostsSwiper);
  } else {
    initFeaturedPostsSwiper();
  }
})();


/* =========================================================
  Blog detail auto TOC v1.5.0
  Generates right-side article directory from h2 tags only.
========================================================= */
(function () {
  var article = document.querySelector('[data-waco-article]');
  var toc = document.querySelector('[data-waco-article-toc]');
  if (!article || !toc) return;

  var headings = Array.prototype.slice.call(article.querySelectorAll('.waco-article-content h2'));

  if (!headings.length) {
    toc.innerHTML = '<p class="waco-article-toc-empty">No h2 headings found.</p>';
    return;
  }

  function slugify(text, index) {
    return text
      .toLowerCase()
      .trim()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')
      .replace(/^-+|-+$/g, '') || ('section-' + (index + 1));
  }

  var usedIds = {};

  headings.forEach(function (heading, index) {
    if (!heading.id) {
      var base = slugify(heading.textContent || '', index);
      var id = base;
      var counter = 2;

      while (usedIds[id] || document.getElementById(id)) {
        id = base + '-' + counter;
        counter += 1;
      }

      heading.id = id;
      usedIds[id] = true;
    }

    var link = document.createElement('a');
    link.href = '#' + heading.id;
    link.textContent = heading.textContent.trim();
    link.setAttribute('data-toc-target', heading.id);
    toc.appendChild(link);
  });

  var links = Array.prototype.slice.call(toc.querySelectorAll('[data-toc-target]'));

  function setActive(id) {
    links.forEach(function (link) {
      link.classList.toggle('is-active', link.getAttribute('data-toc-target') === id);
    });
  }

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      var id = link.getAttribute('data-toc-target');
      var target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActive(id);
      history.replaceState(null, '', '#' + id);
    });
  });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      var visible = entries
        .filter(function (entry) { return entry.isIntersecting; })
        .sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });

      if (visible.length) {
        setActive(visible[0].target.id);
      }
    }, {
      root: null,
      rootMargin: '-18% 0px -68% 0px',
      threshold: 0
    });

    headings.forEach(function (heading) {
      observer.observe(heading);
    });
  } else {
    window.addEventListener('scroll', function () {
      var active = headings[0];

      headings.forEach(function (heading) {
        if (heading.getBoundingClientRect().top <= 140) {
          active = heading;
        }
      });

      if (active) {
        setActive(active.id);
      }
    }, { passive: true });
  }

  setActive(headings[0].id);
})();


/* =========================================================
  FAQ accordion + filter v1.6.1
========================================================= */
(function () {
  var list = document.querySelector('[data-waco-faq-list]');
  if (!list) return;

  var items = Array.prototype.slice.call(list.querySelectorAll('.waco-faq-item'));
  var filterWrap = document.querySelector('[data-waco-faq-filter]');
  var filterButtons = filterWrap ? Array.prototype.slice.call(filterWrap.querySelectorAll('[data-filter]')) : [];
  var searchInput = document.querySelector('[data-waco-faq-search]');
  var empty = document.querySelector('[data-waco-faq-empty]');
  var currentFilter = 'all';
  var currentSearch = '';

  function setAnswerHeight(item) {
    var answer = item.querySelector('.waco-faq-answer');
    if (!answer) return;

    if (item.classList.contains('is-open')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = '0px';
    }
  }

  function refreshHeights() {
    items.forEach(setAnswerHeight);
  }

  function applyFilters() {
    var visibleCount = 0;

    items.forEach(function (item) {
      var category = item.getAttribute('data-category') || '';
      var text = item.textContent.toLowerCase();
      var categoryMatch = currentFilter === 'all' || category === currentFilter;
      var searchMatch = !currentSearch || text.indexOf(currentSearch) !== -1;
      var visible = categoryMatch && searchMatch;

      item.classList.toggle('is-hidden', !visible);
      if (visible) {
        visibleCount += 1;
      }
    });

    if (empty) {
      empty.classList.toggle('is-visible', visibleCount === 0);
    }

    window.setTimeout(refreshHeights, 50);
  }

  items.forEach(function (item) {
    var button = item.querySelector('.waco-faq-question');
    if (!button) return;

    button.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      items.forEach(function (other) {
        other.classList.remove('is-open');
        var otherButton = other.querySelector('.waco-faq-question');
        if (otherButton) {
          otherButton.setAttribute('aria-expanded', 'false');
        }
      });

      if (!isOpen) {
        item.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
      } else {
        button.setAttribute('aria-expanded', 'false');
      }

      refreshHeights();
    });
  });

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      currentFilter = button.getAttribute('data-filter') || 'all';

      filterButtons.forEach(function (item) {
        item.classList.remove('is-active');
      });
      button.classList.add('is-active');

      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      currentSearch = searchInput.value.trim().toLowerCase();
      applyFilters();
    });
  }

  window.addEventListener('resize', refreshHeights);
  refreshHeights();
})();


/* =========================================================
  FAQ default open safeguard v1.6.1
  Ensures the first visible FAQ is open after removing the search box.
========================================================= */
(function () {
  var list = document.querySelector('[data-waco-faq-list]');
  if (!list) return;

  function openFirstVisible() {
    var items = Array.prototype.slice.call(list.querySelectorAll('.waco-faq-item'));
    var visibleItems = items.filter(function (item) {
      return !item.classList.contains('is-hidden');
    });

    if (!visibleItems.length) return;

    var hasOpenVisible = visibleItems.some(function (item) {
      return item.classList.contains('is-open');
    });

    if (!hasOpenVisible) {
      visibleItems[0].classList.add('is-open');
      var button = visibleItems[0].querySelector('.waco-faq-question');
      if (button) {
        button.setAttribute('aria-expanded', 'true');
      }
    }

    visibleItems.forEach(function (item) {
      var answer = item.querySelector('.waco-faq-answer');
      if (!answer) return;
      if (item.classList.contains('is-open')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = '0px';
      }
    });
  }

  window.setTimeout(openFirstVisible, 80);

  var filterWrap = document.querySelector('[data-waco-faq-filter]');
  if (filterWrap) {
    filterWrap.addEventListener('click', function () {
      window.setTimeout(openFirstVisible, 80);
    });
  }
})();


/* =========================================================
  Downloads filter v1.7.0
========================================================= */
(function () {
  var filterWrap = document.querySelector('[data-waco-download-filter]');
  var list = document.querySelector('[data-waco-download-list]');
  if (!filterWrap || !list) return;

  var buttons = Array.prototype.slice.call(filterWrap.querySelectorAll('[data-filter]'));
  var cards = Array.prototype.slice.call(list.querySelectorAll('.waco-download-card[data-category]'));
  var empty = document.querySelector('[data-waco-download-empty]');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.getAttribute('data-filter') || 'all';
      var visibleCount = 0;

      buttons.forEach(function (item) {
        item.classList.remove('is-active');
      });
      button.classList.add('is-active');

      cards.forEach(function (card) {
        var category = card.getAttribute('data-category');
        var visible = filter === 'all' || category === filter;
        card.classList.toggle('is-hidden', !visible);
        if (visible) visibleCount += 1;
      });

      if (empty) {
        empty.classList.toggle('is-visible', visibleCount === 0);
      }
    });
  });
})();


/* =========================================================
  Projects modal + Swiper gallery v1.8.2
========================================================= */
(function () {
  var page = document.querySelector('.waco-projects-page');
  if (!page) return;

  var projectData = {
    'garden-decking': {
      title: 'Garden Decking Renovation',
      meta: ['Residential', 'Composite Decking', 'Garden Area'],
      images: [
        'assets/images/projects/case-01-01.jpg',
        'assets/images/projects/case-01-02.jpg',
        'assets/images/projects/case-01-03.jpg',
        'assets/images/projects/case-01-04.jpg'
      ],
      text: [
        'This residential garden renovation uses composite decking to create a cleaner and more comfortable outdoor living area. The project focuses on a warm, natural-looking surface, simple circulation and a low-maintenance finish for daily family use. The decking area connects the house entrance, outdoor seating zone and garden path, so the layout needed to feel practical without becoming too heavy visually.',
        'The material selection was planned around long-term stability, colour consistency and easy cleaning. The final layout keeps the board direction simple, making the space feel wider and more organised. This type of case is suitable for homeowners who want to upgrade a small or medium garden with a durable surface while keeping the overall style calm, modern and easy to maintain.'
      ]
    },
    'hotel-facade': {
      title: 'Hotel Facade Cladding',
      meta: ['Commercial', 'Wall Cladding', 'Facade Design'],
      images: [
        'assets/images/projects/case-02-01.jpg',
        'assets/images/projects/case-02-02.jpg',
        'assets/images/projects/case-02-03.jpg',
        'assets/images/projects/case-02-04.jpg'
      ],
      text: [
        'This hotel facade project uses wall cladding to create a more modern and structured exterior appearance. The design goal was to improve the visual rhythm of the building while keeping the material practical for outdoor exposure. The cladding lines help divide the facade into cleaner sections and give the entrance area a stronger architectural identity.',
        'For commercial projects like this, the material needs to balance appearance, durability and installation efficiency. The selected cladding profile supports a consistent surface effect and helps reduce the need for frequent maintenance. This case can be used as a reference for hospitality buildings, retail facades and other commercial spaces that need a contemporary exterior finish.'
      ]
    },
    'restaurant-terrace': {
      title: 'Restaurant Terrace Decking',
      meta: ['Commercial', 'Decking', 'Terrace'],
      images: [
        'assets/images/projects/case-03-01.jpg',
        'assets/images/projects/case-03-02.jpg',
        'assets/images/projects/case-03-03.jpg',
        'assets/images/projects/case-03-04.jpg'
      ],
      text: [
        'This restaurant terrace project creates an outdoor dining area with a stable and welcoming decking surface. The space is designed for frequent customer movement, outdoor furniture and regular cleaning, so the product choice needed to support both appearance and practical use. The decking colour was selected to coordinate with the building and surrounding landscape.',
        'The project layout keeps the terrace flexible for different seating arrangements. A clean board pattern helps the area look organised, while the surface finish gives a comfortable visual texture. This type of case is useful for restaurants, cafes and hospitality spaces that need an outdoor floor finish with a professional look and manageable maintenance requirements.'
      ]
    },
    'balcony-upgrade': {
      title: 'Apartment Balcony Upgrade',
      meta: ['Residential', 'Balcony', 'Decking'],
      images: [
        'assets/images/projects/case-04-01.jpg',
        'assets/images/projects/case-04-02.jpg',
        'assets/images/projects/case-04-03.jpg',
        'assets/images/projects/case-04-04.jpg'
      ],
      text: [
        'This balcony upgrade project shows how a compact outdoor area can be improved with a simple decking layout. The goal was to make the balcony feel warmer and more usable without adding complicated construction details. The selected boards create a neat surface that works well with planters, small furniture and daily outdoor relaxation.',
        'For balcony projects, height, drainage and edge details are especially important. The design keeps the surface clean and avoids visually heavy elements, making the small space feel more open. This case is suitable for apartment owners who want a practical and comfortable upgrade for balconies, roof terraces or other limited outdoor areas.'
      ]
    },
    'villa-wall': {
      title: 'Villa Exterior Wall Design',
      meta: ['Residential', 'Wall Cladding', 'Villa'],
      images: [
        'assets/images/projects/case-05-01.jpg',
        'assets/images/projects/case-05-02.jpg',
        'assets/images/projects/case-05-03.jpg',
        'assets/images/projects/case-05-04.jpg'
      ],
      text: [
        'This villa exterior wall project uses cladding to add depth and texture to the building facade. The design approach is simple and refined, using vertical and horizontal surfaces to create contrast with other exterior materials. The cladding area becomes a visual feature while still remaining practical for long-term outdoor use.',
        'The selected finish gives the wall a natural but controlled appearance. This makes the facade easier to coordinate with windows, garden elements and outdoor flooring. This type of case is helpful for residential designers and homeowners who want to add warmth to exterior walls without relying on traditional timber maintenance.'
      ]
    },
    'poolside-deck': {
      title: 'Poolside Decking Area',
      meta: ['Commercial', 'Poolside', 'Decking'],
      images: [
        'assets/images/projects/case-06-01.jpg',
        'assets/images/projects/case-06-02.jpg',
        'assets/images/projects/case-06-03.jpg',
        'assets/images/projects/case-06-04.jpg'
      ],
      text: [
        'This poolside decking project focuses on creating a clean outdoor leisure area around water. The decking surface provides a continuous visual platform for walking, seating and relaxation. Because poolside areas are exposed to moisture and regular cleaning, the material selection needs to consider stability, surface comfort and long-term maintenance.',
        'The project uses a calm colour tone to connect the pool, landscape and surrounding architecture. Board direction and edge finishing are kept simple, giving the area a clean and open feeling. This case is suitable for resorts, pool clubs, private villas and commercial leisure projects that require a durable outdoor flooring solution.'
      ]
    },
    'rooftop-garden': {
      title: 'Rooftop Garden Decking',
      meta: ['Residential', 'Rooftop', 'Decking'],
      images: [
        'assets/images/projects/case-07-01.jpg',
        'assets/images/projects/case-07-02.jpg',
        'assets/images/projects/case-07-03.jpg',
        'assets/images/projects/case-07-04.jpg'
      ],
      text: [
        'This rooftop garden decking project creates a quiet outdoor living area above the main building. The design uses a simple board direction and a soft surface tone to keep the rooftop space calm and open. The decking platform supports seating, planters and daily relaxation while keeping the overall layout easy to maintain.',
        'Rooftop projects need careful attention to drainage, height control and edge details. The material selection was planned to balance outdoor durability with a lightweight visual effect. This case is suitable for residential rooftops, small terraces and private outdoor areas where users want a cleaner and more comfortable surface.'
      ]
    },
    'office-cladding': {
      title: 'Office Entrance Cladding',
      meta: ['Commercial', 'Wall Cladding', 'Entrance'],
      images: [
        'assets/images/projects/case-08-01.jpg',
        'assets/images/projects/case-08-02.jpg',
        'assets/images/projects/case-08-03.jpg',
        'assets/images/projects/case-08-04.jpg'
      ],
      text: [
        'This office entrance project uses wall cladding to strengthen the first impression of the building. The cladding area adds texture and depth to the entrance wall while keeping the design clean and professional. The result is suitable for commercial environments that need a modern but understated exterior identity.',
        'The material helps create a consistent facade language and can coordinate with glass, metal and landscape elements. This case is useful for office buildings, showrooms and service spaces that want to improve exterior presentation with a controlled, low-maintenance surface solution.'
      ]
    },
    'public-walkway': {
      title: 'Public Walkway Decking',
      meta: ['Commercial', 'Walkway', 'Decking'],
      images: [
        'assets/images/projects/case-09-01.jpg',
        'assets/images/projects/case-09-02.jpg',
        'assets/images/projects/case-09-03.jpg',
        'assets/images/projects/case-09-04.jpg'
      ],
      text: [
        'This public walkway decking project focuses on a practical outdoor route with a consistent surface finish. The design supports regular pedestrian movement and creates a visually cleaner transition between different outdoor zones. The decking colour was selected to remain neutral and easy to coordinate with surrounding architecture.',
        'For public and commercial spaces, the surface must be easy to understand, easy to maintain and suitable for repeated use. This case can be used as a reference for parks, resort paths, commercial walkways and outdoor circulation areas where a neat and durable decking solution is required.'
      ]
    }
  };

  var modal = document.querySelector('[data-waco-project-modal]');
  var mainWrapper = document.querySelector('[data-waco-project-main-wrapper]');
  var thumbWrapper = document.querySelector('[data-waco-project-thumb-wrapper]');
  var titleEl = document.querySelector('[data-waco-project-modal-title]');
  var metaEl = document.querySelector('[data-waco-project-modal-meta]');
  var textEl = document.querySelector('[data-waco-project-modal-text]');
  var mainSwiper = null;
  var thumbSwiper = null;

  function buildSlides(images) {
    mainWrapper.innerHTML = '';
    thumbWrapper.innerHTML = '';

    images.forEach(function (src) {
      var mainSlide = document.createElement('div');
      mainSlide.className = 'swiper-slide';
      mainSlide.innerHTML = '<div class="waco-project-modal-main-image" style="background-image: url(' + src + ');"></div>';
      mainWrapper.appendChild(mainSlide);

      var thumbSlide = document.createElement('div');
      thumbSlide.className = 'swiper-slide';
      thumbSlide.innerHTML = '<div class="waco-project-modal-thumb-image" style="background-image: url(' + src + ');"></div>';
      thumbWrapper.appendChild(thumbSlide);
    });
  }

  function destroySwipers() {
    if (mainSwiper && mainSwiper.destroy) {
      mainSwiper.destroy(true, true);
      mainSwiper = null;
    }

    if (thumbSwiper && thumbSwiper.destroy) {
      thumbSwiper.destroy(true, true);
      thumbSwiper = null;
    }
  }

  function initSwipers() {
    if (typeof Swiper === 'undefined') return;

    thumbSwiper = new Swiper('[data-waco-project-thumb-swiper]', {
      spaceBetween: 10,
      slidesPerView: 4,
      watchSlidesProgress: true,
      freeMode: true,
      breakpoints: {
        761: {
          slidesPerView: 5,
          spaceBetween: 14
        }
      }
    });

    mainSwiper = new Swiper('[data-waco-project-main-swiper]', {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 550,
      navigation: {
        nextEl: '.waco-project-modal-next',
        prevEl: '.waco-project-modal-prev'
      },
      thumbs: {
        swiper: thumbSwiper
      }
    });
  }

  function openProject(id) {
    var data = projectData[id];
    if (!data || !modal) return;

    destroySwipers();
    buildSlides(data.images);

    titleEl.textContent = data.title;
    metaEl.innerHTML = data.meta.map(function (item) {
      return '<span>' + item + '</span>';
    }).join('');
    textEl.innerHTML = data.text.map(function (paragraph) {
      return '<p>' + paragraph + '</p>';
    }).join('');

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.documentElement.style.overflow = 'hidden';

    window.setTimeout(initSwipers, 50);
  }

  function closeProject() {
    if (!modal) return;

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
    destroySwipers();
  }

  page.querySelectorAll('[data-project-id]').forEach(function (button) {
    button.addEventListener('click', function () {
      openProject(button.getAttribute('data-project-id'));
    });
  });

  document.querySelectorAll('[data-waco-project-close]').forEach(function (button) {
    button.addEventListener('click', closeProject);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal && modal.classList.contains('is-open')) {
      closeProject();
    }
  });

  /* Category filter */
  var filterWrap = document.querySelector('[data-waco-project-filter]');
  var empty = document.querySelector('[data-waco-project-empty]');
  if (filterWrap) {
    var filterButtons = Array.prototype.slice.call(filterWrap.querySelectorAll('[data-filter]'));
    var cards = Array.prototype.slice.call(document.querySelectorAll('.waco-project-card[data-category]'));

    filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var filter = button.getAttribute('data-filter') || 'all';
        var visibleCount = 0;

        filterButtons.forEach(function (item) {
          item.classList.remove('is-active');
        });
        button.classList.add('is-active');

        cards.forEach(function (card) {
          var categories = card.getAttribute('data-category') || '';
          var visible = filter === 'all' || categories.indexOf(filter) !== -1;
          card.classList.toggle('is-hidden', !visible);
          if (visible) visibleCount += 1;
        });

        if (empty) {
          empty.classList.toggle('is-visible', visibleCount === 0);
        }
      });
    });
  }
})();


/* =========================================================
  Project modal content scroll reset v1.8.1
========================================================= */
(function () {
  var modal = document.querySelector('[data-waco-project-modal]');
  if (!modal) return;

  var observer = new MutationObserver(function () {
    if (!modal.classList.contains('is-open')) return;
    var content = modal.querySelector('.waco-project-modal-content');
    if (content) {
      content.scrollTop = 0;
    }
  });

  var title = modal.querySelector('[data-waco-project-modal-title]');
  if (title) {
    observer.observe(title, { childList: true, subtree: true });
  }
})();


/* =========================================================
  Projects load more + spacing support v1.8.2
  Default: show 6 cards, then reveal 3 more each click.
========================================================= */
(function () {
  var page = document.querySelector('.waco-projects-page');
  if (!page) return;

  var grid = page.querySelector('[data-waco-project-grid]');
  var loadMore = page.querySelector('[data-waco-project-load-more]');
  var filterWrap = page.querySelector('[data-waco-project-filter]');
  var empty = page.querySelector('[data-waco-project-empty]');
  if (!grid || !loadMore) return;

  var cards = Array.prototype.slice.call(grid.querySelectorAll('.waco-project-card[data-category]'));
  var visibleLimit = 6;
  var step = 3;
  var currentFilter = 'all';

  function matchesFilter(card) {
    var categories = card.getAttribute('data-category') || '';
    return currentFilter === 'all' || categories.indexOf(currentFilter) !== -1;
  }

  function renderProjects(resetLimit) {
    if (resetLimit) {
      visibleLimit = 6;
    }

    var matchedCards = cards.filter(matchesFilter);
    var visibleCount = 0;

    cards.forEach(function (card) {
      card.classList.remove('is-hidden');
      card.classList.remove('is-load-hidden');

      if (!matchesFilter(card)) {
        card.classList.add('is-hidden');
        return;
      }

      visibleCount += 1;
      if (visibleCount > visibleLimit) {
        card.classList.add('is-load-hidden');
      }
    });

    if (empty) {
      empty.classList.toggle('is-visible', matchedCards.length === 0);
    }

    var wrap = loadMore.closest('.waco-project-load-more-wrap');
    var shouldShowButton = matchedCards.length > visibleLimit;
    loadMore.style.display = shouldShowButton ? '' : 'none';
    if (wrap) {
      wrap.classList.toggle('is-hidden', !shouldShowButton);
    }
  }

  loadMore.addEventListener('click', function () {
    visibleLimit += step;
    renderProjects(false);
  });

  if (filterWrap) {
    filterWrap.querySelectorAll('[data-filter]').forEach(function (button) {
      button.addEventListener('click', function () {
        currentFilter = button.getAttribute('data-filter') || 'all';

        filterWrap.querySelectorAll('[data-filter]').forEach(function (item) {
          item.classList.remove('is-active');
        });
        button.classList.add('is-active');

        renderProjects(true);
      });
    });
  }

  renderProjects(true);
})();


/* =========================================================
  Archive filter v1.9.0
  Used by search.html for result type filtering.
========================================================= */
(function () {
  var filterWrap = document.querySelector('[data-waco-archive-filter]');
  var list = document.querySelector('[data-waco-archive-list]');
  if (!filterWrap || !list) return;

  var buttons = Array.prototype.slice.call(filterWrap.querySelectorAll('[data-filter]'));
  var cards = Array.prototype.slice.call(list.querySelectorAll('[data-category]'));
  var empty = document.querySelector('[data-waco-archive-empty]');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.getAttribute('data-filter') || 'all';
      var visibleCount = 0;

      buttons.forEach(function (item) {
        item.classList.remove('is-active');
      });
      button.classList.add('is-active');

      cards.forEach(function (card) {
        var category = card.getAttribute('data-category') || '';
        var visible = filter === 'all' || category === filter;
        card.classList.toggle('is-hidden', !visible);
        if (visible) visibleCount += 1;
      });

      if (empty) {
        empty.classList.toggle('is-visible', visibleCount === 0);
      }
    });
  });
})();


/* =========================================================
  Contact form static demo v2.0.0
  This prevents static HTML preview from navigating away.
  Replace this with WordPress / Contact Form 7 / backend submission later.
========================================================= */
(function () {
  var form = document.querySelector('[data-waco-contact-form]');
  if (!form) return;

  var status = document.querySelector('[data-waco-contact-status]');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (status) {
      status.textContent = 'Demo message: this static form is ready for WordPress or backend integration.';
      status.classList.add('is-visible');
    }
  });
})();


/* =========================================================
  About page interactions v2.1.0
  - Number rolling counters
  - Why choose us accordion + image switch
  - Testimonial Swiper
========================================================= */
(function () {
  var aboutPage = document.querySelector('.waco-about-page');
  if (!aboutPage) return;

  /* Number counters */
  var counters = Array.prototype.slice.call(document.querySelectorAll('[data-waco-counter]'));

  function animateCounter(counter) {
    if (counter.dataset.counted === 'true') return;
    counter.dataset.counted = 'true';

    var target = parseInt(counter.getAttribute('data-target') || '0', 10);
    var duration = parseInt(counter.getAttribute('data-duration') || '1600', 10);
    var start = 0;
    var startTime = null;

    function tick(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.round(start + (target - start) * eased);

      counter.textContent = value.toLocaleString();

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      } else {
        counter.textContent = target.toLocaleString();
      }
    }

    window.requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });

    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });
  } else {
    counters.forEach(animateCounter);
  }

  /* Why choose us */
  var whyRoot = document.querySelector('[data-waco-why-choose]');
  if (whyRoot) {
    var items = Array.prototype.slice.call(whyRoot.querySelectorAll('[data-why-index]'));
    var images = Array.prototype.slice.call(whyRoot.querySelectorAll('[data-why-image]'));

    function activateWhy(index) {
      items.forEach(function (item) {
        item.classList.toggle('is-active', item.getAttribute('data-why-index') === String(index));
      });

      images.forEach(function (image) {
        image.classList.toggle('is-active', image.getAttribute('data-why-image') === String(index));
      });
    }

    items.forEach(function (item) {
      item.addEventListener('click', function () {
        activateWhy(item.getAttribute('data-why-index'));
      });
    });

    activateWhy(0);
  }

  /* Testimonials swiper */
  if (typeof Swiper !== 'undefined' && document.querySelector('[data-waco-testimonial-swiper]')) {
    new Swiper('[data-waco-testimonial-swiper]', {
      slidesPerView: 1,
      spaceBetween: 18,
      speed: 650,
      loop: true,
      autoplay: {
        delay: 4200,
        disableOnInteraction: false
      },
      pagination: {
        el: '.waco-testimonial-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.waco-testimonial-next',
        prevEl: '.waco-testimonial-prev'
      },
      breakpoints: {
        761: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1025: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      }
    });
  }
})();


/* =========================================================
  Product compare before/after slider v2.2.0
========================================================= */
(function () {
  var sliders = document.querySelectorAll('[data-waco-before-after]');
  if (!sliders.length) return;

  sliders.forEach(function (slider) {
    var range = slider.querySelector('.waco-ba-range');
    if (!range) return;

    function updatePosition() {
      var value = Math.max(0, Math.min(100, parseFloat(range.value || '50')));
      slider.style.setProperty('--position', value + '%');
    }

    range.addEventListener('input', updatePosition);
    range.addEventListener('change', updatePosition);
    updatePosition();
  });
})();
