// Home — daily dashboard (editorial)
const { useState: useStateH, useEffect: useEffectH } = React;

function HomeScreen({ goto }) {
  return (
    <div style={{ background: T.bg, minHeight: '100%', paddingBottom: 110 }}>
      <AppHeader
        center="DAY 164 · TUE"
        right={
          <button aria-label="Notifications" style={{
            width: 44, height: 44, borderRadius: 999, background: 'rgba(13,18,27,0.04)',
            border: '1px solid rgba(13,18,27,0.1)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0,
          }} onClick={() => goto('ritual')}>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
              <path d="M7 1v1.5M2.5 7a4.5 4.5 0 019 0v3l1.5 2h-12l1.5-2V7z" stroke={T.black} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.5 13.5a1.5 1.5 0 003 0" stroke={T.black} strokeWidth="1.3"/>
            </svg>
          </button>
        }
      />

      <div style={{ padding: '8px 24px 0' }}>
        <Overline color={T.muted} size={9.5} tracking="0.22em" weight={700}>GOOD AFTERNOON, LENA</Overline>
        <div style={{ height: 10 }} />
        <div style={{
          fontFamily: fDisplay, fontStyle: 'italic', fontWeight: 300,
          fontSize: 40, lineHeight: 1.02, letterSpacing: '-0.02em', color: T.black,
        }}>
          Approaching<br/>
          <span style={{ fontWeight: 500 }}>Luminous.</span>
        </div>
        <div style={{ height: 10 }} />
        <Mono size={10} color={T.muted}>BEAUTY_GLOW_PROTOCOL · V9 · 68%</Mono>
      </div>

      {/* Progress band */}
      <div style={{ padding: '24px 24px 0' }}>
        <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} style={{
              flex: 1, height: 24,
              background: i < 18 ? T.black : i === 18 ? T.primary : 'rgba(13,18,27,0.08)',
            }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
          <Mono size={9} color={T.muted}>DAY 19 / 28</Mono>
          <Mono size={9} color={T.primary} style={{ fontWeight: 700 }}>OVULATORY</Mono>
        </div>
      </div>

      {/* Bio card */}
      <div style={{ padding: '28px 24px 0' }}>
        <Overline color={T.muted} size={9.5} tracking="0.22em">BIOLOGICAL STATE</Overline>
        <div style={{ height: 10 }} />
        <div style={{
          background: T.white, border: '1px solid rgba(13,18,27,0.1)',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
        }}>
          <div style={{ padding: 18, borderRight: '1px solid rgba(13,18,27,0.08)' }}>
            <Mono size={9} color={T.muted}>BIO AGE</Mono>
            <div style={{ height: 8 }} />
            <div style={{ display: 'flex', gap: 6, alignItems: 'baseline' }}>
              <div style={{ fontFamily: fDisplay, fontStyle: 'italic', fontWeight: 300, fontSize: 44, lineHeight: 1, color: T.black }}>32</div>
              <Mono size={10} color={T.muted}>/ 36</Mono>
            </div>
            <div style={{ height: 8 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 4l3 3 3-3" stroke={T.primary} strokeWidth="1.5" fill="none"/></svg>
              <Mono size={9} color={T.primary} style={{ fontWeight: 700 }}>4.2 YR YOUNGER</Mono>
            </div>
          </div>
          <div style={{ padding: 18 }}>
            <Mono size={9} color={T.muted}>READINESS</Mono>
            <div style={{ height: 8 }} />
            <div style={{ fontFamily: fDisplay, fontStyle: 'italic', fontWeight: 400, fontSize: 28, lineHeight: 1, color: T.black }}>High</div>
            <div style={{ height: 8 }} />
            <Body size={11} color={T.muted}>Estrogen surging. Ideal for HIIT today.</Body>
          </div>
        </div>
      </div>

      {/* Next ritual */}
      <div style={{ padding: '28px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <Overline color={T.muted} size={9.5} tracking="0.22em">NEXT RITUAL · 15:00</Overline>
          <Mono size={9} color={T.muted}>IN 58 MIN</Mono>
        </div>
        <div style={{ height: 10 }} />
        <button onClick={() => goto('ritual')} style={{
          width: '100%', textAlign: 'left', cursor: 'pointer',
          background: T.dark, color: '#fff', border: 'none',
          padding: '26px 22px 22px', position: 'relative', overflow: 'hidden',
          minHeight: 168,
        }}>
          <SmokeBg />
          <div style={{ position: 'relative' }}>
            <Mono size={9} color="rgba(255,255,255,0.5)">H2O-SEQ · VAR. 7</Mono>
            <div style={{ height: 12 }} />
            <div style={{
              fontFamily: fDisplay, fontStyle: 'italic', fontSize: 32, fontWeight: 300,
              lineHeight: 1.05, color: '#fff',
            }}>Cellular<br/>Hydration</div>
            <div style={{ height: 18 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                fontFamily: fMono, fontSize: 10, color: '#fff', fontWeight: 700,
                borderBottom: '1.5px solid #fff', paddingBottom: 3, letterSpacing: '0.3em',
              }}>BEGIN</span>
              <div style={{ flex: 1 }} />
              <Mono size={9} color="rgba(255,255,255,0.5)">3 MIN</Mono>
            </div>
          </div>
        </button>
      </div>

      {/* Quick grid */}
      <div style={{ padding: '20px 24px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <QuickCard label="GLOW SCAN" title="Run Analysis" onClick={() => goto('scan')} accent={T.primary} />
        <QuickCard label="DAY 12 · CYCLE" title="Late Follicular" onClick={() => goto('cycle')} />
        <QuickCard label="PROTOCOL · V9" title="Beauty Glow" onClick={() => goto('protocol')} />
        <QuickCard label="ALCHEMY" title="Select" onClick={() => goto('alchemy')} />
      </div>
    </div>
  );
}

function QuickCard({ label, title, onClick, accent }) {
  return (
    <button onClick={onClick} style={{
      background: T.white, border: '1px solid rgba(13,18,27,0.1)',
      padding: 14, textAlign: 'left', cursor: 'pointer',
      display: 'flex', flexDirection: 'column', minHeight: 110, position: 'relative',
    }}>
      <Mono size={9} color={accent || T.muted} style={{ fontWeight: accent ? 700 : 400 }}>{label}</Mono>
      <div style={{ flex: 1, minHeight: 28 }} />
      <div style={{ fontFamily: fDisplay, fontStyle: 'italic', fontSize: 19, fontWeight: 400, color: T.black, lineHeight: 1.15 }}>{title}</div>
      <div style={{ position: 'absolute', right: 12, bottom: 12 }}>{I.arrow(T.black)}</div>
    </button>
  );
}

function SmokeBg() {
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: 0.55 }}>
      <svg width="100%" height="100%" viewBox="0 0 400 260" preserveAspectRatio="none">
        <defs>
          <radialGradient id="sg1" cx="70%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#6b8ab8" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#0a0e15" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <rect width="400" height="260" fill="url(#sg1)" />
        {Array.from({ length: 14 }).map((_, i) => {
          const y = 40 + i * 16;
          return <path key={i}
            d={`M 0 ${y} Q 100 ${y - 30 + Math.sin(i) * 12} 200 ${y - 8} T 400 ${y + 6}`}
            stroke={`rgba(180,200,220,${0.1 + (i % 4) * 0.04})`}
            strokeWidth="0.6" fill="none" />
        })}
      </svg>
    </div>
  );
}

window.HomeScreen = HomeScreen;
