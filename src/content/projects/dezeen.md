## The Brief

Dezeen is one of the most widely read architecture and design publications online, founded in 2006 and headquartered in London. A site at this scale accumulates years of technical debt — the brief was a complete redesign and rebuild, which meant the opportunity to strip out legacy code that had been compounding maintenance costs for years.

![Dezeen screenshot](/projects/dezeen/dezeen1.png)

## My Role

I paired with a back-end developer as one half of a two-person build team, working predominantly on the front end. That pairing structure meant fast feedback loops and tight integration between layers — when something wasn't working at the seam between front and back end, we resolved it between ourselves rather than through a handoff process.

![Dezeen screenshot](/projects/dezeen/dezeen2.png)

## Technical Decisions

A publication at Dezeen's scale has performance requirements that most sites don't. Content volume is high, page types are varied, and the audience expects fast load times. The rebuild gave us the opportunity to make deliberate choices about what got loaded and when — rather than inheriting the accumulated decisions of years of iterative additions to the previous codebase.

## What I'd Do Differently

Working on a high-traffic publication teaches you quickly where the gaps in your performance thinking are. I'd approach the image and asset pipeline earlier in the project — it tends to get treated as an optimisation phase problem when it's really an architecture decision that's harder to retrofit later.