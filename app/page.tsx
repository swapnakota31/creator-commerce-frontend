import { 
  Monitor, 
  GraduationCap, 
  Shirt, 
  Zap, 
  Search, 
  Smartphone, 
  Globe, 
  Share2, 
  BarChart3, 
  Sparkles, 
  Layout, 
  Layers, 
  UserCircle, 
  ShoppingBag,
  ArrowRight,
  Stethoscope,
  Plane,
  Home as HomeIcon,
  Tag,
  Star,
  Menu,
  Book
} from 'lucide-react';

const STOREFRONT_CARDS = [
  {
    id: 1,
    title: "Tech & Gadgets Store",
    desc: "Showcase the latest tech, gadgets & accessories you love.",
    icon: <Monitor className="w-5 h-5 text-[#4f46e5]" />,
    creator: "Tech Explorer",
    handle: "@techexplorer",
    gradient: "from-[#fffbf5] to-[#fef2e2]",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600",
    accentColor: "text-[#4f46e5]",
    tags: ["Tech", "Gadgets", "Audio", "More"],
    avatarText: "TE",
    avatarBg: "bg-[#fdf2f2]",
    avatarTextColor: "text-[#991b1b]"
  },
  {
    id: 2,
    title: "Study Essentials Store",
    desc: "Organize books, stationery & study must-haves.",
    icon: <GraduationCap className="w-5 h-5 text-[#16a34a]" />,
    creator: "Study With Me",
    handle: "@studywithme",
    gradient: "from-[#f0fdf4] to-[#dcfce7]",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600",
    accentColor: "text-[#16a34a]",
    tags: ["Books", "Stationery", "Desk Setup", "Essentials"],
    avatarIcon: <Book className="w-4 h-4 text-emerald-800" />,
    avatarBg: "bg-emerald-900"
  },
  {
    id: 3,
    title: "Fashion & Style Store",
    desc: "Curate outfits, accessories & style inspiration.",
    icon: <Shirt className="w-5 h-5 text-[#db2777]" />,
    creator: "Style Studio",
    handle: "@stylestudio",
    gradient: "from-[#fff1f2] to-[#ffe4e6]",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600",
    accentColor: "text-[#db2777]",
    tags: ["Outfits", "Bags", "Footwear", "Accessories"],
    avatarText: "SS",
    avatarBg: "bg-[#ff4d94]"
  },
  {
    id: 4,
    title: "Beauty & Skincare Store",
    desc: "Share beauty, skincare & self-care favorites.",
    icon: <Stethoscope className="w-5 h-5 text-[#ea580c]" />,
    creator: "Glow Diaries",
    handle: "@glowdiaries",
    gradient: "from-[#fffaf5] to-[#fff3e0]",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    accentColor: "text-[#ea580c]",
    tags: ["Skincare", "Haircare", "Makeup", "Wellness"],
    avatarText: "GD",
    avatarBg: "bg-[#a35231]"
  },
  {
    id: 5,
    title: "Travel Essentials Store",
    desc: "Travel must-haves for every journey and adventure.",
    icon: <Plane className="w-5 h-5 text-[#0891b2]" />,
    creator: "Wander With Me",
    handle: "@wander.with.me",
    gradient: "from-[#ecfeff] to-[#cffafe]",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=600",
    accentColor: "text-[#0891b2]",
    tags: ["Travel", "Bags", "Essentials", "More"]
  },
  {
    id: 6,
    title: "Home & Lifestyle Store",
    desc: "Elevate your home, desk & everyday lifestyle.",
    icon: <HomeIcon className="w-5 h-5 text-[#d97706]" />,
    creator: "Home Vibes",
    handle: "@home.vibes",
    gradient: "from-[#fffbeb] to-[#fef3c7]",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600",
    accentColor: "text-[#d97706]",
    tags: ["Home", "Lifestyle", "Decor", "More"]
  },
  {
    id: 7,
    title: "Deals & Offers Store",
    desc: "Handpicked deals, discounts & limited time offers.",
    icon: <Tag className="w-5 h-5 text-[#dc2626]" />,
    creator: "Best Deals Hub",
    handle: "@bestdealshub",
    gradient: "from-[#fef2f2] to-[#fee2e2]",
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=600",
    accentColor: "text-[#dc2626]",
    hasBadges: true,
    tags: ["Top Deals", "Electronics", "Fashion", "More"],
    avatarText: "BD",
    avatarBg: "bg-[#e11d48]"
  },
  {
    id: 8,
    title: "Brand Showcase Store",
    desc: "Showcase products from your favorite brands.",
    icon: <Star className="w-5 h-5 text-[#7c3aed]" />,
    creator: "Top Brand Picks",
    handle: "@topbrandpicks",
    gradient: "from-[#f5f3ff] to-[#ede9fe]",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
    accentColor: "text-[#7c3aed]",
    hasLogos: true,
    tags: ["Top Brands", "Electronics", "Accessories", "More"],
    avatarText: "TB",
    avatarBg: "bg-[#7c3aed]"
  }
];

const FEATURES = [
  { icon: <Search className="w-4 h-4 text-emerald-500" />, label: "SEO Optimized Pages" },
  { icon: <Smartphone className="w-4 h-4 text-blue-500" />, label: "Mobile First" },
  { icon: <Zap className="w-4 h-4 text-purple-500" />, label: "Lightning Fast" },
  { icon: <Share2 className="w-4 h-4 text-orange-500" />, label: "Easy to Share" }
];

const TOOLS = [
  { icon: <Layout className="w-6 h-6 text-blue-600" />, title: "Product Pages", desc: "Create beautiful, SEO-optimized product pages in seconds." },
  { icon: <Layers className="w-6 h-6 text-indigo-600" />, title: "Collections", desc: "Group products into smart collections & lists." },
  { icon: <Shirt className="w-6 h-6 text-pink-600" />, title: "Lookbooks", desc: "Showcase outfits, setups and complete looks." },
  { icon: <Share2 className="w-6 h-6 text-emerald-600" />, title: "Bio Link Store", desc: "All your products, collections & links in one bio-link." },
  { icon: <UserCircle className="w-6 h-6 text-orange-600" />, title: "Creator Profiles", desc: "Build your public profile, share your story & connect." },
  { icon: <Search className="w-6 h-6 text-blue-600" />, title: "Smart Search", desc: "Search products, collections and creators instantly." },
  { icon: <Sparkles className="w-6 h-6 text-purple-600" />, title: "AI Recommendations", desc: "Discover similar, trending and relevant products." },
  { icon: <BarChart3 className="w-6 h-6 text-orange-600" />, title: "Analytics Dashboard", desc: "Track clicks, views and content performance." },
  { icon: <Smartphone className="w-6 h-6 text-emerald-600" />, title: "Micro Creators Friendly", desc: "Built for micro creators to create, grow and get discovered." },
  { icon: <Globe className="w-6 h-6 text-green-600" />, title: "Custom Domain", desc: "Use your own domain & build your brand identity." },
  { icon: <Share2 className="w-6 h-6 text-indigo-600" />, title: "Social Sharing", desc: "Share products & collections across all platforms." },
  { icon: <Zap className="w-6 h-6 text-emerald-600" />, title: "SEO Optimized", desc: "Built for search engines & better discoverability." }
];

export default function Home() {
  return (
    <div className="bg-[#fafafa] min-h-screen font-sans text-slate-900">
      <div className="max-w-[1280px] mx-auto px-4 py-12 md:py-20">
        
        {/* Hero Section */}
        <section className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-[900] tracking-tight text-[#0f172a]">
            Create Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#ea580c]">Perfect Storefront</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-[#64748b] max-w-2xl mx-auto">
            <Sparkles className="w-4 h-4 text-[#f59e0b] flex-shrink-0" />
            <p className="text-lg md:text-xl font-medium">
              Turn any product link into a beautiful storefront, curated collections and a shareable bio-link.
            </p>
            <Sparkles className="w-4 h-4 text-[#f59e0b] flex-shrink-0" />
          </div>
        </section>

        {/* Storefront Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STOREFRONT_CARDS.map((card) => (
            <div key={card.id} className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              {/* Header */}
              <div className={`p-5 flex items-start gap-3 bg-gradient-to-br ${card.gradient}`}>
                <div className="p-2.5 bg-white/80 rounded-xl shadow-sm">
                  {card.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="font-bold text-[15px] truncate">{card.title}</h3>
                    <ArrowRight className={`w-3.5 h-3.5 ${card.accentColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  <p className="text-[13px] text-slate-500 leading-snug mt-0.5">{card.desc}</p>
                </div>
              </div>

              {/* Creator Info Overlay */}
              <div className="px-5 py-3 border-b border-slate-50 relative overflow-hidden">
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center overflow-hidden shadow-sm border border-white/20 ${card.avatarBg || 'bg-slate-200'}`}>
                      {card.avatarIcon ? (
                        <div className="bg-white w-full h-full flex items-center justify-center">
                          {card.avatarIcon}
                        </div>
                      ) : card.avatarText ? (
                        <span className={`text-[11px] font-bold tracking-tight ${card.avatarTextColor || 'text-white'}`}>{card.avatarText}</span>
                      ) : (
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${card.creator}`} alt={card.creator} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-[800] text-[#1e293b] leading-tight">{card.creator}</span>
                      <span className="text-[11px] text-[#64748b] font-medium">{card.handle}</span>
                    </div>
                  </div>
                  <div className="p-1.5 bg-slate-50 rounded-full">
                    <Menu className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Preview Image */}
              <div className={`p-4 ${card.isDark ? 'bg-[#0f1115]' : 'bg-white/50'}`}>
                <div className="aspect-[16/9] rounded-xl overflow-hidden relative shadow-inner">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${card.isDark ? 'opacity-80' : ''}`}
                  />
                  {card.hasBadges && (
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between gap-2">
                      {['-30%', '-40%', '-25%'].map((badge, idx) => (
                        <div key={idx} className="bg-[#ef4444] text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm">
                          {badge}
                        </div>
                      ))}
                    </div>
                  )}
                  {card.hasLogos && (
                    <div className="absolute inset-0 bg-[#581c87]/40 flex flex-col justify-center p-4">
                      <div className="flex justify-between items-center opacity-90">
                        <div className="flex gap-3 text-white items-center">
                          <span className="text-[12px] font-bold"></span>
                          <span className="text-[12px] font-bold lowercase tracking-tighter">boat</span>
                          <span className="text-[12px] font-bold lowercase tracking-tighter">logitech</span>
                          <span className="text-[12px] font-bold uppercase text-[10px] tracking-widest">SAMSUNG</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>
              </div>

              {/* Categories/Tags Bar */}
              {card.tags && (
                <div className="px-4 pb-4 flex gap-2 overflow-x-auto no-scrollbar">
                  {card.tags.map((tag, i) => (
                    <div key={i} className={`px-4 py-1.5 rounded-full text-[11px] font-[800] whitespace-nowrap shadow-sm border border-slate-100/50 ${
                      card.id === 2 ? 'bg-[#f0fdf4] text-[#166534]' : 
                      card.id === 3 ? 'bg-[#fff1f2] text-[#9f1239]' : 
                      card.id === 4 ? 'bg-[#fffaf5] text-[#854d0e]' :
                      card.id === 7 ? 'bg-[#fef2f2] text-[#991b1b]' :
                      card.id === 8 ? 'bg-[#f5f3ff] text-[#5b21b6]' :
                      'bg-slate-50 text-slate-600'
                    }`}>
                      {tag}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features Bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-24 px-4 py-4 bg-white/50 rounded-full border border-slate-100/50 max-w-4xl mx-auto shadow-sm">
          {FEATURES.map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              {feature.icon}
              <span className="text-sm font-semibold text-slate-600">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Powerful Tools Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-[900] flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[#0f172a]">
              <span className="text-[#4f46e5] text-2xl rotate-180 opacity-50 hidden md:inline">»</span> 
              Turn Your Recommendations Into <span className="text-[#f97316]">Destinations</span> 
              <span className="text-[#4f46e5] text-2xl opacity-50 hidden md:inline">»</span>
            </h2>
            <p className="text-[#64748b] text-lg font-medium max-w-2xl mx-auto">
              Bring your favorite products together in a way that's easy to explore and share.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TOOLS.map((tool, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-[#f1f5f9] hover:border-[#e2e8f0] hover:shadow-sm transition-all group">
                <div className="mb-5 p-2.5 bg-[#f8fafc] rounded-xl inline-block group-hover:bg-[#f1f5f9] transition-colors">
                  {tool.icon}
                </div>
                <h4 className="font-[800] text-[15px] mb-2.5 text-[#1e293b]">{tool.title}</h4>
                <p className="text-[12px] text-[#64748b] leading-[1.6] font-medium">{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
