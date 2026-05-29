(function () {
  "use strict";

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function formatNumber(value, decimals) {
    return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  }

  function animateCount(node) {
    const target = parseFloat(node.dataset.target);
    const decimals = parseInt(node.dataset.dec || "0", 10);
    if (!isFinite(target)) return;

    if (reducedMotion) {
      node.textContent = formatNumber(target, decimals);
      return;
    }

    const duration = 1100;
    const start = performance.now();
    const from = 0;
    function frame(now) {
      const elapsed = Math.min(1, (now - start) / duration);
      const eased = easeOutCubic(elapsed);
      const value = from + (target - from) * eased;
      node.textContent = formatNumber(value, decimals);
      if (elapsed < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function initReveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("in");
      });
      return;
    }
    const obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach(function (el) {
      obs.observe(el);
    });
  }

  function initCounters() {
    const targets = document.querySelectorAll(".count");
    if (!targets.length) return;
    if (!("IntersectionObserver" in window)) {
      targets.forEach(animateCount);
      return;
    }
    const obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    targets.forEach(function (el) {
      obs.observe(el);
    });
  }

  function initProgressBar() {
    const bar = document.querySelector("[data-progress]");
    if (!bar) return;
    let ticking = false;
    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.transform = "scaleX(" + ratio + ")";
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
    update();
  }

  function initNavSpy() {
    const links = document.querySelectorAll("[data-spy]");
    if (!links.length || !("IntersectionObserver" in window)) return;
    const byId = new Map();
    links.forEach(function (link) {
      const id = link.getAttribute("href").replace(/^#/, "");
      const target = document.getElementById(id);
      if (target) byId.set(target, link);
    });
    if (!byId.size) return;
    const obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          const link = byId.get(entry.target);
          if (!link) return;
          if (entry.isIntersecting) {
            links.forEach(function (l) {
              l.classList.remove("is-active");
            });
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    byId.forEach(function (_link, target) {
      obs.observe(target);
    });
  }

  function initBars() {
    const fills = document.querySelectorAll(".fill[data-value]");
    if (!fills.length) return;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      fills.forEach(function (el) {
        const v = Math.max(0, Math.min(100, parseFloat(el.dataset.value)));
        el.style.width = v + "%";
      });
      return;
    }
    const obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const v = Math.max(0, Math.min(100, parseFloat(entry.target.dataset.value)));
            entry.target.style.width = v + "%";
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    fills.forEach(function (el) {
      obs.observe(el);
    });
  }

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  ready(function () {
    initReveal();
    initCounters();
    initProgressBar();
    initBars();
    initNavSpy();
  });
})();
