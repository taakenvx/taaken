/* ═══════════════════════════════════════════════
   TAAKEN PORTFOLIO — script.js
═══════════════════════════════════════════════ */

(() => {
  'use strict';

  /* ── TYPEWRITER ────────────────────────────────
     Cycles through phrases, typing and deleting
  ─────────────────────────────────────────────── */
  const phrases     = ['im web developer btw', 'Linux', 'ui/ux', 'drinking coffee'];
  const twEl        = document.getElementById('tw-text');

  let phraseIndex   = 0;
  let charIndex     = 0;
  let isDeleting    = false;
  let timer         = null;

  const TYPING_MS   = 85;   // ms per character while typing
  const DELETE_MS   = 48;   // ms per character while deleting
  const PAUSE_END   = 1900; // ms pause after full phrase is shown
  const PAUSE_START = 340;  // ms pause before typing next phrase

  function tick() {
    const word = phrases[phraseIndex];

    if (!isDeleting) {
      // Type one character
      twEl.textContent = word.slice(0, ++charIndex);

      if (charIndex === word.length) {
        // Finished typing — pause before deleting
        isDeleting = true;
        timer = setTimeout(tick, PAUSE_END);
        return;
      }
      timer = setTimeout(tick, TYPING_MS);

    } else {
      // Delete one character
      twEl.textContent = word.slice(0, --charIndex);

      if (charIndex === 0) {
        // Finished deleting — move to next phrase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        timer = setTimeout(tick, PAUSE_START);
        return;
      }
      timer = setTimeout(tick, DELETE_MS);
    }
  }

  // Delay start so page can load first
  setTimeout(tick, 1100);


  /* ── LANGUAGE TOGGLE ───────────────────────────
     Swaps data-pt / data-en attributes on elements
  ─────────────────────────────────────────────── */
  window.setLang = function(lang) {
    // Toggle button states
    document.getElementById('btn-pt').classList.toggle('active', lang === 'pt');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.documentElement.lang = lang;

    // Swap all translatable elements
    document.querySelectorAll('[data-pt]').forEach(el => {
      const value = el.getAttribute('data-' + lang);
      if (value) el.innerHTML = value;
    });
  };


  /* ── SCROLL REVEAL ─────────────────────────────
     Fades sections in as they enter the viewport
  ─────────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    }),
    { threshold: 0.08 }
  );

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.08) + 's';
    revealObserver.observe(el);
  });


  /* ── SKILL STAGGER ─────────────────────────────
     Each skill tag animates in one by one on reveal
  ─────────────────────────────────────────────── */
  const skillsGrid = document.querySelector('.skills-grid');

  if (skillsGrid) {
    const skillObserver = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;

      skillsGrid.querySelectorAll('.skill-tag').forEach((tag, i) => {
        tag.style.opacity   = '0';
        tag.style.transform = 'translateY(10px)';

        setTimeout(() => {
          tag.style.transition = 'opacity .38s ease, transform .38s ease, border-color .2s, color .2s, background .2s';
          tag.style.opacity    = '1';
          tag.style.transform  = 'none';
        }, 100 + i * 48);
      });

      skillObserver.disconnect();
    }, { threshold: 0.2 });

    skillObserver.observe(skillsGrid);
  }

})();
