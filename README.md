# JDG Website
A website for J. Dean Goldstein's creative works.

# Developing

### First time install

```bash
yarn install
```

### Run the dev website
Use this when changes are in progress and realtime updates are required. 

```bash
yarn run dev
```

> NOTE: When testing, you may notice that styles flash when the page initially loads. This can be ignored as it shouldn't happen when the final website host is compiled.

# Building

### Build and preview the final website
Use this when changes are not in progress, and the website should be actually built for final testing.

First, build `jdg-website` locally:

```bash
yarn build
```
Then host it locally for viewing:
```bash
yarn preview
```
> NOTE: When testing, you may notice that styles flash when the page initially loads. This can be ignored as it shouldn't happen when the final website host is compiled.

>NOTE: If changes are made after building, cancel the preview server, and run `yarn build` and `yarn preview` again to ensure the latest version of the website is built.

# Testing `jdg-ui-svelte` locally

This website uses [`jdg-ui-svelte`](https://www.npmjs.com/package/jdg-ui-svelte) and if that package is also being updated locally, be sure to test this website with that latest package.

First, create a link in the `jdg-ui-svelte` repo:

```bash
yarn link
```
Then, switch to the `jdg-website` repo and run:

```bash
yarn link jdg-ui-svelte
```

If you want to use the official package (not the linked one), be sure to un-link:

```bash
yarn unlink jdg-ui-svelte
```