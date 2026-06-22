# Contributing to Whimsy Hollow

Thank you for your interest in Whimsy Hollow! Contributions are welcome — especially around:
- New scene ideas or object placement improvements
- Accessibility improvements (colorblind support, keyboard navigation)
- Bug reports for specific objects that are hard to find
- Desktop packaging improvements for Windows / Linux

## Before You Start

Please open an issue describing the change before sending a large PR. Creative direction changes need discussion first.

## Local Setup

**Browser dev build:**
```bash
npm install
npm run dev
```
App runs at http://127.0.0.1:5173.

**Desktop build (requires Rust toolchain):**
```bash
npm run tauri:dev
```

## Code Style

- Each scene lives in `src/scenes/` as a self-contained JS module
- Level data (object positions, sprite keys) in `src/data/levels/`
- Run `npm run build` before submitting to make sure the production build works

## Pull Request Guidelines

1. Fork the repo and create a feature branch
2. Make sure the browser build works (`npm run dev`)
3. Open a PR with a clear description of what changed and why

## Questions?

Open a GitHub issue or reach out at sonnymaywi@gmail.com.
