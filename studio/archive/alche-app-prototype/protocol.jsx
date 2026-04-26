// Protocol — Beauty Glow daily tasks
function ProtocolScreen({ goto }) {
  const [done, setDone] = useStateH({ 0: true, 1: true });
  const toggle = (i) => setDone(d => ({ ...d, [i]: !d[i] }));
  const tasks = [
    { title: 'Morning Hydration', sub: 'ELECTROLYTE INFUSION + LEMON', time: '07:00' },
    { title: 'Antioxidant Serum', sub: 'VITAMIN C APPLICATION', time: '07:15' },
    { title: 'Supplements', sub: 'COLLAGEN + RESVERATROL', time: '13:00' },
    { title: 'LED Therapy', sub: 'RED LIGHT · 15 MIN', time: '20:30' },
    { title: 'Night Repair', sub: 'RETINOL + LIPID BARRIER', time: '21:00' },
  ];
  const completed = Object.values(done).filter(Boolean).length;
  const pct = Math.round((completed / tasks.length) * 100);

  return (
    <div style={{ background: T.bg, minHeight: '100%', paddingBottom: 110 }}>
      <AppHeader
        onBack={() => goto('home')}
        center="PROTOCOL · V9"
        right={
          <button aria-label="Calendar" style={{
            width: 44, height: 44, borderRadius: 999, background: 'rgba(13,18,27,0.04)',
            border: '1px solid rgba(13,18,27,0.1)', cursor: 'pointer', padding: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{I.cal(T.black)}</button>
        }
      />

      <div style={{ padding: '16px 24px 0' }}>
        <Overline color={T.muted} size={9.5} tracking="0.22em">DAILY ROUTINE</Overline>
        <div style={{ height: 10 }} />
        <div style={{
          fontFamily: fDisplay, fontStyle: 'italic', fontWeight: 300,
          fontSize: 44, lineHeight: 0.98, letterSpacing: '-0.02em', color: T.black,
        }}>
          Beauty <span style={{ fontWeight: 500 }}>Glow</span><br/>Protocol
        </div>
      </div>

      {/* Status card */}
      <div style={{ padding: '24px 24px 0' }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            border: '1px solid rgba(13,18,27,0.15)', background: T.white,
            display: 'grid', gridTemplateColumns: '1fr 1fr',
          }}>
            <div style={{ padding: 18, borderRight: '1px solid rgba(13,18,27,0.08)' }}>
              <Mono size={9} color={T.muted}>STATUS</Mono>
              <div style={{ height: 8 }} />
              <div style={{ fontFamily: fDisplay, fontStyle: 'italic', fontWeight: 400, fontSize: 19, color: T.black, lineHeight: 1.1 }}>
                Approaching<br/>Luminous
              </div>
            </div>
            <div style={{ padding: 18 }}>
              <Mono size={9} color={T.muted}>COMPLETION</Mono>
              <div style={{ height: 8 }} />
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <div style={{ fontFamily: fDisplay, fontStyle: 'italic', fontSize: 36, fontWeight: 400, color: T.black, lineHeight: 1 }}>{pct}</div>
                <Mono size={12} color={T.muted}>%</Mono>
              </div>
              <div style={{ height: 10 }} />
              <div style={{ height: 3, background: 'rgba(13,18,27,0.08)', position: 'relative' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${pct}%`, background: T.black, transition: 'width 0.3s ease' }}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks */}
      <div style={{ padding: '20px 24px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 0 8px' }}>
          <Overline color={T.muted} size={9.5} tracking="0.22em">TODAY · 5 TASKS</Overline>
          <Mono size={9} color={T.muted}>{completed} / {tasks.length}</Mono>
        </div>
        {tasks.map((t, i) => (
          <button key={i} onClick={() => toggle(i)} style={{
            width: '100%', textAlign: 'left', background: 'transparent',
            border: 'none', borderTop: i === 0 ? '1px solid rgba(13,18,27,0.1)' : 'none',
            borderBottom: '1px solid rgba(13,18,27,0.1)',
            padding: '16px 4px', cursor: 'pointer', display: 'flex',
            alignItems: 'flex-start', gap: 14, minHeight: 64,
          }}>
            <div style={{
              width: 20, height: 20, flexShrink: 0, marginTop: 3,
              background: done[i] ? T.black : 'transparent',
              border: `1.5px solid ${T.black}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}>
              {done[i] && <svg width="11" height="11" viewBox="0 0 11 11"><path d="M2 5.5l2.2 2.2L9 3" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
                <div style={{
                  fontFamily: fDisplay, fontStyle: 'italic', fontWeight: 400,
                  fontSize: 22, color: T.black, lineHeight: 1.15,
                  textDecoration: done[i] ? 'line-through' : 'none',
                  opacity: done[i] ? 0.45 : 1,
                }}>{t.title}</div>
                <Mono size={10} color={T.muted}>{t.time}</Mono>
              </div>
              <div style={{ height: 4 }} />
              <Mono size={9} color={T.muted}>{t.sub}</Mono>
            </div>
          </button>
        ))}
      </div>

      <div style={{ padding: '20px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <Mono size={9} color={T.muted}>CYCLE PHASE</Mono>
            <div style={{ height: 4 }} />
            <div style={{ fontFamily: fDisplay, fontStyle: 'italic', fontSize: 17, color: T.black }}>Ovulatory</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Mono size={9} color={T.muted}>HYDRATION</Mono>
            <div style={{ height: 4 }} />
            <div style={{ fontFamily: fDisplay, fontStyle: 'italic', fontSize: 17, color: T.black }}>Optimal</div>
          </div>
        </div>
      </div>
    </div>
  );
}
window.ProtocolScreen = ProtocolScreen;
