## Description

Provide a clear and concise summary of what this pull request changes, adds, or fixes.

Fixes #(issue)

---

## Type of Change

Please select the option(s) that describe your changes:

- [ ] 🛠️ **New Tool**: Adds a new client-side developer utility
- [ ] 🐛 **Bug Fix**: Non-breaking change that fixes an existing issue
- [ ] ✨ **Enhancement**: Improves or extends an existing tool or platform feature
- [ ] 🎨 **UI / Styling**: Visual refinements, layout adjustments, or theme fixes
- [ ] ⚡ **Performance / Refactor**: Code cleanup or efficiency improvements with no behavior change
- [ ] 📝 **Documentation**: Updates to README, CONTRIBUTING, or code comments

---

## New Tool Checklist (If Applicable)

If you are contributing a new utility, please verify each item from [CONTRIBUTING.md](CONTRIBUTING.md):

- [ ] **Tool Page**: Created `tools/<tool-id>.html` with valid semantic markup and meta tags
- [ ] **Shared Helpers**: Uses utility functions from `tools/common.js` (`showToast`, `copyToClipboard`, `downloadTextFile`, etc.)
- [ ] **Registry**: Added entry to `TOOLS` array in `app.js` with matching category, tags, badge, and SVG icon
- [ ] **Footer Navigation**: Added link to the appropriate category column in `components.js` (`getFooterHtml()`)
- [ ] **100% Client-Side**: All logic runs locally in the browser with **zero** remote APIs or external telemetry
- [ ] **Zero Runtime Dependencies**: No npm packages, external CDN scripts, or heavyweight frameworks added
- [ ] **Theme Compatibility**: Tested and styled using CSS variables for both Dark and Light themes

---

## Quality & Testing Checklist

Please ensure all tests and quality checks pass before submitting:

- [ ] Tested locally on a local web server (e.g. `python -m http.server 3000` or `npx serve .`)
- [ ] Verified JavaScript syntax with `node --check`:
  - [ ] `node --check app.js`
  - [ ] `node --check components.js`
  - [ ] `node --check tools/common.js`
- [ ] Tested responsive layout across mobile (320px+) and desktop viewports
- [ ] Zero unhandled errors or warnings in browser developer console
- [ ] Adheres to the [Code of Conduct](CODE_OF_CONDUCT.md) and [Contributing Guidelines](CONTRIBUTING.md)

---

## Screenshots / Screen Recordings (Optional)

_If making visual changes or adding a new tool, please attach screenshots or screen recordings (both Dark and Light themes if applicable)._
