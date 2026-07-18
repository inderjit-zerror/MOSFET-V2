// data/products.js
// Central product catalogue for MOSFET.
// Swap the `image` field with real product photography before going live.
// Using seeded picsum placeholders so every product gets a unique, stable image.

export const categories = [
  { id: "all", label: "All" },
  { id: "dashcam", label: "Dash Cams" },
  { id: "sound", label: "Sound Systems" },
  { id: "lights", label: "Lights" },
 
];

// Color-coded badge metadata used in the card's top row (colored dot + label),
// mirroring a News/Insights/Case-Study style badge.
export const categoryMeta = {
  dashcam: { label: "Dash Cam", dot: "bg-amber-500" },
  sound: { label: "Sound System", dot: "bg-blue-500" },
  lights: { label: "Lighting", dot: "bg-yellow-400" },
  ppf: { label: "PPF", dot: "bg-emerald-500" },
  amplifiers: { label: "Amplifier", dot: "bg-purple-500" },
  interior: { label: "Interior", dot: "bg-pink-500" },
};

const img = (seed) => `https://picsum.photos/seed/${seed}/700/860`;

export const products = [
  // ---------------- DASH CAMS ----------------
  {
    id: "dc-01",
    name: "MOSFET RoadEye 4K",
    category: "dashcam",
    tag: "New",
    price: 189,
    blurb: "4K front dash cam with night vision and loop recording.",
    image: `/try/1.jpg`,
  },
  {
    id: "dc-02",
    name: "MOSFET RoadEye Duo",
    category: "dashcam",
    tag: "Bestseller",
    price: 229,
    blurb: "Dual-channel front & rear recording with parking mode.",
    image: `/try/2.jpg`,
  },
  {
    id: "dc-03",
    name: "MOSFET Nightwatch Pro",
    category: "dashcam",
    tag: "Winter",
    price: 259,
    blurb: "Enhanced low-light sensor built for winter driving.",
    image: `/try/3.jpg`,
  },
  {
    id: "dc-04",
    name: "MOSFET Compact Cam",
    category: "dashcam",
    tag: "Value",
    price: 129,
    blurb: "Slim single-channel cam that stays out of your sightline.",
    image: `/try/4.jpg`,
  },
  {
    id: "dc-05",
    name: "MOSFET RoadEye 4K GPS",
    category: "dashcam",
    tag: "New",
    price: 249,
    blurb: "4K recording with built-in GPS speed & route logging.",
    image: `/try/5.jpg`,
  },
  {
    id: "dc-06",
    name: "MOSFET Mirror Cam",
    category: "dashcam",
    tag: "Trending",
    price: 199,
    blurb: "Rear-view mirror dash cam with 9.6-inch touch display.",
    image: `/try/6.jpg`,
  },
  {
    id: "dc-07",
    name: "MOSFET Guardian 360",
    category: "dashcam",
    tag: "Pro",
    price: 349,
    blurb: "360-degree coverage with 3-camera surround kit.",
    image: `/try/7.jpg`,
  },
  {
    id: "dc-08",
    name: "MOSFET RoadEye Mini",
    category: "dashcam",
    tag: "Compact",
    price: 99,
    blurb: "Budget-friendly cam with essential loop recording.",
    image: `/try/8.jpg`,
  },

  // ---------------- SOUND SYSTEMS ----------------
  {
    id: "ss-01",
    name: "MOSFET Bassline 6.5\"",
    category: "sound",
    tag: "Winter",
    price: 149,
    blurb: "Coaxial 6.5-inch speakers tuned for deep midrange.",
    image: `/try/9.jpg`,
  },
  {
    id: "ss-02",
    name: "MOSFET StageDeck 10",
    category: "sound",
    tag: "New",
    price: 279,
    blurb: "10-inch subwoofer enclosure for trunk installs.",
    image: `/try/10.jpg`,
  },
  {
    id: "ss-03",
    name: "MOSFET Component Pro",
    category: "sound",
    tag: "Pro",
    price: 399,
    blurb: "3-way component speaker set with silk tweeters.",
    image: `/try/1.jpg`,
  },
  {
    id: "ss-04",
    name: "MOSFET Coaxial 4\"",
    category: "sound",
    tag: "Value",
    price: 89,
    blurb: "Compact door speakers for tight factory mounts.",
    image: `/try/2.jpg`,
  },
  {
    id: "ss-05",
    name: "MOSFET Head Unit X1",
    category: "sound",
    tag: "Trending",
    price: 329,
    blurb: "Android Auto & CarPlay ready 9-inch touch head unit.",
    image: `/try/3.jpg`,
  },
  {
    id: "ss-06",
    name: "MOSFET Sub Box 12",
    category: "sound",
    tag: "Bestseller",
    price: 219,
    blurb: "Sealed 12-inch enclosure built for punchy low end.",
    image: `/try/4.jpg`,
  },
  {
    id: "ss-07",
    name: "MOSFET Tweeter Kit",
    category: "sound",
    tag: "New",
    price: 69,
    blurb: "Silk-dome tweeter pair for crisp high frequencies.",
    image: `/try/5.jpg`,
  },
  {
    id: "ss-08",
    name: "MOSFET StageDeck 8",
    category: "sound",
    tag: "Compact",
    price: 199,
    blurb: "8-inch subwoofer for sedans and hatchbacks.",
    image: `/try/6.jpg`,
  },
  {
    id: "ss-09",
    name: "MOSFET Full Bundle",
    category: "sound",
    tag: "Pro",
    price: 599,
    blurb: "Complete speaker, sub & amp bundle for full builds.",
    image: `/try/7.jpg`,
  },

  // ---------------- LIGHTS ----------------
  {
    id: "lt-01",
    name: "MOSFET LED Headlight Kit",
    category: "lights",
    tag: "Bestseller",
    price: 159,
    blurb: "6000K LED conversion kit, plug-and-play install.",
    image: `/try/8.jpg`,
  },
  {
    id: "lt-02",
    name: "MOSFET Underglow RGB",
    category: "lights",
    tag: "Trending",
    price: 129,
    blurb: "App-controlled RGB underglow with music sync.",
    image: `/try/9.jpg`,
  },
  {
    id: "lt-03",
    name: "MOSFET Fog Light Pro",
    category: "lights",
    tag: "Winter",
    price: 89,
    blurb: "High-penetration amber fog lights for low visibility.",
    image: `/try/10.jpg`,
  },
  {
    id: "lt-04",
    name: "MOSFET Interior Ambient Kit",
    category: "lights",
    tag: "New",
    price: 79,
    blurb: "Multi-zone ambient cabin lighting, 16 million colors.",
    image: `/try/1.jpg`,
  },
  {
    id: "lt-05",
    name: "MOSFET LED Bar 20\"",
    category: "lights",
    tag: "Pro",
    price: 219,
    blurb: "20-inch combo-beam light bar for off-road driving.",
    image: `/try/2.jpg`,
  },
  {
    id: "lt-06",
    name: "MOSFET Sequential Signals",
    category: "lights",
    tag: "Value",
    price: 69,
    blurb: "Sequential LED turn signal upgrade set.",
    image: `/try/3.jpg`,
  },
  {
    id: "lt-07",
    name: "MOSFET Halo Projector",
    category: "lights",
    tag: "New",
    price: 249,
    blurb: "Projector headlights with halo ring daytime running light.",
    image: `/try/4.jpg`,
  },
  {
    id: "lt-08",
    name: "MOSFET Puddle Light Set",
    category: "lights",
    tag: "Compact",
    price: 59,
    blurb: "Logo-projecting LED puddle lights for door mirrors.",
    image: `/try/5.jpg`,
  },

  
];

export const productsByCategory = (catId) =>
  catId === "all" ? products : products.filter((p) => p.category === catId);
