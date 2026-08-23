import React from "react";
import { H2, H3, P, UL, DataTable, Callout, CtaBox, ProductLink, QuoteLink } from "../ui";

// Article 4 — Focus keyword: "coco peat vs peat moss"
export default function CocoVsPeatMoss() {
  return (
    <>
      <P>
        For decades, peat moss was the default growing medium in professional horticulture. Today,
        more and more growers and soil blenders are switching to coco peat (coir). The reasons are
        partly environmental and partly practical — and if you buy substrate at volume, the
        differences directly affect your cost, your crop and your brand's sustainability story. Here is
        an honest, side-by-side look at coco peat vs. peat moss.
      </P>

      <H2 id="what-they-are">What They Are</H2>
      <P>
        <strong>Peat moss</strong> is decomposed sphagnum moss harvested from peat bogs that take
        thousands of years to form. <strong>Coco peat</strong> (also called coir pith or coco coir) is
        made from the fibrous husk of coconuts — a renewable by-product of the coconut industry that
        would otherwise be waste. That origin story is the root of most of the practical differences
        below.
      </P>

      <H2 id="comparison">Coco Peat vs. Peat Moss: Side by Side</H2>
      <DataTable
        head={["Property", "Coco Peat (Coir)", "Peat Moss"]}
        rows={[
          ["Renewability", "Renewable (annual coconut crop)", "Non-renewable (millennia to form)"],
          ["pH", "5.5 – 6.8 (near neutral)", "3.5 – 4.5 (acidic, needs liming)"],
          ["Rewetting", "Rehydrates easily", "Hard to rewet once dry"],
          ["Water retention", "Excellent", "Excellent"],
          ["Aeration / drainage", "Superior, more air porosity", "Good but compacts over time"],
          ["Lifespan in mix", "Longer, resists breakdown", "Breaks down faster"],
          ["Shipping", "Compressed blocks (~15:1)", "Bulky bales"],
          ["Environmental impact", "Low; uses a waste stream", "High; bog destruction, carbon release"],
        ]}
      />

      <H2 id="ph">The pH Difference Matters for Your Feed Program</H2>
      <P>
        Peat moss is strongly acidic (pH 3.5–4.5), so growers must add lime to bring it into a usable
        range — an extra input and an extra variable. Coco peat sits naturally around pH 5.5–6.8, close
        to ideal for most crops, which makes nutrient management simpler and more predictable. For a
        blender, fewer amendments means a more consistent finished product.
      </P>

      <H2 id="rewetting">Rewetting and Water Behaviour</H2>
      <P>
        One of peat moss's biggest practical frustrations is that once it dries out, it becomes
        hydrophobic and resists taking up water again. Coco peat rehydrates readily even after drying,
        which reduces crop stress and makes it far more forgiving in irrigation. Both hold water well,
        but coir generally offers better air porosity, protecting roots from waterlogging.
      </P>

      <Callout>
        <strong>The one thing to manage with coir:</strong> because coconuts grow near the coast, raw
        coir carries salts. That's exactly why you buy <ProductLink>washed low-EC or buffered coir</ProductLink>{" "}
        — the salt is already removed and, in buffered product, the cation sites are pre-loaded with
        calcium and magnesium. See our full breakdown of EC grades if you're specifying substrate.
      </Callout>

      <H2 id="sustainability">Sustainability: A Real Commercial Advantage</H2>
      <P>
        Peat bogs are major carbon sinks, and harvesting them releases stored carbon while destroying
        habitat — which is why several countries are moving to restrict or ban peat use in horticulture.
        Coco peat repurposes a by-product of an existing food crop. For growers and retailers, "peat-free"
        is increasingly a selling point with customers and a hedge against future regulation.
      </P>

      <H2 id="cost">Cost and Logistics</H2>
      <P>
        Coco peat's compression is a logistics win: a 5kg block ships dense and dry, then expands to
        75–80 litres on-site — roughly 15 times its shipped volume. That means dramatically lower
        freight cost per usable litre compared with shipping bulky peat bales. For importers and
        blenders, this is often the deciding factor once quality is equal.
      </P>

      <H2 id="verdict">The Verdict</H2>
      <P>
        Peat moss still performs well and remains familiar, but coco peat matches or beats it on pH
        convenience, rewetting, aeration, shipping economics and sustainability — provided you buy a
        properly washed or buffered grade. For most commercial operations making the switch, coir is
        the future-proof choice.
      </P>

      <CtaBox
        heading="Switching from peat moss to coco coir?"
        sub="We'll help you match the right washed or buffered grade to your mix and ship a sample block with a lab report so you can trial it against your current medium."
      />
      <P>
        Ready to trial coir? <QuoteLink>Request a quote and free sample</QuoteLink> and we'll get you
        set up.
      </P>
    </>
  );
}
