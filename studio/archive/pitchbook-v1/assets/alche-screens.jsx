import { useState, useEffect, useCallback } from "react";

// ═══════════════════════════════════════════════════════
// ALCHE — visionOS Liquid Glass Material System
// ═══════════════════════════════════════════════════════

const C = {
  cream: "#F5F0E8", deep: "#2C2418", amber: "#C4956A",
  sage: "#8B9E7C", terra: "#B86B4A", rose: "#C47A8A",
  stone: "#9E948A", ink: "#1A1610", gold: "#D4A853",
  parchment: "#FAF7F0", obsidian: "#1C1814", warm: "#FDFBF7",
};

/*
  Apple's visionOS glass has 3 defining traits:
  1. Multi-pass blur (40-80px) + saturation boost + brightness shift
  2. Specular edge highlight — a 0.5-1px top-edge white line that mimics light refraction
  3. Ambient color bleed — shadows pick up tint from the content behind them
  We simulate all three below.
*/

const material = {
  thin: {
    background: "rgba(255,253,247,0.38)",
    backdropFilter: "blur(60px) saturate(1.9) brightness(1.05)",
    WebkitBackdropFilter: "blur(60px) saturate(1.9) brightness(1.05)",
    border: "0.5px solid rgba(255,255,255,0.5)",
    boxShadow: `
      0 0.5px 0 0 rgba(255,255,255,0.65) inset,
      0 -0.5px 0 0 rgba(44,36,24,0.02) inset,
      0 2px 8px rgba(44,36,24,0.03)
    `,
  },
  regular: {
    background: "rgba(255,253,247,0.52)",
    backdropFilter: "blur(72px) saturate(2) brightness(1.08)",
    WebkitBackdropFilter: "blur(72px) saturate(2) brightness(1.08)",
    border: "0.5px solid rgba(255,255,255,0.6)",
    boxShadow: `
      0 0.5px 0 0 rgba(255,255,255,0.75) inset,
      0 -0.5px 0 0 rgba(44,36,24,0.02) inset,
      0 2px 12px rgba(44,36,24,0.04),
      0 8px 24px rgba(44,36,24,0.03)
    `,
  },
  thick: {
    background: "rgba(255,253,247,0.68)",
    backdropFilter: "blur(80px) saturate(2.2) brightness(1.12)",
    WebkitBackdropFilter: "blur(80px) saturate(2.2) brightness(1.12)",
    border: "0.5px solid rgba(255,255,255,0.72)",
    boxShadow: `
      0 1px 0 0 rgba(255,255,255,0.85) inset,
      0 -0.5px 0 0 rgba(44,36,24,0.02) inset,
      0 4px 16px rgba(44,36,24,0.05),
      0 12px 40px rgba(44,36,24,0.04)
    `,
  },
  dark: {
    background: "rgba(28,24,20,0.52)",
    backdropFilter: "blur(72px) saturate(1.8) brightness(0.95)",
    WebkitBackdropFilter: "blur(72px) saturate(1.8) brightness(0.95)",
    border: "0.5px solid rgba(255,255,255,0.06)",
    boxShadow: `
      0 0.5px 0 0 rgba(255,255,255,0.05) inset,
      0 -0.5px 0 0 rgba(0,0,0,0.1) inset,
      0 2px 12px rgba(0,0,0,0.12)
    `,
    color: C.cream,
  },
  darkThick: {
    background: "rgba(28,24,20,0.65)",
    backdropFilter: "blur(80px) saturate(2) brightness(0.92)",
    WebkitBackdropFilter: "blur(80px) saturate(2) brightness(0.92)",
    border: "0.5px solid rgba(255,255,255,0.08)",
    boxShadow: `
      0 1px 0 0 rgba(255,255,255,0.06) inset,
      0 -0.5px 0 0 rgba(0,0,0,0.15) inset,
      0 4px 16px rgba(0,0,0,0.15),
      0 12px 40px rgba(0,0,0,0.08)
    `,
    color: C.cream,
  },
};

// ═══════════════════════════════════════════════════════
// GLASS CARD — the core primitive
// ═══════════════════════════════════════════════════════

function G({ children, style = {}, v = "regular", onClick }) {
  return (
    <div onClick={onClick} style={{
      borderRadius: 20, padding: "14px 16px",
      transition: "all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      position: "relative", overflow: "hidden",
      ...material[v], ...style,
    }}>
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// SHARED UI
// ═══════════════════════════════════════════════════════

function StatusBar({ dark }) {
  const c = dark ? "rgba(245,240,232,0.5)" : "rgba(44,36,24,0.4)";
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 22px 6px", fontSize: 11, fontWeight: 600, color: c, letterSpacing: 0.2, fontFeatureSettings: "'tnum'" }}>
      <span>9:41</span>
      <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
        <rect x="0.5" y="0.5" width="12" height="8.5" rx="1.5" stroke={c} strokeWidth="1"/>
        <rect x="2" y="2" width="6.5" height="5" rx="0.5" fill={c}/>
        <rect x="13.2" y="3" width="1.8" height="3" rx="0.75" fill={c}/>
      </svg>
    </div>
  );
}

function TabBar({ active = "home", dark }) {
  const tabs = [
    { id: "home", d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" },
    { id: "book", d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" },
    { id: "shop", d: "M5 3l3.5 14h7L19 3M8.5 17a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" },
    { id: "track", d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m14 0v-10a2 2 0 00-2-2h-2a2 2 0 00-2 2v10m0 0H9" },
    { id: "you", d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  ];
  return (
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "space-around",
      padding: "7px 0 20px",
      background: dark ? "rgba(28,24,20,0.7)" : "rgba(255,253,247,0.75)",
      backdropFilter: "blur(48px) saturate(1.8)", WebkitBackdropFilter: "blur(48px) saturate(1.8)",
      borderTop: dark ? "0.5px solid rgba(255,255,255,0.04)" : "0.5px solid rgba(196,149,106,0.06)",
      boxShadow: dark ? "0 -0.5px 0 rgba(255,255,255,0.03) inset" : "0 -0.5px 0 rgba(255,255,255,0.5) inset, 0 0.5px 0 rgba(255,255,255,0.6) inset",
    }}>
      {tabs.map(t => {
        const on = t.id === active;
        const col = on ? C.amber : (dark ? "rgba(245,240,232,0.22)" : "rgba(158,148,138,0.4)");
        return (
          <div key={t.id} style={{ textAlign: "center" }}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={col} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={t.d}/></svg>
          </div>
        );
      })}
    </div>
  );
}

function Pill({ children, on, color = C.amber, style = {} }) {
  return (
    <span style={{
      display: "inline-block", padding: "5px 12px", borderRadius: 20,
      fontSize: 9, fontWeight: 600, letterSpacing: 0.3, whiteSpace: "nowrap",
      ...material[on ? "thick" : "thin"],
      background: on ? `${color}` : material.thin.background,
      color: on ? "#fff" : C.stone,
      border: on ? `0.5px solid ${color}` : material.thin.border,
      boxShadow: on ? `0 3px 12px ${color}28, 0 0.5px 0 rgba(255,255,255,0.3) inset` : material.thin.boxShadow,
      transition: "all 0.3s ease", ...style,
    }}>{children}</span>
  );
}

function Label({ children, color = C.amber, style = {} }) {
  return <div style={{ fontSize: 8, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700, color, ...style }}>{children}</div>;
}

function AppLogo({ dark }) {
  return (
    <div style={{ textAlign: "center", padding: "2px 0 6px" }}>
      <span style={{
        fontFamily: serif, fontSize: dark ? 15 : 13, fontWeight: 400, letterSpacing: dark ? 4 : 3.5, textTransform: "uppercase",
        color: dark ? "rgba(245,240,232,0.6)" : "rgba(44,36,24,0.35)",
      }}>Alche</span>
    </div>
  );
}

function Bg({ dark, children }) {
  return (
    <div style={{
      minHeight: "100%", position: "relative", overflow: "hidden",
      background: dark
        ? `linear-gradient(170deg, #1F1A14 0%, ${C.obsidian} 50%, #141210 100%)`
        : `linear-gradient(170deg, #FEFCF9 0%, ${C.parchment} 40%, ${C.cream} 100%)`,
    }}>
      {/* ambient mesh — subtle colored orbs that glass cards pick up via backdrop-filter */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: dark
          ? `radial-gradient(ellipse 140% 70% at 20% 25%, rgba(196,149,106,0.06) 0%, transparent 55%),
             radial-gradient(ellipse 100% 50% at 85% 70%, rgba(139,158,124,0.04) 0%, transparent 45%),
             radial-gradient(ellipse 60% 30% at 55% 95%, rgba(196,122,138,0.03) 0%, transparent 35%)`
          : `radial-gradient(ellipse 140% 70% at 20% 15%, rgba(196,149,106,0.09) 0%, transparent 50%),
             radial-gradient(ellipse 100% 50% at 85% 60%, rgba(139,158,124,0.07) 0%, transparent 45%),
             radial-gradient(ellipse 80% 35% at 45% 90%, rgba(196,122,138,0.05) 0%, transparent 35%),
             radial-gradient(ellipse 50% 25% at 65% 35%, rgba(212,168,83,0.04) 0%, transparent 30%)`,
      }}/>
      {children}
    </div>
  );
}

// serif shorthand
const serif = "'Cormorant Garamond',serif";

// ═══════════════════════════════════════════════════════
// SCREEN 01: HOME
// ═══════════════════════════════════════════════════════
function S01() {
  return (
    <Bg>
      <StatusBar/><AppLogo/>
      <div style={{ padding: "10px 20px 84px", position: "relative" }}>
        <Label>GOOD MORNING</Label>
        <div style={{ fontFamily: serif, fontSize: 27, fontWeight: 300, color: C.deep, lineHeight: 1.1, margin: "4px 0 16px" }}>
          Your longevity,<br/><strong style={{ fontWeight: 600 }}>daily.</strong>
        </div>
        <G v="thick" style={{ marginBottom: 10, padding: "16px 18px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <Label color={C.sage}>TODAY'S PROTOCOL</Label>
            <span style={{ fontSize: 9, color: C.stone, fontWeight: 500 }}>Day 12 / 66</span>
          </div>
          <div style={{ display: "flex", gap: 7 }}>
            {[
              { ic: "\u2600", label: "LED Glow", sub: "14:00", done: false },
              { ic: "\u2726", label: "Potion N\u00B01", sub: "Ready", done: true },
              { ic: "\u00B7\u00B7\u00B7", label: "Magnesium", sub: "Evening", done: false },
            ].map((t, i) => (
              <G key={i} v={t.done ? "regular" : "thin"} style={{
                flex: 1, textAlign: "center", padding: "11px 4px", borderRadius: 16,
                background: t.done ? "rgba(139,158,124,0.08)" : material.thin.background,
                border: t.done ? "0.5px solid rgba(139,158,124,0.18)" : material.thin.border,
              }}>
                <div style={{ fontSize: 15, marginBottom: 2, opacity: t.done ? 1 : 0.65 }}>{t.ic}</div>
                <div style={{ fontSize: 9, fontWeight: 600, color: C.deep }}>{t.label}</div>
                <div style={{ fontSize: 7.5, color: t.done ? C.sage : C.stone, fontWeight: 500 }}>{t.sub}</div>
              </G>
            ))}
          </div>
          <div style={{ marginTop: 10, height: 3, borderRadius: 2, background: "rgba(196,149,106,0.06)" }}>
            <div style={{ width: "33%", height: "100%", borderRadius: 2, background: `linear-gradient(90deg, ${C.sage}, ${C.amber})`, boxShadow: `0 0 10px ${C.sage}25` }}/>
          </div>
        </G>

        <G v="regular" style={{ marginBottom: 10, background: "linear-gradient(135deg, rgba(196,149,106,0.06), rgba(184,107,74,0.03))", border: "0.5px solid rgba(196,149,106,0.15)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <Label>UPCOMING</Label>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: C.deep, marginTop: 3 }}>LED Glow Session</div>
              <div style={{ fontSize: 10.5, color: C.stone, marginTop: 1 }}>Today, 14:00 · Seat 3 · Mitte</div>
            </div>
            <div style={{ width: 42, height: 42, borderRadius: 14, background: `linear-gradient(135deg, ${C.amber}, ${C.terra})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 18, boxShadow: `0 4px 16px ${C.amber}28, 0 1px 0 rgba(255,255,255,0.2) inset` }}>{"\u2600"}</div>
          </div>
        </G>

        <div style={{ display: "flex", gap: 7, marginBottom: 10 }}>
          {[{ v: "7", l: "STREAK", c: C.amber }, { v: "3", l: "CREDITS", c: C.sage }, { v: "Pro", l: "TIER", c: C.terra }].map((s, i) => (
            <G key={i} style={{ flex: 1, textAlign: "center", padding: "12px 6px" }}>
              <div style={{ fontFamily: serif, fontSize: 26, fontWeight: 300, color: s.c }}>{s.v}</div>
              <div style={{ fontSize: 7, letterSpacing: 1.2, textTransform: "uppercase", fontWeight: 700, color: s.c, opacity: 0.65 }}>{s.l}</div>
            </G>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
          {[
            { ic: "\u2600", l: "Book Session", c: C.amber },
            { ic: "\u2726", l: "Order Potion", c: C.sage },
            { ic: "\u25C9", l: "Track Data", c: C.terra },
            { ic: "\u2662", l: "Events", c: C.rose },
          ].map((a, i) => (
            <G key={i} style={{ textAlign: "center", padding: "14px 8px" }}>
              <div style={{ fontSize: 18, color: a.c, marginBottom: 3, filter: `drop-shadow(0 2px 6px ${a.c}18)` }}>{a.ic}</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: C.deep }}>{a.l}</div>
            </G>
          ))}
        </div>
      </div>
      <TabBar active="home"/>
    </Bg>
  );
}

// ═══════════════════════════════════════════════════════
// SCREEN 02: ONBOARDING
// ═══════════════════════════════════════════════════════
function S02() {
  const [sel, setSel] = useState("glow");
  const goals = [
    { id: "glow", ic: "\u2728", l: "Glow", d: "Radiant skin, collagen, red light", c: C.amber },
    { id: "energy", ic: "\u26A1", l: "Energy", d: "Metabolism, movement, vitality", c: C.terra },
    { id: "calm", ic: "\u25CE", l: "Calm", d: "Sleep, stress, breathwork", c: C.sage },
    { id: "gut", ic: "\u2736", l: "Gut", d: "Microbiome, digestion, nutrition", c: C.rose },
    { id: "recovery", ic: "\u2615", l: "Recovery", d: "Infrared, inflammation, repair", c: "#8B7E9E" },
  ];
  return (
    <Bg>
      <StatusBar/><AppLogo/>
      <div style={{ padding: "16px 20px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <Label style={{ marginBottom: 6 }}>WELCOME TO ALCHE</Label>
          <div style={{ fontFamily: serif, fontSize: 24, fontWeight: 300, color: C.deep, lineHeight: 1.2 }}>
            What matters most<br/><strong>to you right now?</strong>
          </div>
          <div style={{ fontSize: 10.5, color: C.stone, marginTop: 6 }}>One tap. Everything aligns.</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {goals.map(g => {
            const on = sel === g.id;
            return (
              <G key={g.id} v={on ? "thick" : "thin"} onClick={() => setSel(g.id)} style={{
                padding: "13px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12,
                border: on ? `0.5px solid ${g.c}45` : material.thin.border,
                boxShadow: on ? `${material.thick.boxShadow}, 0 0 20px ${g.c}08` : material.thin.boxShadow,
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 14, flexShrink: 0,
                  background: on ? `linear-gradient(135deg, ${g.c}14, ${g.c}06)` : "rgba(196,149,106,0.02)",
                  border: `0.5px solid ${on ? g.c + "20" : "rgba(196,149,106,0.04)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17,
                }}>{g.ic}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.deep }}>{g.l}</div>
                  <div style={{ fontSize: 9.5, color: C.stone }}>{g.d}</div>
                </div>
                <div style={{
                  width: 18, height: 18, borderRadius: 9, flexShrink: 0,
                  border: on ? `2px solid ${g.c}` : "1.5px solid rgba(196,149,106,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {on && <div style={{ width: 9, height: 9, borderRadius: 5, background: g.c, boxShadow: `0 0 8px ${g.c}35` }}/>}
                </div>
              </G>
            );
          })}
        </div>
        <div style={{ marginTop: 18, padding: "13px 20px", borderRadius: 18, background: `linear-gradient(135deg, ${C.amber}, ${C.terra})`, textAlign: "center", color: "#fff", fontSize: 12.5, fontWeight: 600, letterSpacing: 0.5, boxShadow: `0 6px 24px ${C.amber}28, 0 1px 0 rgba(255,255,255,0.15) inset` }}>Continue</div>
      </div>
    </Bg>
  );
}

// ═══════════════════════════════════════════════════════
// SCREEN 03: LED BOOKING
// ═══════════════════════════════════════════════════════
function S03() {
  const [slot, setSlot] = useState(2);
  const slots = ["10:00", "10:20", "14:00", "14:20", "16:00", "16:20", "18:00"];
  return (
    <Bg>
      <StatusBar/><AppLogo/>
      <div style={{ padding: "10px 20px 84px" }}>
        <Label>BOOK SESSION</Label>
        <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 300, color: C.deep, margin: "4px 0 14px" }}>LED <strong>Glow Session</strong></div>
        <div style={{ display: "flex", gap: 7, marginBottom: 14 }}>
          <G v="thick" style={{ flex: 1, textAlign: "center", padding: "13px", border: `0.5px solid ${C.amber}35` }}>
            <div style={{ fontSize: 15, color: C.amber, marginBottom: 2 }}>{"\u2600"}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.deep }}>Glow</div>
            <div style={{ fontSize: 8.5, color: C.stone }}>633nm Red</div>
          </G>
          <G v="thin" style={{ flex: 1, textAlign: "center", padding: "13px" }}>
            <div style={{ fontSize: 15, color: C.stone, marginBottom: 2 }}>{"\u2615"}</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: C.stone }}>Recovery</div>
            <div style={{ fontSize: 8.5, color: C.stone, opacity: 0.5 }}>850nm NIR</div>
          </G>
        </div>

        <G style={{ marginBottom: 12 }}>
          <Label color={C.stone} style={{ marginBottom: 8 }}>TODAY · FEB 20</Label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {slots.map((s, i) => {
              const past = i < 2, on = i === slot;
              return (
                <div key={i} onClick={() => !past && setSlot(i)} style={{
                  padding: "7px 11px", borderRadius: 12, fontSize: 10.5, fontWeight: 600,
                  background: on ? C.amber : "rgba(255,253,247,0.35)",
                  color: on ? "#fff" : (past ? "rgba(158,148,138,0.3)" : C.deep),
                  border: `0.5px solid ${on ? C.amber : "rgba(196,149,106,0.06)"}`,
                  textDecoration: past ? "line-through" : "none",
                  cursor: past ? "not-allowed" : "pointer",
                  boxShadow: on ? `0 3px 12px ${C.amber}28, 0 0.5px 0 rgba(255,255,255,0.2) inset` : "0 0.5px 0 rgba(255,255,255,0.4) inset",
                  backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                }}>{s}</div>
              );
            })}
          </div>
        </G>

        <G style={{ marginBottom: 12 }}>
          <Label color={C.stone} style={{ marginBottom: 8 }}>SEAT AVAILABILITY</Label>
          <div style={{ display: "flex", gap: 6, justifyContent: "center" }}>
            {[1,2,3,4,5,6].map(s => {
              const sel = s === 3, taken = s <= 2;
              return (
                <div key={s} style={{
                  width: 34, height: 34, borderRadius: 11,
                  background: sel ? `linear-gradient(135deg, ${C.amber}, ${C.terra})` : (taken ? "rgba(196,149,106,0.08)" : "rgba(255,253,247,0.35)"),
                  border: sel ? "none" : `0.5px solid rgba(196,149,106,${taken ? "0.04" : "0.06"})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: sel ? "#fff" : (taken ? "rgba(158,148,138,0.3)" : C.deep),
                  fontSize: 11, fontWeight: 600,
                  boxShadow: sel ? `0 3px 12px ${C.amber}28, 0 0.5px 0 rgba(255,255,255,0.2) inset` : "0 0.5px 0 rgba(255,255,255,0.35) inset",
                  backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                }}>{s}</div>
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 6, fontSize: 7.5, color: C.stone }}>
            <span>{"\u25CF"} Booked</span><span style={{ color: C.amber }}>{"\u25CF"} Selected</span><span>{"\u25CB"} Open</span>
          </div>
        </G>

        <G style={{ padding: "12px 16px", background: "rgba(139,158,124,0.04)", border: "0.5px solid rgba(139,158,124,0.1)" }}>
          <Label color={C.sage} style={{ marginBottom: 5 }}>PAIR WITH A POTION?</Label>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: "linear-gradient(135deg, rgba(196,149,106,0.1), rgba(139,158,124,0.06))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>{"\u2726"}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: C.deep }}>N{"\u00B0"}1 + Glow Boost</div>
              <div style={{ fontSize: 9, color: C.stone }}>Recommended for Glow</div>
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.amber }}>{"\u20AC"}13</span>
          </div>
        </G>

        <div style={{ marginTop: 14, padding: "13px 20px", borderRadius: 18, background: `linear-gradient(135deg, ${C.amber}, ${C.terra})`, textAlign: "center", color: "#fff", fontSize: 12.5, fontWeight: 600, boxShadow: `0 6px 24px ${C.amber}25, 0 1px 0 rgba(255,255,255,0.15) inset` }}>Confirm · 14:00 · Seat 3</div>
      </div>
      <TabBar active="book"/>
    </Bg>
  );
}

// ═══════════════════════════════════════════════════════
// SCREEN 04: POTION MENU
// ═══════════════════════════════════════════════════════
function S04() {
  const potions = [
    { n: "N\u00B01", name: "Golden Glow", desc: "Mango, turmeric, collagen, MCT", p: "\u20AC9", tag: "GLOW", tc: C.amber },
    { n: "N\u00B02", name: "Berry Blaze", desc: "Blueberry, acai, creatine, lion's mane", p: "\u20AC10", tag: "ENERGY", tc: C.terra },
    { n: "N\u00B03", name: "Deep Calm", desc: "Banana, ashwagandha, magnesium, cacao", p: "\u20AC9", tag: "CALM", tc: C.sage },
    { n: "N\u00B04", name: "Gut Reset", desc: "Kefir, ginger, prebiotic fiber, aloe", p: "\u20AC11", tag: "GUT", tc: C.rose },
    { n: "N\u00B05", name: "Night Repair", desc: "Cherry, glycine, tart cherry, zinc", p: "\u20AC10", tag: "RECOVERY", tc: "#8B7E9E" },
  ];
  return (
    <Bg>
      <StatusBar/><AppLogo/>
      <div style={{ padding: "10px 20px 84px" }}>
        <Label>ALCHE POTIONS</Label>
        <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 300, color: C.deep, margin: "4px 0 12px" }}>Your daily <strong>ritual.</strong></div>
        <div style={{ display: "flex", gap: 5, marginBottom: 12, overflowX: "auto" }}>
          {["All", "Glow", "Energy", "Calm", "Gut", "Recovery"].map((f, i) => <Pill key={f} on={i === 0}>{f}</Pill>)}
        </div>
        {potions.map((p, i) => (
          <G key={i} style={{ marginBottom: 7, padding: "12px 14px", display: "flex", alignItems: "center", gap: 11 }}>
            <div style={{ width: 42, height: 42, borderRadius: 14, background: `linear-gradient(135deg, ${p.tc}10, ${p.tc}05)`, border: `0.5px solid ${p.tc}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0 }}>{"\u2726"}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: C.deep }}>Potion {p.n}</span>
                <span style={{ fontSize: 7, letterSpacing: 0.8, fontWeight: 700, color: p.tc, background: `${p.tc}0A`, padding: "2px 5px", borderRadius: 5, textTransform: "uppercase" }}>{p.tag}</span>
              </div>
              <div style={{ fontSize: 10.5, fontWeight: 500, color: C.deep, marginTop: 1 }}>{p.name}</div>
              <div style={{ fontSize: 8.5, color: C.stone }}>{p.desc}</div>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.deep, flexShrink: 0 }}>{p.p}</div>
          </G>
        ))}
        <G style={{ marginTop: 6 }}>
          <Label style={{ marginBottom: 5 }}>FUNCTIONAL BOOSTS +{"\u20AC"}2</Label>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {["Collagen \u2728", "Creatine \u26A1", "Ashwagandha \u25CE", "Prebiotic \u2736", "Magnesium \u2615"].map(b => <Pill key={b} style={{ fontSize: 8.5, padding: "4px 10px" }}>{b}</Pill>)}
          </div>
        </G>
      </div>
      <TabBar active="shop"/>
    </Bg>
  );
}

// ═══════════════════════════════════════════════════════
// SCREEN 05: SESSION ACTIVE
// ═══════════════════════════════════════════════════════
function S05() {
  return (
    <Bg dark>
      <StatusBar dark/><AppLogo dark/>
      <div style={{ padding: "10px 20px 84px" }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <Label>SESSION ACTIVE</Label>
          <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 300, color: C.cream, marginTop: 5 }}>LED <strong>Glow Session</strong></div>
        </div>
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <div style={{ position: "relative", width: 140, height: 140, margin: "0 auto" }}>
            {[140, 114, 88].map((s, i) => (
              <div key={i} style={{
                position: "absolute", top: (140-s)/2, left: (140-s)/2, width: s, height: s, borderRadius: "50%",
                border: `0.5px solid rgba(196,149,106,${0.06 + i*0.05})`,
                animation: `pulse${i} ${2+i*0.5}s ease-in-out infinite`,
              }}/>
            ))}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
              <div style={{ fontFamily: serif, fontSize: 38, fontWeight: 300, color: C.amber, textShadow: `0 0 24px ${C.amber}18` }}>12:34</div>
              <div style={{ fontSize: 7, letterSpacing: 2, textTransform: "uppercase", color: "rgba(245,240,232,0.3)" }}>REMAINING</div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 7, marginBottom: 14 }}>
          {[{ v: "633", l: "NM", c: C.amber }, { v: "7", l: "STREAK", c: C.sage }, { v: "3", l: "SEAT", c: C.rose }].map((s, i) => (
            <G key={i} v="dark" style={{ flex: 1, textAlign: "center", padding: "11px 6px" }}>
              <div style={{ fontSize: 18, fontWeight: 300, color: s.c, fontFamily: serif }}>{s.v}</div>
              <div style={{ fontSize: 7, letterSpacing: 1.2, textTransform: "uppercase", color: "rgba(245,240,232,0.25)" }}>{s.l}</div>
            </G>
          ))}
        </div>
        <G v="dark" style={{ marginBottom: 10 }}>
          <Label style={{ marginBottom: 4 }}>POTION READY</Label>
          <div style={{ fontSize: 11.5, color: C.cream }}>N{"\u00B0"}1 · Golden Glow + Collagen</div>
          <div style={{ fontSize: 9, color: "rgba(245,240,232,0.3)", marginTop: 1 }}>Waiting at the bar</div>
        </G>
        <G v="dark">
          <div style={{ fontSize: 7, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, color: "rgba(245,240,232,0.25)", marginBottom: 7 }}>POST-SESSION</div>
          <div style={{ fontSize: 11, color: C.cream, marginBottom: 8 }}>How do you feel?</div>
          <div style={{ display: "flex", gap: 6, justifyContent: "center" }}>
            {["\u2728 Glowing", "\u26A1 Energized", "\u25CE Relaxed", "\u2764 Great"].map(m => (
              <div key={m} style={{
                padding: "5px 9px", borderRadius: 10, fontSize: 8, fontWeight: 600,
                background: "rgba(245,240,232,0.03)", border: "0.5px solid rgba(245,240,232,0.05)",
                color: "rgba(245,240,232,0.4)", backdropFilter: "blur(8px)",
              }}>{m}</div>
            ))}
          </div>
        </G>
      </div>
      <TabBar active="book" dark/>
      <style>{`
        @keyframes pulse0{0%,100%{opacity:.2}50%{opacity:.45}}
        @keyframes pulse1{0%,100%{opacity:.15}50%{opacity:.35}}
        @keyframes pulse2{0%,100%{opacity:.1}50%{opacity:.3}}
      `}</style>
    </Bg>
  );
}

// ═══════════════════════════════════════════════════════
// SCREEN 06: SHOP
// ═══════════════════════════════════════════════════════
function S06() {
  return (
    <Bg>
      <StatusBar/><AppLogo/>
      <div style={{ padding: "10px 20px 84px" }}>
        <Label>SHOP</Label>
        <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 300, color: C.deep, margin: "4px 0 12px" }}>Shop by <strong>outcome.</strong></div>
        <div style={{ display: "flex", gap: 5, marginBottom: 12 }}>
          {[{ l: "\u2728 Glow", c: C.amber }, { l: "\u26A1 Energy", c: C.terra }, { l: "\u25CE Calm", c: C.sage }, { l: "\u2736 Gut", c: C.rose }].map((o, i) => <Pill key={o.l} on={i===0} color={o.c} style={{ fontSize: 8.5 }}>{o.l}</Pill>)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
          {[
            { n: "Glow Blend", s: "300g pouch", p: "\u20AC29", t: "OWN BRAND" },
            { n: "Collagen", s: "Marine, 250g", p: "\u20AC35", t: "CURATED" },
            { n: "Red Light Serum", s: "30ml dropper", p: "\u20AC24", t: "OWN BRAND" },
            { n: "Vitamin D3+K2", s: "90 capsules", p: "\u20AC18", t: "CURATED" },
          ].map((p, i) => (
            <G key={i} style={{ padding: "11px", textAlign: "center" }}>
              <div style={{ width: "100%", height: 60, borderRadius: 14, background: `linear-gradient(135deg, ${C.amber}06, ${C.sage}04)`, marginBottom: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, border: "0.5px solid rgba(196,149,106,0.04)" }}>{"\u2726"}</div>
              <div style={{ fontSize: 7, letterSpacing: 0.8, textTransform: "uppercase", fontWeight: 700, color: C.amber }}>{p.t}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: C.deep, marginTop: 2 }}>{p.n}</div>
              <div style={{ fontSize: 8.5, color: C.stone }}>{p.s}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.deep, marginTop: 3 }}>{p.p}</div>
            </G>
          ))}
        </div>
        <G style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 10, border: "0.5px dashed rgba(196,149,106,0.18)" }}>
          <div style={{ fontSize: 15, color: C.amber }}>{"\u21BB"}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: C.deep }}>Same as last time?</div>
            <div style={{ fontSize: 9, color: C.stone }}>Glow Blend + Collagen · {"\u20AC"}64</div>
          </div>
          <div style={{ padding: "6px 12px", borderRadius: 11, background: C.amber, color: "#fff", fontSize: 9.5, fontWeight: 600, boxShadow: `0 3px 10px ${C.amber}22, 0 0.5px 0 rgba(255,255,255,0.15) inset` }}>Reorder</div>
        </G>
      </div>
      <TabBar active="shop"/>
    </Bg>
  );
}

// ═══════════════════════════════════════════════════════
// SCREEN 07: EVENTS
// ═══════════════════════════════════════════════════════
function S07() {
  return (
    <Bg>
      <StatusBar/><AppLogo/>
      <div style={{ padding: "10px 20px 84px" }}>
        <Label color={C.rose}>COMMUNITY</Label>
        <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 300, color: C.deep, margin: "4px 0 12px" }}>Events & <strong>Community</strong></div>
        <G v="thick" style={{ marginBottom: 9, padding: "15px", background: "linear-gradient(135deg, rgba(196,122,138,0.05), rgba(196,149,106,0.03))", border: "0.5px solid rgba(196,122,138,0.12)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <Label color={C.rose} style={{ fontSize: 7 }}>THIS SATURDAY</Label>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.deep, marginTop: 3 }}>Alche Salon: Sleep Science</div>
              <div style={{ fontSize: 10, color: C.stone, marginTop: 2 }}>Dr. Maria Kessler · 19:00 · Mitte</div>
              <div style={{ fontSize: 9, color: C.stone, marginTop: 3 }}>24/30 spots · {"\u20AC"}15 · Free for Premium</div>
            </div>
            <div style={{ padding: "7px 13px", borderRadius: 12, background: C.rose, color: "#fff", fontSize: 9.5, fontWeight: 600, boxShadow: `0 3px 12px ${C.rose}22, 0 0.5px 0 rgba(255,255,255,0.15) inset`, flexShrink: 0 }}>RSVP</div>
          </div>
        </G>
        <G style={{ marginBottom: 9, padding: "12px 15px" }}>
          <Label color={C.stone} style={{ fontSize: 7 }}>FEB 28</Label>
          <div style={{ fontSize: 12, fontWeight: 600, color: C.deep, marginTop: 2 }}>Longevity Lab: Blood Panels 101</div>
          <div style={{ fontSize: 9.5, color: C.stone }}>Workshop · 18:30 · {"\u20AC"}20</div>
        </G>
        <Label color={C.stone} style={{ marginTop: 14, marginBottom: 7 }}>MEMBER FEED</Label>
        {[
          { n: "Lina M.", a: "completed 14-day Glow journey", t: "2h", b: "\u2728" },
          { n: "Tom R.", a: "hit a 30-day streak", t: "5h", b: "\u26A1" },
          { n: "Sarah K.", a: "attended Alche Salon", t: "1d", b: "\u2662" },
        ].map((m, i) => (
          <G key={i} v="thin" style={{ marginBottom: 5, padding: "9px 12px", display: "flex", alignItems: "center", gap: 9 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(196,149,106,0.05)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, flexShrink: 0, border: "0.5px solid rgba(196,149,106,0.05)" }}>{m.b}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: C.deep }}><strong>{m.n}</strong> {m.a}</div>
              <div style={{ fontSize: 8, color: C.stone }}>{m.t} ago</div>
            </div>
          </G>
        ))}
      </div>
      <TabBar active="you"/>
    </Bg>
  );
}

// ═══════════════════════════════════════════════════════
// SCREEN 08: MEMBERSHIP
// ═══════════════════════════════════════════════════════
function S08() {
  return (
    <Bg>
      <StatusBar/><AppLogo/>
      <div style={{ padding: "10px 20px 84px" }}>
        <Label>MEMBERSHIP</Label>
        <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 300, color: C.deep, margin: "4px 0 14px" }}>Pro <strong>Member</strong></div>
        <G v="thick" style={{ marginBottom: 10, padding: "16px", background: "linear-gradient(135deg, rgba(196,149,106,0.06), rgba(184,107,74,0.03))", border: "0.5px solid rgba(196,149,106,0.15)" }}>
          <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
            {[{ n: "3", l: "SMOOTHIES" }, { n: "2", l: "LED" }, { n: "1", l: "EVENT" }].map((c, i) => (
              <div key={i}>
                <div style={{ fontFamily: serif, fontSize: 26, fontWeight: 300, color: C.deep }}>{c.n}</div>
                <div style={{ fontSize: 7, letterSpacing: 1.2, textTransform: "uppercase", fontWeight: 700, color: C.amber, opacity: 0.65 }}>{c.l}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 10, height: 3, borderRadius: 2, background: "rgba(196,149,106,0.06)" }}>
            <div style={{ width: "55%", height: "100%", borderRadius: 2, background: `linear-gradient(90deg, ${C.amber}, ${C.terra})`, boxShadow: `0 0 10px ${C.amber}20` }}/>
          </div>
          <div style={{ textAlign: "center", fontSize: 9, color: C.stone, marginTop: 6 }}>Renews Mar 20 · {"\u20AC"}49/mo</div>
        </G>
        <G style={{ textAlign: "center", marginBottom: 12, border: "0.5px dashed rgba(196,149,106,0.15)" }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: C.deep }}>Upgrade to Premium {"\u20AC"}99/mo</div>
          <div style={{ fontSize: 9, color: C.stone, marginTop: 2 }}>Blood panels · 1:1 reviews · CGM</div>
        </G>
        <Label color={C.stone} style={{ marginBottom: 5 }}>RECENT</Label>
        {["Feb 18 · LED Glow Session", "Feb 15 · Potion N\u00B01 + Collagen", "Feb 12 · Alche Salon event"].map((h, i) => (
          <div key={i} style={{ padding: "7px 0", borderBottom: "0.5px solid rgba(196,149,106,0.03)", fontSize: 10.5, color: C.stone }}>{h}</div>
        ))}
      </div>
      <TabBar active="you"/>
    </Bg>
  );
}

// ═══════════════════════════════════════════════════════
// SCREEN 09: PROFILE
// ═══════════════════════════════════════════════════════
function S09() {
  return (
    <Bg>
      <StatusBar/><AppLogo/>
      <div style={{ padding: "10px 20px 84px" }}>
        <div style={{ textAlign: "center", marginBottom: 14 }}>
          <div style={{ width: 54, height: 54, borderRadius: "50%", background: `linear-gradient(135deg, ${C.amber}20, ${C.terra}14)`, margin: "0 auto 7px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, border: `1.5px solid ${C.amber}18`, boxShadow: `0 4px 20px ${C.amber}10` }}>{"\u2662"}</div>
          <div style={{ fontSize: 14.5, fontWeight: 600, color: C.deep }}>Lena K.</div>
          <div style={{ fontSize: 9.5, color: C.stone }}>Pro Member · Since Jan 2026</div>
        </div>
        <div style={{ display: "flex", gap: 7, marginBottom: 12 }}>
          {[{ n: "42", l: "SESSIONS", c: C.amber }, { n: "7", l: "STREAK", c: C.sage }, { n: "3", l: "JOURNEYS", c: C.terra }].map((s, i) => (
            <G key={i} style={{ flex: 1, textAlign: "center", padding: "11px 6px" }}>
              <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 300, color: s.c }}>{s.n}</div>
              <div style={{ fontSize: 7, letterSpacing: 1, textTransform: "uppercase", fontWeight: 700, color: C.stone }}>{s.l}</div>
            </G>
          ))}
        </div>
        <G style={{ marginBottom: 9 }}>
          <Label color={C.sage} style={{ marginBottom: 7 }}>GLOW JOURNEY · DAY 12 / 21</Label>
          <div style={{ height: 4, borderRadius: 3, background: "rgba(139,158,124,0.08)" }}>
            <div style={{ width: "57%", height: "100%", borderRadius: 3, background: `linear-gradient(90deg, ${C.sage}, ${C.amber})`, boxShadow: `0 0 8px ${C.sage}18` }}/>
          </div>
          <div style={{ fontSize: 9.5, color: C.stone, marginTop: 5 }}>Next: Evening magnesium + sleep tracking</div>
        </G>
        <G style={{ marginBottom: 9 }}>
          <Label style={{ marginBottom: 5 }}>BIO AGE ESTIMATE</Label>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontFamily: serif, fontSize: 34, fontWeight: 300, color: C.deep }}>27</span>
            <span style={{ fontSize: 9.5, color: C.stone }}>vs chronological 32</span>
          </div>
          <div style={{ fontSize: 8.5, color: C.sage, fontWeight: 600, marginTop: 2 }}>5 years younger · V1 Feature</div>
        </G>
        <Label color={C.stone} style={{ marginBottom: 5 }}>FAVORITES</Label>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {["Potion N\u00B01", "Glow Boost", "LED 14:00", "Collagen"].map(f => <Pill key={f} style={{ fontSize: 8.5, padding: "4px 10px" }}>{f}</Pill>)}
        </div>
      </div>
      <TabBar active="you"/>
    </Bg>
  );
}

// ═══════════════════════════════════════════════════════
// SCREEN 10: CGM LITE
// ═══════════════════════════════════════════════════════
function S10() {
  return (
    <Bg>
      <StatusBar/><AppLogo/>
      <div style={{ padding: "10px 20px 84px" }}>
        <Label color={C.sage}>CGM LITE · MVP</Label>
        <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 300, color: C.deep, margin: "4px 0 14px" }}>Your glucose, <strong>visualized.</strong></div>
        <G v="thick" style={{ marginBottom: 10, textAlign: "center", padding: "16px" }}>
          <div style={{ fontFamily: serif, fontSize: 44, fontWeight: 300, color: C.sage, textShadow: `0 0 20px ${C.sage}12` }}>92</div>
          <div style={{ fontSize: 9.5, color: C.stone }}>mg/dL · via HealthKit</div>
          <div style={{ marginTop: 12, height: 55, position: "relative", borderBottom: "0.5px solid rgba(139,158,124,0.08)" }}>
            <svg width="100%" height="55" viewBox="0 0 240 55" style={{ overflow: "visible" }}>
              <defs>
                <linearGradient id="gf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={C.sage} stopOpacity="0.1"/>
                  <stop offset="100%" stopColor={C.sage} stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,38 C25,36 45,22 72,18 C100,13 118,32 145,27 C172,22 190,16 218,20 C228,22 240,18 240,18 L240,55 L0,55 Z" fill="url(#gf)"/>
              <path d="M0,38 C25,36 45,22 72,18 C100,13 118,32 145,27 C172,22 190,16 218,20 C228,22 240,18 240,18" fill="none" stroke={C.sage} strokeWidth="1.8" opacity="0.55"/>
              <circle cx="218" cy="20" r="3" fill={C.sage}/>
              <circle cx="218" cy="20" r="6" fill="none" stroke={C.sage} strokeWidth="0.8" opacity="0.2"/>
            </svg>
            <div style={{ position: "absolute", bottom: -14, left: 0, right: 0, display: "flex", justifyContent: "space-between", fontSize: 7.5, color: C.stone }}>
              <span>6AM</span><span>9AM</span><span>12PM</span><span>3PM</span><span>Now</span>
            </div>
          </div>
        </G>
        <div style={{ display: "flex", gap: 7, marginBottom: 10 }}>
          <G style={{ flex: 1, textAlign: "center", padding: "11px" }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: C.deep }}>85-110</div>
            <div style={{ fontSize: 7, letterSpacing: 1, textTransform: "uppercase", fontWeight: 700, color: C.stone }}>RANGE</div>
          </G>
          <G style={{ flex: 1, textAlign: "center", padding: "11px" }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: C.sage }}>94%</div>
            <div style={{ fontSize: 7, letterSpacing: 1, textTransform: "uppercase", fontWeight: 700, color: C.stone }}>IN RANGE</div>
          </G>
        </div>
        <G v="thin" style={{ border: "0.5px dashed rgba(139,158,124,0.12)" }}>
          <div style={{ fontSize: 9, color: C.stone, lineHeight: 1.55 }}>Display-only via HealthKit. No medical interpretation. Reads FreeStyle Libre or Dexcom Stelo.</div>
        </G>
      </div>
      <TabBar active="track"/>
    </Bg>
  );
}

// ═══════════════════════════════════════════════════════
// SCREEN 11: CGM SMART
// ═══════════════════════════════════════════════════════
function S11() {
  return (
    <Bg>
      <StatusBar/><AppLogo/>
      <div style={{ padding: "10px 20px 84px" }}>
        <Label color={C.sage}>CGM SMART · V1</Label>
        <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 300, color: C.deep, margin: "4px 0 14px" }}>Potion meets <strong>glucose.</strong></div>
        <G v="thick" style={{ marginBottom: 10, background: "linear-gradient(135deg, rgba(139,158,124,0.04), rgba(196,149,106,0.02))" }}>
          <Label color={C.sage} style={{ marginBottom: 5 }}>CORRELATION FOUND</Label>
          <div style={{ fontSize: 12, fontWeight: 600, color: C.deep, marginBottom: 3 }}>Berry Blaze kept stable for 3h</div>
          <div style={{ fontSize: 9.5, color: C.stone, lineHeight: 1.5 }}>Post-smoothie glucose 82-98 mg/dL. Fiber + protein slowed absorption.</div>
          <div style={{ marginTop: 10, height: 48 }}>
            <svg width="100%" height="48" viewBox="0 0 240 48">
              <rect x="55" y="0" width="110" height="48" fill="rgba(139,158,124,0.04)" rx="4"/>
              <text x="110" y="11" textAnchor="middle" fontSize="7" fill={C.sage} fontWeight="600" fontFamily="Outfit">STABLE ZONE</text>
              <path d="M0,24 C18,26 36,33 55,28 C72,20 90,18 110,19 C130,20 148,18 166,21 C184,26 202,30 240,36" fill="none" stroke={C.sage} strokeWidth="1.6"/>
              <circle cx="55" cy="28" r="4" fill={C.amber} stroke="#fff" strokeWidth="1.5"/>
              <text x="55" y="45" textAnchor="middle" fontSize="7" fill={C.amber} fontWeight="600" fontFamily="Outfit">Potion</text>
            </svg>
          </div>
        </G>
        <G style={{ marginBottom: 9 }}>
          <Label style={{ marginBottom: 5 }}>AI INSIGHT</Label>
          <div style={{ fontSize: 10.5, color: C.deep, lineHeight: 1.55 }}>14-day data: glucose responds best to N{"\u00B0"}1 and N{"\u00B0"}2. N{"\u00B0"}4 causes mild spike -- add Prebiotic boost.</div>
        </G>
        <G>
          <Label color={C.stone} style={{ marginBottom: 5 }}>POTION RANKINGS</Label>
          {["N\u00B02 Berry Blaze · Best stability", "N\u00B01 Golden Glow · Smooth curve", "N\u00B03 Deep Calm · Evening optimal", "N\u00B04 Gut Reset · Mild spike"].map((r, i) => (
            <div key={i} style={{ padding: "5px 0", borderBottom: i<3 ? "0.5px solid rgba(196,149,106,0.03)" : "none", fontSize: 10.5, color: C.deep, display: "flex", gap: 7 }}>
              <span style={{ color: C.sage, fontWeight: 700, fontSize: 10 }}>{i+1}</span><span>{r}</span>
            </div>
          ))}
        </G>
      </div>
      <TabBar active="track"/>
    </Bg>
  );
}

// ═══════════════════════════════════════════════════════
// SCREEN 12: AI CONCIERGE
// ═══════════════════════════════════════════════════════
function S12() {
  return (
    <Bg>
      <StatusBar/><AppLogo/>
      <div style={{ padding: "10px 20px 84px" }}>
        <Label>AI CONCIERGE · V1</Label>
        <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 300, color: C.deep, margin: "4px 0 14px" }}>Your wellness <strong>concierge.</strong></div>
        <G v="thick" style={{ marginBottom: 9, background: "linear-gradient(135deg, rgba(196,149,106,0.05), rgba(139,158,124,0.02))", border: "0.5px solid rgba(196,149,106,0.12)" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <div style={{ width: 28, height: 28, borderRadius: 10, background: `linear-gradient(135deg, ${C.amber}, ${C.terra})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, flexShrink: 0, boxShadow: `0 3px 10px ${C.amber}22, 0 0.5px 0 rgba(255,255,255,0.15) inset` }}>{"\u2726"}</div>
            <div>
              <div style={{ fontSize: 11.5, fontWeight: 600, color: C.deep, marginBottom: 3 }}>Good afternoon, Lena</div>
              <div style={{ fontSize: 10, color: C.stone, lineHeight: 1.55 }}>HRV lower than 7-day average. <strong style={{ color: C.deep }}>Deep Calm</strong>'s ashwagandha + magnesium could help.</div>
            </div>
          </div>
        </G>
        <G style={{ marginBottom: 9 }}>
          <Label color={C.sage} style={{ marginBottom: 7 }}>SUGGESTED TODAY</Label>
          {[
            { t: "14:00", a: "LED Recovery Session", r: "HRV below baseline", ic: "\u2615" },
            { t: "15:00", a: "Potion N\u00B03 + Magnesium", r: "Stress pattern detected", ic: "\u2726" },
            { t: "21:00", a: "Glycine + wind-down", r: "Sleep protocol day 5", ic: "\u25CE" },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 9, alignItems: "center", padding: "7px 0", borderBottom: i<2 ? "0.5px solid rgba(196,149,106,0.03)" : "none" }}>
              <div style={{ fontSize: 12, width: 18, textAlign: "center" }}>{s.ic}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10.5, fontWeight: 600, color: C.deep }}>{s.a}</div>
                <div style={{ fontSize: 8.5, color: C.stone }}>{s.r}</div>
              </div>
              <div style={{ fontSize: 9.5, color: C.amber, fontWeight: 600 }}>{s.t}</div>
            </div>
          ))}
        </G>
        <G>
          <Label style={{ marginBottom: 4 }}>WEEKLY INSIGHT</Label>
          <div style={{ fontSize: 10.5, color: C.deep, lineHeight: 1.55 }}>Glow journey 57% complete. Collagen consistent -- early data suggests +12% skin hydration since day 1.</div>
        </G>
      </div>
      <TabBar active="home"/>
    </Bg>
  );
}

// ═══════════════════════════════════════════════════════
// SCREEN 13: SMART REPLENISHMENT
// ═══════════════════════════════════════════════════════
function S13() {
  return (
    <Bg>
      <StatusBar/><AppLogo/>
      <div style={{ padding: "10px 20px 84px" }}>
        <Label>REPLENISHMENT · V1</Label>
        <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 300, color: C.deep, margin: "4px 0 14px" }}>Not a notification.<br/><strong>A concierge.</strong></div>
        <G v="thick" style={{ marginBottom: 10, background: "linear-gradient(135deg, rgba(196,149,106,0.05), rgba(184,107,74,0.02))", border: "0.5px solid rgba(196,149,106,0.12)" }}>
          <Label style={{ marginBottom: 5 }}>RUNNING LOW</Label>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.deep }}>Collagen Peptides</div>
          <div style={{ fontSize: 9.5, color: C.stone, marginTop: 2, lineHeight: 1.5 }}>5g/day, ~3 days left. You're in a <strong style={{ color: C.deep }}>Glow phase</strong> -- we recommend continuing.</div>
          <div style={{ display: "flex", gap: 7, marginTop: 10 }}>
            <div style={{ flex: 1, padding: "9px", borderRadius: 14, background: C.amber, textAlign: "center", color: "#fff", fontSize: 10.5, fontWeight: 600, boxShadow: `0 3px 12px ${C.amber}22, 0 0.5px 0 rgba(255,255,255,0.15) inset` }}>Reorder · {"\u20AC"}35</div>
            <div style={{ flex: 1, padding: "9px", borderRadius: 14, background: "rgba(196,149,106,0.04)", textAlign: "center", color: C.amber, fontSize: 10.5, fontWeight: 600, border: "0.5px solid rgba(196,149,106,0.12)" }}>Subscribe</div>
          </div>
        </G>
        <G style={{ marginBottom: 10 }}>
          <Label color={C.sage} style={{ marginBottom: 5 }}>PROTOCOL CONTEXT</Label>
          <div style={{ fontSize: 10.5, color: C.deep, lineHeight: 1.55 }}>Glow journey recommends: Collagen (daily), Vitamin D (morning), Omega-3 (with meal). Omega-3 has 2 weeks remaining.</div>
        </G>
        <G>
          <Label color={C.stone} style={{ marginBottom: 5 }}>SUBSCRIPTIONS</Label>
          {[{ n: "Glow Blend", d: "Mar 5", p: "\u20AC29/mo" }, { n: "Omega-3", d: "Mar 12", p: "\u20AC18/mo" }].map((s, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: i===0 ? "0.5px solid rgba(196,149,106,0.03)" : "none" }}>
              <div>
                <div style={{ fontSize: 10.5, fontWeight: 600, color: C.deep }}>{s.n}</div>
                <div style={{ fontSize: 8.5, color: C.stone }}>Next: {s.d}</div>
              </div>
              <div style={{ fontSize: 10.5, fontWeight: 600, color: C.amber }}>{s.p}</div>
            </div>
          ))}
        </G>
      </div>
      <TabBar active="shop"/>
    </Bg>
  );
}

// ═══════════════════════════════════════════════════════
// SCREEN 14: BIOMARKER DASHBOARD
// ═══════════════════════════════════════════════════════
function S14() {
  return (
    <Bg>
      <StatusBar/><AppLogo/>
      <div style={{ padding: "10px 20px 84px" }}>
        <Label color={C.terra}>BIOMARKERS · V2</Label>
        <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 300, color: C.deep, margin: "4px 0 12px" }}>Your body, <strong>decoded.</strong></div>
        <G v="thick" style={{ marginBottom: 10, textAlign: "center", padding: "16px" }}>
          <Label style={{ marginBottom: 2 }}>BIO AGE</Label>
          <div style={{ fontFamily: serif, fontSize: 48, fontWeight: 300, color: C.deep, textShadow: "0 1px 3px rgba(44,36,24,0.04)" }}>27</div>
          <div style={{ fontSize: 10.5, color: C.stone }}>Chronological: 32 · <span style={{ color: C.sage, fontWeight: 600 }}>5 years younger</span></div>
          <div style={{ marginTop: 7, display: "flex", justifyContent: "center", gap: 3.5 }}>
            {[1,2,3,4,5].map(i => <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: i<=4 ? C.sage : "rgba(139,158,124,0.12)", boxShadow: i<=4 ? `0 0 5px ${C.sage}18` : "none" }}/>)}
          </div>
          <div style={{ fontSize: 8, color: C.stone, marginTop: 3 }}>Trend: Improving</div>
        </G>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, marginBottom: 10 }}>
          {[
            { l: "Vitamin D", v: "48", u: "ng/mL", s: "OPTIMAL", c: C.sage },
            { l: "hsCRP", v: "0.8", u: "mg/L", s: "GOOD", c: C.sage },
            { l: "HbA1c", v: "5.2", u: "%", s: "OPTIMAL", c: C.sage },
            { l: "Ferritin", v: "38", u: "ng/mL", s: "LOW", c: C.terra },
          ].map((b, i) => (
            <G key={i} style={{ padding: "11px 13px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                <span style={{ fontSize: 9, fontWeight: 600, color: C.deep }}>{b.l}</span>
                <span style={{ fontSize: 7, letterSpacing: 0.8, fontWeight: 700, color: b.c, textTransform: "uppercase" }}>{b.s}</span>
              </div>
              <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 300, color: C.deep }}>{b.v}<span style={{ fontSize: 9, color: C.stone }}> {b.u}</span></div>
            </G>
          ))}
        </div>
        <G>
          <Label color={C.terra} style={{ marginBottom: 4 }}>ACTION NEEDED</Label>
          <div style={{ fontSize: 10.5, color: C.deep, lineHeight: 1.55 }}>Ferritin trending low. Protocol updated. Next blood panel: Mar 15.</div>
        </G>
      </div>
      <TabBar active="track"/>
    </Bg>
  );
}

// ═══════════════════════════════════════════════════════
// SCREEN 15: DIGITAL TWIN
// ═══════════════════════════════════════════════════════
function S15() {
  return (
    <Bg dark>
      <StatusBar dark/><AppLogo dark/>
      <div style={{ padding: "10px 20px 84px" }}>
        <div style={{ textAlign: "center" }}>
          <Label>DIGITAL TWIN · V2</Label>
          <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 300, color: C.cream, marginTop: 5 }}>Your body, <strong>one view.</strong></div>
        </div>
        <div style={{ textAlign: "center", margin: "18px 0", position: "relative" }}>
          <div style={{ width: 110, height: 190, margin: "0 auto", background: `linear-gradient(180deg, ${C.amber}0F, ${C.sage}08, ${C.terra}05)`, borderRadius: "55px 55px 38px 38px", border: "0.5px solid rgba(196,149,106,0.08)", position: "relative", boxShadow: `0 8px 40px rgba(0,0,0,0.2), 0 0 60px ${C.amber}05 inset` }}>
            <div style={{ position: "absolute", top: 18, left: "50%", transform: "translateX(-50%)", width: 26, height: 26, borderRadius: "50%", background: "rgba(196,149,106,0.06)", border: "0.5px solid rgba(196,149,106,0.08)" }}/>
            <div style={{ position: "absolute", top: 56, left: 10, right: 10, textAlign: "center" }}>
              {["INFLAMMATION", "METABOLISM", "RECOVERY"].map((t, i) => (
                <div key={t} style={{ fontSize: 6, color: [C.amber, C.sage, C.rose][i], fontWeight: 700, letterSpacing: 1.2, marginTop: i ? 18 : 0 }}>{t}</div>
              ))}
            </div>
          </div>
          {[
            { l: "Skin: +12%", x: -58, y: 28, c: C.amber },
            { l: "HRV: 62ms", x: 56, y: 76, c: C.sage },
            { l: "Sleep: 7.2h", x: -62, y: 124, c: "#8B7E9E" },
            { l: "Glucose: Stable", x: 52, y: 146, c: C.terra },
          ].map((p, i) => (
            <div key={i} style={{
              position: "absolute", top: p.y + 56, left: `calc(50% + ${p.x}px)`,
              fontSize: 7.5, fontWeight: 600, color: p.c, letterSpacing: 0.3,
              ...material.dark, padding: "3px 7px", borderRadius: 8,
              border: `0.5px solid ${p.c}18`, whiteSpace: "nowrap",
            }}>{p.l}</div>
          ))}
        </div>
        <G v="dark" style={{ marginBottom: 9 }}>
          <Label style={{ marginBottom: 5 }}>SYSTEM STATUS</Label>
          <div style={{ display: "flex", gap: 7 }}>
            {[{ l: "Skin", v: 82, c: C.amber }, { l: "Energy", v: 71, c: C.terra }, { l: "Sleep", v: 78, c: "#8B7E9E" }, { l: "Gut", v: 65, c: C.rose }].map(s => (
              <div key={s.l} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: s.c, fontFamily: serif }}>{s.v}</div>
                <div style={{ fontSize: 7, color: "rgba(245,240,232,0.25)", letterSpacing: 0.5, textTransform: "uppercase" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </G>
        <G v="dark">
          <div style={{ fontSize: 9, color: "rgba(245,240,232,0.45)", lineHeight: 1.55 }}>Blood panels, CGM, wearables, session logs merge into one holistic view. Updates as data flows in.</div>
        </G>
      </div>
      <TabBar active="track" dark/>
    </Bg>
  );
}

// ═══════════════════════════════════════════════════════
// PHONE FRAME — realistic device
// ═══════════════════════════════════════════════════════
function Phone({ children, size = "md" }) {
  const dims = { sm: [160, 340], md: [280, 590], lg: [320, 680] };
  const [w, h] = dims[size] || dims.md;
  return (
    <div style={{
      width: w, height: h, borderRadius: w * 0.135, overflow: "hidden", position: "relative",
      background: C.cream, flexShrink: 0,
      border: `${size === "lg" ? 3 : 2.5}px solid rgba(255,255,255,0.22)`,
      boxShadow: `
        0 0 0 0.5px rgba(44,36,24,0.05),
        0 1px 3px rgba(44,36,24,0.03),
        0 4px 12px rgba(44,36,24,0.06),
        0 16px 48px rgba(44,36,24,0.1),
        0 40px 80px rgba(44,36,24,0.06)
      `,
    }}>
      {/* specular top edge */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 4, zIndex: 2, pointerEvents: "none",
        background: "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
        borderRadius: `${w * 0.135}px ${w * 0.135}px 0 0`,
      }}/>
      <div style={{ position: "absolute", inset: 0, overflowY: "auto", overflowX: "hidden" }}>
        {children}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// SCREEN REGISTRY
// ═══════════════════════════════════════════════════════
const all = [
  { id: 1, label: "Home Dashboard", sub: "Protocol + booking + actions", C: S01, ph: "MVP" },
  { id: 2, label: "Onboarding", sub: "Goal selection", C: S02, ph: "MVP" },
  { id: 3, label: "LED Booking", sub: "Slots + seats + pairing", C: S03, ph: "MVP" },
  { id: 4, label: "Potion Menu", sub: "5 potions + boosts", C: S04, ph: "MVP" },
  { id: 5, label: "Session Active", sub: "Timer + streak + mood", C: S05, ph: "MVP" },
  { id: 6, label: "Shop by Outcome", sub: "Products + reorder", C: S06, ph: "MVP" },
  { id: 7, label: "Events", sub: "Calendar + member feed", C: S07, ph: "MVP" },
  { id: 8, label: "Membership", sub: "Credits + upgrade", C: S08, ph: "MVP" },
  { id: 9, label: "Profile", sub: "Streaks + journeys + bio age", C: S09, ph: "MVP" },
  { id: 10, label: "CGM Lite", sub: "Glucose via HealthKit", C: S10, ph: "MVP" },
  { id: 11, label: "CGM Smart", sub: "Glucose + potion correlation", C: S11, ph: "V1" },
  { id: 12, label: "AI Concierge", sub: "Daily suggestions", C: S12, ph: "V1" },
  { id: 13, label: "Replenishment", sub: "Protocol-aware reorder", C: S13, ph: "V1" },
  { id: 14, label: "Biomarkers", sub: "Blood panels + bio age", C: S14, ph: "V2" },
  { id: 15, label: "Digital Twin", sub: "Avatar health view", C: S15, ph: "V2" },
];

// ═══════════════════════════════════════════════════════
// MAIN LAYOUT
// ═══════════════════════════════════════════════════════
export default function AlcheScreens() {
  const [idx, setIdx] = useState(0);
  const [filter, setFilter] = useState("ALL");
  const [view, setView] = useState("focus"); // focus | grid

  const list = filter === "ALL" ? all : all.filter(s => s.ph === filter);
  useEffect(() => { setIdx(0); }, [filter]);

  const Screen = list[idx]?.C || S01;
  const phC = p => p === "MVP" ? C.sage : p === "V1" ? C.amber : C.terra;

  // keyboard nav
  const onKey = useCallback(e => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") setIdx(i => Math.min(i + 1, list.length - 1));
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") setIdx(i => Math.max(i - 1, 0));
  }, [list.length]);
  useEffect(() => { window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, [onKey]);

  return (
    <div style={{ minHeight: "100vh", background: "#EDEAE3", fontFamily: "'Outfit',sans-serif" }} tabIndex={0}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      <style>{`*{box-sizing:border-box}::-webkit-scrollbar{width:0}::selection{background:${C.amber}30}`}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}>
        {/* header */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontFamily: serif, fontSize: 32, fontWeight: 300, color: C.deep, letterSpacing: 6, textTransform: "uppercase", marginBottom: 10 }}>Alche</div>
          <div style={{ fontSize: 8.5, letterSpacing: 4, textTransform: "uppercase", color: C.amber, fontWeight: 700, marginBottom: 4 }}>SLIDE 07 · PRODUCT</div>
          <div style={{ fontFamily: serif, fontSize: 36, fontWeight: 300, color: C.deep, lineHeight: 1.08 }}>What Users <strong>See & Do</strong></div>
          <div style={{ fontSize: 11.5, color: C.stone, marginTop: 6, maxWidth: 400, margin: "6px auto 0" }}>15 screens across MVP, V1, V2. Arrow keys to navigate.</div>
        </div>

        {/* controls */}
        <div style={{ display: "flex", justifyContent: "center", gap: 5, marginBottom: 5, flexWrap: "wrap" }}>
          {["ALL", "MVP", "V1", "V2"].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: "5px 15px", borderRadius: 20, border: "none", cursor: "pointer",
              fontSize: 9, fontWeight: 700, letterSpacing: 1.5,
              background: filter === f ? C.amber : "rgba(196,149,106,0.05)",
              color: filter === f ? "#fff" : C.stone,
              boxShadow: filter === f ? `0 2px 10px ${C.amber}22` : "none",
              transition: "all 0.25s",
            }}>{f}</button>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 5, marginBottom: 22 }}>
          {[{ k: "focus", l: "Focus" }, { k: "grid", l: "Grid (copy-paste)" }].map(m => (
            <button key={m.k} onClick={() => setView(m.k)} style={{
              padding: "4px 13px", borderRadius: 14, border: "none", cursor: "pointer",
              fontSize: 9, fontWeight: 600,
              background: view === m.k ? "rgba(44,36,24,0.07)" : "transparent",
              color: view === m.k ? C.deep : C.stone,
            }}>{m.l}</button>
          ))}
        </div>

        {/* ═══ FOCUS MODE ═══ */}
        {view === "focus" && (
          <div style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
            {/* phone */}
            <div style={{ flex: "0 0 280px", position: "sticky", top: 32 }}>
              <Phone><Screen/></Phone>
              <div style={{ textAlign: "center", marginTop: 10 }}>
                <span style={{ fontSize: 7, letterSpacing: 0.6, fontWeight: 700, padding: "2px 6px", borderRadius: 4, background: `${phC(list[idx]?.ph)}12`, color: phC(list[idx]?.ph), marginRight: 5 }}>{list[idx]?.ph}</span>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, color: C.amber, textTransform: "uppercase" }}>{list[idx]?.label}</span>
              </div>
              <div style={{ textAlign: "center", fontSize: 9, color: C.stone, marginTop: 2 }}>{list[idx]?.sub}</div>
              {/* prev/next */}
              <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 12 }}>
                <button onClick={() => setIdx(Math.max(0, idx-1))} disabled={idx===0} style={{ padding: "6px 16px", borderRadius: 12, border: "none", cursor: idx===0?"default":"pointer", background: idx===0?"transparent":"rgba(196,149,106,0.06)", color: idx===0?"rgba(158,148,138,0.3)":C.stone, fontSize: 10, fontWeight: 600 }}>{"\u2190"} Prev</button>
                <span style={{ fontSize: 9, color: C.stone, alignSelf: "center" }}>{idx+1}/{list.length}</span>
                <button onClick={() => setIdx(Math.min(list.length-1, idx+1))} disabled={idx===list.length-1} style={{ padding: "6px 16px", borderRadius: 12, border: "none", cursor: idx===list.length-1?"default":"pointer", background: idx===list.length-1?"transparent":"rgba(196,149,106,0.06)", color: idx===list.length-1?"rgba(158,148,138,0.3)":C.stone, fontSize: 10, fontWeight: 600 }}>Next {"\u2192"}</button>
              </div>
            </div>
            {/* screen list */}
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 6, alignContent: "start" }}>
              {list.map((s, i) => (
                <div key={s.id} onClick={() => setIdx(i)} style={{
                  padding: "10px 12px", borderRadius: 14, cursor: "pointer",
                  ...material[i === idx ? "thick" : "thin"],
                  background: i === idx ? "rgba(255,253,247,0.65)" : "rgba(255,253,247,0.3)",
                  border: i === idx ? `0.5px solid ${C.amber}40` : material.thin.border,
                  transition: "all 0.25s",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 2 }}>
                    <span style={{ fontSize: 7, letterSpacing: 0.5, fontWeight: 700, padding: "1.5px 4px", borderRadius: 3, background: `${phC(s.ph)}10`, color: phC(s.ph) }}>{s.ph}</span>
                    <span style={{ fontSize: 7.5, color: C.stone }}>{String(s.id).padStart(2,"0")}</span>
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: i === idx ? C.deep : C.stone }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══ GRID MODE — all phones visible, clean for copy/paste ═══ */}
        {view === "grid" && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
            {list.map((s, i) => {
              const Comp = s.C;
              return (
                <div key={s.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <Phone size="sm"><Comp/></Phone>
                  <div style={{ textAlign: "center" }}>
                    <span style={{ fontSize: 7, letterSpacing: 0.5, fontWeight: 700, padding: "2px 5px", borderRadius: 3, background: `${phC(s.ph)}12`, color: phC(s.ph), marginRight: 4 }}>{s.ph}</span>
                    <span style={{ fontSize: 9, fontWeight: 600, color: C.deep }}>{String(s.id).padStart(2,"0")} {s.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
