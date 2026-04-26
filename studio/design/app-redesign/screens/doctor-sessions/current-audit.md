---
screen: DoctorSessions
slug: doctor-sessions
group: services
primary-swift-file: app/Alche/Features/DoctorSessions/PractitionerListView.swift
status: audited
audit-date: 2026-04-24
caveat: Feature has no single "entry" view — audit targets PractitionerListView (browse/select practitioner), the path reached from Booking's Wellness Sessions CTA.
---

# DoctorSessions — Audit

**Purpose:** Browse longevity/wellness practitioners, filter by specialty, tap into practitioner detail to book a 1-on-1 session.

**Current structure (top to bottom):**
- Horizontal `SpecialtyFilterPill` row: "All" + `availableSpecialties` as capsule pills (lines 10-29, 92-111)
- Loading state (centered ProgressView, lines 32-40)
- Error state with retry (lines 42-56)
- Empty state `AlcheEmptyStateView` (lines 57-62)
- `LazyVStack` of `PractitionerCard`s, each: 64pt `AlcheAvatar` with initials + practitioner name + title + specialty `AlcheTag` list + rating stars + formattedRating + review count + chevron (lines 64-75, 113-175)
- `DataSourceIndicator` at bottom (line 77)
- Large `navigationTitle("Wellness Practitioners")` (lines 84-85)
- `RatingStarsView` component (lines 179-203)

**3 problems:**
1. **Rating stars + review count = marketplace language, not longevity companion** — Lines 143-153 render gold stars (`alcheAmber`) with half-star increments and "(N)" review count. This is Yelp/Fresha vocabulary. A longevity companion recommending a practitioner should speak ("She's worked with members on recovery since last March") not quantify via crowd ratings — especially since CLAUDE.md requires "Sessions are for wellness guidance and lifestyle optimization. They do not constitute medical advice" and rating medical-adjacent figures on 5 stars invites the wrong expectations.
2. **Capsule pill filter again** — Lines 99-107's `.clipShape(Capsule())` repeats the pattern from RestaurantListView. Same taxonomy-filter UX, same violation of the 2px sharp corner token, executed independently. Two parallel copies of a broken pill filter.
3. **Screen has no disclaimer** — CLAUDE.md for REQ-026 explicitly requires the disclaimer "Sessions are for wellness guidance and lifestyle optimization. They do not constitute medical advice, diagnosis, or treatment." This list view carries no such note. It may live on `PractitionerDetailView` or `SessionBookingView` downstream, but the entry surface where a member browses and chooses a "Dr." shouldn't be silent on framing.

**Dialog-first transformation:**
Open with an editorial read: "Three practitioners I'd introduce you to — / based on what you're working on." Then three recommended cards as single-line italic names + one-line specialty in Noto Sans + faint mono "FIRST SESSION COMPLIMENTARY" for Longevity+ members. The filter row demotes to a mono footer "Filter by specialty →" behind a sheet. Stars + review count disappear entirely; a faint italic pull quote from past members ("— 'She caught my sleep issue on day one.'") replaces them. A small italic disclaimer lives above the list: "Wellness guidance, not medical care."

**Available data to feed the dialog:**
- `viewModel.filteredPractitioners` (Practitioner array)
- `viewModel.selectedSpecialty`, `availableSpecialties`
- Per practitioner: name, title, specialties, rating, reviewCount, formattedRating
- Member's tier (Longevity+ gets complimentary first session)
- Member's goals (drives practitioner relevance)
- Past sessions (continuity: "you've seen Dr. X before")
- Active protocol (drives relevant specialty)
- Next available slot per practitioner

**Tone direction for this screen:**
Introductory, warm — "here's someone I think you should meet." Never a marketplace, never medical.

---
