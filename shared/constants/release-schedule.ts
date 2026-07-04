// Per-week release schedule — the single source of truth for content drip.
//
// Before a week's datetime, the deploy Worker (cloudflare/router.mjs) returns a
// real 404 for /week-N/* in production, and the onboarding deck shows that week
// locked. At the datetime it opens automatically with no redeploy: the Worker
// compares against edge time on every request, so the flip happens at request
// time, not deploy time. (Setting or changing a date is still a deploy — only
// the release-time flip is action-free.)
//
// Consumed by BOTH the Worker (server-side, real 404) and the onboarding deck
// (client-side, locked-state UI), so this module stays pure: no import.meta, no
// env lookup. Whether the gate applies at all (production only) is decided by
// each caller and passed in — not read here.

// Datetimes are Asia/Taipei (+08:00). Date.parse honours the offset, so the
// comparison is correct against the Worker's UTC edge clock.
export const RELEASE_SCHEDULE: Record<string, string> = {
  'week-1': '2026-07-18T08:00:00+08:00',
  'week-2': '2026-07-25T08:00:00+08:00',
  'week-3': '2026-08-01T08:00:00+08:00',
  'week-4': '2026-08-15T08:00:00+08:00',
  'week-5': '2026-08-22T08:00:00+08:00',
  'week-6': '2026-08-29T08:00:00+08:00',
}

// Is `deck` released as of `nowMs` (milliseconds since epoch)? A deck with no
// scheduled date is treated as released (fail-open): a deck that is built and
// deployed is meant to be seen unless a date explicitly gates it.
export function isReleased(deck: string, nowMs: number): boolean {
  const at = RELEASE_SCHEDULE[deck]
  return !at || nowMs >= Date.parse(at)
}
