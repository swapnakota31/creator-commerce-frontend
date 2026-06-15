import type { Product } from "./StoreContext";

export const creator = {
  name: "Priya Finds",

  bio: "Sharing the tools, gadgets and essentials that make life simpler, more productive and more enjoyable.",

  profileImage:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",

  products: 6,

  collections: 9,

  tagline: "Products I genuinely use and recommend.",

  creatorCategory: "Productivity Creator",
};

export const products: Product[] = [
  {
    id: 1,

    title: "MacBook Air M4",

    category: "Tech",

    subcategory: "Laptop",

    brand: "Apple",

    tag: "Daily Driver",

    creatorNote:
      "The laptop I use every day for coding and content creation.",

    description:
      "Ultra-lightweight laptop powered by Apple's M4 chip, delivering excellent performance and battery life.",

    summary:
      "A premium laptop ideal for developers, students, and creators who need performance, portability, and reliability.",

    seoTitle:
      "Apple MacBook Air M4 - Creator Recommended Laptop",

    metaDescription:
      "Discover why the MacBook Air M4 is one of the best productivity laptops for creators and professionals.",

    slug: "macbook-air-m4",

    tags: [
      "Daily Driver",
      "Creator Favorite",
      "Laptop",
      "Productivity",
      "Tech",
    ],

    affiliatePlatform: "Amazon",

    affiliateUrl: "#",

    sourcePlatform: "Amazon",

    sourceProductId: "MBA-M4-001",

    currency: "₹",

    price: "1,24,999",

    rating: "4.8",

    reviewCount: "12450",

    availability: "In Stock",

    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80",

    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80",
    ],

    specifications: {
      Processor: "Apple M4",
      RAM: "16 GB",
      Storage: "512 GB SSD",
      Display: "13.6-inch Liquid Retina",
      Battery: "18 Hours",
    },
  },

  {
    id: 2,

    title: "Sony WH-1000XM5",

    category: "Productivity",

    subcategory: "Headphones",

    brand: "Sony",

    tag: "Focus Setup",

    creatorNote:
      "Perfect noise cancellation for deep work sessions.",

    description:
      "Industry-leading wireless noise-cancelling headphones with exceptional sound quality.",

    summary:
      "One of the best headphones for productivity, focus, travel, and content consumption.",

    seoTitle:
      "Sony WH-1000XM5 Review and Creator Recommendation",

    metaDescription:
      "Learn why Sony WH-1000XM5 is a must-have for focused work and distraction-free productivity.",

    slug: "sony-wh1000xm5",

    tags: [
      "Focus Setup",
      "Audio",
      "Travel",
      "Productivity",
      "Creator Favorite",
    ],

    affiliatePlatform: "Flipkart",

    affiliateUrl: "#",

    sourcePlatform: "Flipkart",

    sourceProductId: "SONY-XM5-002",

    currency: "₹",

    price: "29,999",

    rating: "4.7",

    reviewCount: "8930",

    availability: "In Stock",

    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80",

    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80",
    ],

    specifications: {
      Connectivity: "Bluetooth 5.2",
      Battery: "30 Hours",
      Weight: "250g",
      Microphone: "Yes",
      NoiseCancellation: "Active",
    },
  },

  {
    id: 3,

    title: "Mechanical Keyboard",

    category: "Tech",

    subcategory: "Keyboard",

    brand: "Keychron",

    tag: "Creator Favorite",

    creatorNote:
      "Typing on this feels incredibly satisfying.",

    description:
      "Mechanical keyboard designed for productivity, comfort, and fast typing.",

    summary:
      "A creator favorite that enhances typing speed and desk aesthetics.",

    seoTitle:
      "Mechanical Keyboard Setup for Creators",

    metaDescription:
      "Discover why mechanical keyboards are loved by creators, coders, and students.",

    slug: "mechanical-keyboard",

    tags: [
      "Creator Favorite",
      "Desk Setup",
      "Coding",
      "Keyboard",
      "Productivity",
    ],

    affiliatePlatform: "IKEA",

    affiliateUrl: "#",

    sourcePlatform: "IKEA",

    sourceProductId: "KEYBOARD-003",

    currency: "₹",

    price: "8,999",

    rating: "4.6",

    reviewCount: "5340",

    availability: "In Stock",

    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=1200&q=80",

    images: [
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=1200&q=80",
    ],

    specifications: {
      SwitchType: "Brown Switches",
      Layout: "75%",
      Connectivity: "Wireless",
      Backlight: "RGB",
      Battery: "4000mAh",
    },
  },

  {
    id: 4,

    title: "iPad Air",

    category: "Study",

    subcategory: "Tablet",

    brand: "Apple",

    tag: "Productivity Pick",

    creatorNote:
      "My go-to device for notes and planning.",

    description:
      "Powerful tablet perfect for note-taking, studying, reading, and productivity.",

    summary:
      "An excellent companion device for students and professionals.",

    seoTitle:
      "Apple iPad Air Productivity Review",

    metaDescription:
      "See why iPad Air is one of the best devices for digital note-taking and planning.",

    slug: "ipad-air",

    tags: [
      "Study",
      "Notes",
      "Productivity",
      "Student Pick",
      "Apple",
    ],

    affiliatePlatform: "Croma",

    affiliateUrl: "#",

    sourcePlatform: "Croma",

    sourceProductId: "IPAD-AIR-004",

    currency: "₹",

    price: "54,999",

    rating: "4.8",

    reviewCount: "9870",

    availability: "In Stock",

    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1200&q=80",

    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1200&q=80",
    ],

    specifications: {
      Display: "10.9-inch Liquid Retina",
      Processor: "Apple M2",
      Storage: "256 GB",
      Camera: "12 MP",
      PencilSupport: "Yes",
    },
  },

  {
    id: 5,

    title: "Study Lamp",

    category: "Budget Favorites",

    subcategory: "Lighting",

    brand: "Philips",

    tag: "Budget Favorite",

    creatorNote:
      "Small upgrade, huge difference.",

    description:
      "Minimal desk lamp designed to reduce eye strain during long study sessions.",

    summary:
      "An affordable productivity upgrade for any study desk.",

    seoTitle:
      "Best Budget Study Lamp for Students",

    metaDescription:
      "A simple but effective desk upgrade for better focus and comfort.",

    slug: "study-lamp",

    tags: [
      "Budget Pick",
      "Study",
      "Lighting",
      "Students",
    ],

    affiliatePlatform: "Amazon",

    affiliateUrl: "#",

    sourcePlatform: "Amazon",

    sourceProductId: "LAMP-005",

    currency: "₹",

    price: "1,999",

    rating: "4.5",

    reviewCount: "2760",

    availability: "In Stock",

    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80",

    images: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80",
    ],

    specifications: {
      Brightness: "Adjustable",
      Power: "10W",
      Modes: "3 Lighting Modes",
      Material: "Aluminium",
      USBCharging: "Yes",
    },
  },

  {
    id: 6,

    title: "Desk Organizer",

    category: "Productivity",

    subcategory: "Workspace",

    brand: "IKEA",

    tag: "Workspace Essential",

    creatorNote:
      "Keeps my workspace clean and distraction free.",

    description:
      "Compact desk organizer designed to declutter your workspace.",

    summary:
      "A simple productivity tool that helps maintain a clean and efficient desk setup.",

    seoTitle:
      "Best Desk Organizer for Productivity",

    metaDescription:
      "Keep your workspace organized and distraction-free with this desk organizer.",

    slug: "desk-organizer",

    tags: [
      "Workspace Essential",
      "Desk Setup",
      "Organization",
      "Productivity",
    ],

    affiliatePlatform: "Myntra Home",

    affiliateUrl: "#",

    sourcePlatform: "Myntra Home",

    sourceProductId: "DESK-006",

    currency: "₹",

    price: "999",

    rating: "4.4",

    reviewCount: "1870",

    availability: "In Stock",

    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",

    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    ],

    specifications: {
      Material: "Wood",
      Compartments: "6",
      Weight: "500g",
      Color: "Oak",
      Portable: "Yes",
    },
  },
];

export const collections = [
  {
    id: 1,

    title: "Daily Setup",

    products: 3,

    productIds: [1, 2, 6],

    description:
      "The tools that are part of my daily workflow and creator setup.",

    coverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
  },

  {
    id: 2,

    title: "Coding Desk",

    products: 2,

    productIds: [1, 3],

    description:
      "Everything on my desk that helps me code, create, and stay productive.",

    coverImage:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=1200&q=80",
  },

  {
    id: 3,

    title: "College Essentials",

    products: 3,

    productIds: [4, 5, 2],

    description:
      "Practical recommendations for students who want to study smarter.",

    coverImage:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1200&q=80",
  },

  {
    id: 4,

    title: "Study Toolkit",

    products: 2,

    productIds: [4, 5],

    description:
      "Tools that improve learning efficiency.",

    coverImage:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80",
  },

  {
    id: 5,

    title: "Focus Gear",

    products: 2,

    productIds: [2, 5],

    description:
      "Products that help eliminate distractions.",

    coverImage:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80",
  },

  {
    id: 6,

    title: "Travel Essentials",

    products: 2,

    productIds: [2, 4],

    description:
      "Portable gear for work and travel.",

    coverImage:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1200&q=80",
  },

  {
    id: 7,

    title: "Creator Tools",

    products: 3,

    productIds: [1, 2, 3],

    description:
      "Apps and tools for content creation.",

    coverImage:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80",
  },

  {
    id: 8,

    title: "Creator Favorites",

    products: 4,

    productIds: [1, 2, 3, 4],

    description:
      "The recommendations I find myself sharing again and again.",

    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
  },

  {
    id: 9,

    title: "Work From Anywhere",

    products: 4,

    productIds: [1, 2, 4, 6],

    description:
      "My remote work setup essentials.",

    coverImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
  },
];