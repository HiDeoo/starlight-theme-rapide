---
'starlight-theme-rapide': minor
---

Groups all of the Starlight Rapide theme CSS declarations into a single `rapide` [cascade layer](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers).

This change aligns with the Starlight CSS architecture and allows for easier customization of the Starlight Rapide theme CSS as any custom unlayered CSS will override the default styles. If you are using cascade layers in your custom CSS, you can use the [`@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) CSS at-rule to define the order of precedence for different layers including the ones used by Starlight and the Starlight Rapide theme.

Make sure to check your site’s appearance when upgrading to make sure there are no style regressions caused by this change.
