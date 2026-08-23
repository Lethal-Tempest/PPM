import React from "react";
import { H2, H3, P, UL, OL, DataTable, Callout, CtaBox, ProductLink, QuoteLink } from "../ui";

// Article 2 — Focus keyword: "5kg coco peat blocks export container capacity"
export default function ContainerLoading() {
  return (
    <>
      <P>
        Two importers can buy the exact same 5kg coco peat block at the exact same price per block and
        still end up with landed costs that differ by double-digit percentages. The reason is almost
        never the product — it is how the container was loaded. Palletized versus floor-loaded, weight
        versus volume, moisture versus usable substrate: these logistics decisions quietly decide your
        cost per litre. This guide walks through 5kg coco peat block export container capacity so you
        can plan freight, unloading and warehousing before you place the order.
      </P>

      <H2 id="the-block">Start With the Block: Weight and Expansion</H2>
      <P>
        A standard export block weighs 5.0 kg with a ±0.2 kg tolerance, compressed at roughly 5:1 from
        loose pith. When hydrated, a washed low EC block expands to about 75–80 litres of usable
        substrate — a volume multiplication of around 15:1. That expansion is the whole point of
        shipping compressed blocks: you are paying to move dense, dry material and letting water do the
        expansion at destination.
      </P>
      <Callout>
        <strong>Watch the moisture spec.</strong> Blocks should ship at 10–15% moisture. Every extra
        percentage point of water is weight you pay freight on without gaining any usable substrate.
        Cap moisture in your contract.
      </Callout>

      <H2 id="capacity">40ft HC Container Capacity: The Numbers</H2>
      <P>
        Nearly all coco peat moves in a 40ft High Cube (HC) container. How much fits depends entirely
        on whether the cargo is floor-loaded or palletized, and on whether you hit the volume limit or
        the weight limit first.
      </P>
      <DataTable
        head={["Loading method", "Blocks / 40ft HC", "Net weight", "Unloading"]}
        rows={[
          ["Floor loaded", "4,400 – 5,000 blocks", "Up to ~26 MT", "Manual, several hours"],
          ["Palletized (20 pallets)", "~4,400 – 4,800 blocks", "~22 – 24 MT", "Forklift, minutes"],
        ]}
        caption="Palletized loads carry 220–240 blocks per pallet across ~20 pallets."
      />
      <P>
        Floor-loading squeezes in the most blocks and the most weight, which lowers freight per block.
        Palletizing sacrifices a little capacity and adds pallet fees, but transforms unloading from a
        multi-hour manual job into minutes with a forklift, while dramatically reducing block breakage
        and labour cost at your end.
      </P>

      <H2 id="pallet-vs-floor">Palletized vs. Floor-Loaded: Which Is Right for You?</H2>
      <H3>Choose floor-loaded if…</H3>
      <UL>
        <li>You are moving high volume and freight-per-block is your dominant cost.</li>
        <li>You have cheap labour available to unload manually.</li>
        <li>You will re-compress or blend the material anyway, so minor edge breakage is irrelevant.</li>
      </UL>
      <H3>Choose palletized if…</H3>
      <UL>
        <li>You have forklifts, racking and a tight dock schedule.</li>
        <li>You resell blocks intact and cannot afford breakage or contamination.</li>
        <li>Your labour is expensive and dock time is costly.</li>
      </UL>
      <P>
        In practice, large soil blenders often take floor-loaded to shave freight, while distributors
        reselling pallets to garden centres prefer palletized. Both grades are available across our
        <ProductLink> product range</ProductLink>.
      </P>

      <H2 id="yield">Container Yield: From Blocks to Litres</H2>
      <P>
        The figure that actually matters to your customer is litres of finished substrate, not blocks.
        Here is the math on a representative floor-loaded container:
      </P>
      <DataTable
        head={["Metric", "Value"]}
        rows={[
          ["Blocks in 40ft HC (floor loaded)", "~4,800"],
          ["Expansion per block", "~75 L"],
          ["Total usable substrate", "~360,000 L"],
          ["Approx. net cargo weight", "~24 MT"],
        ]}
        caption="Illustrative figures for washed low EC blocks; actual yield varies by grade and moisture."
      />
      <P>
        A single container therefore yields well over a third of a million litres of growing media —
        which is why getting the load configuration right has such a large effect on your final cost
        per litre.
      </P>

      <H2 id="ports">Loading Ports and Lead Time</H2>
      <P>
        Indian coir is typically consolidated and shipped through the southern ports of Tuticorin,
        Chennai and Cochin, which sit close to the coconut-growing belt. When you plan an order,
        confirm three things up front:
      </P>
      <OL>
        <li><strong>Loading port and transit time</strong> to your destination port, so you can schedule storage.</li>
        <li><strong>Incoterms</strong> — whether you are quoting FOB (you arrange main freight) or CIF (the supplier does), which changes who controls cost and risk.</li>
        <li><strong>Documentation lead time</strong> for phytosanitary and fumigation certificates, which must be ready before the vessel sails.</li>
      </OL>

      <H2 id="checklist">Pre-Order Logistics Checklist</H2>
      <UL>
        <li>Confirm loading method (floor vs pallet) and resulting block count and net weight.</li>
        <li>Cap moisture content in writing to protect your freight-per-litre.</li>
        <li>Verify your unloading capability matches the load type.</li>
        <li>Agree Incoterms and loading port before pricing.</li>
        <li>Line up documentation so certificates don't delay the sailing.</li>
      </UL>

      <CtaBox
        heading="Planning your first container of coco peat?"
        sub="Tell us your destination port and unloading setup and we'll recommend the optimal load configuration with FOB/CIF pricing."
      />
      <P>
        When you're ready, <QuoteLink>request a quote</QuoteLink> with your destination port and target
        volume and we'll model the best-value load for you.
      </P>
    </>
  );
}
