// ============================================================
//  TAAKEN — config.js
//  Só você edita esse arquivo. Dê push e o site atualiza.
// ============================================================

const CONFIG = {

  // --- IDENTIDADE ---
  username:    "taaken",
  githubUser:  "taakenvx",          // usado para puxar avatar automaticamente
  // avatarUrl: "https://...",      // descomente para usar imagem própria ao invés do GitHub

  status: {
    pt: "disponível para projetos",
    en: "available for projects",
  },

  tagline: {
    pt: ["frontend dev.", "construindo interfaces.", "sempre aprendendo."],
    en: ["frontend dev.", "building interfaces.", "always learning."],
  },

  about: {
    pt: "Construo interfaces que parecem vivas. Frontend dev em evolução constante — do pixel ao servidor. Odeio código feio e adoro quando a animação acerta no timing.",
    en: "I build interfaces that feel alive. Frontend dev in constant evolution — from pixel to server. I hate ugly code and love when the animation hits just right.",
  },

  // --- REDES SOCIAIS ---
  socials: [
    { label: "GitHub",   icon: "github",   url: "https://github.com/taakenvx" },
    { label: "Discord",  icon: "discord",  url: "https://discord.com/users/944982637754318928" },
    { label: "TikTok",   icon: "tiktok",   url: "https://www.tiktok.com/@t4aken" },
    { label: "Email",    icon: "mail",     url: "mailto:taaken.contato@gmail.com" },
  ],

  // --- SPOTIFY ---
  // Cole o ID do track/playlist que aparece na URL do Spotify
  // Exemplo: https://open.spotify.com/track/4cluDES4hQEUhmXj6TXkSo  →  trackId: "4cluDES4hQEUhmXj6TXkSo"
  spotify: {
    type:    "track",                   // "track" ou "playlist"
    id:      "4cluDES4hQEUhmXj6TXkSo", // troque pelo seu
    theme:   "0",                       // "0" = escuro
  },

  // --- STACK ---
  stack: {
    pt: {
      dominando: ["React", "Next.js", "JavaScript", "TypeScript", "HTML / CSS", "Git + GitHub"],
      aprendendo: ["Node.js", "Python", "Django / Flask", "PostgreSQL", "Docker", "FastAPI"],
    },
    en: {
      dominando: ["React", "Next.js", "JavaScript", "TypeScript", "HTML / CSS", "Git + GitHub"],
      aprendendo: ["Node.js", "Python", "Django / Flask", "PostgreSQL", "Docker", "FastAPI"],
    },
  },

  // --- PROJETOS ---
  projects: [
    {
      title:   { pt: "Mundos Além do Horizonte", en: "Worlds Beyond the Horizon" },
      desc:    {
        pt: "Site educacional sobre África do Sul, Austrália e Nova Zelândia. Linha do tempo interativa, cultura, animais icônicos.",
        en: "Educational site about South Africa, Australia, and New Zealand. Interactive timeline, culture, iconic animals.",
      },
      tags:    ["HTML", "CSS", "JavaScript"],
      site:    "https://taakenvx.github.io/trabalho-escolar/",
      // repo: "https://github.com/taakenvx/trabalho-escolar", // descomente para adicionar botão de código
    },
    // Adicione mais projetos aqui seguindo o mesmo formato
  ],

};
