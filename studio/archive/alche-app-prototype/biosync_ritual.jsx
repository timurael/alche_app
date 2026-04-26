// Bio-Sync scan and Ritual notification (overlay)
function BioSyncScreen({ goto }) {
  const [p2, setP2] = useStateH(45);
  useEffectH(() => {
    const id = setInterval(() => setP2(v => v >= 100 ? 45 : v + 1), 120);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ background: T.bg, minHeight: '100%', paddingBottom: 110 }}>
      <AppHeader
        onBack={() => goto('home')}
        center="BIO-SYNC PROTOCOL"
        right={
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingRight: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: T.primary }}/>
            <Mono size={9} color={T.black} style={{ fontWeight: 700 }}>ACTIVE</Mono>
          </div>
        }
      />

      {/* Orb */}
      <div style={{ padding: '20px 0 0', display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', top: -8, right: -30, zIndex: 2,
            border: `1px solid ${T.primary}`, padding: '4px 10px', background: T.white,
          }}>
            <Mono size={9} color={T.primary} style={{ fontWeight: 700 }}>SCANNING</Mono>
          </div>
          <div style={{ width: 260, height: 260, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: 999, border: `1px dashed ${T.primary}`, opacity: 0.5 }}/>
            <div style={{ position: 'absolute', inset: 18, borderRadius: 999, border: `1px solid rgba(13,18,27,0.12)` }}/>
            <div style={{ position: 'absolute', inset: 40, borderRadius: 999, overflow: 'hidden', background: T.dark }}>
              <WaveSmoke />
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '28px 24px 0' }}>
        <div style={{
          fontFamily: fDisplay, fontStyle: 'italic', fontWeight: 300,
          fontSize: 32, lineHeight: 1.05, color: T.black,
        }}>
          Synchronizing<br/>
          <span style={{ fontWeight: 500 }}>Bio-Data</span>
        </div>
        <div style={{ height: 12 }} />
        <Mono size={10} color={T.muted}>ESTABLISHING SECURE HANDSHAKE</Mono>
      </div>

      <div style={{ padding: '24px 24px 0' }}>
        <SyncStep label="LIPID ANALYSIS" status="Complete" pct={100} color={T.primary} bold />
        <SyncStep label="METABOLIC MAPPING" status="Processing..." pct={p2} color={T.black} bold />
        <SyncStep label="HORMONAL BASELINE" status="Queued" pct={0} color={T.muted} muted />
      </div>
    </div>
  );
}

function SyncStep({ label, status, pct, color, bold, muted }) {
  return (
    <div style={{ padding: '16px 0', borderBottom: '1px solid rgba(13,18,27,0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Mono size={10} color={muted ? T.muted : T.black} style={{ fontWeight: bold ? 700 : 400 }}>{label}</Mono>
        <div style={{ fontFamily: fDisplay, fontStyle: 'italic', fontSize: 13, color: color }}>{status}</div>
      </div>
      <div style={{ height: 10 }} />
      <div style={{ height: 2, background: 'rgba(13,18,27,0.08)', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${pct}%`, background: color, transition: 'width 0.3s' }}/>
        {pct > 0 && pct < 100 && (
          <div style={{ position: 'absolute', left: `${pct}%`, top: -3, width: 8, height: 8, borderRadius: 999, background: color, transform: 'translateX(-50%)' }}/>
        )}
      </div>
    </div>
  );
}

window.BioSyncScreen = BioSyncScreen;

// ─────────────────────────────────────────────────────────────
// Ritual notification
// ─────────────────────────────────────────────────────────────
function RitualScreen({ goto }) {
  const [visible, setVisible] = useStateH(false);
  useEffectH(() => { const id = setTimeout(() => setVisible(true), 50); return () => clearTimeout(id); }, []);
  const fade = (d) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(14px)',
    transition: `opacity 0.7s ease ${d}s, transform 0.7s ease ${d}s`,
  });

  return (
    <div style={{ background: T.dark, minHeight: '100%', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.55 }}>
        <svg width="100%" height="100%" viewBox="0 0 400 860" preserveAspectRatio="none">
          <defs>
            <linearGradient id="rstripe" x1="0" y1="0" x2="1" y2="0.1">
              <stop offset="0%" stopColor="#2a2f38"/>
              <stop offset="50%" stopColor="#5a6372"/>
              <stop offset="100%" stopColor="#1a1e28"/>
            </linearGradient>
          </defs>
          <rect width="400" height="860" fill="url(#rstripe)"/>
          {Array.from({ length: 80 }).map((_, i) => (
            <path key={i}
              d={`M -20 ${i * 12 + Math.sin(i) * 4} Q 150 ${i * 12 - 8} 300 ${i * 12 + 6} T 420 ${i * 12}`}
              stroke={`rgba(${180 + (i % 4) * 10},${180 + (i % 3) * 10},${200 + (i % 2) * 10},${0.06 + (i % 6) * 0.03})`}
              strokeWidth={0.8 + (i % 3) * 0.4} fill="none"
            />
          ))}
        </svg>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,14,21,0.55)' }}/>

      {/* Header with back */}
      <div style={{ position: 'relative', zIndex: 3 }}>
        <AppHeader
          onBack={() => goto('home')}
          dark
          right={
            <Mono size={9} color="rgba(255,255,255,0.5)" style={{ paddingRight: 6 }}>[ ALCHE ]</Mono>
          }
        />
      </div>

      {/* Vertical line */}
      <div style={{
        position: 'absolute', top: '24%', left: '50%', transform: 'translateX(-50%)',
        width: 1, height: 48, background: 'rgba(255,255,255,0.6)',
        ...fade(0.3),
      }}/>

      {/* Content */}
      <div style={{
        position: 'absolute', top: '36%', left: 0, right: 0, textAlign: 'center',
        padding: '0 32px',
      }}>
        <div style={fade(0.6)}>
          <Mono size={10} color="rgba(255,255,255,0.65)" style={{ letterSpacing: '0.3em', fontWeight: 700 }}>
            TIME FOR RITUAL
          </Mono>
        </div>
        <div style={{ height: 24 }} />
        <div style={fade(0.9)}>
          <div style={{
            fontFamily: fDisplay, fontStyle: 'italic', fontWeight: 200,
            fontSize: 52, lineHeight: 1.05, color: '#fff',
          }}>
            <div>Cellular</div>
            <div style={{ fontWeight: 400 }}>Hydration</div>
          </div>
        </div>
        <div style={{ height: 18 }} />
        <div style={fade(1.3)}>
          <Mono size={10} color="rgba(255,255,255,0.45)" style={{ letterSpacing: '0.3em' }}>
            VAR. 7 &nbsp;·&nbsp; H2O-SEQ
          </Mono>
        </div>
      </div>

      {/* Buttons */}
      <div style={{
        position: 'absolute', bottom: 56, left: 0, right: 0,
        padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        ...fade(1.7),
      }}>
        <button onClick={() => goto('home')} style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: '12px 4px',
          color: 'rgba(255,255,255,0.65)', fontFamily: fBody, fontSize: 15,
        }}>Dismiss</button>
        <button onClick={() => goto('protocol')} style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: '12px 4px',
          color: '#fff', borderBottom: '2px solid #fff',
          fontFamily: fMono, fontSize: 11, fontWeight: 700, letterSpacing: '0.3em',
        }}>BEGIN</button>
      </div>
    </div>
  );
}
window.RitualScreen = RitualScreen;
