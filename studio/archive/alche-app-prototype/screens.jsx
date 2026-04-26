// Alche redesign — editorial longevity
// All screens live inside the iOS frame (402×874).
// Screens: home, alchemy, glowscan, protocol, hormonal, biosync, ritual

const { useState, useEffect, useRef } = React;

// ─────────────────────────────────────────────────────────────
// Tokens
// ─────────────────────────────────────────────────────────────
const T = {
  black: '#0d121b',
  muted: '#8d96a6',
  accent: '#c4cad6',
  primary: '#1152d4',
  bg: '#fcfcfd',
  warm: '#f6f6f8',
  white: '#ffffff',
  dark: '#0a0e15',
  surface: '#13182a',
  rose: '#fda4af',
  indigo: '#a5b4fc',
  sage: '#a7f3d0',
};
window.T = T;

const fDisplay = 'Newsreader, Georgia, serif';
const fBody = '"Noto Sans", -apple-system, system-ui, sans-serif';
const fMono = '"Space Mono", Menlo, monospace';
window.fDisplay = fDisplay; window.fBody = fBody; window.fMono = fMono;

// ─────────────────────────────────────────────────────────────
// Reusable atoms
// ─────────────────────────────────────────────────────────────
function Overline({ children, color = T.black, weight = 700, size = 10, tracking = '0.2em', style = {} }) {
  return <div style={{
    fontFamily: fMono, fontWeight: weight, fontSize: size,
    letterSpacing: tracking, textTransform: 'uppercase', color, ...style,
  }}>{children}</div>;
}
function Italic({ children, size = 34, weight = 400, color = T.black, style = {} }) {
  return <div style={{
    fontFamily: fDisplay, fontStyle: 'italic', fontWeight: weight,
    fontSize: size, lineHeight: 1.1, letterSpacing: '-0.01em', color, ...style,
  }}>{children}</div>;
}
function Mono({ children, size = 10, color = T.muted, style = {} }) {
  return <span style={{ fontFamily: fMono, fontSize: size, color, letterSpacing: '0.1em', ...style }}>{children}</span>;
}
function Body({ children, size = 13, color = T.black, style = {} }) {
  return <div style={{ fontFamily: fBody, fontSize: size, color, lineHeight: 1.5, ...style }}>{children}</div>;
}
function Rule({ color = 'rgba(13,18,27,0.1)', style = {} }) {
  return <div style={{ height: 1, background: color, width: '100%', ...style }} />;
}
Object.assign(window, { Overline, Italic, Mono, Body, Rule });

// ─────────────────────────────────────────────────────────────
// App header with back button (consistent across screens)
// ─────────────────────────────────────────────────────────────
function AppHeader({ onBack, center, right, dark = false, showBrand = true, title }) {
  const ink = dark ? 'rgba(255,255,255,0.95)' : T.black;
  const mute = dark ? 'rgba(255,255,255,0.6)' : T.muted;
  const btnBg = dark ? 'rgba(255,255,255,0.08)' : 'rgba(13,18,27,0.04)';
  const btnBorder = dark ? 'rgba(255,255,255,0.18)' : 'rgba(13,18,27,0.1)';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '58px 16px 12px', gap: 10, minHeight: 48,
    }}>
      <button
        onClick={onBack}
        aria-label={onBack ? 'Back' : 'Menu'}
        style={{
          width: 44, height: 44, borderRadius: 999,
          background: btnBg, border: `1px solid ${btnBorder}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: onBack ? 'pointer' : 'default', padding: 0, color: ink,
          opacity: onBack ? 1 : 0.55,
        }}
      >
        {onBack ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M8.5 2L3.5 7l5 5" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path d="M2 4h10M2 7h10M2 10h10" stroke={ink} strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        )}
      </button>

      <div style={{ flex: 1, textAlign: 'center', minWidth: 0 }}>
        {title ? (
          <div style={{
            fontFamily: fDisplay, fontStyle: 'italic', fontWeight: 400,
            fontSize: 18, color: ink, letterSpacing: '-0.01em',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>{title}</div>
        ) : showBrand ? (
          <div style={{
            fontFamily: fDisplay, fontStyle: 'italic', fontWeight: 300,
            fontSize: 22, color: ink, letterSpacing: '-0.01em',
          }}>alche</div>
        ) : null}
        {center && (
          <div style={{ marginTop: 3 }}>
            <Overline color={mute} size={9} tracking="0.22em" weight={700}>{center}</Overline>
          </div>
        )}
      </div>

      <div style={{
        minWidth: 44, height: 44, display: 'flex',
        alignItems: 'center', justifyContent: 'flex-end', gap: 6,
      }}>
        {right || <div style={{ width: 44 }}/>}
      </div>
    </div>
  );
}
window.AppHeader = AppHeader;

// Backwards-compat shim — BrandBar now renders AppHeader
function BrandBar({ right, center, dark = false, onBack }) {
  return <AppHeader onBack={onBack} center={center} right={right} dark={dark}/>;
}
window.BrandBar = BrandBar;

// ─────────────────────────────────────────────────────────────
// Tab bar (bottom)
// ─────────────────────────────────────────────────────────────
function TabBar({ value, onChange, items }) {
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      background: T.white, borderTop: '1px solid rgba(13,18,27,0.08)',
      paddingBottom: 24, paddingTop: 10, zIndex: 10,
      display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`,
    }}>
      {items.map((it, i) => {
        const active = it.key === value;
        return (
          <button
            key={it.key} onClick={() => onChange(it.key)}
            style={{
              background: 'none', border: 'none', padding: '6px 0 2px',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 4, cursor: 'pointer',
              color: active ? T.primary : T.muted,
              borderLeft: i ? '1px solid rgba(13,18,27,0.05)' : 'none',
            }}
          >
            <div style={{ height: 20, display: 'flex', alignItems: 'center' }}>{it.icon(active ? T.primary : T.muted)}</div>
            <Overline color={active ? T.primary : T.muted} size={8.5} tracking="0.22em" weight={700}>
              {it.label}
            </Overline>
          </button>
        );
      })}
    </div>
  );
}
window.TabBar = TabBar;

// ─────────────────────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────────────────────
const I = {
  drop: (c) => <svg width="18" height="20" viewBox="0 0 18 20" fill="none"><path d="M9 1.5C9 1.5 2 8 2 13a7 7 0 0014 0C16 8 9 1.5 9 1.5z" stroke={c} strokeWidth="1.3"/></svg>,
  check: (c) => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke={c} strokeWidth="1.3"/><path d="M5.5 9.2L8 11.7l4.5-5" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  user: (c) => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="6" r="3" stroke={c} strokeWidth="1.3"/><path d="M2.5 16c0-3.5 2.9-6 6.5-6s6.5 2.5 6.5 6" stroke={c} strokeWidth="1.3"/></svg>,
  scan: (c) => <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 6V3h3M14 3h3v3M17 14v3h-3M5 17H2v-3" stroke={c} strokeWidth="1.3" strokeLinecap="round"/><rect x="6" y="6" width="8" height="8" stroke={c} strokeWidth="1.3"/></svg>,
  home: (c) => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2.5 8L9 2.5 15.5 8v7.5h-5V11h-3v4.5h-5V8z" stroke={c} strokeWidth="1.3" strokeLinejoin="round"/></svg>,
  chart: (c) => <svg width="20" height="18" viewBox="0 0 20 18" fill="none"><path d="M2 14l4-5 3 3 5-7 4 5" stroke={c} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  cal: (c) => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="3.5" width="14" height="12" stroke={c} strokeWidth="1.3"/><path d="M2 7h14M6 2v3M12 2v3" stroke={c} strokeWidth="1.3"/></svg>,
  arrow: (c) => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke={c} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  back: (c) => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12 7H2M6 3L2 7l4 4" stroke={c} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  plus: (c) => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  settings: (c) => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="2" stroke={c} strokeWidth="1.3"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.5 1.5M11.5 11.5L13 13M3 13l1.5-1.5M11.5 4.5L13 3" stroke={c} strokeWidth="1.3" strokeLinecap="round"/></svg>,
};
window.I = I;

// Tab items for app
const TAB_ITEMS = [
  { key: 'home', label: 'Home', icon: I.home },
  { key: 'alchemy', label: 'Protocols', icon: I.drop },
  { key: 'scan', label: 'Scan', icon: I.scan },
  { key: 'cycle', label: 'Cycle', icon: I.chart },
  { key: 'me', label: 'Me', icon: I.user },
];
window.TAB_ITEMS = TAB_ITEMS;
