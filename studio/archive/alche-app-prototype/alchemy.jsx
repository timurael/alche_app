// Alchemy selection
function AlchemyScreen({ goto }) {
  const protocols = [
    { title: 'Party Detox', code: 'LIVER_PATHWAY_CLEARANCE', n: '01' },
    { title: 'Stress Regulation', code: 'CORTISOL_DAMPENING_SEQ', n: '02' },
    { title: 'Hormonal Cycle Balance', code: 'ESTROGEN_SYNC_V4', n: '03' },
    { title: 'Beauty Glow', code: 'DERMAL_LUMINOSITY_MATRIX', n: '04', active: true },
    { title: 'Anti-Inflammation', code: 'CYTOKINE_MODULATION', n: '05' },
    { title: 'Metabolic Reset', code: 'GLUCOSE_STABILITY_SEQ', n: '06' },
  ];
  const [sel, setSel] = useStateH(3);

  return (
    <div style={{ background: T.bg, minHeight: '100%', paddingBottom: 120 }}>
      <AppHeader
        onBack={() => goto('home')}
        center="ALCHE // 02"
        right={
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingRight: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: T.primary, display: 'inline-block' }}/>
            <Mono size={9} color={T.black} style={{ fontWeight: 700 }}>ACTIVE</Mono>
          </div>
        }
      />

      <div style={{ padding: '24px 24px 0' }}>
        <div style={{
          fontFamily: fDisplay, fontStyle: 'italic', fontWeight: 300,
          fontSize: 52, lineHeight: 0.98, letterSpacing: '-0.02em',
          color: T.black,
        }}>
          Select<br/>Your<br/><span style={{ fontWeight: 500 }}>Alchemy</span>
        </div>

        <div style={{ height: 24 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 20, height: 16, border: `1px solid ${T.black}`,
          }}>
            <Mono size={8} color={T.black}>&gt;_</Mono>
          </span>
          <Mono size={10} color={T.black}>CONFIGURATION_REQUIRED</Mono>
        </div>
      </div>

      <div style={{ padding: '20px 24px 0' }}>
        {protocols.map((p, i) => {
          const isSel = sel === i;
          return (
            <button key={i}
              onClick={() => setSel(i)}
              style={{
                width: '100%', textAlign: 'left',
                background: isSel ? T.black : 'transparent',
                color: isSel ? '#fff' : T.black,
                border: 'none', padding: '20px 16px',
                borderTop: i === 0 ? '1px solid rgba(13,18,27,0.15)' : 'none',
                borderBottom: '1px solid rgba(13,18,27,0.15)',
                cursor: 'pointer', transition: 'background 0.2s ease',
                position: 'relative', display: 'block',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: fDisplay, fontStyle: 'italic', fontWeight: 400,
                    fontSize: 26, lineHeight: 1.1,
                    color: isSel ? '#fff' : T.black,
                  }}>{p.title}</div>
                  <div style={{ height: 10 }} />
                  <Mono size={9} color={isSel ? 'rgba(255,255,255,0.55)' : T.muted}>[{p.code}]</Mono>
                </div>
                <div style={{ textAlign: 'right', paddingTop: 4, minWidth: 28 }}>
                  <Mono size={10} color={isSel ? '#fff' : T.black} style={{ fontWeight: 700 }}>{p.n}</Mono>
                  {isSel && (
                    <div style={{ marginTop: 10 }}>
                      <svg width="14" height="14" viewBox="0 0 14 14">
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div style={{
        padding: '28px 24px 24px', display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <div>
          <Mono size={9} color={T.muted}>STEP</Mono>
          <div style={{ height: 4 }} />
          <div style={{ fontFamily: fDisplay, fontStyle: 'italic', fontSize: 20, color: T.black }}>
            02<span style={{ color: T.muted }}>/10</span>
          </div>
        </div>
        <div style={{ flex: 1, height: 1, background: T.black, alignSelf: 'center', marginTop: 12 }}/>
        <button onClick={() => goto('protocol')} style={{
          background: T.black, color: '#fff', border: 'none', cursor: 'pointer',
          padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 10,
          fontFamily: fMono, fontSize: 10, letterSpacing: '0.25em', fontWeight: 700,
        }}>
          NEXT
          <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 7h10M8 3l4 4-4 4" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}
window.AlchemyScreen = AlchemyScreen;
