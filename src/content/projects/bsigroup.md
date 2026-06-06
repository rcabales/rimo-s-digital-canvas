## The Brief

BSI is the UK's national standards body, operating across 195 countries with over 5,200 employees. The project was a complete redesign and rebuild, a significant undertaking given the scale of their content, the complexity of their service offering, and the need to hand off to an internal back-end team building a bespoke CMS.

![BSI screenshot](/projects/bsi/bsi1.png)

## My Role

I was one of two front-end specialists embedded in a larger cross-functional team. Our responsibility was building the front-end component library, a wide range of reusable UI components that the back-end team would then integrate with their CMS. Working at this scale meant the component architecture had to be airtight. Anything poorly structured would compound problems downstream.

![BSI screenshot](/projects/bsi/bsi2.png)

## Technical Decisions

We kept the front end deliberately lean, vanilla JavaScript with a small number of carefully chosen libraries. At BSI's scale, unnecessary dependencies are a maintenance liability. We worked closely with the design team throughout, providing input on accessibility and UX, not just implementing what was handed to us but pushing back where patterns created problems.

## What I'd Do Differently

The handoff boundary between front-end components and the back-end CMS integration created friction that surfaced late. I'd advocate earlier for a shared contract, agreed data structures and component API expectations, before the build starts rather than resolving mismatches at integration stage.