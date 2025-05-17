# starlight-theme-rapide

## 0.5.1

### Patch Changes

- [#28](https://github.com/HiDeoo/starlight-theme-rapide/pull/28) [`a77f5d2`](https://github.com/HiDeoo/starlight-theme-rapide/commit/a77f5d252235adc8035ef09458c4b12244e18030) Thanks [@HiDeoo](https://github.com/HiDeoo)! - Fixes a banner position issue when using a banner in pages with a sidebar.

## 0.5.0

### Minor Changes

- [#23](https://github.com/HiDeoo/starlight-theme-rapide/pull/23) [`b4cf090`](https://github.com/HiDeoo/starlight-theme-rapide/commit/b4cf0902f4ce1ddbec5a00a19c8d298a5204eddf) Thanks [@HiDeoo](https://github.com/HiDeoo)! - ⚠️ **BREAKING CHANGE:** The minimum supported version of Starlight is now version `0.34.0`.

  Please use the `@astrojs/upgrade` command to upgrade your project:

  ```sh
  npx @astrojs/upgrade
  ```

- [#23](https://github.com/HiDeoo/starlight-theme-rapide/pull/23) [`b4cf090`](https://github.com/HiDeoo/starlight-theme-rapide/commit/b4cf0902f4ce1ddbec5a00a19c8d298a5204eddf) Thanks [@HiDeoo](https://github.com/HiDeoo)! - Groups all of the Starlight Rapide theme CSS declarations into a single `rapide` [cascade layer](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers).

  This change aligns with the Starlight CSS architecture and allows for easier customization of the Starlight Rapide theme CSS as any custom unlayered CSS will override the default styles. If you are using cascade layers in your custom CSS, you can use the [`@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) CSS at-rule to define the order of precedence for different layers including the ones used by Starlight and the Starlight Rapide theme.

  Make sure to check your site’s appearance when upgrading to make sure there are no style regressions caused by this change.

- [#23](https://github.com/HiDeoo/starlight-theme-rapide/pull/23) [`b4cf090`](https://github.com/HiDeoo/starlight-theme-rapide/commit/b4cf0902f4ce1ddbec5a00a19c8d298a5204eddf) Thanks [@HiDeoo](https://github.com/HiDeoo)! - Adds custom styles for clickable anchor links for headings when the Starlight [`markdown.headingLinks`](https://starlight.astro.build/reference/configuration/#headinglinks) configuration option is enabled.

- [#23](https://github.com/HiDeoo/starlight-theme-rapide/pull/23) [`b4cf090`](https://github.com/HiDeoo/starlight-theme-rapide/commit/b4cf0902f4ce1ddbec5a00a19c8d298a5204eddf) Thanks [@HiDeoo](https://github.com/HiDeoo)! - Updates the styling of top-level sidebar links to be more consistent with other sidebar links.

- [#23](https://github.com/HiDeoo/starlight-theme-rapide/pull/23) [`b4cf090`](https://github.com/HiDeoo/starlight-theme-rapide/commit/b4cf0902f4ce1ddbec5a00a19c8d298a5204eddf) Thanks [@HiDeoo](https://github.com/HiDeoo)! - Removes component overrides for the Starlight `<Banner>` and `<PageTitle>` components.

  Previously, the Starlight Rapide theme included overrides for these components to tweak the appearance of [announcement banners](https://starlight.astro.build/reference/frontmatter/#banner) displayed at the top of the page. These changes are now entirely CSS-based without any component overrides.

### Patch Changes

- [#23](https://github.com/HiDeoo/starlight-theme-rapide/pull/23) [`b4cf090`](https://github.com/HiDeoo/starlight-theme-rapide/commit/b4cf0902f4ce1ddbec5a00a19c8d298a5204eddf) Thanks [@HiDeoo](https://github.com/HiDeoo)! - Fixes an issue where pagination links were visible when printing.

- [#23](https://github.com/HiDeoo/starlight-theme-rapide/pull/23) [`b4cf090`](https://github.com/HiDeoo/starlight-theme-rapide/commit/b4cf0902f4ce1ddbec5a00a19c8d298a5204eddf) Thanks [@HiDeoo](https://github.com/HiDeoo)! - Fixes an issue where nested user-defined Expressive Code settings were not being applied correctly.

## 0.4.0

### Minor Changes

- [#18](https://github.com/HiDeoo/starlight-theme-rapide/pull/18) [`6acf10f`](https://github.com/HiDeoo/starlight-theme-rapide/commit/6acf10f9658c1d28ba9153a958a2f672436fd8ea) Thanks [@HiDeoo](https://github.com/HiDeoo)! - ⚠️ **BREAKING CHANGE:** The minimum supported version of Starlight is now version `0.32.0`.

  Please use the `@astrojs/upgrade` command to upgrade your project:

  ```sh
  npx @astrojs/upgrade
  ```

## 0.3.0

### Minor Changes

- [#16](https://github.com/HiDeoo/starlight-theme-rapide/pull/16) [`5ea2109`](https://github.com/HiDeoo/starlight-theme-rapide/commit/5ea2109e630125e8dc6f69f0c9685d0feb7aa119) Thanks [@HiDeoo](https://github.com/HiDeoo)! - Adds support for Astro v5, drops support for Astro v4.

  ⚠️ **BREAKING CHANGE:** The minimum supported version of Starlight is now `0.30.0`.

  Please follow the [upgrade guide](https://github.com/withastro/starlight/releases/tag/%40astrojs/starlight%400.30.0) to update your project.
