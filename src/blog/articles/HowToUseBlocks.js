import React from "react";
import { H2, H3, P, UL, OL, DataTable, Callout, CtaBox, ProductLink, QuoteLink } from "../ui";

// Article 5 — Focus keyword: "how to use coco peat blocks"
export default function HowToUseBlocks() {
  return (
    <>
      <P>
        A compressed coco peat block looks nothing like the fluffy growing medium you'll actually use —
        and that surprises a lot of first-time buyers. Getting from a hard 5kg brick to a healthy root
        zone is simple once you know the steps. This guide covers how to use coco peat blocks: hydration,
        expansion ratios, mixing and storage, so your team gets consistent results every time.
      </P>

      <H2 id="expansion">How Much Does a Block Expand?</H2>
      <P>
        Coco peat is compressed roughly 5:1 for shipping, but it's the water that does the real work. A
        standard 5kg washed block expands to about 75–80 litres of usable substrate — around 15 times
        its shipped volume. Planning your hydration space and water volume around that ratio is the
        first step.
      </P>
      <DataTable
        head={["Block", "Water needed", "Approx. yield"]}
        rows={[
          ["5kg washed low-EC block", "~20–25 litres", "75–80 litres"],
          ["650g mini brick", "~2.5–3 litres", "8–9 litres"],
        ]}
        caption="Use warm water to speed expansion; cold water works but takes longer."
      />

      <H2 id="hydration">Step-by-Step Hydration</H2>
      <OL>
        <li>Place the block in a large tub, wheelbarrow or mixing bin with room to expand (it grows a lot).</li>
        <li>Add warm water gradually — roughly 4–5 litres of water per kg of block.</li>
        <li>Wait 15–30 minutes. The block will swell and start breaking apart.</li>
        <li>Fluff it with a fork or by hand, breaking up any remaining dense lumps.</li>
        <li>Check the texture: it should be moist and crumbly, holding together lightly when squeezed but not dripping.</li>
      </OL>
      <Callout>
        <strong>Don't overwater.</strong> If it's soggy, add more dry coir or let it drain. Coir holds a
        lot of water, and a waterlogged mix starves roots of oxygen — one of the few ways to get coir wrong.
      </Callout>

      <H2 id="buffered">Do You Need to Buffer or Rinse First?</H2>
      <P>
        It depends on the grade you bought:
      </P>
      <UL>
        <li><strong>Buffered coir</strong> — ready to use. It's already calcium-treated, so plant straight away.</li>
        <li><strong>Washed low-EC coir</strong> — ready for most uses; for very sensitive hydroponic crops you may still buffer with a calcium-magnesium solution.</li>
        <li><strong>Unwashed / high-EC coir</strong> — rinse thoroughly (and ideally buffer) before use with salt-sensitive plants; fine as-is for bedding or salt-tolerant field crops.</li>
      </UL>
      <P>
        Not sure which grade you have or need? Our guide to <ProductLink>EC grades</ProductLink> explains
        the difference.
      </P>

      <H2 id="mixing">Using It: Straight or Blended</H2>
      <H3>As a standalone medium</H3>
      <P>
        For hydroponics and container growing, hydrated coir can be used on its own or with added perlite
        (commonly 70% coir / 30% perlite) for extra drainage. Feed with a complete nutrient solution,
        including calcium and magnesium.
      </P>
      <H3>As a soil amendment</H3>
      <P>
        For garden beds and potting mixes, blend coir in at 10–40% to improve water retention and
        structure. It lightens heavy soils and helps sandy soils hold moisture.
      </P>

      <H2 id="storage">Storing Blocks and Hydrated Coir</H2>
      <UL>
        <li><strong>Dry blocks:</strong> keep in a dry, covered area off the ground. They store for a long time and are easy to stack — a big advantage over bulky media.</li>
        <li><strong>Hydrated coir:</strong> use promptly; if storing, keep it covered and moist. Avoid letting it fully dry and re-wet repeatedly.</li>
      </UL>

      <H2 id="mistakes">Common Mistakes to Avoid</H2>
      <UL>
        <li>Hydrating in too small a container (it overflows — it really does expand 15x).</li>
        <li>Overwatering the final mix and suffocating roots.</li>
        <li>Using unwashed high-EC coir on sensitive crops without rinsing/buffering.</li>
        <li>Skipping calcium/magnesium in the feed — coir can bind these if not buffered.</li>
      </UL>

      <CtaBox
        heading="Buying coco peat blocks in bulk?"
        sub="We supply washed low-EC and ready-to-use buffered blocks by the container, with a lab report and free sample so your team can test hydration and quality first."
      />
      <P>
        Need volume pricing? <QuoteLink>Request a quote</QuoteLink> and tell us your grade and quantity.
      </P>
    </>
  );
}
