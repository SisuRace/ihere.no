# iHere Homepage Alignment Design (Gamma Reference)

## Context

This spec defines how to update the homepage to match the reference site style and content exactly:

- Reference: [https://ihere-no-data-lp6j2j2.gamma.site/#](https://ihere-no-data-lp6j2j2.gamma.site/#)
- App Store link for Writing Tool:
  - iOS: [https://apps.apple.com/app/6760659545](https://apps.apple.com/app/6760659545)
  - Google Play: [https://play.google.com/store/apps/details?id=com.hereno.mobile](https://play.google.com/store/apps/details?id=com.hereno.mobile)

Confirmed constraints from user:

1. Homepage color, layout, and content should be fully aligned to reference.
2. Keep English copy as-is from the reference (including original wording/spelling).
3. `Privacy Policy` must be a separate page.
4. Homepage should keep only footer `Privacy Policy` entry.
5. Privacy page content should reuse current existing policy body.

## Reference Baseline Freeze

To avoid acceptance drift if the live reference changes, implementation must first freeze a local baseline artifact set:

1. Capture a full-page screenshot set (desktop + mobile) of the reference.
2. Capture homepage visible text snapshot into a local file for copy-parity checks.
3. Save artifacts under project-local review folder (for this task session) and treat them as the acceptance baseline.

All parity verification in this spec is against the frozen baseline artifacts, not future live-site changes.

## Goals

1. Rebuild homepage information flow and visual hierarchy to match reference.
2. Keep current lightweight routing approach and existing app behavior stable.
3. Ensure download links are direct and accurate.
4. Keep privacy page independent and reachable from footer only.

## Non-goals

1. Introducing a new router library.
2. Rewriting privacy policy text semantics.
3. Adding unrelated feature work (new animations, tracking, CMS, etc.).

## Recommended Approach

Use a focused refactor inside existing `src/pages/HomePage.jsx` (single-file route pattern remains):

- Keep `pushState + popstate` route handling.
- Replace homepage section composition and copy with reference-aligned structure.
- Keep `PrivacyPolicyPage` separate route target (`/privacypolicy`), with style harmonized to new homepage aesthetic.

Rationale:

- Lowest delivery risk and fastest path to visual/content parity.
- Minimal surface area for regressions.
- Preserves existing navigation logic already working in project.

## Information Architecture (Homepage)

Render order from top to bottom:

1. Hero
   - `no data` title and reference intro copy.
   - Primary CTAs: `Get iHere Card`, `Download Writing Tool`.
2. Core message block
   - `Today,` lead-in and privacy-positioning copy.
   - Emphasis lines: `No identity`, `No storage`, `No history`.
3. iHere Card feature block
   - `No screen`, `No account`, `No interface`, `Fully offline`.
4. `How it work` block
   - Keep exact reference wording.
   - Include action sequence (`Write a TAG`, `Carry it with you`, etc.).
5. Secure seed architecture block
   - `No device ID`, `No user ID`, `No logs`.
   - Presence statement.
6. Real-world contexts block
   - `Cities`, `Campuses`, `Events`, `Public spaces`.
7. Repeated CTA block
   - `Get iHere Card`, `Download Writing Tool`.
8. Closing statement
   - `In a world where everything is recorded ...`
9. Footer
   - Logo, contact email, location, `Privacy Policy` link only.

## Visual Design Direction

Must follow reference style exactly for homepage composition:

- Section order and hierarchy must match reference.
- Copy must match reference exactly (see Copy Lock).
- CTA labels, placement, and repetition count must match reference.
- Visual rhythm, spacing density, and typography hierarchy must be reference-aligned.
- Do not introduce card-heavy or alternate layout systems not present in reference.

Responsive behavior:

- Keep section order unchanged on mobile.
- Scale typography and spacing only; no content omission.

### Copy Lock

Homepage copy is locked to reference text exactly:

- Character-level parity for wording.
- Preserve original case, punctuation, spacing conventions, and original spelling.
- Apply to all homepage visible text: hero, section headings/body, CTA labels, and footer text.

## Interaction and Navigation

### Download Writing Tool

Both CTA groups should expose two platform targets:

- iOS: `https://apps.apple.com/app/6760659545`
- Android: `https://play.google.com/store/apps/details?id=com.hereno.mobile`

Implementation detail is fixed:

- Keep `Download Writing Tool` as the visible CTA label in both placements.
- Clicking it reveals exactly two destinations only:
  - `iOS`
  - `Android`
- No extra destination and no intermediate short-link wrapper.
- Behavior must be identical in both CTA placements.

### Get iHere Card

Preserve existing business action (current request flow/modal behavior), while updating visual shell and copy style to reference alignment.

### Privacy Page

- Keep independent route: `/privacypolicy`.
- Homepage exposes privacy entry only in footer.
- Privacy page keeps existing policy content with style polish to match new homepage aesthetic.
- Keep a clear back-to-home action.

Boundary for privacy page content:

- Allowed: typography, spacing, container, and color styling updates.
- Not allowed: changing policy body wording, paragraph order, heading meaning, or section semantics.

## Error Handling

1. Unknown paths fall back to homepage route in current lightweight router logic.
2. Missing visual assets should not collapse layout (container-level sizing and safe fallback rendering).
3. External store links rely on normal browser behavior for failures (no additional client-side recovery needed).

## Acceptance Criteria

1. Homepage visually and structurally matches reference style and section sequence.
2. English homepage copy follows reference wording exactly.
3. `Download Writing Tool` resolves to:
   - iOS: `https://apps.apple.com/app/6760659545`
   - Google Play: `https://play.google.com/store/apps/details?id=com.hereno.mobile`
4. `Privacy Policy` is a separate page.
5. Homepage has privacy link only in footer.
6. Homepage must not include any other `Privacy Policy` entry outside footer.
7. Privacy page body content remains current existing policy text.
8. Desktop and mobile layouts keep hierarchy and readability.

Reference parity checklist required at implementation verification:

1. Section order parity
2. Copy parity
3. CTA count/location parity
4. CTA behavior parity
5. External link parity
6. Footer-only privacy entry parity

## Implementation Boundaries

Primary file target:

- `src/pages/HomePage.jsx`

Existing behavior that must not change:

- Current `Get iHere Card` action trigger (existing request flow/modal behavior) remains intact.

New files are not required for this pass unless extraction is needed for readability.

## Risks and Mitigations

1. Risk: Over-refactor introduces behavior regressions.
   - Mitigation: Keep route and existing request flow intact.
2. Risk: Copy mismatch with reference.
   - Mitigation: Treat reference copy as source of truth and verify line-by-line.
3. Risk: CTA inconsistency between top and bottom sections.
   - Mitigation: Reuse shared CTA component with identical behavior.

## Test Plan (for implementation phase)

1. Manual visual check against reference for section order, spacing, and hierarchy.
2. Validate both CTA groups:
   - `Get iHere Card` action works.
   - Writing Tool download opens iOS and Google Play destinations.
3. Verify footer-only privacy entry on homepage.
4. Verify `/privacypolicy` route renders correctly and back navigation works.
5. Verify mobile viewport layout remains complete and readable.
