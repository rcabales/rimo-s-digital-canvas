## The Brief

Buster + Punch is a London-born luxury hardware brand with a strong visual identity rooted in fashion, music, and subculture. After prototyping several approaches, the client committed to WordPress with WooCommerce — a reasonable choice given the product catalogue complexity and the content team's existing familiarity with WordPress.

![Buster and Punch screenshot](/projects/busterandpunch/busterandpunch1.png)

## My Role

I owned the non-e-commerce sections of the site, primarily the editorial and blog areas, handling both front-end and back-end development. The split architecture — WooCommerce handling commerce, custom WordPress handling editorial — required clear boundaries to avoid the two bleeding into each other in ways that would create maintenance headaches.

![Buster and Punch screenshot](/projects/busterandpunch/busterandpunch2.png)

## Technical Decisions

The brand's visual identity is strong and unconventional — the technical challenge was implementing it faithfully without producing a site that looked good in Figma but performed poorly in production. I worked closely with the design team to establish a consistent design language across the editorial sections, and pushed back on a handful of patterns that would have created accessibility issues without meaningful visual payoff.

## What I'd Do Differently

The editorial and e-commerce split was managed well structurally, but the two codebases diverged in places where they should have shared patterns. Earlier alignment on shared components — particularly typography and spacing utilities — would have reduced duplication and made the eventual handoff cleaner.