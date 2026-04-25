# StarHub QE Lab

This project is a Vue-powered local StarHub-inspired site replica for evaluating agentic development and building a Playwright-based QE automation loop.

## Start Here

Run the local prototype:

```bash
npm run dev
```

Then open:

```text
http://127.0.0.1:4173
```

## Automation

If Playwright is not already available on a machine, install dependencies once:

```bash
npm install
npx playwright install
```

Run tests:

```bash
npm test
```

## Workspace

- `index.html` is the Vite app shell.
- `src/App.vue` contains the Vue customer-facing page.
- `src/main.js` boots the Vue app.
- `src/styles.css` contains the responsive visual design.
- `tests/home.spec.js` contains the first Playwright tests.
- `.github/workflows/test.yml` runs the required PR test workflow.
- `docs/`, `tasks/`, and `plans/` keep the QE strategy visible.
- `docs/repository-rules.md` records the required branch protection and merge rules.

This is public-site inspired, not a copy of StarHub source code, assets, or internal data.
