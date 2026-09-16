import React from 'react';

/**
 * Paleta corporativa de Su Consultor Financiero:
 * - Azul Corporativo / Marino: #002B5b / #1d4ed8 / #60a5fa
 * - Rojo Corporativo: #dc2626
 * - Blanco Puro: #ffffff
 * - Dorado / Ocre: #ffd700 / #d97706
 */
export const CORP_COLORS = {
  blue: '#1d4ed8',
  blueDark: '#002B5b',
  blueSky: '#60a5fa',
  red: '#dc2626',
  white: '#ffffff',
  gold: '#d97706',
  goldBright: '#ffd700',
};

// Tabla de renderizado de SVG vectoriales por nombre
const SVG_ICONS = {
  briefcase: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  'trending-down': (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  ),
  'trending-up': (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
  home: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  car: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  ),
  construction: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14 2.3 6.3" />
      <path d="M14 6 6.3 13.7" />
      <path d="M18 6l-7.7 7.7" />
      <path d="M14 14l7.7-7.7" />
    </svg>
  ),
  clipboard: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="16" height="18" x="4" y="4" rx="2" />
      <path d="M8 2h8a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2z" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  ),
  building: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  ),
  clock: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  lock: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  sparkles: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
      <path d="M19 4v4" />
      <path d="M21 6h-4" />
    </svg>
  ),
  shield: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  handshake: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4L15 9.6a1 1 0 0 0-1.4 0L11 12" />
      <path d="m3 11 4.3-4.3a1 1 0 0 1 1.4 0L12 10a1 1 0 0 1 0 1.4L8.7 14.7a1 1 0 0 1-1.4 0L3 10.4a1 1 0 0 1 0-1.4Z" />
      <path d="m14 14 2.5 2.5" />
      <path d="m8.5 8.5 2.5 2.5" />
    </svg>
  ),
  chat: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 7l-1.5 5.5Z" />
    </svg>
  ),
  colombia: ({ size = 20, style = {}, ...props }) => (
    <span
      className="colombia-flag-badge"
      style={{
        width: `${size * 1.3}px`,
        height: `${size * 0.9}px`,
        display: 'inline-flex',
        flexDirection: 'column',
        borderRadius: '3px',
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.15)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
        verticalAlign: 'middle',
        margin: '0 4px',
        ...style
      }}
      {...props}
    >
      <span style={{ background: '#ffd700', height: '50%', width: '100%' }} />
      <span style={{ background: '#002B5b', height: '25%', width: '100%' }} />
      <span style={{ background: '#dc2626', height: '25%', width: '100%' }} />
    </span>
  ),
  calculator: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M8 10h.01" />
      <path d="M12 10h.01" />
      <path d="M16 10h.01" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
    </svg>
  ),
  chart: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" x2="18" y1="20" y2="10" />
      <line x1="12" x2="12" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="14" />
    </svg>
  ),
  lightbulb: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  ),
  alert: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" x2="12" y1="9" y2="13" />
      <line x1="12" x2="12.01" y1="17" y2="17" />
    </svg>
  ),
  share: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  ),
  dollar: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  bot: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  ),
  search: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
    </svg>
  ),
  book: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
      <path d="M6 6h10" />
      <path d="M6 10h10" />
    </svg>
  ),
  star: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  check: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  cross: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="15" x2="9" y1="9" y2="15" />
      <line x1="9" x2="15" y1="9" y2="15" />
    </svg>
  ),
  phone: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  ),
  sun: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  ),
  moon: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  ),
  gift: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect width="20" height="5" x="2" y="7" />
      <line x1="12" x2="12" y1="22" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  ),
  download: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  ),
  rocket: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  'map-pin': (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  ruler: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m21.7 8.3-6-6a1 1 0 0 0-1.4 0l-12 12a1 1 0 0 0 0 1.4l6 6a1 1 0 0 0 1.4 0l12-12a1 1 0 0 0 0-1.4Z" />
      <path d="m7.5 10.5 2 2" />
      <path d="m10.5 7.5 2 2" />
      <path d="m13.5 4.5 2 2" />
    </svg>
  ),
  bed: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  ),
  bath: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-1C4.5 2.5 4 3.5 4 4.5V11" />
      <path d="M10 11H2" />
      <path d="M22 13a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4Z" />
      <path d="M7 20v2" />
      <path d="M17 20v2" />
    </svg>
  ),
  balcony: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 10h16v11H4z" />
      <path d="M4 14h16" />
      <path d="M8 14v7" />
      <path d="M12 14v7" />
      <path d="M16 14v7" />
      <path d="M12 3a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4z" />
    </svg>
  ),
  village: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 10 9 4l6 6v10H3Z" />
      <path d="M15 10l6-4v14h-6" />
      <path d="M9 20v-6h4v6" />
    </svg>
  ),
  instagram: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  mail: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  scale: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  ),
};

// Diccionario de correspondencia directa Emoji -> Nombre de icono y color corporativo
export const EMOJI_MAP = {
  '💼': { icon: 'briefcase', color: 'blue' },
  '📉': { icon: 'trending-down', color: 'red' },
  '📈': { icon: 'trending-up', color: 'blue' },
  '🏠': { icon: 'home', color: 'blue' },
  '🏡': { icon: 'home', color: 'blue' },
  '🚗': { icon: 'car', color: 'red' },
  '🏗️': { icon: 'construction', color: 'gold' },
  '📋': { icon: 'clipboard', color: 'blue' },
  '🏙️': { icon: 'building', color: 'blue' },
  '🏛️': { icon: 'building', color: 'blue' },
  '🏦': { icon: 'building', color: 'blue' },
  '⏱️': { icon: 'clock', color: 'red' },
  '🔒': { icon: 'lock', color: 'gold' },
  '✨': { icon: 'sparkles', color: 'gold' },
  '🛡️': { icon: 'shield', color: 'blue' },
  '🤝': { icon: 'handshake', color: 'blue' },
  '💬': { icon: 'chat', color: 'blue' },
  '🇨🇴': { icon: 'colombia', color: 'colombia' },
  '🧮': { icon: 'calculator', color: 'blue' },
  '📊': { icon: 'chart', color: 'blue' },
  '💡': { icon: 'lightbulb', color: 'gold' },
  '⚠️': { icon: 'alert', color: 'red' },
  '🔗': { icon: 'share', color: 'blue' },
  '💵': { icon: 'dollar', color: 'gold' },
  '🤖': { icon: 'bot', color: 'blue' },
  '🔍': { icon: 'search', color: 'blue' },
  '📖': { icon: 'book', color: 'blue' },
  '📚': { icon: 'book', color: 'blue' },
  '⭐': { icon: 'star', color: 'gold' },
  '✅': { icon: 'check', color: 'blue' },
  '✓': { icon: 'check', color: 'blue' },
  '❌': { icon: 'cross', color: 'red' },
  '📱': { icon: 'phone', color: 'blue' },
  '☀️': { icon: 'sun', color: 'gold' },
  '🌙': { icon: 'moon', color: 'blue' },
  '🎁': { icon: 'gift', color: 'red' },
  '📥': { icon: 'download', color: 'blue' },
  '🚀': { icon: 'rocket', color: 'red' },
  '📍': { icon: 'map-pin', color: 'red' },
  '📐': { icon: 'ruler', color: 'blue' },
  '🛏️': { icon: 'bed', color: 'blue' },
  '🚿': { icon: 'bath', color: 'blue' },
  '🌤️': { icon: 'balcony', color: 'gold' },
  '🏘️': { icon: 'village', color: 'blue' },
  '📸': { icon: 'instagram', color: 'red' },
  '✉️': { icon: 'mail', color: 'blue' },
  '⚖️': { icon: 'scale', color: 'gold' },
  '🧾': { icon: 'clipboard', color: 'blue' },
};

/**
 * Componente CorporateIcon
 */
export const CorporateIcon = ({
  name,
  size = 20,
  color = 'blue',
  className = '',
  style = {},
  ...props
}) => {
  // Si el name es un emoji, traducirlo
  let iconName = name;
  let chosenColor = color;

  if (EMOJI_MAP[name]) {
    iconName = EMOJI_MAP[name].icon;
    if (color === 'blue' && EMOJI_MAP[name].color) {
      chosenColor = EMOJI_MAP[name].color;
    }
  }

  const IconRenderer = SVG_ICONS[iconName] || SVG_ICONS['sparkles'];

  let colorClass = '';
  let inlineColor = '';

  if (chosenColor === 'blue') {
    colorClass = 'corp-icon-blue';
    inlineColor = CORP_COLORS.blue;
  } else if (chosenColor === 'blue-dark') {
    colorClass = 'corp-icon-blue-dark';
    inlineColor = CORP_COLORS.blueDark;
  } else if (chosenColor === 'red') {
    colorClass = 'corp-icon-red';
    inlineColor = CORP_COLORS.red;
  } else if (chosenColor === 'white') {
    colorClass = 'corp-icon-white';
    inlineColor = CORP_COLORS.white;
  } else if (chosenColor === 'gold') {
    colorClass = 'corp-icon-gold';
    inlineColor = CORP_COLORS.gold;
  } else if (chosenColor.startsWith('#') || chosenColor.startsWith('rgb')) {
    inlineColor = chosenColor;
  }

  if (iconName === 'colombia') {
    return <IconRenderer size={size} style={style} className={`corp-icon ${className}`} {...props} />;
  }

  return (
    <span
      className={`corp-icon ${colorClass} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        color: inlineColor,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    >
      <IconRenderer width={size} height={size} />
    </span>
  );
};

/**
 * Helper para renderizar strings reemplazando cualquier emoji conocido por su CorporateIcon
 */
export const renderCorporateText = (text, size = 18) => {
  if (typeof text !== 'string') return text;

  // Regex con todos los emojis conocidos
  const emojiPattern = /(💼|📉|📈|🏠|🏡|🚗|🏗️|📋|🏙️|🏛️|🏦|⏱️|🔒|✨|🛡️|🤝|💬|🇨🇴|🧮|📊|💡|⚠️|🔗|💵|🤖|🔍|📖|📚|⭐|✅|✓|❌|📱|☀️|🌙|🎁|📥|🚀|📍|📐|🛏️|🚿|🌤️|🏘️|📸|✉️|⚖️|🧾)/g;

  if (!emojiPattern.test(text)) return text;

  const parts = text.split(emojiPattern);

  return parts.map((part, index) => {
    if (EMOJI_MAP[part]) {
      return (
        <CorporateIcon
          key={index}
          name={part}
          size={size}
          style={{ verticalAlign: '-0.15em', margin: '0 3px' }}
        />
      );
    }
    return part;
  });
};

export default CorporateIcon;
