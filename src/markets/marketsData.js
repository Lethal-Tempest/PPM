// --- TARGET EXPORT MARKET DATA ---
// Each entry powers a keyword-rich landing page: /coco-peat-supplier/<slug>
// Content is deliberately unique per market (crops, ports, buyer context).

export const markets = [
  {
    slug: "south-korea",
    country: "South Korea",
    demonym: "Korean",
    flag: "🇰🇷",
    metaTitle: "Coco Peat Supplier to South Korea",
    metaDesc:
      "Export-grade low EC & buffered coco peat shipped from India to South Korea (Busan, Incheon). Lab-tested coir for Korean hydroponic strawberry & tomato growers.",
    intro:
      "PPM Cocopeat supplies lab-tested coco peat and buffered coir to importers, distributors and greenhouse growers across South Korea. With Korea's protected-horticulture sector leaning heavily on soilless media for strawberries, tomatoes and paprika, consistent low-salt coir is in constant demand — and we ship it CIF to Busan and Incheon with full documentation.",
    whyPoints: [
      "Korea's smart-farm and greenhouse expansion drives steady demand for consistent hydroponic substrate.",
      "Strawberry growers in particular need ultra-low, stable EC — our buffered coir is built for it.",
      "Direct sourcing from India removes middleman mark-ups common in the Korean import chain.",
    ],
    crops: ["Strawberries", "Tomatoes", "Paprika / Capsicum", "Cucumbers"],
    destinationPorts: "Busan (KRPUS), Incheon (KRINC)",
    transit: "Approx. 18–26 days from South Indian ports",
    recommendedGrades: [
      { grade: "Buffered Coir Grow Bags & Slabs", spec: "EC < 0.8 mS/cm, pH 5.8–6.5", use: "Strawberry & tomato hydroponics" },
      { grade: "Washed Low EC 5kg Blocks", spec: "EC < 0.5 mS/cm, pH 5.5–6.8", use: "Nurseries & seedling media" },
    ],
    localNote:
      "We can quote CIF Busan or Incheon so your landed cost is clear from the first email, and consolidate mixed grades in one container.",
    faqs: [
      { q: "Do you ship coco peat to Busan and Incheon?", a: "Yes — we regularly quote and ship CIF to both Busan and Incheon, typically 18–26 days transit from South Indian ports." },
      { q: "Which coco peat is best for Korean strawberry farms?", a: "Fully calcium-buffered coir (EC < 0.8 mS/cm) is the standard for strawberry hydroponics because it prevents nutrient lock-out on first feed." },
    ],
  },
  {
    slug: "netherlands",
    country: "Netherlands",
    demonym: "Dutch",
    flag: "🇳🇱",
    metaTitle: "Coco Peat Supplier to the Netherlands",
    metaDesc:
      "Buffered coir slabs & grow bags exported from India to the Netherlands, CIF Rotterdam. Lab-tested, consistent EC coco peat for Dutch greenhouse growers.",
    intro:
      "The Netherlands is the beating heart of European greenhouse horticulture, and coir slabs are a mainstay of its high-wire tomato and cucumber production. PPM Cocopeat exports fully buffered, batch-consistent coir to Dutch growers and substrate distributors, CIF Rotterdam, with a lab report on every container.",
    whyPoints: [
      "Dutch greenhouses run precision fertigation — batch-to-batch EC consistency is non-negotiable, and that's our focus.",
      "Rotterdam is one of the world's most efficient ports, keeping landed cost and lead time predictable.",
      "As a re-export hub, Dutch distributors can serve wider Europe from a single reliable coir source.",
    ],
    crops: ["Tomatoes", "Cucumbers", "Bell Peppers", "Soft fruit / Berries"],
    destinationPorts: "Rotterdam (NLRTM), Antwerp (BEANR) for BeNeLux",
    transit: "Approx. 20–28 days from South Indian ports",
    recommendedGrades: [
      { grade: "Buffered Coir Slabs & Grow Bags", spec: "EC < 0.8 mS/cm, pH 5.8–6.5", use: "High-wire tomato & cucumber lines" },
      { grade: "Washed Low EC 5kg Blocks", spec: "EC < 0.5 mS/cm, pH 5.5–6.8", use: "Propagation & blending" },
    ],
    localNote:
      "We quote CIF Rotterdam and can match custom slab dimensions for your greenhouse system. Ideal for distributors re-supplying the wider EU market.",
    faqs: [
      { q: "Can you deliver coir slabs CIF Rotterdam?", a: "Yes. Rotterdam is our primary Northern-European discharge port; we quote CIF Rotterdam with full phytosanitary and fumigation documentation." },
      { q: "Do you supply custom slab sizes for Dutch greenhouses?", a: "Yes — share your required slab dimensions and annual volume and we'll produce to spec and quote accordingly." },
    ],
  },
  {
    slug: "united-states",
    country: "United States",
    demonym: "American",
    flag: "🇺🇸",
    metaTitle: "Coco Peat Supplier to the USA",
    metaDesc:
      "Wholesale coco peat & coir pith exported from India to the USA. 5kg low-EC blocks for soil blenders, nurseries & hydroponics. FOB/CIF to US ports.",
    intro:
      "From soil-mix manufacturers to hydroponic operators, US buyers use enormous volumes of coco coir — and compressed 5kg blocks ship efficiently because they expand ~15x on hydration. PPM Cocopeat supplies washed low-EC blocks and buffered coir to US blenders, nurseries and growers, with flexible FOB and CIF pricing to both coasts.",
    whyPoints: [
      "US potting-mix and container-media manufacturers need clean, low-sand coir feedstock at container scale.",
      "The booming controlled-environment agriculture sector consumes buffered coir for year-round production.",
      "Compressed blocks slash freight cost per usable litre versus shipping expanded media.",
    ],
    crops: ["Nursery & potting mixes", "Cannabis / CEA", "Hydroponic vegetables", "Landscaping"],
    destinationPorts: "Los Angeles / Long Beach, New York / Newark, Savannah, Houston",
    transit: "Approx. 22–40 days depending on coast & routing",
    recommendedGrades: [
      { grade: "Washed Low EC 5kg Blocks", spec: "EC < 0.5 mS/cm, 75–80 L expansion", use: "Soil blending & potting mixes" },
      { grade: "Buffered Coir", spec: "EC < 0.8 mS/cm, pH 5.8–6.5", use: "Hydroponics & CEA" },
    ],
    localNote:
      "We ship to US West Coast, East Coast and Gulf ports. Floor-loaded containers maximise litres per shipment for blenders; palletized suits distributors.",
    faqs: [
      { q: "Do you ship coco peat to US West and East Coast ports?", a: "Yes — we quote FOB Indian ports or CIF to Los Angeles/Long Beach, New York/Newark, Savannah and Houston." },
      { q: "What's the best coco peat for US soil blenders?", a: "Washed low-EC 5kg blocks with < 3% impurity and 75–80 L expansion give the lowest cost per usable litre for mixes." },
    ],
  },
  {
    slug: "australia",
    country: "Australia",
    demonym: "Australian",
    flag: "🇦🇺",
    metaTitle: "Coco Peat Supplier to Australia",
    metaDesc:
      "Low-EC coco peat & coir blocks exported from India to Australia (Melbourne, Sydney, Brisbane). Lab-tested substrate for nurseries, berries & hydroponics.",
    intro:
      "Australian nurseries, berry producers and protected-cropping growers rely on imported coir for water-efficient growing in a dry climate. PPM Cocopeat supplies washed low-EC blocks and buffered coir to Australian importers and growers, with strict attention to the quality and documentation Australian biosecurity requires.",
    whyPoints: [
      "Coir's high water-holding capacity suits Australia's water-conscious horticulture.",
      "Berry and protected-cropping sectors need consistent, low-salt buffered media.",
      "Rigorous lab reports and clean, low-sand coir help satisfy strict Australian import scrutiny.",
    ],
    crops: ["Blueberries & berries", "Tomatoes", "Nursery stock", "Hydroponic leafy greens"],
    destinationPorts: "Melbourne, Sydney (Port Botany), Brisbane, Fremantle",
    transit: "Approx. 18–30 days from South Indian ports",
    recommendedGrades: [
      { grade: "Buffered Coir Blocks & Bags", spec: "EC < 0.8 mS/cm, pH 5.8–6.5", use: "Berries & protected cropping" },
      { grade: "Washed Low EC 5kg Blocks", spec: "EC < 0.5 mS/cm, 75–80 L expansion", use: "Nurseries & landscaping" },
    ],
    localNote:
      "We prioritise clean, low-impurity coir and complete phytosanitary/fumigation paperwork to keep clearance through Australian biosecurity smooth.",
    faqs: [
      { q: "Does your coco peat meet Australian import requirements?", a: "We supply phytosanitary and fumigation certificates plus lab reports with every shipment, and focus on clean, low-sand coir to support smooth biosecurity clearance." },
      { q: "Which coir is best for Australian blueberry growers?", a: "Fully buffered coir (EC < 0.8 mS/cm) in blocks or bags is ideal for blueberries and other berries grown in substrate." },
    ],
  },
  {
    slug: "new-zealand",
    country: "New Zealand",
    demonym: "New Zealand",
    flag: "🇳🇿",
    metaTitle: "Coco Peat Supplier to New Zealand",
    metaDesc:
      "Coco peat & coir substrate exported from India to New Zealand (Auckland, Tauranga). Lab-tested low-EC blocks for nurseries, berries & greenhouse growers.",
    intro:
      "New Zealand's horticulture and nursery sectors use coir as a sustainable, high-performance growing medium for berries, tomatoes and propagation. PPM Cocopeat exports washed low-EC and buffered coir to New Zealand importers and growers, shipping to Auckland and Tauranga with full quality and biosecurity documentation.",
    whyPoints: [
      "NZ's premium berry and glasshouse sectors demand consistent, low-salt substrate.",
      "Sustainable, renewable coir aligns with New Zealand's environmental standards.",
      "Complete documentation supports clearance through NZ's strict biosecurity (MPI) requirements.",
    ],
    crops: ["Strawberries & berries", "Tomatoes", "Nursery propagation", "Cut flowers"],
    destinationPorts: "Auckland, Tauranga, Lyttelton",
    transit: "Approx. 22–34 days from South Indian ports",
    recommendedGrades: [
      { grade: "Buffered Coir Blocks & Bags", spec: "EC < 0.8 mS/cm, pH 5.8–6.5", use: "Berries & glasshouse crops" },
      { grade: "Washed Low EC 5kg Blocks", spec: "EC < 0.5 mS/cm, 75–80 L expansion", use: "Propagation & nurseries" },
    ],
    localNote:
      "We ship to Auckland and Tauranga with clean, low-impurity coir and complete phytosanitary/fumigation paperwork for NZ biosecurity.",
    faqs: [
      { q: "Do you export coco peat to Auckland and Tauranga?", a: "Yes — we quote CIF to Auckland, Tauranga and Lyttelton with full documentation, typically 22–34 days transit." },
      { q: "Is your coir suitable for New Zealand berry growers?", a: "Yes. Buffered, low-EC coir is well suited to substrate-grown strawberries and other berries popular in New Zealand." },
    ],
  },
  {
    slug: "spain",
    country: "Spain",
    demonym: "Spanish",
    flag: "🇪🇸",
    metaTitle: "Coco Peat Supplier to Spain",
    metaDesc:
      "Buffered coir slabs & coco peat exported from India to Spain (Valencia, Algeciras, Barcelona). Lab-tested low-EC substrate for Almería greenhouse growers.",
    intro:
      "Spain — especially the vast greenhouse belt of Almería — is one of Europe's largest protected-vegetable producers, and coir slabs are central to its hydroponic tomato, pepper and cucumber output. PPM Cocopeat exports buffered, batch-consistent coir to Spanish growers and distributors, CIF Valencia and Algeciras.",
    whyPoints: [
      "Almería's 'sea of plastic' greenhouses consume large volumes of coir slabs each season.",
      "Intensive fertigation demands stable, low EC — the core of our buffered coir.",
      "Direct Indian supply gives Spanish buyers competitive landed cost versus intermediaries.",
    ],
    crops: ["Tomatoes", "Peppers", "Cucumbers", "Berries"],
    destinationPorts: "Valencia (ESVLC), Algeciras (ESALG), Barcelona (ESBCN)",
    transit: "Approx. 16–24 days from South Indian ports",
    recommendedGrades: [
      { grade: "Buffered Coir Slabs & Grow Bags", spec: "EC < 0.8 mS/cm, pH 5.8–6.5", use: "Greenhouse tomatoes & peppers" },
      { grade: "Washed Low EC 5kg Blocks", spec: "EC < 0.5 mS/cm, 75–80 L expansion", use: "Blending & propagation" },
    ],
    localNote:
      "We quote CIF Valencia or Algeciras and can produce slab dimensions matched to Almería-style growing systems.",
    faqs: [
      { q: "Do you ship coir slabs to Valencia or Algeciras?", a: "Yes — we quote CIF Valencia and Algeciras with full documentation, typically 16–24 days transit from South Indian ports." },
      { q: "Which coir suits Almería greenhouse growers?", a: "Buffered coir slabs (EC < 0.8 mS/cm) matched to your system dimensions are ideal for intensive tomato and pepper production." },
    ],
  },
];

export const getMarket = (slug) => markets.find((m) => m.slug === slug);
