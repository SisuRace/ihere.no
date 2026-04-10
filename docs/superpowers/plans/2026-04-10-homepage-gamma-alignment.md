# Homepage Gamma Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the homepage to match the Gamma reference layout/copy exactly, wire Writing Tool links to App Store/Google Play, and keep `Privacy Policy` as a separate footer-only page entry.

**Architecture:** Keep the existing single-file lightweight route approach in `src/pages/HomePage.jsx` (`/` and `/privacypolicy`). Replace homepage section composition and styling to a single-column reference-aligned structure. Preserve existing privacy policy body semantics while polishing only presentation styles.

**Tech Stack:** React 18, Vite 6, Tailwind utility classes, inline style tokens in `HomePage.jsx`.

---

## File Structure

- Modify: `src/pages/HomePage.jsx`
  - Responsibility: homepage structure/copy/style, CTA behavior, footer privacy link constraint, privacy page presentation.
- Create: `docs/superpowers/baselines/2026-04-10-gamma-homepage-copy.txt`
  - Responsibility: frozen copy baseline for parity checks.
- Create: `docs/superpowers/baselines/2026-04-10-gamma-homepage-parity-checklist.md`
  - Responsibility: section/copy/CTA parity verification checklist.

## Task 1: Freeze Reference Baseline

**Files:**
- Create: `docs/superpowers/baselines/2026-04-10-gamma-homepage-copy.txt`
- Create: `docs/superpowers/baselines/2026-04-10-gamma-homepage-parity-checklist.md`

- [ ] **Step 1: Create frozen homepage copy baseline file**

Add exact reference homepage text in reading order to:
`docs/superpowers/baselines/2026-04-10-gamma-homepage-copy.txt`

- [ ] **Step 2: Create parity checklist skeleton**

Add checklist sections:
- section order parity
- copy lock parity
- CTA location/count parity
- CTA link parity
- external link parity
- footer-only privacy parity
- mobile parity

- [ ] **Step 3: Capture frozen reference screenshots**

Capture and save full-page baseline screenshots:
- `docs/superpowers/baselines/2026-04-10-gamma-homepage-desktop.png`
- `docs/superpowers/baselines/2026-04-10-gamma-homepage-mobile.png`

Use these two files as visual acceptance baseline for implementation verification.

- [ ] **Step 4: Commit baseline artifacts**

Run:
`git add docs/superpowers/baselines/2026-04-10-gamma-homepage-copy.txt docs/superpowers/baselines/2026-04-10-gamma-homepage-parity-checklist.md docs/superpowers/baselines/2026-04-10-gamma-homepage-desktop.png docs/superpowers/baselines/2026-04-10-gamma-homepage-mobile.png && git commit -m "docs: add frozen gamma homepage baseline artifacts"`

Expected:
- Commit created with baseline text, checklist, and screenshot artifacts.

## Task 2: Rebuild Homepage Structure and Copy Lock

**Files:**
- Modify: `src/pages/HomePage.jsx`
- Test: `docs/superpowers/baselines/2026-04-10-gamma-homepage-copy.txt` (manual parity source)

- [ ] **Step 1: Write failing parity notes before edits**

Open current homepage and note mismatches against baseline in checklist file:
`docs/superpowers/baselines/2026-04-10-gamma-homepage-parity-checklist.md`

Expected:
- Current homepage fails section order and copy lock items.

- [ ] **Step 2: Replace homepage section tree with reference-aligned order**

In `HomePage` component, implement these blocks in order:
1. Hero
2. Core message
3. Card feature statements
4. `How it work`
5. Secure seed architecture
6. Real-world contexts
7. Repeated CTA
8. Closing statement
9. Footer

- [ ] **Step 2.5: Add layout resilience for missing visual assets**

Ensure missing/optional homepage visual assets do not collapse layout:
- preserve section container sizing or provide placeholders
- keep vertical spacing rhythm stable when image resources fail

- [ ] **Step 3: Apply exact copy lock**

Replace homepage text with exact baseline wording from:
`docs/superpowers/baselines/2026-04-10-gamma-homepage-copy.txt`

Rule:
- keep original capitalization, punctuation, spacing conventions, and spelling from reference.

- [ ] **Step 4: Verify parity items pass for structure and copy**

Update checklist pass/fail markers in:
`docs/superpowers/baselines/2026-04-10-gamma-homepage-parity-checklist.md`

Expected:
- section order parity: PASS
- copy lock parity: PASS

- [ ] **Step 5: Commit homepage structure/copy update**

Run:
`git add src/pages/HomePage.jsx docs/superpowers/baselines/2026-04-10-gamma-homepage-parity-checklist.md && git commit -m "feat: align homepage structure and copy to gamma baseline"`

Expected:
- Commit created with homepage structural/copy changes.

## Task 3: Implement Writing Tool Download Behavior

**Files:**
- Modify: `src/pages/HomePage.jsx`
- Test: `docs/superpowers/baselines/2026-04-10-gamma-homepage-parity-checklist.md`

- [ ] **Step 1: Add fixed Download Writing Tool behavior**

Ensure both CTA placements show `Download Writing Tool` and provide exactly two destinations:
- iOS: `https://apps.apple.com/app/6760659545`
- Android: `https://play.google.com/store/apps/details?id=com.hereno.mobile`

Interaction acceptance:
- click `Download Writing Tool` -> show exactly two visible options: `iOS`, `Android`
- no third option
- same interaction style in both CTA placements

- [ ] **Step 2: Verify behavior consistency in both CTA sections**

Manual checks:
- top CTA and repeated CTA behave identically
- no third destination
- no short-link redirect wrapper in code
- visible option labels are exactly `iOS` and `Android`

- [ ] **Step 3: Mark CTA checklist items**

Set in checklist:
- CTA location/count parity: PASS
- CTA link parity: PASS

- [ ] **Step 4: Commit CTA behavior changes**

Run:
`git add src/pages/HomePage.jsx docs/superpowers/baselines/2026-04-10-gamma-homepage-parity-checklist.md && git commit -m "feat: wire writing tool cta to ios and android stores"`

Expected:
- Commit created with CTA behavior complete.

## Task 4: Enforce Footer-only Privacy Entry and Separate Privacy Page

**Files:**
- Modify: `src/pages/HomePage.jsx`
- Test: `docs/superpowers/baselines/2026-04-10-gamma-homepage-parity-checklist.md`

- [ ] **Step 1: Remove non-footer privacy links from homepage**

Ensure homepage has no `Privacy Policy` link outside footer.

- [ ] **Step 2: Keep independent `/privacypolicy` route**

Preserve current lightweight routing behavior:
- `/` -> homepage
- `/privacypolicy` -> privacy page

- [ ] **Step 2.5: Keep explicit back-to-home control on privacy page**

Ensure privacy page has a clear and visible control (button or link) that returns to homepage directly.

- [ ] **Step 3: Keep privacy policy body semantics unchanged**

Only adjust privacy page presentation style:
- allowed: spacing, typography scale, container, color styling
- not allowed: changing policy meaning/order/content semantics

- [ ] **Step 4: Mark privacy checklist items**

Set:
- footer-only privacy parity: PASS
- privacy page independent route: PASS

- [ ] **Step 5: Commit privacy entry/page constraints**

Run:
`git add src/pages/HomePage.jsx docs/superpowers/baselines/2026-04-10-gamma-homepage-parity-checklist.md && git commit -m "refactor: keep footer-only privacy link with separate privacy page"`

Expected:
- Commit created with privacy constraints enforced.

## Task 5: Verification and Quality Gate

**Files:**
- Modify: `docs/superpowers/baselines/2026-04-10-gamma-homepage-parity-checklist.md`

- [ ] **Step 1: Run production build**

Run:
`pnpm build`

Expected:
- Build succeeds without errors.

- [ ] **Step 2: Manual parity verification pass**

Verify in desktop + mobile viewport:
- all sections visible and in baseline order
- copy parity remains exact
- visual hierarchy and spacing density match frozen desktop/mobile baseline screenshots
- CTA links open correct destinations
- external links parity remains correct against baseline expectations
- both `Get iHere Card` buttons trigger the existing request flow/modal behavior
- privacy link only in footer
- `/privacypolicy` renders and has an explicit visible back-to-home control that works

- [ ] **Step 3: Finalize checklist status**

Update:
`docs/superpowers/baselines/2026-04-10-gamma-homepage-parity-checklist.md`

Expected:
- all checklist items are PASS.

- [ ] **Step 4: Commit verification evidence**

Run:
`git add docs/superpowers/baselines/2026-04-10-gamma-homepage-parity-checklist.md && git commit -m "test: record homepage gamma parity verification"`

Expected:
- verification commit created.
