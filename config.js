// ============================================================
//  TAAKEN — config.js
//  Só edite esse arquivo. Dê push e o site atualiza.
// ============================================================

const CONFIG = {

  username:   "taaken",
  githubUser: "taakenvx",
  // avatarUrl: "https://...",   // descomente para usar imagem própria

  // Taglines do typewriter — sem ponto final
  taglines: [
    "im a web developer btw",
    "drinking coffee",
    "probably sleeping",
  ],

  // --- BACKGROUND DA PÁGINA ---
  // Cole uma URL de vídeo (.mp4, .webm) OU de imagem. Vídeo tem prioridade.
  // videoUrl: "https://cdn.example.com/bg.mp4",
  videoUrl: "./banners/rain.mp4",

  // --- BANNER (topo do card) ---
  // Pode ser imagem ou vídeo
  bannerUrl: "./banners/as.jpeg",
  // bannerVideoUrl: "https://cdn.example.com/banner.mp4",

  // --- AVATAR ---
  avatarUrl: "./banners/eyes.jpeg",

  // --- MÚSICA ---
  // URL direta de um .mp3 — toca no primeiro clique do usuário na página
  musicUrl: "./banners/Still.mp3",

  // --- VIEWS ---
  // Número base. Sobe +1 a cada visita única
  baseViews: 1247,

  // --- BADGES ---
  // Tipos: verified | dev | og | premium | owner
  badges: [
    { type: "verified", label: "Verified" },
    { type: "dev",      label: "Dev"      },
    { type: "og",       label: "OG"       },
  ],

  // --- REDES SOCIAIS ---
  // Ícones disponíveis: github | discord | tiktok | mail
  socials: [
    { label: "GitHub",  icon: "github",  url: "https://github.com/taakenvx" },
    { label: "Discord", icon: "discord", url: "https://discord.com/users/944982637754318928" },
    { label: "TikTok",  icon: "tiktok",  url: "https://www.tiktok.com/@t4aken" },
    { label: "Email",   icon: "mail",    url: "mailto:taaken.contato@gmail.com" },
  ],

};
