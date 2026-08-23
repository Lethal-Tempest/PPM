import React from "react";
import { H2, H3, P, UL, DataTable, Callout, CtaBox, ProductLink, QuoteLink } from "../ui";

// Article 6 — Focus keyword: "coco peat for strawberries"
export default function CocoForBerries() {
  return (
    <>
      <P>
        Strawberries and tomatoes are two of the most valuable crops grown in coir worldwide — and both
        are unforgiving about substrate quality. Get the coco peat right and you get uniform, high-yield
        plants on a predictable feed program. Get it wrong and you fight salt stress and calcium
        deficiency all season. This guide explains how to choose and use coco peat for strawberries and
        tomatoes in commercial production.
      </P>

      <H2 id="why-coir">Why Growers Choose Coir for Berries and Tomatoes</H2>
      <UL>
        <li><strong>Air and water balance:</strong> coir holds ample water while keeping air around the roots, which berries especially need.</li>
        <li><strong>Clean and disease-free:</strong> a fresh, sterile root zone reduces soil-borne disease pressure.</li>
        <li><strong>Precision control:</strong> in an inert medium you control exactly what the plant is fed — essential for high-wire tomato and tabletop strawberry systems.</li>
        <li><strong>Consistency:</strong> uniform substrate means uniform plants, which matters for labour and harvest scheduling.</li>
      </UL>

      <H2 id="which-grade">Which Coco Peat Grade to Use</H2>
      <P>
        For both crops, <strong>fully buffered coir</strong> is the professional standard. Buffering
        pre-loads the coir with calcium and magnesium so it won't strip those nutrients from your feed
        during the critical early weeks — the classic cause of blossom-end rot in tomatoes and weak,
        pale strawberry plants.
      </P>
      <DataTable
        head={["Crop", "Recommended grade", "Target EC", "Target pH"]}
        rows={[
          ["Strawberries", "Buffered coir (blocks/bags)", "< 0.8 mS/cm", "5.8 – 6.2"],
          ["Tomatoes", "Buffered coir slabs", "< 0.8 mS/cm", "5.8 – 6.5"],
        ]}
        caption="Always start with a batch lab report confirming EC and pH before planting."
      />
      <Callout>
        <strong>Why not unwashed coir?</strong> High-EC coir carries background salt that competes with
        nutrient uptake and stresses berries in particular. If salt-sensitivity matters — and for
        strawberries it very much does — specify washed low-EC or buffered product. See our{" "}
        <ProductLink>grade comparison</ProductLink> for the full picture.
      </Callout>

      <H2 id="strawberries">Growing Strawberries in Coco Peat</H2>
      <P>
        Strawberries are typically grown in coir on raised tabletop systems in grow bags or blocks. Keys
        to success:
      </P>
      <UL>
        <li>Use buffered coir with a stable, low EC to protect young runners.</li>
        <li>Maintain pH around 5.8–6.2 for strong iron and micronutrient availability.</li>
        <li>Ensure good drainage — berries hate wet feet; coir's air porosity helps here.</li>
        <li>Feed a complete solution with adequate calcium for firm, shelf-stable fruit.</li>
      </UL>

      <H2 id="tomatoes">Growing Tomatoes in Coco Peat</H2>
      <P>
        High-wire tomatoes are commonly grown on coir slabs. Priorities:
      </P>
      <UL>
        <li>Use buffered slabs sized to your system for consistent root volume per plant.</li>
        <li>Keep EC controlled and steady; spikes drive blossom-end rot and cracking.</li>
        <li>Supply consistent calcium and magnesium — non-negotiable for tomato fruit quality.</li>
        <li>Manage irrigation frequency to hold the slab in the ideal moisture band without saturation.</li>
      </UL>

      <H2 id="common-issues">Avoiding the Two Classic Problems</H2>
      <H3>Calcium deficiency / blossom-end rot</H3>
      <P>
        Usually traced to unbuffered coir stripping calcium, unstable EC, or irrigation swings. Buffered
        coir plus steady feeding and moisture largely prevents it.
      </P>
      <H3>Salt stress</H3>
      <P>
        Shows as stunted growth and leaf-edge burn. The fix is upstream: buy low-EC or buffered coir and
        verify it with a lab report before the crop goes in.
      </P>

      <CtaBox
        heading="Sourcing coir for a strawberry or tomato crop?"
        sub="We supply buffered, lab-tested coir blocks, bags and slabs built for berry and tomato hydroponics — with a free sample and batch report before you commit."
      />
      <P>
        Tell us your crop, system and volume and <QuoteLink>request a quote</QuoteLink> — we'll recommend
        the exact grade and ship a sample to trial.
      </P>
    </>
  );
}
