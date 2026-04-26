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

### 2026-04-26 - Associate Every Change With a PR

- Decision: Every requested change must be made on a branch and associated with a pull request.
- Why: The project is being used to practice a governed automation workflow, so even documentation updates should exercise branch, CI, review, and merge discipline.
- Alternatives considered: Allow small documentation edits directly on `main`; batch small changes without PR references.
- Follow-up: Keep future work traceable through PR titles, descriptions, or comments.
