import React from "react";
import { H2, H3, P, UL, OL, DataTable, Callout, CtaBox, ProductLink, QuoteLink } from "../ui";

// Article 3 — Focus keyword: "import coco coir from India"
export default function ImportFromIndia() {
  return (
    <>
      <P>
        India is one of the world's largest suppliers of coir, and for good reason: abundant raw
        material, mature processing and competitive pricing. But the moment you decide to import coco
        coir from India, the product stops being the hard part — the paperwork does. A single missing
        phytosanitary certificate or a wrong HS code can hold your container at the destination port,
        rack up demurrage charges and delay your growing season. This guide is the compliance checklist
        we wish every first-time importer had: the documents, the testing and the codes that keep your
        cargo moving.
      </P>

      <H2 id="hs-code">Get the HS Code Right: 53050040</H2>
      <P>
        Coir pith and coco peat are classified under HS (HSN) code <strong>53050040</strong>. This code
        must appear correctly on your commercial invoice and packing list. It determines the duty rate
        applied in the destination country and is the first thing customs checks. An incorrect code is
        one of the most common — and most avoidable — causes of clearance delays.
      </P>
      <Callout>
        <strong>Tip:</strong> confirm the destination country's tariff treatment for HS 53050040 early.
        Some markets apply reduced or zero duty to horticultural coir, which materially affects your
        landed cost.
      </Callout>

      <H2 id="documents">The Core Import Document Set</H2>
      <P>
        Every shipment of Indian coir should travel with a standard documentation package. Missing any
        one of these can stop the container at the border.
      </P>
      <DataTable
        head={["Document", "Issued by", "Why it matters"]}
        rows={[
          ["Commercial Invoice", "Exporter", "Declares value, HS code and terms for customs."],
          ["Packing List", "Exporter", "Details blocks, weight and load configuration."],
          ["Bill of Lading", "Shipping line", "Title document and proof of shipment."],
          ["Certificate of Origin", "Chamber / authority", "Confirms Indian origin for duty and trade rules."],
          ["Phytosanitary Certificate", "Plant protection authority", "Certifies freedom from quarantine pests."],
          ["Fumigation Certificate", "Licensed fumigator", "Confirms methyl bromide / phosphine treatment."],
          ["Lab Test Report", "Testing lab", "Verifies EC, pH, moisture and impurity."],
        ]}
        caption="A typical compliant document set for importing coir from India."
      />

      <H2 id="phyto">Phytosanitary and Fumigation: The Two That Trip People Up</H2>
      <P>
        Because coir is an organic plant product, importing countries want assurance it will not carry
        pests or pathogens across borders. Two certificates handle this, and they are the ones most
        often forgotten until it is too late.
      </P>
      <H3>Phytosanitary certificate</H3>
      <P>
        Issued by India's plant protection authority after inspection, this document certifies the
        consignment is free from regulated quarantine pests. Most countries make it mandatory for coir
        imports, and it must be issued before the vessel sails — you cannot obtain it retroactively.
      </P>
      <H3>Fumigation certificate</H3>
      <P>
        Confirms the cargo was treated (commonly with methyl bromide or phosphine) to eliminate any
        living organisms. Some destinations specify the treatment type and dosage, so check your
        country's requirements and state them in the purchase order.
      </P>
      <Callout>
        <strong>Plan the lead time.</strong> Inspection and certificate issuance take days, not hours.
        Build documentation lead time into your schedule so certificates are ready before loading — not
        chased after the container has left.
      </Callout>

      <H2 id="quality">Quality Testing Before You Commit</H2>
      <P>
        Compliance keeps the container moving; quality testing keeps your crop alive. The two are
        separate checks and you need both. Before you finalise an order, verify the substrate itself:
      </P>
      <OL>
        <li><strong>Batch lab report</strong> covering EC, pH, moisture and sand/impurity content, with the extraction method stated.</li>
        <li><strong>Paid sample block</strong> that you hydrate and test yourself for EC, expansion and grit.</li>
        <li><strong>Written specification</strong> embedded in the contract, so an off-spec delivery is a breach you can act on.</li>
        <li><strong>Pre-shipment inspection</strong> for large or first-time orders — a small cost against a container-sized risk.</li>
      </OL>
      <P>
        If you are still deciding which grade to test, our <ProductLink>product range</ProductLink>
        outlines washed low EC, buffered and high EC options and their end uses.
      </P>

      <H2 id="certifications">Supplier Credentials Worth Checking</H2>
      <P>
        A serious Indian coir exporter will hold recognisable registrations that signal legitimacy and
        export readiness. When vetting a supplier, look for:
      </P>
      <UL>
        <li><strong>MSME registration</strong> and <strong>GST</strong> registration, confirming a legally operating Indian business.</li>
        <li><strong>RCMC</strong> (Registration-cum-Membership Certificate) and export promotion council membership, required for export incentives and credibility.</li>
        <li>A track record of issuing complete phytosanitary and fumigation paperwork without prompting.</li>
      </UL>

      <H2 id="workflow">The Import Workflow, Start to Finish</H2>
      <OL>
        <li>Agree grade, specification, Incoterms (FOB/CIF) and loading port.</li>
        <li>Receive and approve a batch lab report and sample block.</li>
        <li>Confirm HS code 53050040 on the draft invoice and packing list.</li>
        <li>Supplier arranges phytosanitary, fumigation and certificate of origin before loading.</li>
        <li>Vessel sails; you receive the full document set to clear customs.</li>
        <li>Clear customs, take delivery, and hydrate on arrival.</li>
      </OL>

      <CtaBox
        heading="Importing coir from India for the first time?"
        sub="We ship a complete, compliant document set — phytosanitary, fumigation, certificate of origin and lab report — with every container. Ask for a sample and a quote."
      />
      <P>
        Have your destination country and volume ready? <QuoteLink>Request a quote</QuoteLink> and we'll
        confirm pricing, documentation and lead time for your market.
      </P>
    </>
  );
}
