// Glow Scan — live analysis (dark)
function GlowScanScreen({ goto }) {
  const [progress, setProgress] = useStateH(0);
  const [mode, setMode] = useStateH('structural');

  useEffectH(() => {
    const id = setInterval(() => setProgress(p => (p >= 100 ? 0 : p + 2)), 80);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ background: T.dark, minHeight: '100%', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Wave smoke background */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.85 }}>
        <WaveSmoke />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,14,21,0.5), rgba(10,14,21,0) 30%, rgba(10,14,21,0) 60%, rgba(10,14,21,0.9))' }}/>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <AppHeader
          onBack={() => goto('home')}
          dark
          right={
            <div style={{ textAlign: 'right', paddingRight: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: '#e86b5a' }}/>
                <Mono size={9} color="rgba(255,255,255,0.9)" style={{ fontWeight: 700 }}>LIVE</Mono>
              </div>
              <div style={{ height: 3 }}/>
              <Mono size={8} color="rgba(255,255,255,0.5)">S: 1/200 · ISO 120</Mono>
            </div>
          }
        />
      </div>

      {/* Viewfinder area */}
      <div style={{ position: 'absolute', top: 120, left: 24, right: 24, bottom: 240 }}>
        <Corner pos="tl" /><Corner pos="tr" /><Corner pos="bl" /><Corner pos="br" />

        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 180, height: 180, borderRadius: 999,
          border: '1px dashed rgba(255,255,255,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M10 2v16M2 10h16" stroke="rgba(255,255,255,0.7)" strokeWidth="1"/>
          </svg>
        </div>

        <div style={{ position: 'absolute', top: 8, right: 0, textAlign: 'right', borderRight: `2px solid ${T.primary}`, paddingRight: 10 }}>
          <Mono size={9} color="rgba(255,255,255,0.9)" style={{ fontWeight: 700 }}>HYDRATION</Mono>
          <div style={{ fontFamily: fMono, fontSize: 20, color: T.primary, fontWeight: 700, marginTop: 2 }}>64%</div>
        </div>

        <div style={{ position: 'absolute', bottom: 8, left: 0, paddingLeft: 10, borderLeft: '1px solid rgba(255,255,255,0.5)' }}>
          <Mono size={9} color="rgba(255,255,255,0.75)">COLLAGEN INDEX</Mono>
          <div style={{ fontFamily: fMono, fontSize: 15, color: '#fff', marginTop: 2 }}>0.80</div>
          <div style={{ height: 2, background: T.primary, width: 100, marginTop: 6 }}/>
        </div>
      </div>

      {/* Status + progress */}
      <div style={{ position: 'absolute', bottom: 220, left: 0, right: 0, textAlign: 'center' }}>
        <Mono size={10} color="rgba(255,255,255,0.8)" style={{ letterSpacing: '0.3em', fontWeight: 700 }}>
          SCANNING EPIDERMIS
        </Mono>
        <div style={{ height: 10 }} />
        <div style={{ width: 140, height: 1, background: 'rgba(255,255,255,0.2)', margin: '0 auto', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${progress}%`, background: '#fff', transition: 'width 0.08s linear' }}/>
        </div>
      </div>

      {/* Mode tabs */}
      <div style={{ position: 'absolute', bottom: 150, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 28 }}>
        {['texture', 'structural', 'thermal'].map(m => (
          <button key={m} onClick={() => setMode(m)} style={{
            background: 'none', border: 'none', padding: '8px 4px', cursor: 'pointer',
            borderBottom: mode === m ? `2px solid ${T.primary}` : '2px solid transparent',
          }}>
            <Mono size={10} color={mode === m ? '#fff' : 'rgba(255,255,255,0.45)'} style={{ fontWeight: mode === m ? 700 : 400, letterSpacing: '0.2em' }}>
              {m.toUpperCase()}
            </Mono>
          </button>
        ))}
      </div>

      {/* Shutter bar */}
      <div style={{ position: 'absolute', bottom: 62, left: 0, right: 0, display: 'flex', alignItems: 'center', padding: '0 28px', justifyContent: 'space-between' }}>
        <button aria-label="Lock focus" style={{
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)',
          width: 44, height: 44, borderRadius: 999, cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="7" r="5" stroke="#fff" strokeWidth="1" fill="none"/><circle cx="7" cy="7" r="1.5" fill="#fff"/></svg>
        </button>

        <button aria-label="Capture" onClick={() => goto('biosync')} style={{
          background: 'none', border: '3px solid #fff', borderRadius: 999,
          width: 76, height: 76, display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', padding: 0,
        }}>
          <div style={{ width: 54, height: 54, borderRadius: 999, background: '#fff' }}/>
        </button>

        <button aria-label="Face ID" style={{
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)',
          width: 44, height: 44, borderRadius: 999, cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
          fontFamily: fMono, fontSize: 8, fontWeight: 700, letterSpacing: '0.15em',
        }}>ID</button>
      </div>
    </div>
  );
}

function Corner({ pos }) {
  const L = 22;
  const map = {
    tl: { top: 0, left: 0, borderTop: '1.5px solid #fff', borderLeft: '1.5px solid #fff' },
    tr: { top: 0, right: 0, borderTop: '1.5px solid #fff', borderRight: '1.5px solid #fff' },
    bl: { bottom: 0, left: 0, borderBottom: '1.5px solid #fff', borderLeft: '1.5px solid #fff' },
    br: { bottom: 0, right: 0, borderBottom: '1.5px solid #fff', borderRight: '1.5px solid #fff' },
  };
  return <div style={{ position: 'absolute', width: L, height: L, ...map[pos] }}/>;
}

function WaveSmoke() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 860" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="ws" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#7aa3c7" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#0a0e15" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="860" fill="url(#ws)" />
      {Array.from({ length: 60 }).map((_, i) => {
        const y = 50 + i * 12;
        const amp = 25 + (i % 7) * 6;
        return (
          <path key={i}
            d={`M -20 ${y} Q 80 ${y - amp} 180 ${y - amp * 0.3} T 420 ${y + amp * 0.4}`}
            stroke={`rgba(140,180,210,${0.08 + (i % 5) * 0.04})`}
            strokeWidth="0.7" fill="none"
          />
        );
      })}
    </svg>
  );
}

window.GlowScanScreen = GlowScanScreen;
