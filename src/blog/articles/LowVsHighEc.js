import React from "react";
import { H2, H3, P, UL, DataTable, Callout, CtaBox, ProductLink, QuoteLink } from "../ui";

// Article 1 — Focus keyword: "low EC coco peat wholesale supplier"
export default function LowVsHighEc() {
  return (
    <>
      <P>
        When a commercial greenhouse loses a crop of tomatoes or berries, the post-mortem almost
        always lands on one number: electrical conductivity, or EC. It is the single most important
        specification on a coco peat datasheet, and it is the fastest way to tell a premium substrate
        apart from a cheap one. If you are sourcing at container volume, understanding the difference
        between low EC and high EC coco peat is the difference between a reliable growing season and a
        very expensive mistake. This guide breaks it down from a procurement point of view, so you
        know exactly what to specify, how to verify it, and when a lower price is really a hidden cost.
      </P>

      <H2 id="what-is-ec">What EC Actually Measures in Coco Peat</H2>
      <P>
        Coconut coir is naturally grown in coastal regions, so raw coir pith carries a load of soluble
        salts — mainly sodium and potassium chlorides absorbed from seawater and soil. Electrical
        conductivity measures how many of those dissolved salts remain in the material. The higher the
        EC, the more background salt your plants have to fight through before they can take up the
        nutrients you feed them. For salt-sensitive crops, a high starting EC effectively poisons the
        root zone.
      </P>
      <P>
        There is an important catch for buyers: EC numbers are meaningless without the extraction
        method. A "1:1.5" reading (one part substrate to 1.5 parts water) produces a much higher
        number than a "1:5" or "1:6" pour-through reading of the same material. Always confirm which
        method a supplier used before you compare two datasheets — otherwise you may reject good
        material or accept poor material on a technicality.
      </P>

      <H2 id="comparison">Low EC vs. High EC: The Specification Table</H2>
      <P>
        The table below compares the three grades PPM ships most often. Note how EC, expansion volume
        and end-use are linked — you are not simply buying "coco peat," you are buying a grade matched
        to a crop.
      </P>
      <DataTable
        head={["Specification", "Washed Low EC Block", "Buffered Coir (bags/slabs)", "Unwashed High EC Pith"]}
        rows={[
          ["EC level", "< 0.5 mS/cm (1:1.5)", "< 0.8 mS/cm", "1.5 – 2.5 mS/cm"],
          ["pH range", "5.5 – 6.8", "5.8 – 6.5", "5.5 – 6.8"],
          ["Expansion", "75 – 80 L / block", "Pre-hydrated format", "70 – 75 L / block"],
          ["Moisture", "10 – 15% max", "As packed", "< 18%"],
          ["Sand / impurity", "< 3%", "< 3%", "Higher"],
          ["Best for", "Nurseries, potting, open field", "Greenhouse hydroponics", "Animal bedding, soil conditioning"],
        ]}
        caption="Typical export specifications. Always request a batch-specific lab report."
      />

      <H2 id="buffering">Washed, Unwashed and Buffered — Know the Three Terms</H2>
      <P>
        Buyers often use "low EC" and "buffered" interchangeably. They are not the same thing, and the
        distinction matters when you are writing a purchase specification.
      </P>
      <H3>Unwashed (high EC)</H3>
      <P>
        Raw coir pith straight from the coconut, with its natural salts intact. It is the cheapest
        grade and perfectly good for animal bedding, mushroom substrate, bulk soil conditioning and
        salt-tolerant field crops — applications where a bit of background salinity does no harm.
      </P>
      <H3>Washed (low EC)</H3>
      <P>
        The pith is rinsed with fresh water to flush out the soluble salts, dropping EC below roughly
        0.5 mS/cm. This is the workhorse grade for nurseries, potting mixes, landscaping and general
        horticulture.
      </P>
      <H3>Buffered</H3>
      <P>
        Buffering is a chemical step, not just a rinse. The coir is soaked in a calcium nitrate
        solution so that calcium and magnesium ions permanently displace the sodium and potassium
        clinging to the coir's cation exchange sites. Without buffering, those bound ions release later
        — right when you start feeding — and lock out calcium and magnesium from your plants. That is
        why fully buffered coir is the non-negotiable standard for professional grow bags and slabs
        growing tomatoes, cucumbers, capsicum and berries.
      </P>
      <Callout>
        <strong>Procurement rule of thumb:</strong> if the crop is going into a controlled greenhouse
        and being fed a precise nutrient solution, specify buffered coir. If it is going into soil or a
        forgiving potting mix, washed low EC is usually enough. Only choose unwashed high EC when
        salinity genuinely does not matter.
      </Callout>

      <H2 id="cost">Why the Cheapest Block Is Rarely the Cheapest Substrate</H2>
      <P>
        High EC pith always quotes lower per block, and for the wrong buyer that headline price is a
        trap. Three hidden costs turn a cheap block expensive:
      </P>
      <UL>
        <li>
          <strong>Crop risk.</strong> A single failed hydroponic cycle costs far more than the entire
          substrate order. Salt stress shows up as stunted growth and nutrient deficiencies that are
          hard to diagnose in-season.
        </li>
        <li>
          <strong>Extra processing at your end.</strong> If you buy unwashed material for a
          salt-sensitive use, you have to wash and buffer it yourself — labour, water and time you have
          now paid for twice.
        </li>
        <li>
          <strong>Inconsistency.</strong> Poorly processed pith varies block to block, so your feed
          program never stabilises. Consistency is worth paying for.
        </li>
      </UL>
      <P>
        The right frame is cost per usable litre of the correct grade, landed at your facility — not
        price per block. See how the grades map to end use in our <ProductLink>product range</ProductLink>.
      </P>

      <H2 id="verify">How to Verify Quality Before You Order a Container</H2>
      <P>
        A credible low EC coco peat wholesale supplier will never ask you to take EC on faith. Build
        these four checks into your sourcing process:
      </P>
      <UL>
        <li><strong>Recent lab report.</strong> Batch-specific, showing EC, pH, moisture and sand/impurity — with the extraction method stated.</li>
        <li><strong>Paid sample block.</strong> Hydrate it, measure EC yourself with a pour-through test, and check for consistent expansion and low grit.</li>
        <li><strong>Written specification in the contract.</strong> EC ceiling, pH band, moisture cap and impurity limit, so off-spec deliveries are your recourse, not your loss.</li>
        <li><strong>Pre-shipment inspection.</strong> For large or first-time orders, a third-party inspection at the loading port is cheap insurance.</li>
      </UL>

      <H2 id="markets">Matching Grade to Market</H2>
      <P>
        Different import markets skew toward different grades. Greenhouse-heavy regions such as the
        Netherlands, South Korea and parts of the United States pull mostly buffered slabs and low EC
        blocks for hydroponics, while blenders in the US, Australia and New Zealand buy washed low EC
        in bulk for potting-soil manufacture. Knowing your downstream customer tells you which grade to
        specify — and lets your supplier optimise the load for you.
      </P>

      <CtaBox
        heading="Not sure which grade your crop needs?"
        sub="Send us your crop and growing system and we'll recommend the right EC grade, share a lab report, and ship a sample block for testing."
      />
      <P>
        Ready to move forward? <QuoteLink>Request a quote</QuoteLink> with your target grade and volume,
        and we'll come back with FOB/CIF pricing and lead times.
      </P>
    </>
  );
}
