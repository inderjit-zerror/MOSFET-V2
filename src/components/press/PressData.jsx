// // PressData.jsx
// // Mock data for the CoverForce Press page. Swap this for a CMS / API call later —
// // the component tree doesn't care where `pressReleases` comes from.

// export const CATEGORIES = ["All", "Insights", "Case Study", "News"];

// // Each gradient theme is layered over the banner photo as a duotone tint
// // (mix-blend-multiply), so every card keeps a distinct brand color even
// // though the photography itself is neutral.
// export const THEMES = {
//   teal: "from-[#0d3b4f] via-[#116080] to-[#3aa7c4]",
//   indigo: "from-[#1c1642] via-[#2c2470] to-[#4b3fae]",
//   navy: "from-[#0a1128] via-[#101a3d] to-[#1c2f6b]",
//   slate: "from-[#111214] via-[#1b1c1f] to-[#2a2b2f]",
// };

// // Curated Unsplash automotive photography — used as starting defaults below.
// // Swap any single release's `image` field independently; nothing else depends on it.
// const PRESS_IMAGES = {
//   img1: "/try/1.jpg",
//   img2: "/try/2.jpg",
//   img3: "/try/3.jpg",
//   img4: "/try/4.jpg",
//   img5: "/try/5.jpg",
//   img6: "/try/6.jpg",
//   img7: "/try/7.jpg",
//   img8: "/try/8.jpg",
//   img9: "/try/9.jpg",
//   img10: "/try/10.jpg",
  
// };

// // Deterministic, dependency-free "read time" so every release has real-feeling
// // metadata without hand-authoring it on each entry.
// function estimateReadTime(text) {
//   const minutes = Math.max(3, Math.min(9, Math.round(text.length / 24)));
//   return `${minutes} min read`;
// }

// // Generates a 3-section article body from the release's category + title,
// // so PressArticlePage always has real content to render for every release.
// // Replace with real authored copy (or a CMS field) whenever it's ready.
// const CONTENT_TEMPLATES = {
//   News: [
//     {
//       heading: "What Happened",
//       body: [
//         `CoverForce today shared an update covering "${'{TITLE}'}." The announcement reflects continued momentum across the company's carrier network, product suite, and broker partnerships.`,
//         "This release is part of a steady cadence of updates the company has published as it scales its commercial insurance platform across new lines of business and regions.",
//       ],
//     },
//     {
//       heading: "Why It Matters",
//       body: [
//         "For brokers and wholesalers, developments like this translate directly into faster quoting, broader carrier appetite, and fewer manual steps between submission and bind.",
//         "The team frames each milestone as one part of a longer roadmap toward true, verified bindability across commercial lines.",
//       ],
//     },
//     {
//       heading: "What's Next",
//       body: [
//         "CoverForce says it will continue to expand integrations and share progress as new capabilities roll out to partners.",
//         "Brokers and wholesalers interested in early access are encouraged to reach out to the CoverForce partnerships team.",
//       ],
//     },
//   ],
//   Insights: [
//     {
//       heading: "The Bigger Picture",
//       body: [
//         `"${'{TITLE}'}" looks at a pattern the CoverForce team keeps seeing across commercial lines: the gap between a fast quote and a bindable one.`,
//         "Modern brokers expect software to behave like consumer software — instant, accurate, and transparent about what happens next.",
//       ],
//     },
//     {
//       heading: "What This Means for Brokers",
//       body: [
//         "When underwriting data, carrier appetite, and submission workflows are properly connected, quote speed stops being a trade-off against accuracy.",
//         "The result is fewer re-submissions, fewer surprises at bind, and more time for brokers to spend on relationships instead of paperwork.",
//       ],
//     },
//     {
//       heading: "Looking Ahead",
//       body: [
//         "CoverForce continues to invest in the infrastructure layer that makes this possible, treating each integration as a building block toward a fully programmatic commercial insurance experience.",
//       ],
//     },
//   ],
//   "Case Study": [
//     {
//       heading: "The Challenge",
//       body: [
//         `"${'{TITLE}'}" walks through a real partner engagement where legacy, manual workflows were slowing down quote-to-bind timelines.`,
//         "Before working with CoverForce, the team relied on disconnected spreadsheets, email threads, and carrier portals to move a single submission forward.",
//       ],
//     },
//     {
//       heading: "The Approach",
//       body: [
//         "CoverForce mapped the partner's existing workflow, connected the relevant carrier integrations, and layered in automated appetite matching to remove manual triage.",
//         "Rollout was phased, starting with the highest-volume line of business before expanding to the rest of the book.",
//       ],
//     },
//     {
//       heading: "The Results",
//       body: [
//         "The partner saw materially faster submission-to-quote times and a meaningful reduction in back-and-forth with carriers, freeing up the team to focus on growth.",
//       ],
//     },
//   ],
// };

// function generateContent(title, category) {
//   const template = CONTENT_TEMPLATES[category] || CONTENT_TEMPLATES.News;
//   return template.map((section) => ({
//     heading: section.heading,
//     body: section.body.map((p) => p.replaceAll("{TITLE}", title)),
//   }));
// }

// const PRESS_RELEASES_BASE = [
//   {
//     id: "coverforce-cb-insights-2025",
//     title:
//       "CoverForce Named to the 2025 CB Insights' List of the 50 Most Innovative Insurtech Startups",
//     excerpt: "Building True Bindability",
//     category: "News",
//     date: "2025-10-16",
//     theme: "teal",
//     featured: true,
//     image: PRESS_IMAGES.img1,
//   },
//   {
//     id: "venbrook-brooks-alliance",
//     title:
//       "Venbrook Wholesaler, Brooks Insurance, Strikes Alliance with CoverForce for On-Demand Quoting",
//     excerpt: "The Real Cost of Carrier Integrations",
//     category: "News",
//     date: "2025-10-16",
//     theme: "indigo",
//     image: PRESS_IMAGES.img2,
//   },
//   {
//     id: "hidden-costs-slow-submission-workflows",
//     title: "The Hidden Costs of Slow Submission Workflows in Commercial Insurance",
//     excerpt: "CoverForce Unveils Product Suite",
//     category: "Insights",
//     date: "2025-09-28",
//     theme: "navy",
//     image: PRESS_IMAGES.img3,
//   },
//   {
//     id: "wholesalers-embrace-apis",
//     title: "Wholesalers Must Embrace APIs to Stay Competitive",
//     excerpt: "The Anatomy of a Carrier Integration",
//     category: "Insights",
//     date: "2025-08-12",
//     theme: "indigo",
//     image: PRESS_IMAGES.img4,
//   },
//   {
//     id: "coverforce-series-a-funding",
//     title: "CoverForce Secures $13 Million in Series A Funding Led by...",
//     excerpt: "CoverForce Secures $13 Million in Series A Funding",
//     category: "News",
//     date: "2025-07-03",
//     theme: "navy",
//     wide: true,
//     image: PRESS_IMAGES.img5,
//   },
//   {
//     id: "broker-codes-extended",
//     title: "Broker Codes, Extended: Building a More Flexible Insurance Ecosystem",
//     excerpt: "Wholesalers & APIs",
//     category: "Case Study",
//     date: "2025-06-18",
//     theme: "teal",
//     wide: true,
//     image: PRESS_IMAGES.img6,
//   },
//   {
//     id: "true-bindability-commercial-quoting",
//     title: "True Bindability in Commercial Quoting: Why It Matters",
//     excerpt: "Building True Bindability",
//     category: "Insights",
//     date: "2025-04-22",
//     theme: "teal",
//     image: PRESS_IMAGES.img7,
//   },
//   {
//     id: "coverforce-nowcerts-instant-cois",
//     title: "CoverForce Partners With NowCerts to Launch Instant COIs",
//     excerpt: "Building True Bindability",
//     category: "News",
//     date: "2025-03-05",
//     theme: "slate",
//     image: PRESS_IMAGES.img8,
//   },
//   {
//     id: "underwriting-data-quality",
//     title: "Why Underwriting Data Quality Makes or Breaks Quote Speed",
//     excerpt: "Data In, Confidence Out",
//     category: "Insights",
//     date: "2025-02-19",
//     theme: "indigo",
//     image: PRESS_IMAGES.img9,
//   },
//   {
//     id: "carrier-appetite-matching",
//     title: "Matching Submissions to Carrier Appetite Automatically",
//     excerpt: "Appetite, Solved",
//     category: "Insights",
//     date: "2025-02-04",
//     theme: "navy",
//     image: PRESS_IMAGES.img10,
//   },
//   {
//     id: "startup-insurance-onboarding",
//     title: "How Startups Are Rethinking Commercial Insurance Onboarding",
//     excerpt: "Onboarding at Speed",
//     category: "Case Study",
//     date: "2025-01-22",
//     theme: "teal",
//     image: PRESS_IMAGES.img1,
//   },
//   {
//     id: "broker-experience-2025",
//     title: "The Broker Experience Bar Just Got Higher — Here's What Changed",
//     excerpt: "Raising the Bar",
//     category: "Insights",
//     date: "2025-01-10",
//     theme: "slate",
//     image: PRESS_IMAGES.img2,
//   },
//   {
//     id: "coverforce-team-expansion",
//     title: "CoverForce Expands Engineering Team to Scale Carrier Integrations",
//     excerpt: "Building the Team",
//     category: "News",
//     date: "2024-12-18",
//     theme: "navy",
//     image: PRESS_IMAGES.img3,
//   },
//   {
//     id: "quote-bind-benchmarks",
//     title: "2024 Quote-to-Bind Benchmarks Across Commercial Lines",
//     excerpt: "The Benchmarks",
//     category: "Insights",
//     date: "2024-12-02",
//     theme: "indigo",
//     wide: true,
//     image: PRESS_IMAGES.img4,
//   },
//   {
//     id: "wholesaler-partner-case-study",
//     title: "Case Study: Cutting Submission Time by 60% for a Regional Wholesaler",
//     excerpt: "60% Faster, Verified",
//     category: "Case Study",
//     date: "2024-11-14",
//     theme: "teal",
//     wide: true,
//     image: PRESS_IMAGES.img5,
//   },
//   {
//     id: "api-first-distribution",
//     title: "Why API-First Distribution Is Eating Legacy Insurance Software",
//     excerpt: "API-First, By Design",
//     category: "Insights",
//     date: "2024-10-29",
//     theme: "slate",
//     image: PRESS_IMAGES.img6,
//   },
//   {
//     id: "coverforce-carrier-network",
//     title: "CoverForce Adds Five New Carriers to Its Integration Network",
//     excerpt: "The Network Grows",
//     category: "News",
//     date: "2024-10-08",
//     theme: "navy",
//     image: PRESS_IMAGES.img7,
//   },
//   {
//     id: "commercial-lines-automation",
//     title: "Where Automation Actually Helps in Commercial Lines Underwriting",
//     excerpt: "Automation, Applied",
//     category: "Insights",
//     date: "2024-09-19",
//     theme: "indigo",
//     image: PRESS_IMAGES.img8,
//   },
//   {
//     id: "roi-of-integration",
//     title: "Calculating the Real ROI of a Carrier API Integration",
//     excerpt: "The ROI Math",
//     category: "Insights",
//     date: "2024-09-02",
//     theme: "teal",
//     image: PRESS_IMAGES.img9,
//   },
//   {
//     id: "broker-retention-case-study",
//     title: "Case Study: How Faster Quoting Improved Broker Retention 3x",
//     excerpt: "Retention, Reimagined",
//     category: "Case Study",
//     date: "2024-08-14",
//     theme: "slate",
//     image: PRESS_IMAGES.img10,
//   },
//   {
//     id: "coverforce-soc2",
//     title: "CoverForce Achieves SOC 2 Type II Compliance",
//     excerpt: "Security, Certified",
//     category: "News",
//     date: "2024-07-30",
//     theme: "navy",
//     image: PRESS_IMAGES.img1,
//   },
//   {
//     id: "future-of-wholesale-distribution",
//     title: "The Future of Wholesale Distribution Is Programmatic",
//     excerpt: "Programmatic Wholesale",
//     category: "Insights",
//     date: "2024-07-11",
//     theme: "indigo",
//     image: PRESS_IMAGES.img2,
//   },
//   {
//     id: "coi-automation-deep-dive",
//     title: "A Deep Dive Into Certificate of Insurance Automation",
//     excerpt: "COIs, Instantly",
//     category: "Insights",
//     date: "2024-06-21",
//     theme: "teal",
//     image: PRESS_IMAGES.img3,
//   },
//   {
//     id: "coverforce-series-a-milestones",
//     title: "Six Months After Series A: What We Shipped",
//     excerpt: "The Milestones",
//     category: "News",
//     date: "2024-06-05",
//     theme: "slate",
//     image: PRESS_IMAGES.img4,
//   },
// ];

// // Attach a computed read time and generated body content to every release.
// // `image` is no longer computed here — it comes straight from each release
// // object above, so every article owns its own picture.
// export const pressReleases = PRESS_RELEASES_BASE.map((release) => ({
//   ...release,
//   readTime: estimateReadTime(release.title),
//   content: generateContent(release.title, release.category),
//   author: {
//     name: "CoverForce Editorial Team",
//     role: "Communications & Content",
//     avatar:
//       "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop",
//   },
// }));

// // Convenience lookup used by the article detail page.
// export function getReleaseById(id) {
//   return pressReleases.find((release) => release.id === id) || null;
// }


// PressData.jsx
// Mock data for the MOSFET press page. Swap this for a CMS / API call later —
// the component tree doesn't care where `pressReleases` comes from.

export const CATEGORIES = ["All", "Insights", "Case Study", "News"];

// Each gradient theme is layered over the banner photo as a duotone tint
// (mix-blend-multiply), so every card keeps a distinct brand color even
// though the photography itself is neutral.
export const THEMES = {
  teal: "from-[#0d3b4f] via-[#116080] to-[#3aa7c4]",
  indigo: "from-[#1c1642] via-[#2c2470] to-[#4b3fae]",
  navy: "from-[#0a1128] via-[#101a3d] to-[#1c2f6b]",
  slate: "from-[#111214] via-[#1b1c1f] to-[#2a2b2f]",
};

// Local images — swap any single release's `image` field independently;
// nothing else depends on it.
const PRESS_IMAGES = {
  img1: "/try/1.jpg",
  img2: "/try/2.jpg",
  img3: "/try/3.jpg",
  img4: "/try/4.jpg",
  img5: "/try/5.jpg",
  img6: "/try/6.jpg",
  img7: "/try/7.jpg",
  img8: "/try/8.jpg",
  img9: "/try/9.jpg",
  img10: "/try/10.jpg",
};

// Deterministic, dependency-free "read time" so every release has real-feeling
// metadata without hand-authoring it on each entry.
function estimateReadTime(text) {
  const minutes = Math.max(3, Math.min(9, Math.round(text.length / 24)));
  return `${minutes} min read`;
}

// Generates a 3-section article body from the release's category + title,
// so PressArticlePage always has real content to render for every release.
// Replace with real authored copy (or a CMS field) whenever it's ready.
const CONTENT_TEMPLATES = {
  News: [
    {
      heading: "What Happened",
      body: [
        `MOSFET today shared an update covering "${'{TITLE}'}." The announcement reflects continued momentum across the company's fabrication network, product lineup, and design partnerships.`,
        "This release is part of a steady cadence of updates the company has published as it scales its power semiconductor platform across new applications and regions.",
      ],
    },
    {
      heading: "Why It Matters",
      body: [
        "For power electronics engineers and OEMs, developments like this translate directly into lower switching losses, broader voltage coverage, and fewer manual steps between design and qualification.",
        "The team frames each milestone as one part of a longer roadmap toward higher efficiency, verified reliability across automotive, industrial, and consumer power lines.",
      ],
    },
    {
      heading: "What's Next",
      body: [
        "MOSFET says it will continue to expand its foundry partnerships and share progress as new device families roll out to design partners.",
        "Engineers and OEMs interested in early sampling are encouraged to reach out to the MOSFET applications team.",
      ],
    },
  ],
  Insights: [
    {
      heading: "The Bigger Picture",
      body: [
        `"${'{TITLE}'}" looks at a pattern the MOSFET team keeps seeing across power electronics: the gap between a device that looks good on a datasheet and one that survives in the field.`,
        "Modern power designs expect components to behave predictably — low on-resistance, fast switching, and transparent thermal behavior under real load.",
      ],
    },
    {
      heading: "What This Means for Engineers",
      body: [
        "When wafer quality, gate charge, and thermal design are properly aligned, efficiency stops being a trade-off against cost.",
        "The result is fewer re-spins, fewer surprises during qualification, and more time for engineers to spend on system design instead of component workarounds.",
      ],
    },
    {
      heading: "Looking Ahead",
      body: [
        "MOSFET continues to invest in the process technology that makes this possible, treating each generation of devices as a building block toward a fully optimized power delivery chain.",
      ],
    },
  ],
  "Case Study": [
    {
      heading: "The Challenge",
      body: [
        `"${'{TITLE}'}" walks through a real design engagement where legacy power device choices were limiting efficiency and thermal headroom.`,
        "Before working with MOSFET, the team relied on older planar devices and conservative derating that left performance on the table.",
      ],
    },
    {
      heading: "The Approach",
      body: [
        "MOSFET mapped the partner's existing power stage, selected the right trench and superjunction devices for the application, and worked through thermal and EMI validation together.",
        "Rollout was phased, starting with the highest-volume product line before expanding to the rest of the platform.",
      ],
    },
    {
      heading: "The Results",
      body: [
        "The partner saw materially lower switching losses and a meaningful reduction in heatsink size, freeing up board space and improving overall system efficiency.",
      ],
    },
  ],
};

function generateContent(title, category) {
  const template = CONTENT_TEMPLATES[category] || CONTENT_TEMPLATES.News;
  return template.map((section) => ({
    heading: section.heading,
    body: section.body.map((p) => p.replaceAll("{TITLE}", title)),
  }));
}

const PRESS_RELEASES_BASE = [
  {
    id: "mosfet-ee-times-2025",
    title:
      "MOSFET Named to the 2025 EE Times List of Top Power Semiconductor Innovators",
    excerpt: "Building Higher Efficiency, By Design",
    category: "News",
    date: "2025-10-16",
    theme: "teal",
    featured: true,
    image: PRESS_IMAGES.img1,
  },
  {
    id: "distributor-power-devices-alliance",
    title:
      "Global Power Electronics Distributor Strikes Alliance With MOSFET for Automotive-Grade Devices",
    excerpt: "The Real Cost of Legacy Device Sourcing",
    category: "News",
    date: "2025-10-16",
    theme: "indigo",
    image: PRESS_IMAGES.img2,
  },
  {
    id: "hidden-costs-legacy-transistor-manufacturing",
    title: "The Hidden Costs of Legacy Power Transistor Manufacturing",
    excerpt: "MOSFET Unveils Next-Gen Device Lineup",
    category: "Insights",
    date: "2025-09-28",
    theme: "navy",
    image: PRESS_IMAGES.img3,
  },
  {
    id: "foundries-embrace-sic",
    title: "Foundries Must Embrace Silicon Carbide to Stay Competitive",
    excerpt: "The Anatomy of a Wide-Bandgap Migration",
    category: "Insights",
    date: "2025-08-12",
    theme: "indigo",
    image: PRESS_IMAGES.img4,
  },
  {
    id: "mosfet-series-a-funding",
    title: "MOSFET Secures $13 Million in Series A Funding Led by...",
    excerpt: "MOSFET Secures $13 Million in Series A Funding",
    category: "News",
    date: "2025-07-03",
    theme: "navy",
    wide: true,
    image: PRESS_IMAGES.img5,
  },
  {
    id: "trench-gate-extended",
    title: "Trench Gate Technology, Extended: Building a More Efficient Power Device",
    excerpt: "Wide-Bandgap & Trench Architectures",
    category: "Case Study",
    date: "2025-06-18",
    theme: "teal",
    wide: true,
    image: PRESS_IMAGES.img6,
  },
  {
    id: "true-low-rdson-power-mosfets",
    title: "True Low RDS(on) in Power MOSFETs: Why It Matters",
    excerpt: "Building Higher Efficiency, By Design",
    category: "Insights",
    date: "2025-04-22",
    theme: "teal",
    image: PRESS_IMAGES.img7,
  },
  {
    id: "mosfet-ev-power-modules",
    title: "MOSFET Partners With Leading EV Manufacturer to Launch Next-Gen Power Modules",
    excerpt: "Building Higher Efficiency, By Design",
    category: "News",
    date: "2025-03-05",
    theme: "slate",
    image: PRESS_IMAGES.img8,
  },
  {
    id: "wafer-quality-yield",
    title: "Why Wafer Quality Makes or Breaks Device Yield",
    excerpt: "Data In, Confidence Out",
    category: "Insights",
    date: "2025-02-19",
    theme: "indigo",
    image: PRESS_IMAGES.img9,
  },
  {
    id: "device-application-matching",
    title: "Matching Power Devices to Application Requirements Automatically",
    excerpt: "Selection, Solved",
    category: "Insights",
    date: "2025-02-04",
    theme: "navy",
    image: PRESS_IMAGES.img10,
  },
  {
    id: "startups-power-electronics-design",
    title: "How Startups Are Rethinking Power Electronics Design",
    excerpt: "Onboarding at Speed",
    category: "Case Study",
    date: "2025-01-22",
    theme: "teal",
    image: PRESS_IMAGES.img1,
  },
  {
    id: "power-device-bar-2025",
    title: "The Power Device Selection Bar Just Got Higher — Here's What Changed",
    excerpt: "Raising the Bar",
    category: "Insights",
    date: "2025-01-10",
    theme: "slate",
    image: PRESS_IMAGES.img2,
  },
  {
    id: "mosfet-team-expansion",
    title: "MOSFET Expands Engineering Team to Scale Fab Capacity",
    excerpt: "Building the Team",
    category: "News",
    date: "2024-12-18",
    theme: "navy",
    image: PRESS_IMAGES.img3,
  },
  {
    id: "switching-efficiency-benchmarks",
    title: "2024 Switching Efficiency Benchmarks Across Power Device Lines",
    excerpt: "The Benchmarks",
    category: "Insights",
    date: "2024-12-02",
    theme: "indigo",
    wide: true,
    image: PRESS_IMAGES.img4,
  },
  {
    id: "ev-manufacturer-case-study",
    title: "Case Study: Cutting Switching Losses by 60% for a Regional EV Manufacturer",
    excerpt: "60% More Efficient, Verified",
    category: "Case Study",
    date: "2024-11-14",
    theme: "teal",
    wide: true,
    image: PRESS_IMAGES.img5,
  },
  {
    id: "wide-bandgap-eating-legacy-silicon",
    title: "Why Wide-Bandgap Semiconductors Are Eating Legacy Silicon Devices",
    excerpt: "Wide-Bandgap, By Design",
    category: "Insights",
    date: "2024-10-29",
    theme: "slate",
    image: PRESS_IMAGES.img6,
  },
  {
    id: "mosfet-foundry-network",
    title: "MOSFET Adds Five New Foundry Partners to Its Manufacturing Network",
    excerpt: "The Network Grows",
    category: "News",
    date: "2024-10-08",
    theme: "navy",
    image: PRESS_IMAGES.img7,
  },
  {
    id: "automation-power-device-testing",
    title: "Where Automation Actually Helps in Power Device Testing",
    excerpt: "Automation, Applied",
    category: "Insights",
    date: "2024-09-19",
    theme: "indigo",
    image: PRESS_IMAGES.img8,
  },
  {
    id: "roi-of-sic-migration",
    title: "Calculating the Real ROI of a Silicon Carbide Migration",
    excerpt: "The ROI Math",
    category: "Insights",
    date: "2024-09-02",
    theme: "teal",
    image: PRESS_IMAGES.img9,
  },
  {
    id: "design-win-rate-case-study",
    title: "Case Study: How Faster Qualification Improved Design-Win Rate 3x",
    excerpt: "Design Wins, Reimagined",
    category: "Case Study",
    date: "2024-08-14",
    theme: "slate",
    image: PRESS_IMAGES.img10,
  },
  {
    id: "mosfet-aec-q101",
    title: "MOSFET Achieves AEC-Q101 Automotive Qualification",
    excerpt: "Reliability, Certified",
    category: "News",
    date: "2024-07-30",
    theme: "navy",
    image: PRESS_IMAGES.img1,
  },
  {
    id: "future-power-semiconductor-distribution",
    title: "The Future of Power Semiconductor Distribution Is Programmatic",
    excerpt: "Programmatic Distribution",
    category: "Insights",
    date: "2024-07-11",
    theme: "indigo",
    image: PRESS_IMAGES.img2,
  },
  {
    id: "gate-driver-integration-deep-dive",
    title: "A Deep Dive Into Gate Driver Integration",
    excerpt: "Gate Drive, Simplified",
    category: "Insights",
    date: "2024-06-21",
    theme: "teal",
    image: PRESS_IMAGES.img3,
  },
  {
    id: "mosfet-series-a-milestones",
    title: "Six Months After Series A: What We Shipped",
    excerpt: "The Milestones",
    category: "News",
    date: "2024-06-05",
    theme: "slate",
    image: PRESS_IMAGES.img4,
  },
];

// Attach a computed read time and generated body content to every release.
// `image` comes straight from each release object above, so every article
// owns its own picture.
export const pressReleases = PRESS_RELEASES_BASE.map((release) => ({
  ...release,
  readTime: estimateReadTime(release.title),
  content: generateContent(release.title, release.category),
  author: {
    name: "MOSFET Editorial Team",
    role: "Communications & Content",
    avatar:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop",
  },
}));

// Convenience lookup used by the article detail page.
export function getReleaseById(id) {
  return pressReleases.find((release) => release.id === id) || null;
}