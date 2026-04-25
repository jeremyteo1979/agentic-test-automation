# Repository Rules

These rules must be configured before project work is merged into `main`.

## Protected Branch

Branch pattern:

```text
main
```

## Required Rules

- Pull request required before merging.
- At least one approval required before merging.
- Dismiss stale pull request approvals when new commits are pushed.
- Require status checks to pass before merging.
- Require the branch to be up to date before merging.
- Restrict direct pushes to `main`.
- Require signed commits.

## Required Status Checks

The initial required check should be:

```text
npm test
```

The initial CI workflow is:

```text
.github/workflows/test.yml
```

The GitHub branch rule should require the `npm test` status check from that workflow.

That workflow runs:

```bash
npm test
```

## GitHub Setup Checklist

In GitHub, configure this under:

```text
Settings -> Branches -> Add branch protection rule
```

Use these settings:

- Branch name pattern: `main`
- Enable `Require a pull request before merging`
- Enable `Require approvals`
- Required approvals: `1`
- Enable `Dismiss stale pull request approvals when new commits are pushed`
- Enable `Require status checks to pass before merging`
- Enable `Require branches to be up to date before merging`
- Select the CI status check that runs `npm test`
- Enable `Require signed commits`
- Disable or restrict direct pushes to `main`

For stronger enforcement, use GitHub Rulesets:

```text
Settings -> Rules -> Rulesets -> New branch ruleset
```

Target `main` and apply the same rules above.

The API payload for the initial ruleset is kept at:

```text
.github/rulesets/main-protection.json
```
