// data.js
// Mock data shaped like the CoverForce blog. Swap this for a CMS / API call later —
// the component tree doesn't care where `posts` comes from.

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

// Curated Unsplash automotive photography, reused in rotation across posts.
// Swap any of these for CMS-managed imagery later without touching component code.
const CAR_IMAGES = [
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80",
];

// Deterministic, dependency-free "read time" so every post has real-feeling
// metadata without hand-authoring it on each entry.
function estimateReadTime(text) {
  const minutes = Math.max(3, Math.min(9, Math.round(text.length / 24)));
  return `${minutes} min read`;
}

const POSTS_BASE = [
  {
    id: "coverforce-cb-insights-2025",
    title:
      "CoverForce Named to the 2025 CB Insights' List of the 50 Most Innovative Insurtech Startups",
    bannerTitle: "Building True Bindability",
    bannerEyebrow: "Insights",
    category: "News",
    date: "2025-10-16",
    theme: "teal",
    featured: true,
  },
  {
    id: "venbrook-brooks-alliance",
    title:
      "Venbrook Wholesaler, Brooks Insurance, Strikes Alliance with CoverForce for On-Demand Quoting",
    bannerTitle: "The Real Cost of Carrier Integrations",
    bannerEyebrow: "News",
    category: "News",
    date: "2025-10-16",
    theme: "indigo",
  },
  {
    id: "hidden-costs-slow-submission-workflows",
    title: "The Hidden Costs of Slow Submission Workflows in Commercial Insurance",
    bannerTitle: "CoverForce Unveils Product Suite",
    bannerEyebrow: "News",
    category: "Insights",
    date: "2025-09-28",
    theme: "navy",
  },
  {
    id: "wholesalers-embrace-apis",
    title: "Wholesalers Must Embrace APIs to Stay Competitive",
    bannerTitle: "The Anatomy of a Carrier Integration",
    bannerEyebrow: "Insights",
    category: "Insights",
    date: "2025-08-12",
    theme: "indigo",
  },
  {
    id: "coverforce-series-a-funding",
    title: "CoverForce Secures $13 Million in Series A Funding Led by...",
    bannerTitle: "CoverForce Secures $13 Million in Series A Funding",
    bannerEyebrow: "News",
    category: "News",
    date: "2025-07-03",
    theme: "navy",
    wide: true,
  },
  {
    id: "broker-codes-extended",
    title: "Broker Codes, Extended: Building a More Flexible Insurance Ecosystem",
    bannerTitle: "Wholesalers & APIs",
    bannerEyebrow: "Insights",
    category: "Case Study",
    date: "2025-06-18",
    theme: "teal",
    wide: true,
  },
  {
    id: "true-bindability-commercial-quoting",
    title: "True Bindability in Commercial Quoting: Why It Matters",
    bannerTitle: "Building True Bindability",
    bannerEyebrow: "Insights",
    category: "Insights",
    date: "2025-04-22",
    theme: "teal",
  },
  {
    id: "coverforce-nowcerts-instant-cois",
    title: "CoverForce Partners With NowCerts to Launch Instant COIs",
    bannerTitle: "Building True Bindability",
    bannerEyebrow: "News",
    category: "News",
    date: "2025-03-05",
    theme: "slate",
  },
  {
    id: "underwriting-data-quality",
    title: "Why Underwriting Data Quality Makes or Breaks Quote Speed",
    bannerTitle: "Data In, Confidence Out",
    bannerEyebrow: "Insights",
    category: "Insights",
    date: "2025-02-19",
    theme: "indigo",
  },
  {
    id: "carrier-appetite-matching",
    title: "Matching Submissions to Carrier Appetite Automatically",
    bannerTitle: "Appetite, Solved",
    bannerEyebrow: "Insights",
    category: "Insights",
    date: "2025-02-04",
    theme: "navy",
  },
  {
    id: "startup-insurance-onboarding",
    title: "How Startups Are Rethinking Commercial Insurance Onboarding",
    bannerTitle: "Onboarding at Speed",
    bannerEyebrow: "Case Study",
    category: "Case Study",
    date: "2025-01-22",
    theme: "teal",
  },
  {
    id: "broker-experience-2025",
    title: "The Broker Experience Bar Just Got Higher — Here's What Changed",
    bannerTitle: "Raising the Bar",
    bannerEyebrow: "Insights",
    category: "Insights",
    date: "2025-01-10",
    theme: "slate",
  },
  {
    id: "coverforce-team-expansion",
    title: "CoverForce Expands Engineering Team to Scale Carrier Integrations",
    bannerTitle: "Building the Team",
    bannerEyebrow: "News",
    category: "News",
    date: "2024-12-18",
    theme: "navy",
  },
  {
    id: "quote-bind-benchmarks",
    title: "2024 Quote-to-Bind Benchmarks Across Commercial Lines",
    bannerTitle: "The Benchmarks",
    bannerEyebrow: "Insights",
    category: "Insights",
    date: "2024-12-02",
    theme: "indigo",
    wide: true,
  },
  {
    id: "wholesaler-partner-case-study",
    title: "Case Study: Cutting Submission Time by 60% for a Regional Wholesaler",
    bannerTitle: "60% Faster, Verified",
    bannerEyebrow: "Case Study",
    category: "Case Study",
    date: "2024-11-14",
    theme: "teal",
    wide: true,
  },
  {
    id: "api-first-distribution",
    title: "Why API-First Distribution Is Eating Legacy Insurance Software",
    bannerTitle: "API-First, By Design",
    bannerEyebrow: "Insights",
    category: "Insights",
    date: "2024-10-29",
    theme: "slate",
  },
  {
    id: "coverforce-carrier-network",
    title: "CoverForce Adds Five New Carriers to Its Integration Network",
    bannerTitle: "The Network Grows",
    bannerEyebrow: "News",
    category: "News",
    date: "2024-10-08",
    theme: "navy",
  },
  {
    id: "commercial-lines-automation",
    title: "Where Automation Actually Helps in Commercial Lines Underwriting",
    bannerTitle: "Automation, Applied",
    bannerEyebrow: "Insights",
    category: "Insights",
    date: "2024-09-19",
    theme: "indigo",
  },
  {
    id: "roi-of-integration",
    title: "Calculating the Real ROI of a Carrier API Integration",
    bannerTitle: "The ROI Math",
    bannerEyebrow: "Insights",
    category: "Insights",
    date: "2024-09-02",
    theme: "teal",
  },
  {
    id: "broker-retention-case-study",
    title: "Case Study: How Faster Quoting Improved Broker Retention 3x",
    bannerTitle: "Retention, Reimagined",
    bannerEyebrow: "Case Study",
    category: "Case Study",
    date: "2024-08-14",
    theme: "slate",
  },
  {
    id: "coverforce-soc2",
    title: "CoverForce Achieves SOC 2 Type II Compliance",
    bannerTitle: "Security, Certified",
    bannerEyebrow: "News",
    category: "News",
    date: "2024-07-30",
    theme: "navy",
  },
  {
    id: "future-of-wholesale-distribution",
    title: "The Future of Wholesale Distribution Is Programmatic",
    bannerTitle: "Programmatic Wholesale",
    bannerEyebrow: "Insights",
    category: "Insights",
    date: "2024-07-11",
    theme: "indigo",
  },
  {
    id: "coi-automation-deep-dive",
    title: "A Deep Dive Into Certificate of Insurance Automation",
    bannerTitle: "COIs, Instantly",
    bannerEyebrow: "Insights",
    category: "Insights",
    date: "2024-06-21",
    theme: "teal",
  },
  {
    id: "coverforce-series-a-milestones",
    title: "Six Months After Series A: What We Shipped",
    bannerTitle: "The Milestones",
    bannerEyebrow: "News",
    category: "News",
    date: "2024-06-05",
    theme: "slate",
  },
];

// Attach a banner photo (rotating through the curated set) and a computed
// read time to every post, so components can rely on both fields existing.
export const posts = POSTS_BASE.map((post, index) => ({
  ...post,
  image: CAR_IMAGES[index % CAR_IMAGES.length],
  readTime: estimateReadTime(post.title),
}));