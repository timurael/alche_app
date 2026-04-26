// Hormonal Balance cycle view
function HormonalScreen({ goto }) {
  return (
    <div style={{ background: T.bg, minHeight: '100%', paddingBottom: 110 }}>
      <AppHeader
        onBack={() => goto('home')}
        center="HORMONAL BALANCE"
        right={
          <button aria-label="Info" style={{
            width: 44, height: 44, borderRadius: 999, background: 'rgba(13,18,27,0.04)',
            border: '1px solid rgba(13,18,27,0.1)', cursor: 'pointer', padding: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5.5" stroke={T.black} strokeWidth="1.2"/>
              <path d="M7 6v4M7 4.5v.01" stroke={T.black} strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </button>
        }
      />

      <div style={{ padding: '12px 24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <Mono size={9} color={T.primary} style={{ fontWeight: 700 }}>CURRENT PHASE</Mono>
          <div style={{ height: 8 }} />
          <div style={{ fontFamily: fDisplay, fontStyle: 'italic', fontWeight: 400, fontSize: 32, lineHeight: 1, color: T.black }}>
            Late <span style={{ fontWeight: 500 }}>Follicular</span>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <Mono size={9} color={T.muted}>CYCLE DAY</Mono>
          <div style={{ height: 8 }} />
          <div style={{ fontFamily: fMono, fontSize: 26, color: T.black }}>
            12<span style={{ color: T.muted, fontSize: 14 }}> / 28</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div style={{ padding: '20px 24px 0' }}>
        <HormoneChart />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
          <Mono size={9} color={T.muted}>DAY 1</Mono>
          <Mono size={9} color={T.muted}>OVULATION</Mono>
          <Mono size={9} color={T.muted}>DAY 28</Mono>
        </div>
        {/* Legend */}
        <div style={{ display: 'flex', gap: 16, marginTop: 12, justifyContent: 'center' }}>
          <LegendDot color={T.rose} label="ESTROGEN" />
          <LegendDot color={T.indigo} label="PROGESTERONE" />
        </div>
      </div>

      {/* 2x2 grid */}
      <div style={{ padding: '24px 24px 0' }}>
        <div style={{
          border: '1px solid rgba(13,18,27,0.12)', background: T.white,
          display: 'grid', gridTemplateColumns: '1fr 1fr',
        }}>
          <MetricCell label="CORTISOL" title="Stable" sub="+2% vs avg" color="#10b981" borderR borderB />
          <MetricCell label="ESTROGEN" title="Surging" sub="Pre-ovulatory" color={T.rose} borderB />
          <MetricCell label="TEMP (BBT)" title="97.4°F" sub={<div style={{ width: 60, height: 3, background: T.indigo, marginTop: 8 }}/>} borderR />
          <MetricCell label="READINESS" title="High" sub={<span style={{ fontStyle: 'italic', fontFamily: fDisplay, fontSize: 12, color: T.muted }}>Ideal for HIIT today.</span>} />
        </div>
      </div>

      {/* Insight */}
      <div style={{ padding: '24px 24px 0' }}>
        <div style={{ borderLeft: `2px solid ${T.rose}`, paddingLeft: 16 }}>
          <div style={{
            fontFamily: fDisplay, fontStyle: 'italic', fontWeight: 400,
            fontSize: 18, color: T.black, lineHeight: 1.4,
          }}>
            "Estrogen is boosting your energy and verbal skills. Connect with your community today."
          </div>
          <div style={{ height: 12 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 20, height: 1, background: T.black }}/>
            <Mono size={9} color={T.muted}>DAILY INSIGHT</Mono>
          </div>
        </div>
      </div>

      <div style={{ padding: '24px 24px 0' }}>
        <div style={{ borderTop: '1px solid rgba(13,18,27,0.1)', paddingTop: 16, display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Mono size={9} color={T.muted}>OURA SYNC</Mono>
            <div style={{ height: 6 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: '#10b981' }}/>
              <Body size={12}>Connected</Body>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Mono size={9} color={T.muted}>LAST UPDATE</Mono>
            <div style={{ height: 6 }} />
            <Mono size={11} color={T.black}>14:02 PM</Mono>
          </div>
        </div>
      </div>
    </div>
  );
}

function LegendDot({ color, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <span style={{ width: 8, height: 8, borderRadius: 999, background: color, display: 'inline-block' }}/>
      <Mono size={9} color={T.muted}>{label}</Mono>
    </div>
  );
}

function MetricCell({ label, title, sub, color, borderR, borderB }) {
  return (
    <div style={{
      padding: 16,
      borderRight: borderR ? '1px solid rgba(13,18,27,0.08)' : 'none',
      borderBottom: borderB ? '1px solid rgba(13,18,27,0.08)' : 'none',
      minHeight: 100,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {color && <span style={{ width: 6, height: 6, borderRadius: 999, background: color, display: 'inline-block' }}/>}
        <Mono size={9} color={T.muted}>{label}</Mono>
      </div>
      <div style={{ height: 8 }} />
      <div style={{ fontFamily: fDisplay, fontStyle: 'italic', fontSize: 20, color: T.black, fontWeight: 400, lineHeight: 1 }}>{title}</div>
      <div style={{ height: 6 }} />
      <Body size={11} color={T.muted}>{sub}</Body>
    </div>
  );
}

function HormoneChart() {
  const W = 340, H = 150, cx = W * 0.42;
  return (
    <div style={{ position: 'relative', border: '1px solid rgba(13,18,27,0.1)', padding: 14, background: T.white }}>
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
        <defs>
          <pattern id="gr" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(13,18,27,0.04)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width={W} height={H} fill="url(#gr)"/>
        <path d="M 10 120 C 80 105, 120 32, 150 32 S 220 108, 260 70 S 320 88, 330 98"
              stroke={T.rose} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M 10 125 C 60 125, 110 125, 150 115 S 220 45, 260 60 S 320 108, 330 118"
              stroke={T.indigo} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.85"/>
        <line x1={cx} y1={10} x2={cx} y2={H-10} stroke={T.black} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5"/>
        <circle cx={cx} cy={32} r="4.5" fill={T.rose} stroke="#fff" strokeWidth="2"/>
      </svg>
      <div style={{
        position: 'absolute', top: 14, left: '30%',
        background: T.white, border: '1px solid rgba(13,18,27,0.15)',
        padding: '4px 8px', display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: T.rose }}/>
        <Mono size={9} color={T.black} style={{ fontWeight: 700 }}>ESTROGEN PEAK</Mono>
      </div>
    </div>
  );
}

window.HormonalScreen = HormonalScreen;
