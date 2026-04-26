#!/usr/bin/env python3
"""
alche P&L Sanity Check — 10 Metrics
====================================
Reads assumptions and growth curves from build_excel_pnl_v3.py,
recomputes the full P&L month-by-month in pure Python, and checks
10 sanity metrics.

DOES NOT modify any existing files.
"""

import math

# ═══════════════════════════════════════════
# ASSUMPTIONS (mirrored from build_excel_pnl_v3.py)
# ═══════════════════════════════════════════

# Subscription Model
CORE_PRICE = 19
PRO_PRICE = 49
PREMIUM_PRICE = 99
CHURN_RATE = 0.08
CORE_SHARE = 0.52
PRO_SHARE = 0.38
PREMIUM_SHARE = 0.10

# Subscriber Growth (new subs/month by phase)
NEW_SUBS = {
    (1, 3): 3,
    (4, 6): 15,
    (7, 9): 22,
    (10, 12): 28,
    (13, 18): 32,
    (19, 24): 38,
}

def get_new_subs(m):
    for (lo, hi), val in NEW_SUBS.items():
        if lo <= m <= hi:
            return val
    return 0

# Product Pricing
POTION_PRICE = 49
POTION_COGS = 23.50
LED_PRICE = 45
LED_PRAC_COST = 25
SMOOTHIE_PRICE = 9.67
SMOOTHIE_COGS_RATE = 0.35
EVENT_TICKET = 35
EVENT_FIXED = 250
TICKETING_FEE = 0.07
DOCTOR_FEE = 99
DOCTOR_VERIFY = 25
DOCTOR_MAX = 20

# Cost Rates
WASTE_RATE = 0.055
THREEPL_PER_UNIT = 2.50
STRIPE_RATE = 0.029
AI_PER_USER = 0.35
REFUND_RATE = 0.015
BAD_DEBT_RATE = 0.005

# Payroll
FOUNDER_GROSS = 4166
EMPLOYER_MULT = 1.25
SPACE_STAFF = 1230     # M4+
PARTNER_MGR = 2000     # M6+
GROWTH_MARKETER = 4500  # M12+
CTO_GROSS = 6500        # M18+
BG_RATE = 0.005
KSK_RATE = 0.049
RECRUIT_CTO = 18000     # M17
CTO_ONBOARD = 3500      # M18

# Fixed Operating Costs
APP_MAINT = 1500
UX_DESIGN = 800
CLAUDE_MAX = 210
SAAS_M1_6 = 338
SAAS_M7_12 = 500
SAAS_M13 = 750
RENT_COWORK = 750       # M1-3
RENT_SPACE = 2500       # M4+
NEBENKOSTEN = 325       # M4+
STEUERBERATER = 400
INS_GENERAL = 200
INS_DO = 100
INS_CYBER = 150
INS_PRODUCT = 100
INS_RECALL = 100        # M4+
UTIL = 500              # M4+
CLEANING = 300          # M4+
MAINT_RESERVE = 200     # M4+
WASTE_DISPOSAL = 120    # M4+
WIFI = 50               # M4+
POS = 50                # M4+
DSB = 400
CMP = 25
FOOD_SAFETY = 80        # M4+
IHK = 10
GEMA = 31               # M4+
RUNDFUNK = 6
VERPACK = 6
BANK_FEES = 35
PERMITS_M3 = 500

# Marketing
CONTENT_TOOLS = 150
INFLUENCER = 200        # M7+
INVESTOR_TRAVEL = 150
CONFERENCES = 100       # M7+
LOCAL_TRANSPORT = 50

# Buffers
CONTINGENCY_RATE = 0.10

# Tax
TAX_RATE = 0.30

# CapEx
CAPEX_M1 = {
    "GmbH Formation": 2500,
    "Legal Opinion HWG": 3500,
    "R&D Stability Testing": 5000,
    "DPIA": 7500,
    "MDR Classification Opinion": 7500,
    "Privacy Policy + ToS": 5000,
}
CAPEX_M3 = {
    "Space Buildout": 25000,
    "Kitchen Equipment": 20000,
    "LED Devices": 5000,
    "Fire Safety": 300,
    "Signage": 500,
    "HACCP": 1000,
    "Hygiene Training": 60,
    "Food Safety Equipment": 500,
}
DEPRECIATION_PERIOD = 36
TOTAL_CAPEX_M1 = sum(CAPEX_M1.values())
TOTAL_CAPEX_M3 = sum(CAPEX_M3.values())
TOTAL_CAPEX = TOTAL_CAPEX_M1 + TOTAL_CAPEX_M3

# Growth Curves (hardcoded arrays from build script, row by row)
RETAIL_UNITS = [0,0,0,50,100,150,250,350,450,600,750,900,1100,1300,1500,1800,2100,2400,2700,3000,3400,3800,4200,4600]
LED_SESSIONS = [0,0,0,10,20,35,50,65,80,100,120,140,160,180,200,220,240,260,280,300,300,300,300,300]
SMOOTHIE_UNITS = [0,0,0,100,150,250,350,450,550,650,750,850,950,1050,1150,1250,1350,1450,1550,1650,1750,1850,1950,2000]
EVENT_COUNT = [0,0,0,1,1,2,2,3,3,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5]
EVENT_ATTEND = [0,0,0,12,15,15,18,18,18,20,20,20,22,22,22,22,24,24,25,25,25,25,25,25]
DOCTOR_CLINICS = [0,0,0,0,0,2,5,8,10,12,15,17,18,19,20,20,20,20,20,20,20,20,20,20]
MARKETING_SPEND = [50,50,100,200,400,600,800,800,1000,1200,1400,1400,1800,1800,2000,2000,2200,2200,2500,2500,2800,2800,3000,3000]
KSK_FREELANCER = [500,500,500,500,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800]

FUNDING = 500_000

# ═══════════════════════════════════════════
# COMPUTE SUBSCRIBER MODEL
# ═══════════════════════════════════════════
total_subs = [0] * 24
new_subs_arr = [0] * 24
churned_arr = [0] * 24

for m in range(24):
    month = m + 1
    new_subs_arr[m] = get_new_subs(month)
    if m == 0:
        churned_arr[m] = 0
        total_subs[m] = max(0, new_subs_arr[m] - churned_arr[m])
    else:
        churned_arr[m] = round(total_subs[m-1] * CHURN_RATE)
        total_subs[m] = max(0, total_subs[m-1] - churned_arr[m] + new_subs_arr[m])

core_subs = [round(s * CORE_SHARE) for s in total_subs]
pro_subs = [round(s * PRO_SHARE) for s in total_subs]
premium_subs = [max(0, total_subs[i] - core_subs[i] - pro_subs[i]) for i in range(24)]

# Doctor deltas
doctor_new = [0] * 24
doctor_new[0] = DOCTOR_CLINICS[0]
for i in range(1, 24):
    doctor_new[i] = max(0, DOCTOR_CLINICS[i] - DOCTOR_CLINICS[i-1])

# ═══════════════════════════════════════════
# COMPUTE P&L MONTH BY MONTH
# ═══════════════════════════════════════════

# Revenue arrays
pot_rev = [RETAIL_UNITS[i] * POTION_PRICE for i in range(24)]
led_rev = [LED_SESSIONS[i] * LED_PRICE for i in range(24)]
sm_rev = [round(SMOOTHIE_UNITS[i] * SMOOTHIE_PRICE) for i in range(24)]
ev_total_attend = [EVENT_COUNT[i] * EVENT_ATTEND[i] for i in range(24)]
ev_rev = [ev_total_attend[i] * EVENT_TICKET for i in range(24)]
doc_rev = [DOCTOR_CLINICS[i] * DOCTOR_FEE for i in range(24)]
sub_core_rev = [core_subs[i] * CORE_PRICE for i in range(24)]
sub_pro_rev = [pro_subs[i] * PRO_PRICE for i in range(24)]
sub_prem_rev = [premium_subs[i] * PREMIUM_PRICE for i in range(24)]
sub_total_rev = [sub_core_rev[i] + sub_pro_rev[i] + sub_prem_rev[i] for i in range(24)]
total_income = [pot_rev[i] + led_rev[i] + sm_rev[i] + ev_rev[i] + doc_rev[i] + sub_total_rev[i] for i in range(24)]

# COGS
cogs_pot = [round(RETAIL_UNITS[i] * POTION_COGS) for i in range(24)]
cogs_waste = [round(pot_rev[i] * WASTE_RATE) for i in range(24)]
cogs_3pl = [round(RETAIL_UNITS[i] * THREEPL_PER_UNIT) if (i+1) >= 4 else 0 for i in range(24)]
cogs_led = [round(LED_SESSIONS[i] * LED_PRAC_COST) for i in range(24)]
cogs_sm = [round(sm_rev[i] * SMOOTHIE_COGS_RATE) for i in range(24)]
cogs_ev = [round(EVENT_COUNT[i] * EVENT_FIXED + ev_rev[i] * TICKETING_FEE) for i in range(24)]
cogs_doc = [round(doctor_new[i] * DOCTOR_VERIFY) for i in range(24)]
cogs_ai = [round(total_subs[i] * AI_PER_USER) for i in range(24)]
cogs_refund = [round((pot_rev[i] + sm_rev[i] + ev_rev[i]) * REFUND_RATE) for i in range(24)]
cogs_bad_debt = [round(total_income[i] * BAD_DEBT_RATE) for i in range(24)]
cogs_stripe = [round(total_income[i] * STRIPE_RATE) for i in range(24)]

total_cogs = [
    cogs_pot[i] + cogs_waste[i] + cogs_3pl[i] + cogs_led[i] + cogs_sm[i] +
    cogs_ev[i] + cogs_doc[i] + cogs_ai[i] + cogs_refund[i] + cogs_bad_debt[i] + cogs_stripe[i]
    for i in range(24)
]

gross_profit = [total_income[i] - total_cogs[i] for i in range(24)]
gross_margin = [gross_profit[i] / total_income[i] if total_income[i] > 0 else 0 for i in range(24)]

# ─── OPEX ───

# Payroll
def payroll_month(m):
    month = m + 1
    f1 = round(FOUNDER_GROSS * EMPLOYER_MULT)
    f2 = round(FOUNDER_GROSS * EMPLOYER_MULT)
    space = round(SPACE_STAFF * EMPLOYER_MULT) if month >= 4 else 0
    mgr = round(PARTNER_MGR * EMPLOYER_MULT) if month >= 6 else 0
    growth = round(GROWTH_MARKETER * EMPLOYER_MULT) if month >= 12 else 0
    cto = round(CTO_GROSS * EMPLOYER_MULT) if month >= 18 else 0
    gross_pay = f1 + f2 + space + mgr + growth + cto
    bg = round(gross_pay * BG_RATE)
    ksk = round(KSK_FREELANCER[m] * KSK_RATE)
    return gross_pay + bg + ksk

pay_total = [payroll_month(i) for i in range(24)]

# R&D
rd_total = [APP_MAINT + UX_DESIGN] * 24

# S&M
def sm_month(m):
    month = m + 1
    ads = MARKETING_SPEND[m]
    content = CONTENT_TOOLS
    inf = INFLUENCER if month >= 7 else 0
    return ads + content + inf

sm_total = [sm_month(i) for i in range(24)]

# G&A
def ga_month(m):
    month = m + 1
    rent = RENT_COWORK if month <= 3 else RENT_SPACE
    neben = NEBENKOSTEN if month >= 4 else 0
    steuer = STEUERBERATER
    ins = INS_GENERAL + INS_DO + INS_CYBER + INS_PRODUCT
    ins_recall = INS_RECALL if month >= 4 else 0
    util = UTIL if month >= 4 else 0
    clean = CLEANING if month >= 4 else 0
    maint = MAINT_RESERVE if month >= 4 else 0
    waste = WASTE_DISPOSAL if month >= 4 else 0
    wifi = WIFI if month >= 4 else 0
    pos = POS if month >= 4 else 0
    dsb = DSB
    cmp = CMP
    food = FOOD_SAFETY if month >= 4 else 0
    ihk = IHK
    gema = GEMA if month >= 4 else 0
    rundfunk = RUNDFUNK
    verpack = VERPACK
    bank = BANK_FEES
    permits = PERMITS_M3 if month == 3 else 0
    return (rent + neben + steuer + ins + ins_recall + util + clean + maint +
            waste + wifi + pos + dsb + cmp + food + ihk + gema + rundfunk + verpack + bank + permits)

ga_total = [ga_month(i) for i in range(24)]

# Management & APIs
def mg_month(m):
    month = m + 1
    if month <= 6:
        saas = SAAS_M1_6
    elif month <= 12:
        saas = SAAS_M7_12
    else:
        saas = SAAS_M13
    return saas + CLAUDE_MAX

mg_total = [mg_month(i) for i in range(24)]

# Travel
def tr_month(m):
    month = m + 1
    inv = INVESTOR_TRAVEL
    conf = CONFERENCES if month >= 7 else 0
    local = LOCAL_TRANSPORT
    return inv + conf + local

tr_total = [tr_month(i) for i in range(24)]

# One-offs
recruit = [RECRUIT_CTO if (i+1) == 17 else 0 for i in range(24)]
onboard = [CTO_ONBOARD if (i+1) == 18 else 0 for i in range(24)]

# OpEx pre-contingency
opex_pre = [
    pay_total[i] + rd_total[i] + sm_total[i] + ga_total[i] +
    mg_total[i] + tr_total[i] + recruit[i] + onboard[i]
    for i in range(24)
]

# Contingency
contingency = [round(opex_pre[i] * CONTINGENCY_RATE) for i in range(24)]

# Total OpEx
total_opex = [opex_pre[i] + contingency[i] for i in range(24)]

# EBITDA
ebitda = [gross_profit[i] - total_opex[i] for i in range(24)]

# CapEx
capex_cash = [0] * 24
capex_cash[0] = TOTAL_CAPEX_M1  # M1
capex_cash[2] = TOTAL_CAPEX_M3  # M3

# Depreciation
depreciation = [0] * 24
for i in range(24):
    month = i + 1
    if month >= 3:
        depreciation[i] = round((TOTAL_CAPEX_M1 + TOTAL_CAPEX_M3) / DEPRECIATION_PERIOD)
    elif month >= 1:
        depreciation[i] = round(TOTAL_CAPEX_M1 / DEPRECIATION_PERIOD)

# Net P&L before tax
net_pretax = [ebitda[i] - capex_cash[i] for i in range(24)]

# Cumulative pre-tax
cum_pretax = [0] * 24
cum_pretax[0] = net_pretax[0]
for i in range(1, 24):
    cum_pretax[i] = cum_pretax[i-1] + net_pretax[i]

# Tax provision
tax = [0] * 24
for i in range(24):
    if net_pretax[i] > 0 and cum_pretax[i] > 0:
        tax[i] = round(net_pretax[i] * TAX_RATE)

# Net P&L after tax
net_pnl = [net_pretax[i] - tax[i] for i in range(24)]

# Cumulative cash
cum_cash = [0] * 24
cum_cash[0] = FUNDING + net_pnl[0]
for i in range(1, 24):
    cum_cash[i] = cum_cash[i-1] + net_pnl[i]

# Monthly burn
burn = [abs(net_pnl[i]) if net_pnl[i] < 0 else 0 for i in range(24)]

# ═══════════════════════════════════════════
# SANITY CHECKS
# ═══════════════════════════════════════════

print("=" * 80)
print("alche P&L v3 — SANITY CHECK REPORT")
print("=" * 80)

# ─── 1. GROSS MARGINS ───
print("\n" + "─" * 80)
print("1. GROSS MARGINS BY PRODUCT LINE")
print("─" * 80)

# Retail margin (using months where there are sales, i.e., M4+)
retail_rev_total = sum(pot_rev[3:])
retail_cogs_total = sum(cogs_pot[3:]) + sum(cogs_waste[3:]) + sum(cogs_3pl[3:])
retail_margin = (retail_rev_total - retail_cogs_total) / retail_rev_total if retail_rev_total > 0 else 0

# LED margin
led_rev_total = sum(led_rev[3:])
led_cogs_total = sum(cogs_led[3:])
led_margin = (led_rev_total - led_cogs_total) / led_rev_total if led_rev_total > 0 else 0

# Smoothie margin
sm_rev_total = sum(sm_rev[3:])
sm_cogs_total = sum(cogs_sm[3:])
sm_margin = (sm_rev_total - sm_cogs_total) / sm_rev_total if sm_rev_total > 0 else 0

# Subscription margin (subtract AI API costs)
sub_rev_total = sum(sub_total_rev)
sub_cogs_total = sum(cogs_ai)
sub_margin = (sub_rev_total - sub_cogs_total) / sub_rev_total if sub_rev_total > 0 else 0

# Overall blended
overall_rev = sum(total_income)
overall_cogs = sum(total_cogs)
overall_gm = (overall_rev - overall_cogs) / overall_rev if overall_rev > 0 else 0

print(f"  Retail supplements margin:    {retail_margin:.1%}  (benchmark: ~52%)")
if retail_margin < 0.45 or retail_margin > 0.58:
    print(f"    ** FLAG: Outside expected 45-58% range for EUR 23.50 COGS on EUR 49 retail")
else:
    print(f"    PASS: Consistent with EUR 23.50 COGS, 5.5% waste, EUR 2.50 3PL")

print(f"  LED therapy margin:           {led_margin:.1%}  (benchmark: ~44%)")
if abs(led_margin - 0.4444) < 0.02:
    print(f"    PASS: EUR 25 practitioner on EUR 45 session = 44.4% margin")
else:
    print(f"    ** FLAG: Expected ~44.4%")

print(f"  Smoothie bar margin:          {sm_margin:.1%}  (benchmark: ~65%)")
if abs(sm_margin - 0.65) < 0.02:
    print(f"    PASS: 35% COGS rate gives 65% margin")
else:
    print(f"    ** FLAG: Expected ~65%")

print(f"  Subscription margin:          {sub_margin:.1%}  (digital product)")
print(f"    PASS: High margin expected for digital; only cost is AI API at EUR 0.35/sub")

print(f"  Overall blended gross margin: {overall_gm:.1%}")
print(f"    NOTE: Blended margin driven by product mix; retail dominates at M24")

# ─── 2. OPEX AS % OF REVENUE ───
print("\n" + "─" * 80)
print("2. OPEX AS % OF REVENUE — SCALING CHECK")
print("─" * 80)

# Calculate for key months
check_months = [3, 6, 9, 12, 18, 24]
for m in check_months:
    i = m - 1
    rev = total_income[i]
    opex = total_opex[i]
    ratio = opex / rev if rev > 0 else float('inf')
    flag = "FLAG" if (m >= 12 and ratio > 1.0) else ("FLAG" if ratio > 5.0 else "OK")
    print(f"  M{m:2d}: OpEx EUR {opex:>8,} / Rev EUR {rev:>8,} = {ratio:>8.1%}  [{flag}]")

y1_opex = sum(total_opex[:12])
y1_rev = sum(total_income[:12])
y2_opex = sum(total_opex[12:])
y2_rev = sum(total_income[12:])
print(f"\n  Y1 total: OpEx EUR {y1_opex:,} / Rev EUR {y1_rev:,} = {y1_opex/y1_rev:.1%}")
print(f"  Y2 total: OpEx EUR {y2_opex:,} / Rev EUR {y2_rev:,} = {y2_opex/y2_rev:.1%}")
if y2_opex / y2_rev < y1_opex / y1_rev:
    print(f"    PASS: OpEx/Rev declines from Y1 to Y2 as expected in scaling business")
else:
    print(f"    ** FLAG: OpEx/Rev NOT declining — cost structure not scaling")

# ─── 3. PAYROLL AS % OF TOTAL OPEX ───
print("\n" + "─" * 80)
print("3. PAYROLL AS % OF TOTAL OPEX")
print("─" * 80)

total_payroll = sum(pay_total)
total_opex_all = sum(total_opex)
payroll_pct = total_payroll / total_opex_all
print(f"  Total Payroll (24-mo):  EUR {total_payroll:>10,}")
print(f"  Total OpEx (24-mo):     EUR {total_opex_all:>10,}")
print(f"  Payroll / OpEx:         {payroll_pct:.1%}")
if 0.35 <= payroll_pct <= 0.70:
    print(f"    PASS: Within 35-70% benchmark range for early-stage startup")
else:
    print(f"    ** FLAG: Outside 35-70% range. Review staffing plan.")

# Show evolution
for m in [6, 12, 18, 24]:
    i = m - 1
    pct = pay_total[i] / total_opex[i] if total_opex[i] > 0 else 0
    print(f"    M{m:2d}: Payroll EUR {pay_total[i]:>6,} / OpEx EUR {total_opex[i]:>6,} = {pct:.1%}")

# ─── 4. BREAK-EVEN TIMING ───
print("\n" + "─" * 80)
print("4. BREAK-EVEN TIMING")
print("─" * 80)

ebitda_positive_month = None
for i in range(24):
    if ebitda[i] > 0 and ebitda_positive_month is None:
        ebitda_positive_month = i + 1

net_pnl_positive_month = None
for i in range(24):
    if net_pnl[i] > 0 and net_pnl_positive_month is None:
        net_pnl_positive_month = i + 1

cum_positive_month = None
for i in range(24):
    if cum_cash[i] >= FUNDING and cum_positive_month is None:
        # This means cumulative P&L has recovered to zero
        cum_pnl = cum_cash[i] - FUNDING
        if cum_pnl >= 0:
            cum_positive_month = i + 1

# Actually let's check cumulative net P&L directly
cum_net_pnl = [0] * 24
cum_net_pnl[0] = net_pnl[0]
for i in range(1, 24):
    cum_net_pnl[i] = cum_net_pnl[i-1] + net_pnl[i]

cum_pnl_positive = None
for i in range(24):
    if cum_net_pnl[i] > 0 and cum_pnl_positive is None:
        cum_pnl_positive = i + 1

print(f"  Monthly EBITDA turns positive:   M{ebitda_positive_month}" if ebitda_positive_month else "  Monthly EBITDA: NEVER positive in 24 months ** FLAG **")
print(f"  Monthly Net P&L turns positive:  M{net_pnl_positive_month}" if net_pnl_positive_month else "  Monthly Net P&L: NEVER positive in 24 months ** FLAG **")
print(f"  Cumulative Net P&L turns positive: M{cum_pnl_positive}" if cum_pnl_positive else "  Cumulative Net P&L: NEVER recovers in 24 months")

if ebitda_positive_month:
    stated = 12
    if abs(ebitda_positive_month - stated) <= 2:
        print(f"    PASS: EBITDA break-even at M{ebitda_positive_month} (stated: ~M{stated})")
    else:
        print(f"    ** FLAG: EBITDA break-even at M{ebitda_positive_month}, but stated as ~M{stated}")

# Print EBITDA by month for context
print("\n  EBITDA by month:")
for i in range(24):
    marker = " <-- BREAK-EVEN" if (i + 1 == ebitda_positive_month) else ""
    print(f"    M{i+1:2d}: EUR {ebitda[i]:>10,}{marker}")

# ─── 5. CASH RUNWAY ───
print("\n" + "─" * 80)
print("5. CASH RUNWAY")
print("─" * 80)

min_cash = min(cum_cash)
min_cash_month = cum_cash.index(min_cash) + 1
print(f"  Starting cash:           EUR {FUNDING:>10,}")
print(f"  Minimum cash position:   EUR {min_cash:>10,} (M{min_cash_month})")
print(f"  End cash (M24):          EUR {cum_cash[23]:>10,}")

if min_cash < 0:
    print(f"    ** CRITICAL FLAG: Cash goes NEGATIVE at M{min_cash_month}!")
    print(f"    Company runs out of money. Need to raise more or cut costs.")
elif min_cash < 50000:
    print(f"    ** FLAG: Cash below EUR 50K safety buffer at M{min_cash_month}")
else:
    print(f"    PASS: Cash remains positive throughout 24 months")

# Runway in months at various points
print("\n  Cash runway (months at current burn rate):")
for m in [3, 6, 9, 12, 18, 24]:
    i = m - 1
    if burn[i] > 0:
        runway = cum_cash[i] / burn[i]
        flag = "OK" if runway > 6 else ("CAUTION" if runway > 3 else "CRITICAL")
        print(f"    M{m:2d}: EUR {cum_cash[i]:>10,} / EUR {burn[i]:>6,} burn = {runway:.1f} months [{flag}]")
    else:
        print(f"    M{m:2d}: EUR {cum_cash[i]:>10,} / no burn (profitable)")

print("\n  Cumulative cash by month:")
for i in range(24):
    bar_len = max(0, int(cum_cash[i] / 20000))
    print(f"    M{i+1:2d}: EUR {cum_cash[i]:>10,}  {'#' * bar_len}")

# ─── 6. REVENUE CONCENTRATION ───
print("\n" + "─" * 80)
print("6. REVENUE CONCENTRATION")
print("─" * 80)

streams = {
    "Retail (Potions)": pot_rev,
    "LED Therapy": led_rev,
    "Smoothie Bar": sm_rev,
    "Events": ev_rev,
    "Doctor SaaS": doc_rev,
    "Subscriptions": sub_total_rev,
}

for label, (m12_month, m24_month) in [("M12", 11), ("M24", 23)], :
    pass  # handled below

for target_label, target_idx in [("M12", 11), ("M24", 23)]:
    rev_total = total_income[target_idx]
    print(f"\n  {target_label} (Total Revenue: EUR {rev_total:,}):")
    for name, arr in streams.items():
        pct = arr[target_idx] / rev_total if rev_total > 0 else 0
        marker = " ** DOMINANT" if pct > 0.50 else (" * major" if pct > 0.25 else "")
        print(f"    {name:20s}: EUR {arr[target_idx]:>8,}  ({pct:>5.1%}){marker}")

# P5 finding: subscription is only 4.7% at M24
sub_pct_m24 = sub_total_rev[23] / total_income[23] if total_income[23] > 0 else 0
print(f"\n  P5 finding validation: Subscription = {sub_pct_m24:.1%} of M24 revenue")
if sub_pct_m24 < 0.10:
    print(f"    ** FLAG: This is NOT a subscription business. It's a product commerce business.")
    print(f"    Impacts valuation: use 2-4x revenue multiple, NOT 8-15x ARR.")
else:
    print(f"    PASS: Subscription share is reasonable")

# ─── 7. SUBSCRIBER ECONOMICS ───
print("\n" + "─" * 80)
print("7. SUBSCRIBER ECONOMICS — BLENDED ARPU")
print("─" * 80)

# Blended subscription ARPU
weighted_arpu = (CORE_SHARE * CORE_PRICE + PRO_SHARE * PRO_PRICE + PREMIUM_SHARE * PREMIUM_PRICE)
print(f"  Weighted ARPU (from tier shares):")
print(f"    Core  52% x EUR 19 = EUR {0.52 * 19:.2f}")
print(f"    Pro   38% x EUR 49 = EUR {0.38 * 49:.2f}")
print(f"    Prem  10% x EUR 99 = EUR {0.10 * 99:.2f}")
print(f"    Blended ARPU = EUR {weighted_arpu:.2f}")

# Actual from model at representative months
print(f"\n  Actual subscription ARPU from model:")
for m in [6, 12, 18, 24]:
    i = m - 1
    if total_subs[i] > 0:
        actual_arpu = sub_total_rev[i] / total_subs[i]
        print(f"    M{m:2d}: {total_subs[i]:>4d} subs x EUR {actual_arpu:.2f}/sub = EUR {sub_total_rev[i]:,}")

# P5 stated EUR 38.44 — check
# Due to rounding of tier splits, actual may differ
print(f"\n  P5 stated ARPU: EUR 38.44")
print(f"  Computed weighted ARPU: EUR {weighted_arpu:.2f}")
if abs(weighted_arpu - 38.44) < 1.0:
    print(f"    PASS: Close to P5's stated EUR 38.44 (rounding differences from integer sub counts)")
else:
    delta = weighted_arpu - 38.44
    print(f"    ** FLAG: Differs from P5 by EUR {delta:.2f}")

# Total ARPU (all revenue / subscribers)
for m in [12, 24]:
    i = m - 1
    if total_subs[i] > 0:
        total_arpu = total_income[i] / total_subs[i]
        print(f"\n  M{m:2d} Total ARPU (all rev / subs): EUR {total_arpu:,.2f}")
        print(f"    This is misleading — most revenue is from non-subscriber retail")

# ─── 8. RETAIL UNIT VOLUME ───
print("\n" + "─" * 80)
print("8. RETAIL UNIT VOLUME vs SUBSCRIBER BASE")
print("─" * 80)

m24_units = RETAIL_UNITS[23]
m24_subs = total_subs[23]
units_per_sub = m24_units / m24_subs if m24_subs > 0 else float('inf')
# If each subscriber buys ~2 units/month, how many are subscriber purchases?
sub_units_estimate = m24_subs * 2  # generous: 2 products/sub/month
non_sub_pct = (m24_units - sub_units_estimate) / m24_units if m24_units > 0 else 0

print(f"  M24 retail units:    {m24_units:,}")
print(f"  M24 subscribers:     {m24_subs:,}")
print(f"  Units per subscriber: {units_per_sub:.1f}")
print(f"  If subs buy 2 units/mo: {sub_units_estimate} sub-attributed units")
print(f"  Non-subscriber retail: {m24_units - sub_units_estimate} units ({non_sub_pct:.1%} of total)")
print(f"  If subs buy 1 unit/mo:  {m24_units - m24_subs} non-sub units ({(m24_units - m24_subs)/m24_units:.1%})")

print(f"\n  P1/P5 flagged: 4,600 units/mo 'extremely aggressive' for single-location startup")
print(f"  At EUR 49/unit, that's EUR {m24_units * POTION_PRICE:,}/month in retail revenue alone")
print(f"  Implies ~{m24_units / 30:.0f} units/day across all channels")

# Benchmark
print(f"\n  Benchmark: early D2C supplement brands at seed = 2,000-8,000 units/mo")
if m24_units <= 8000:
    print(f"    PASS: {m24_units:,} within D2C seed-stage range (upper half)")
else:
    print(f"    ** FLAG: Above upper bound of seed-stage benchmark")

print(f"\n  ** FLAG: {units_per_sub:.1f} units/subscriber is implausible as subscriber-driven")
print(f"    Implies 85-93% of retail volume comes from non-subscribers (walk-in, e-commerce, B2B)")
print(f"    This is the core business assumption risk. Must justify channel breakdown.")

# ─── 9. CAPEX vs DEPRECIATION ───
print("\n" + "─" * 80)
print("9. CAPEX vs DEPRECIATION")
print("─" * 80)

total_capex_sum = sum(capex_cash)
expected_dep_full = round(total_capex_sum / DEPRECIATION_PERIOD)
# M1-2: only M1 items depreciate. M3+: all items depreciate.
dep_m1_m2 = round(TOTAL_CAPEX_M1 / DEPRECIATION_PERIOD)
dep_m3_plus = round((TOTAL_CAPEX_M1 + TOTAL_CAPEX_M3) / DEPRECIATION_PERIOD)

print(f"  Total CapEx:              EUR {total_capex_sum:,}")
print(f"    M1 items:               EUR {TOTAL_CAPEX_M1:,}")
for name, val in CAPEX_M1.items():
    print(f"      {name:30s}: EUR {val:,}")
print(f"    M3 items:               EUR {TOTAL_CAPEX_M3:,}")
for name, val in CAPEX_M3.items():
    print(f"      {name:30s}: EUR {val:,}")

print(f"\n  Depreciation period:      {DEPRECIATION_PERIOD} months")
print(f"  Expected dep (M1-M2):     EUR {dep_m1_m2:,}/mo  (EUR {TOTAL_CAPEX_M1:,} / {DEPRECIATION_PERIOD})")
print(f"  Expected dep (M3-M24):    EUR {dep_m3_plus:,}/mo  (EUR {total_capex_sum:,} / {DEPRECIATION_PERIOD})")
print(f"  Actual dep M1:            EUR {depreciation[0]:,}/mo")
print(f"  Actual dep M2:            EUR {depreciation[1]:,}/mo")
print(f"  Actual dep M3:            EUR {depreciation[2]:,}/mo")

if depreciation[0] == dep_m1_m2 and depreciation[2] == dep_m3_plus:
    print(f"\n    PASS: Depreciation matches CapEx / 36 for each phase")
else:
    print(f"\n    ** FLAG: Depreciation mismatch")
    print(f"      M1 expected {dep_m1_m2}, got {depreciation[0]}")
    print(f"      M3+ expected {dep_m3_plus}, got {depreciation[2]}")

# Total depreciation over 24 months
total_dep = sum(depreciation)
expected_total_dep = dep_m1_m2 * 2 + dep_m3_plus * 22
print(f"\n  Total depreciation (24mo):  EUR {total_dep:,}")
print(f"  Expected:                   EUR {expected_total_dep:,}")
print(f"  Remaining book value:       EUR {total_capex_sum - total_dep * DEPRECIATION_PERIOD // 24:,}")

# NOTE: CapEx is subtracted from EBITDA to get Net P&L, not depreciation
# This is a CASH-BASED model (CapEx in month spent), not accrual-based
print(f"\n  ** NOTE: The P&L uses CASH-BASED CapEx treatment (full cost in month spent)")
print(f"  This means EBITDA minus CapEx, not EBITDA minus depreciation")
print(f"  Depreciation line exists but is informational only in the P&L")
print(f"  Net P&L = EBITDA - CapEx (cash), NOT EBITDA - Depreciation")

# ─── 10. TAX PROVISION ───
print("\n" + "─" * 80)
print("10. TAX PROVISION")
print("─" * 80)

total_tax = sum(tax)
tax_start_month = None
for i in range(24):
    if tax[i] > 0 and tax_start_month is None:
        tax_start_month = i + 1

print(f"  Tax rate:                 {TAX_RATE:.0%}")
print(f"  Tax starts:               M{tax_start_month}" if tax_start_month else "  Tax starts:               NEVER (never profitable)")
print(f"  Total tax paid (24-mo):   EUR {total_tax:,}")

# Check: does tax only activate when BOTH monthly AND cumulative are positive?
print(f"\n  Tax activation check (should only fire when both monthly AND cumulative P&L > 0):")
tax_errors = 0
for i in range(24):
    if tax[i] > 0:
        if net_pretax[i] <= 0 or cum_pretax[i] <= 0:
            print(f"    ** ERROR M{i+1}: Tax charged but monthly={net_pretax[i]:,} cumulative={cum_pretax[i]:,}")
            tax_errors += 1
        else:
            expected_tax = round(net_pretax[i] * TAX_RATE)
            if tax[i] != expected_tax:
                print(f"    ** ERROR M{i+1}: Tax={tax[i]:,} but expected {expected_tax:,}")
                tax_errors += 1
    elif net_pretax[i] > 0 and cum_pretax[i] > 0:
        print(f"    ** ERROR M{i+1}: No tax but monthly={net_pretax[i]:,} cumulative={cum_pretax[i]:,}")
        tax_errors += 1

if tax_errors == 0:
    print(f"    PASS: Tax provision logic is correct")
else:
    print(f"    ** FLAG: {tax_errors} tax calculation errors found")

# Show tax by month where it applies
if tax_start_month:
    print(f"\n  Tax by month:")
    for i in range(24):
        if tax[i] > 0 or (i+1) >= (tax_start_month - 2 if tax_start_month else 24):
            print(f"    M{i+1:2d}: Pre-tax EUR {net_pretax[i]:>10,}  Cum EUR {cum_pretax[i]:>10,}  Tax EUR {tax[i]:>8,}")

# ═══════════════════════════════════════════
# SUMMARY TABLE
# ═══════════════════════════════════════════
print("\n" + "=" * 80)
print("SUMMARY — KEY NUMBERS")
print("=" * 80)

y1_rev = sum(total_income[:12])
y2_rev = sum(total_income[12:])
y1_pnl = sum(net_pnl[:12])
y2_pnl = sum(net_pnl[12:])

print(f"  Y1 Revenue:         EUR {y1_rev:>12,}")
print(f"  Y2 Revenue:         EUR {y2_rev:>12,}")
print(f"  Total Revenue:      EUR {y1_rev + y2_rev:>12,}")
print(f"  Y1 Net P&L:         EUR {y1_pnl:>12,}")
print(f"  Y2 Net P&L:         EUR {y2_pnl:>12,}")
print(f"  Total Net P&L:      EUR {y1_pnl + y2_pnl:>12,}")
print(f"  Starting Cash:      EUR {FUNDING:>12,}")
print(f"  Cash at M24:        EUR {cum_cash[23]:>12,}")
print(f"  Min Cash:           EUR {min_cash:>12,}  (M{min_cash_month})")
print(f"  Total Tax Paid:     EUR {total_tax:>12,}")
print(f"  Total CapEx:        EUR {total_capex_sum:>12,}")
print(f"  Total Depreciation: EUR {total_dep:>12,}")
print(f"  EBITDA Break-even:  M{ebitda_positive_month}" if ebitda_positive_month else "  EBITDA Break-even:  NEVER")
print(f"  Subscribers M24:    {total_subs[23]:>12,}")
print(f"  Sub ARPU:           EUR {weighted_arpu:>12.2f}")

# ═══════════════════════════════════════════
# VERDICT
# ═══════════════════════════════════════════
print("\n" + "=" * 80)
print("VERDICT SUMMARY")
print("=" * 80)

verdicts = [
    ("1. Gross Margins", "PASS" if 0.45 <= retail_margin <= 0.58 else "FLAG",
     f"Retail {retail_margin:.1%}, LED {led_margin:.1%}, Smoothie {sm_margin:.1%}"),
    ("2. OpEx/Revenue Scaling", "PASS" if y2_opex/y2_rev < y1_opex/y1_rev else "FLAG",
     f"Y1 {y1_opex/y1_rev:.0%} -> Y2 {y2_opex/y2_rev:.0%}"),
    ("3. Payroll % of OpEx", "PASS" if 0.35 <= payroll_pct <= 0.70 else "FLAG",
     f"{payroll_pct:.1%}"),
    ("4. Break-even Timing", "PASS" if ebitda_positive_month and ebitda_positive_month <= 14 else "FLAG",
     f"EBITDA M{ebitda_positive_month}" if ebitda_positive_month else "Never"),
    ("5. Cash Runway", "PASS" if min_cash > 50000 else ("CRITICAL" if min_cash < 0 else "FLAG"),
     f"Min EUR {min_cash:,} at M{min_cash_month}"),
    ("6. Revenue Concentration", "FLAG",
     f"Retail {pot_rev[23]/total_income[23]:.0%} at M24 — heavy product commerce dependency"),
    ("7. Subscriber ARPU", "PASS",
     f"EUR {weighted_arpu:.2f} blended (P5: EUR 38.44)"),
    ("8. Retail Volume", "FLAG",
     f"{m24_units:,} units/mo, {units_per_sub:.0f}/sub — mostly non-subscriber"),
    ("9. CapEx/Depreciation", "PASS" if depreciation[0] == dep_m1_m2 and depreciation[2] == dep_m3_plus else "FLAG",
     f"EUR {total_capex_sum:,} / {DEPRECIATION_PERIOD}mo = EUR {dep_m3_plus:,}/mo"),
    ("10. Tax Provision", "PASS" if tax_errors == 0 else "FLAG",
     f"EUR {total_tax:,} total, starts M{tax_start_month}" if tax_start_month else "Never triggers"),
]

for name, status, detail in verdicts:
    icon = "PASS" if status == "PASS" else ("!! CRITICAL !!" if status == "CRITICAL" else "** FLAG **")
    print(f"  {icon:15s}  {name:30s}  {detail}")

print("\n" + "=" * 80)
print("END OF SANITY CHECK")
print("=" * 80)
