## About

Example of fully a11y PWA Next.js SSR auth. Built with help of Typescript,styled-components, Prettier, eslint and Firebase Auth. Fully tested with Cypress.io and react-testing-library and animated with React Spring.

### Setup

#### Install project:

```bash
npm install
yarn
```

#### Built app:

```bash
npm run build
yarn build
```

#### Start app:

```bash
npm start
yarn start
```

#### Run Next.js development:

```bash
npm run dev
yarn dev
```

#### Run e2e tests

```bash
npm run test-e2e
yarn test-e2e
```

#### Browse through all components

```bash
npm run storybook
yarn storybook
```

## Important

- App doesn't support IE11, but if you need to support it, just include Promise polyfill. For details checkout [Next.js docs.](https://nextjs.org/docs#browser-support)

## All thing included in this project:

### Content

- [x] Login page
- [x] Register page
- [ ] Homepage

### Head content

- [x] Charset is set <meta charSet="utf-8" />
- [x] <meta name="viewport" content="initial-scale=1.0, width=device-width" />
- [x] Page title is set
- [x] Page description are set
- [x] Favicons are set
- [x] Canonical: Use rel="canonical" to avoid duplicate content. (no need for now)
- [ ] Apple Web App Meta: Apple meta-tags are present.
- [ ] Windows Tiles: Windows tiles are present and linked.

### A11y

- [x] Use semantic HTML
- [x] Implement skip-link
- [x] Fully operated with the keyboard only
- [x] Use label for input
- [x] Use aria-describedBy for input error
- [x] Use aria-invalid on input fields
- [x] Use aria-required on input fields
- [x] Use html lang
- [x] Add aria-live="polite" to changing elements (error messages)

### Html

- [x] Set meta description
- [x] Set viewport meta to "initial-scale=1.0, width=device-width"
- [x] Set <title> on every page
- [x] Set html lang
- [x] Use favicon (not all formats)
- [x] Proper use of external links: used target="\_blank" rel="noopener noreferrer", link text with warning that it will be opened in a new window.
- [ ] Open graph
- [ ] Twitter card
- [ ] Error 404 page and 5xx exist

### SEO

- [x] robots.txt: The robots.txt is not blocking webpages.
- [x] Pagination link tags: Provide rel="prev" and rel="next" to indicate paginated content. - no need yet
- [ ] Google Analytics: Google Analytics is installed and correctly configured.
- [ ] sitemap.xml: A sitemap.xml exists and was submitted to Google Search Console.
- [ ] Sitemap HTML: An HTML sitemap is provided and is accessible via a link in the footer of your website.

### Performance

- [x] SSR (out of the box)
- [x] Code splitted (out of the box)
- [x] Preconnecting to google fonts
- [x] Link prefetching
- [ ] PWA

### Tests

- [x] E2E tested with Cypress
- [ ] Unit tested with Jest + React Testing Library

### Animations

- [ ] Use React-spring for slick animations

### Best pratices

- [x] Precommit hooks (eslint, prettier)
- [x] Theming
- [x] Mobile-first
- [ ] Storybook
- [ ] Use media breakpoints system
- [ ] i18n
- [ ] Fill out all package.json data.

### React

- [x] Use only functional components with hooks
- [ ] Add Error boundries
