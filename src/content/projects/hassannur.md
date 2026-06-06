## The Brief

Hassan Nur is a London-based 3D digital artist targeting the games industry. The requirement was a portfolio site that could handle a large volume of high-quality images and video without degrading performance — a harder problem than it sounds when the content itself is the product.

![Hassan Nur screenshot](/projects/hassannur/hassannur1.png)

## Stack Decision

I chose React with Sanity.io as the CMS — my first production deployment of both. The decision was deliberate: Sanity's structured content model was a better fit for a media-heavy portfolio than a traditional WordPress setup, and React gave me component-level control over how assets loaded and rendered. The trade-off was working through both tools simultaneously on a live project.

![Hassan Nur screenshot](/projects/hassannur/hassannur2.png)

## Solving the Performance Problem

The core challenge was visual quality versus load time. 3D renders are large files; a portfolio that loads slowly undermines the work it's meant to showcase. I solved the video problem by hosting on YouTube and embedding throughout — offloading the heaviest assets to infrastructure built for exactly that purpose rather than serving them directly. Images were handled through Sanity's asset pipeline with explicit attention to format and sizing.

## What I'd Do Differently

Approaching React and Sanity simultaneously meant some of my early component decisions reflected uncertainty about both tools rather than considered architectural choices. With the knowledge I have now, I'd structure the content model differently — particularly around project categorisation — to make filtering and grouping work more cleanly. The YouTube embedding approach I'd keep; it was the right call.