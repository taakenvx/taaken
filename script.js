/* ============================================================
   TAAKEN — script.js
============================================================ */

// ---- Estado de idioma ----
let lang = localStorage.getItem('taaken-lang') || 'pt';

// ---- SVG ICONS ----
const ICONS = {
  github: `<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  discord:`<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
  tiktok:`<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z"/></svg>`,
  mail:  `<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
};

// ---- AVATAR ----
function initAvatar() {
  const img = document.getElementById('avatarImg');
  const url = CONFIG.avatarUrl || `https://github.com/${CONFIG.githubUser}.png?size=200`;
  img.src = url;
  img.alt = `avatar de ${CONFIG.username}`;
}

// ---- SPOTIFY ----
function initSpotify() {
  const { type, id, theme } = CONFIG.spotify;
  const frame = document.getElementById('spotifyFrame');
  if (!id) {
    document.getElementById('spotifyWrap').style.display = 'none';
    return;
  }
  frame.src = `https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=${theme}`;
}

// ---- TYPEWRITER ----
let typeIdx   = 0;
let charIdx   = 0;
let deleting  = false;
const taglineEl = document.getElementById('tagline');

function typewriter() {
  const phrases = CONFIG.tagline[lang];
  const current = phrases[typeIdx];

  if (!deleting) {
    charIdx++;
    taglineEl.textContent = '> ' + current.slice(0, charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typewriter, 2000);
      return;
    }
  } else {
    charIdx--;
    taglineEl.textContent = '> ' + current.slice(0, charIdx);
    if (charIdx === 0) {
      deleting = false;
      typeIdx = (typeIdx + 1) % phrases.length;
    }
  }
  setTimeout(typewriter, deleting ? 40 : 65);
}

// ---- SOCIALS ----
function renderSocials(containerId, itemClass) {
  const container = document.getElementById(containerId);
  container.innerHTML = CONFIG.socials.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer"
       class="${itemClass}" aria-label="${s.label}">
      ${ICONS[s.icon] || ''}
      <span>${s.label}</span>
    </a>
  `).join('');
}

function renderContactGrid() {
  const grid = document.getElementById('contactGrid');
  const handles = {
    github:  `@${CONFIG.githubUser}`,
    discord: `@${CONFIG.username}`,
    tiktok:  `@t4aken`,
    mail:    `taaken.contato@gmail.com`,
  };
  grid.innerHTML = CONFIG.socials.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer"
       class="contact-item" aria-label="${s.label}">
      ${ICONS[s.icon] || ''}
      <div class="contact-info">
        <span class="contact-label">${s.label}</span>
        <span class="contact-handle">${handles[s.icon] || ''}</span>
      </div>
    </a>
  `).join('');
}

// ---- STACK ----
function renderStack() {
  const grid = document.getElementById('stackGrid');
  const s = CONFIG.stack[lang];
  const labels = { pt: { dominando: 'dominando', aprendendo: 'aprendendo' }, en: { dominando: 'mastering', aprendendo: 'learning' } };
  grid.innerHTML = ['dominando', 'aprendendo'].map(cat => `
    <div class="stack-category">
      <span class="stack-category-label">${labels[lang][cat]}</span>
      <div class="stack-tags">
        ${s[cat].map(t => `<span class="stack-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ---- PROJECTS ----
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const verLabel = lang === 'pt' ? 'ver site' : 'live site';
  const codeLabel = lang === 'pt' ? 'código' : 'code';
  grid.innerHTML = CONFIG.projects.map(p => `
    <div class="project-card">
      <p class="project-title">${p.title[lang]}</p>
      <p class="project-desc">${p.desc[lang]}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>
      <div class="project-links">
        ${p.site ? `<a href="${p.site}" target="_blank" rel="noopener" class="project-link">↗ ${verLabel}</a>` : ''}
        ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener" class="project-link secondary">{} ${codeLabel}</a>` : ''}
      </div>
    </div>
  `).join('');
}

// ---- I18N ----
function applyLang() {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  document.getElementById('statusBadge').querySelector('.status-text').textContent = CONFIG.status[lang];
  document.getElementById('aboutText').textContent = CONFIG.about[lang];
  document.getElementById('expandLabel').textContent = lang === 'pt' ? 'ver portfólio' : 'view portfolio';
  document.querySelector('.footer-sys').textContent = lang === 'pt' ? 'sys.uptime: sempre aprendendo' : 'sys.uptime: always learning';

  // Reset typewriter
  charIdx = 0; deleting = false; typeIdx = 0;

  renderStack();
  renderProjects();
  renderContactGrid();

  document.querySelectorAll('.lang-btn').forEach(b => {
    const active = b.dataset.lang === lang;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', active);
  });

  localStorage.setItem('taaken-lang', lang);
}

// ---- EXPAND BUTTON ----
function initExpand() {
  const btn = document.getElementById('expandBtn');
  const section = document.getElementById('portfolioSection');

  btn.addEventListener('click', () => {
    const isOpen = section.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
    section.setAttribute('aria-hidden', !isOpen);

    if (isOpen) {
      // Stagger reveal animations
      const blocks = section.querySelectorAll('.reveal');
      blocks.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), 100 + i * 120);
      });

      // Scroll to section
      setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    } else {
      section.querySelectorAll('.reveal').forEach(el => el.classList.remove('visible'));
    }
  });
}

// ---- PARTICLES DATA FLOW ----
function initParticles() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.getElementById('particles-canvas');
  const ctx    = canvas.getContext('2d');

  let W, H, nodes, edges, packets;

  const NODE_COUNT = () => Math.floor((W * H) / 22000);
  const EDGE_DIST  = 160;
  const ACCENT     = 'rgba(79,142,247,';

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    build();
  }

  function build() {
    const n = NODE_COUNT();
    nodes = Array.from({ length: n }, () => ({
      x:   Math.random() * W,
      y:   Math.random() * H,
      vx:  (Math.random() - 0.5) * 0.3,
      vy:  (Math.random() - 0.5) * 0.3,
      r:   1.5 + Math.random() * 1.5,
    }));
    packets = [];
  }

  function getEdges() {
    const e = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < EDGE_DIST) e.push([i, j, d]);
      }
    }
    return e;
  }

  function spawnPacket(edges) {
    if (!edges.length) return;
    const e = edges[Math.floor(Math.random() * edges.length)];
    packets.push({
      from: e[0], to: e[1],
      t: 0,
      speed: 0.008 + Math.random() * 0.012,
      reverse: Math.random() > 0.5,
    });
  }

  let frame = 0;

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Move nodes
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    }

    const e = getEdges();

    // Spawn packet occasionally
    if (frame % 22 === 0 && packets.length < 18) spawnPacket(e);
    frame++;

    // Draw edges
    for (const [i, j, d] of e) {
      const alpha = (1 - d / EDGE_DIST) * 0.18;
      ctx.beginPath();
      ctx.moveTo(nodes[i].x, nodes[i].y);
      ctx.lineTo(nodes[j].x, nodes[j].y);
      ctx.strokeStyle = ACCENT + alpha + ')';
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }

    // Draw nodes
    for (const n of nodes) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = ACCENT + '0.5)';
      ctx.fill();
    }

    // Draw packets
    packets = packets.filter(p => {
      p.t += p.speed;
      if (p.t > 1) return false;

      const a = nodes[p.reverse ? p.to   : p.from];
      const b = nodes[p.reverse ? p.from : p.to  ];
      const x = a.x + (b.x - a.x) * p.t;
      const y = a.y + (b.y - a.y) * p.t;

      // glow
      const g = ctx.createRadialGradient(x, y, 0, x, y, 6);
      g.addColorStop(0, ACCENT + '0.9)');
      g.addColorStop(1, ACCENT + '0)');
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();

      // dot
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      return true;
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();
  draw();
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  initAvatar();
  initSpotify();
  renderSocials('socialsRow', 'social-link');
  applyLang();
  initExpand();
  initParticles();
  setTimeout(typewriter, 500);

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      lang = btn.dataset.lang;
      applyLang();
    });
  });

  // IntersectionObserver para reveal (fallback)
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});

// ---- PRELOADER ----
(function () {
  const el      = document.getElementById('preName');
  const fill    = document.getElementById('preLineFill');
  const overlay = document.getElementById('preloader');
  if (!overlay) return;

  const text    = 'taaken';
  let   i       = 0;

  // Digita letra por letra
  function type() {
    if (i <= text.length) {
      el.innerHTML = text.slice(0, i) + '<span class="pre-cursor">_</span>';
      i++;
      setTimeout(type, i === 1 ? 80 : 75);
    } else {
      // Nome completo → dispara a barra
      setTimeout(() => {
        fill.style.width = '100%';
        // Após a barra completar, some o overlay
        setTimeout(() => overlay.classList.add('hide'), 980);
      }, 180);
    }
  }

  // Começa a digitar logo que o DOM está pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(type, 120));
  } else {
    setTimeout(type, 120);
  }
})();
