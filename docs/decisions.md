# Decisions

Record meaningful choices here so the project has memory.

## Template

### YYYY-MM-DD - Decision Title

- Decision:
- Why:
- Alternatives considered:
- Follow-up:

### 2026-04-25 - Use VueJS for the Frontend

- Decision: Rebuild the local StarHub-inspired frontend as a Vue 3 app served by Vite.
- Why: The replica needs richer stateful UI patterns such as mega-navigation, campaign sections, plan selection, and support search while remaining testable with Playwright.
- Alternatives considered: Keep the static HTML/CSS/JS prototype; move directly to a larger framework.
- Follow-up: Expand the Vue replica toward higher visual fidelity and add broader journey, responsive, and accessibility tests.

### 2026-04-25 - Protect Main Before Merging Work

- Decision: Require pull requests, approvals, stale-review dismissal, passing tests, up-to-date branches, restricted direct pushes to `main`, and signed commits.
- Why: This is a greenfield repo, so repository governance should be in place before normal feature work starts landing.
- Alternatives considered: Allow direct commits during prototyping; defer governance until CI exists.
- Follow-up: Configure the rules in GitHub once a remote repository is connected, then add CI so `npm test` becomes a required status check.
